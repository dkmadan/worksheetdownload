import { ImageResponse } from "next/og";

export const alt = "WorksheetDownload — Free Printable Worksheets for K–8 & Developer Cheat Sheets";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "white",
          padding: "48px",
          position: "relative",
        }}
      >
        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "25%",
            width: "500px",
            height: "300px",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "9999px",
            padding: "8px 24px",
            fontSize: "20px",
            fontWeight: 700,
            color: "#a5b4fc",
            marginBottom: "24px",
          }}
        >
          <span>📚</span>
          <span>100% Free Educational Resources</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 900,
            textAlign: "center",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "16px",
            maxWidth: "1000px",
            background: "linear-gradient(to right, #ffffff, #e0e7ff)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          WorksheetDownload
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "#cbd5e1",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
            marginBottom: "36px",
          }}
        >
          3,000+ Free Printable Worksheets for K–8 &amp; 647 Tech Cheat Sheets
        </div>

        {/* Feature Pills */}
        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(236, 72, 153, 0.2)",
              border: "1px solid rgba(236, 72, 153, 0.4)",
              color: "#f472b6",
              borderRadius: "12px",
              padding: "10px 20px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            🎓 Kindergarten – Grade 8
          </div>
          <div
            style={{
              backgroundColor: "rgba(99, 102, 241, 0.2)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              color: "#818cf8",
              borderRadius: "12px",
              padding: "10px 20px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            💻 37 Tech Categories
          </div>
          <div
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.2)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#34d399",
              borderRadius: "12px",
              padding: "10px 20px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            ⚡ Instant PDF Downloads
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
