"use client";

import { useMemo, useState } from "react";
import ToolFrame, { PaperHeader } from "./ToolFrame";
import { Field, Segmented, Toggle, TextArea } from "./ui";
import {
  DEFAULT_FLASHCARD_CONFIG,
  FLASHCARD_SUBJECTS,
  FLASHCARD_TYPES,
  BUILTIN_FLASHCARD_DECKS,
  parseFlashcardsCsv,
  type Flashcard,
  type FlashcardConfig,
  type FlashcardSubject,
  type FlashcardType,
} from "@/lib/tools/flashcards";
import { buildFlashcardsPdf, downloadPdf } from "@/lib/tools/generators-pdf";

const PER_PAGE_OPTIONS: { value: string; label: string }[] = [
  { value: "2", label: "2 / page" },
  { value: "4", label: "4 / page" },
  { value: "6", label: "6 / page" },
  { value: "8", label: "8 / page" },
  { value: "9", label: "9 / page" },
];

export default function FlashcardGenerator() {
  const [subject, setSubject] = useState<FlashcardSubject>("mathematics");
  const [cardType, setCardType] = useState<FlashcardType>("math-facts");
  const [cardsPerPage, setCardsPerPage] = useState<2 | 4 | 6 | 8 | 9>(4);
  const [borders, setBorders] = useState(true);
  const [doubleSided, setDoubleSided] = useState(true);
  const [cards, setCards] = useState<Flashcard[]>(BUILTIN_FLASHCARD_DECKS.mathematics);
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [importCsvOpen, setImportCsvOpen] = useState(false);
  const [csvInput, setCsvInput] = useState("");
  const [busy, setBusy] = useState(false);

  // When subject changes, load matching default deck
  function handleSubjectChange(newSub: FlashcardSubject) {
    setSubject(newSub);
    if (BUILTIN_FLASHCARD_DECKS[newSub]) {
      setCards(BUILTIN_FLASHCARD_DECKS[newSub]);
    }
  }

  function toggleFlip(id: string) {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleAddCard() {
    const newId = `card-${Date.now()}`;
    setCards((prev) => [
      ...prev,
      { id: newId, front: "New Question", back: "New Answer", subtextFront: "Term" },
    ]);
  }

  function handleUpdateCard(id: string, field: "front" | "back", val: string) {
    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: val } : c))
    );
  }

  function handleDeleteCard(id: string) {
    setCards((prev) => prev.filter((c) => c.id !== id));
  }

  function handleImportCsv() {
    if (csvInput.trim()) {
      const imported = parseFlashcardsCsv(csvInput);
      if (imported.length > 0) {
        setCards(imported);
        setImportCsvOpen(false);
        setCsvInput("");
      }
    }
  }

  async function handleDownload() {
    setBusy(true);
    try {
      const bytes = await buildFlashcardsPdf({
        title: "Printable Educational Flashcards",
        cards,
        cardsPerPage,
        orientation: "portrait",
        borders,
        doubleSided,
        colorMode: "color",
      });
      downloadPdf(bytes, `flashcards-${subject}-${Date.now().toString(36)}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <ToolFrame
      note="Click any card in the preview to flip between Front and Back. Includes duplex back-to-back print alignment and dashed cutting lines."
      actions={[
        {
          label: busy ? "Building PDF…" : "Download PDF Flashcards",
          onClick: handleDownload,
          primary: true,
          disabled: busy,
        },
        {
          label: "Print flashcards",
          onClick: () => window.print(),
        },
        {
          label: "Flip all cards",
          onClick: () =>
            setFlippedCards((prev) =>
              prev.size === cards.length ? new Set() : new Set(cards.map((c) => c.id))
            ),
        },
        {
          label: "+ Add card",
          onClick: handleAddCard,
        },
      ]}
      controls={
        <>
          <Field label="Subject Deck">
            <select
              value={subject}
              onChange={(e) => handleSubjectChange(e.target.value as FlashcardSubject)}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {FLASHCARD_SUBJECTS.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.icon} {sub.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Card Style">
            <select
              value={cardType}
              onChange={(e) => setCardType(e.target.value as FlashcardType)}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {FLASHCARD_TYPES.map((ct) => (
                <option key={ct.id} value={ct.id}>
                  {ct.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Cards Per Sheet">
            <Segmented
              options={PER_PAGE_OPTIONS}
              value={String(cardsPerPage)}
              onChange={(v) => setCardsPerPage(Number(v) as 2 | 4 | 6 | 8 | 9)}
            />
          </Field>

          <div className="space-y-3 pt-2 border-t border-slate-100">
            <Toggle
              checked={borders}
              onChange={setBorders}
              label="Dashed cutting guides between cards"
            />
            <Toggle
              checked={doubleSided}
              onChange={setDoubleSided}
              label="Double-sided duplex printing (mirrored back page)"
            />
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              type="button"
              onClick={() => setImportCsvOpen(!importCsvOpen)}
              className="w-full py-2 px-3 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              {importCsvOpen ? "Close Import" : "📥 Import Custom Cards (CSV / Text)"}
            </button>

            {importCsvOpen && (
              <div className="space-y-2 pt-1">
                <span className="text-[10px] text-slate-400">
                  Format: Front, Back (one pair per line)
                </span>
                <TextArea
                  rows={4}
                  value={csvInput}
                  onChange={setCsvInput}
                  placeholder="Bonjour, Hello\nMerci, Thank you"
                />
                <button
                  type="button"
                  onClick={handleImportCsv}
                  className="w-full py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors"
                >
                  Import Cards
                </button>
              </div>
            )}
          </div>
        </>
      }
      preview={
        <div className="pb-8">
          <PaperHeader
            title="Educational Flashcard Deck"
            subtitle={`${FLASHCARD_SUBJECTS.find((s) => s.id === subject)?.label} · ${cards.length} Cards · Click card to flip`}
            badge="Flashcards"
            studentStrip={false}
          />

          <div className="px-6 pt-4">
            <div
              className="grid gap-3"
              style={{
                gridTemplateColumns:
                  cardsPerPage === 2
                    ? "1fr"
                    : cardsPerPage === 9
                    ? "repeat(3, minmax(0, 1fr))"
                    : "repeat(2, minmax(0, 1fr))",
              }}
            >
              {cards.map((card, idx) => {
                const isFlipped = flippedCards.has(card.id);
                return (
                  <div
                    key={card.id}
                    onClick={() => toggleFlip(card.id)}
                    className={`cursor-pointer group relative rounded-xl p-4 transition-all min-h-[140px] flex flex-col justify-between select-none ${
                      borders ? "border-2 border-dashed border-slate-300" : "border border-slate-200"
                    } ${
                      isFlipped
                        ? "bg-gradient-to-br from-emerald-50 to-teal-50 shadow-inner"
                        : "bg-white shadow-2xs hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-400">
                      <span>#{idx + 1} {isFlipped ? "• Back" : "• Front"}</span>
                      {card.icon && <span className="text-base">{card.icon}</span>}
                    </div>

                    <div className="text-center py-2">
                      <div
                        className={`font-black leading-tight tracking-tight ${
                          isFlipped ? "text-emerald-900 text-base" : "text-slate-900 text-lg"
                        }`}
                      >
                        {isFlipped ? card.back : card.front}
                      </div>
                      {(card.subtextFront || card.subtextBack) && (
                        <div className="text-[10px] text-slate-400 font-semibold mt-1">
                          {isFlipped ? card.subtextBack : card.subtextFront}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-slate-100">
                      <span>Click to flip 🔄</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteCard(card.id);
                        }}
                        className="text-red-400 hover:text-red-600 font-bold"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      }
    />
  );
}
