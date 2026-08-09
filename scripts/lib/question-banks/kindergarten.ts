import type { Question } from "../pdf-builder";

// ── Alphabet / Letters ───────────────────────────────────────────────────────

const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function genCapitalSmall(sheetNumber: number): Question[] {
  // Each sheet covers a different segment of the alphabet
  const ranges = [[0,7],[7,14],[14,20],[20,26]];
  const [s, e] = ranges[sheetNumber - 1];
  const letters = ALPHA.slice(s, e).split("");
  const qs: Question[] = [];
  for (const L of letters) {
    qs.push({ question: `Capital ${L}  =>  small?`, answer: L.toLowerCase() });
    qs.push({ question: `Small ${L.toLowerCase()}  =>  capital?`, answer: L });
    qs.push({ question: `${L} pairs with?`, answer: L.toLowerCase() });
  }
  // Pad to 20 if needed
  for (let i = 0; qs.length < 20; i++) {
    const L = letters[i % letters.length];
    qs.push({ question: `Write small: ${L}`, answer: L.toLowerCase() });
  }
  return qs.slice(0, 20);
}

function genAlphabetAZ(sheetNumber: number): Question[] {
  const qs: Question[] = [];
  if (sheetNumber === 1) {
    // Position-based: what is the Nth letter?
    for (let i = 0; i < 20; i++) {
      const n = i + 1;
      const suf = n===1?"st":n===2?"nd":n===3?"rd":"th";
      qs.push({ question: `${n}${suf} letter of alphabet?`, answer: ALPHA[i] });
    }
  } else if (sheetNumber === 2) {
    // What comes AFTER?
    for (let i = 0; i < 20; i++) {
      qs.push({ question: `Letter after ${ALPHA[i]}?`, answer: i < 25 ? ALPHA[i+1] : "end" });
    }
  } else if (sheetNumber === 3) {
    // What comes BEFORE?
    for (let i = 1; i <= 20; i++) {
      qs.push({ question: `Letter before ${ALPHA[i]}?`, answer: ALPHA[i-1] });
    }
  } else {
    // Missing letter fill-in
    for (let i = 0; i < 20; i++) {
      const pos = i + 2; // positions 2-21
      const prev = ALPHA[pos-2], next = pos < 25 ? ALPHA[pos+1] : "";
      qs.push({ question: `${prev}, ___, ${next || "end"}`, answer: ALPHA[pos] });
    }
  }
  return qs.slice(0, 20);
}

function genLetterRecognition(sheetNumber: number): Question[] {
  const vowels = new Set(["A","E","I","O","U"]);
  const qs: Question[] = [];
  const ranges = [[0,7],[7,14],[14,20],[20,26]];
  const [s, e] = ranges[sheetNumber - 1];
  const letters = ALPHA.slice(s, e).split("");
  for (const L of letters) {
    const isVowel = vowels.has(L);
    qs.push({ question: `Is ${L} a vowel? (yes/no)`, answer: isVowel ? "yes" : "no" });
    qs.push({ question: `Is ${L.toLowerCase()} a consonant? (yes/no)`, answer: isVowel ? "no" : "yes" });
    qs.push({ question: `${L} is a vowel / consonant?`, answer: isVowel ? "vowel" : "consonant" });
  }
  for (let i = 0; qs.length < 20; i++) {
    const L = letters[i % letters.length];
    qs.push({ question: `Name of letter ${L}?`, answer: L });
  }
  return qs.slice(0, 20);
}

function genBeginningSound(sheetNumber: number): Question[] {
  const words: [string,string][][] = [
    [["Apple","A"],["Ball","B"],["Cat","C"],["Dog","D"],["Egg","E"],["Fish","F"],["Goat","G"],["Hat","H"],["Ink","I"],["Jar","J"],["Kite","K"],["Lion","L"],["Mango","M"],["Nest","N"],["Orange","O"],["Pen","P"],["Queen","Q"],["Rat","R"],["Sun","S"],["Tap","T"]],
    [["Umbrella","U"],["Van","V"],["Watch","W"],["Box","B"],["Yak","Y"],["Zebra","Z"],["Ant","A"],["Bed","B"],["Cup","C"],["Door","D"],["Ear","E"],["Fan","F"],["Gun","G"],["Hen","H"],["Ice","I"],["Jug","J"],["Key","K"],["Leg","L"],["Map","M"],["Nose","N"]],
    [["Owl","O"],["Pot","P"],["Quiz","Q"],["Rug","R"],["Sock","S"],["Top","T"],["Up","U"],["Vase","V"],["Web","W"],["Box","X"],["Yes","Y"],["Zoo","Z"],["Arm","A"],["Bus","B"],["Car","C"],["Duck","D"],["Eye","E"],["Fox","F"],["Gem","G"],["Hip","H"]],
    [["Iced","I"],["Jet","J"],["Kid","K"],["Lamp","L"],["Milk","M"],["Nail","N"],["Oak","O"],["Pig","P"],["Quill","Q"],["Rose","R"],["Ship","S"],["Tin","T"],["Use","U"],["Vine","V"],["Wave","W"],["Yawn","Y"],["Zip","Z"],["Axe","A"],["Bee","B"],["Cob","C"]],
  ];
  return words[sheetNumber - 1].slice(0, 20).map(([word, letter]) => ({
    question: `"${word}" starts with letter ___`,
    answer: letter,
  }));
}

function genVowels(sheetNumber: number): Question[] {
  const vowels = ["A","E","I","O","U"];
  const qs: Question[] = [];
  if (sheetNumber === 1) {
    qs.push({ question: "Vowels in English: A, E, I, O, ___", answer: "U" });
    qs.push({ question: "How many vowels in English?", answer: "5" });
    qs.push({ question: "Is A a vowel? (yes/no)", answer: "yes" });
    qs.push({ question: "Is B a vowel? (yes/no)", answer: "no" });
    qs.push({ question: "Is E a vowel? (yes/no)", answer: "yes" });
    qs.push({ question: "Is F a vowel? (yes/no)", answer: "no" });
    qs.push({ question: "Is I a vowel? (yes/no)", answer: "yes" });
    qs.push({ question: "Is G a vowel? (yes/no)", answer: "no" });
    qs.push({ question: "Is O a vowel? (yes/no)", answer: "yes" });
    qs.push({ question: "Is H a vowel? (yes/no)", answer: "no" });
    qs.push({ question: "Is U a vowel? (yes/no)", answer: "yes" });
    qs.push({ question: "Is C a vowel? (yes/no)", answer: "no" });
    for (const v of vowels) {
      qs.push({ question: `Name a word starting with ${v}:`, answer: `${v} is a vowel` });
    }
    qs.push({ question: "First vowel in alphabet is?", answer: "A" });
    qs.push({ question: "Last vowel in alphabet is?", answer: "U" });
  } else if (sheetNumber === 2) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (const l of letters) {
      if (qs.length >= 20) break;
      qs.push({ question: `Is ${l} a vowel?`, answer: vowels.includes(l) ? "Yes" : "No" });
    }
  } else if (sheetNumber === 3) {
    const words = ["Apple","Egg","Ice","Orange","Umbrella","Bear","Cat","Dog","Elephant","Frog",
                   "Ant","Eel","Igloo","Oven","Uncle","Bird","Cow","Deer","Eagle","Fish"];
    for (const w of words) {
      qs.push({ question: `Does "${w}" start with a vowel?`, answer: "AEIOU".includes(w[0]) ? "Yes" : "No" });
    }
  } else {
    const pairs = [["a","apple"],["e","egg"],["i","ink"],["o","orange"],["u","umbrella"],
                   ["a","ant"],["e","ear"],["i","ice"],["o","owl"],["u","up"],
                   ["a","arm"],["e","eel"],["i","igloo"],["o","ocean"],["u","uncle"],
                   ["a","acorn"],["e","earth"],["i","insect"],["o","olive"],["u","uniform"]];
    for (const [v, w] of pairs) {
      qs.push({ question: `"${w.charAt(0).toUpperCase()+w.slice(1)}" starts with vowel ___`, answer: v.toUpperCase() });
    }
  }
  return qs.slice(0, 20);
}

// ── General Awareness Topics ──────────────────────────────────────────────────

function genAnimals(sheetNumber: number): Question[] {
  const sheets: Question[][] = [
    // Sheet 1: Farm / domestic animals
    [
      { question: "I say 'moo' and give milk. I am a ___", answer: "Cow" },
      { question: "I bark and am man's best friend. I am a ___", answer: "Dog" },
      { question: "I say 'meow' and catch mice. I am a ___", answer: "Cat" },
      { question: "I give us wool for warm clothes. I am a ___", answer: "Sheep" },
      { question: "I have hooves and people ride me. I am a ___", answer: "Horse" },
      { question: "I oink and roll in mud. I am a ___", answer: "Pig" },
      { question: "I say 'baa' and graze grass. I am a ___", answer: "Goat" },
      { question: "I lay eggs for your breakfast. I am a ___", answer: "Hen" },
      { question: "I pull carts and plough fields. I am a ___", answer: "Ox/Bullok" },
      { question: "I am a large bird that cannot fly. I am a ___", answer: "Duck" },
      { question: "I am a farm animal with a big beak. I am a ___", answer: "Goose" },
      { question: "I carry heavy loads in the desert. I am a ___", answer: "Camel" },
      { question: "I give us donkey milk and help carry goods. I am a ___", answer: "Donkey" },
      { question: "I am small, fluffy and hop around. I am a ___", answer: "Rabbit" },
      { question: "I am a large grey farm animal. I am a ___", answer: "Buffalo" },
      { question: "A female cow is called a ___", answer: "Cow" },
      { question: "A baby cow is called a ___", answer: "Calf" },
      { question: "A baby dog is called a ___", answer: "Puppy" },
      { question: "A baby cat is called a ___", answer: "Kitten" },
      { question: "A baby hen is called a ___", answer: "Chick" },
    ],
    // Sheet 2: Wild animals
    [
      { question: "I am the king of the jungle. I am a ___", answer: "Lion" },
      { question: "I have stripes and hunt in the wild. I am a ___", answer: "Tiger" },
      { question: "I am the largest land animal with a trunk. I am an ___", answer: "Elephant" },
      { question: "I have a very long neck and eat tree leaves. I am a ___", answer: "Giraffe" },
      { question: "I am black and white and eat bamboo. I am a ___", answer: "Panda" },
      { question: "I am fast and have spots. I am a ___", answer: "Cheetah" },
      { question: "I am a wild dog that howls at the moon. I am a ___", answer: "Wolf" },
      { question: "I live in the Arctic and am white. I am a ___", answer: "Polar Bear" },
      { question: "I have a long bushy tail and steal food. I am a ___", answer: "Fox" },
      { question: "I am very tall and eat grass in Africa. I am a ___", answer: "Zebra" },
      { question: "I have a mane and am called the big cat. I am a ___", answer: "Lion" },
      { question: "I live in forest and eat termites. I am an ___", answer: "Anteater" },
      { question: "I am a reptile with a very long body. I am a ___", answer: "Snake" },
      { question: "I am grey and love to eat buns. I am a ___", answer: "Hippo" },
      { question: "I have a shell on my back. I am a ___", answer: "Tortoise" },
      { question: "I am the fastest land animal. I am a ___", answer: "Cheetah" },
      { question: "I am a large ape that looks like humans. I am a ___", answer: "Gorilla" },
      { question: "I have a pouch for my baby. I am a ___", answer: "Kangaroo" },
      { question: "I am a wild cat with spots. I am a ___", answer: "Leopard" },
      { question: "I have two humps and live in desert. I am a ___", answer: "Bactrian Camel" },
    ],
    // Sheet 3: Birds
    [
      { question: "I am the national bird of India. I am a ___", answer: "Peacock" },
      { question: "I can talk and am colorful. I am a ___", answer: "Parrot" },
      { question: "I hoot at night and see in the dark. I am an ___", answer: "Owl" },
      { question: "I am the king of birds and soar high. I am an ___", answer: "Eagle" },
      { question: "I am small, red-chested and sing sweetly. I am a ___", answer: "Robin" },
      { question: "I am a bird that cannot fly but can swim fast. I am a ___", answer: "Penguin" },
      { question: "I migrate long distances and have a V-shape flight. I am a ___", answer: "Goose" },
      { question: "I am pink and stand on one leg. I am a ___", answer: "Flamingo" },
      { question: "I am tiny and can hover while flying. I am a ___", answer: "Hummingbird" },
      { question: "I am black and very intelligent. I am a ___", answer: "Crow" },
      { question: "I peck trees to find insects. I am a ___", answer: "Woodpecker" },
      { question: "I am India's sparrow — small and brown. I am a ___", answer: "Sparrow" },
      { question: "I am a large bird that eats dead animals. I am a ___", answer: "Vulture" },
      { question: "I am a graceful white bird that swims. I am a ___", answer: "Swan" },
      { question: "I deliver letters in stories. I am a ___", answer: "Pigeon" },
      { question: "I have bright feathers and live in rainforest. I am a ___", answer: "Macaw" },
      { question: "I make a coo-coo sound. I am a ___", answer: "Cuckoo" },
      { question: "Birds breathe through ___", answer: "lungs" },
      { question: "Birds have ___ instead of forelimbs.", answer: "wings" },
      { question: "Birds lay ___ to have young ones.", answer: "eggs" },
    ],
    // Sheet 4: Water / Aquatic animals
    [
      { question: "I live in water and breathe through gills. I am a ___", answer: "Fish" },
      { question: "I am the largest animal in the ocean. I am a ___", answer: "Blue Whale" },
      { question: "I am intelligent and play in waves. I am a ___", answer: "Dolphin" },
      { question: "I have eight arms and squirt ink. I am an ___", answer: "Octopus" },
      { question: "I walk sideways and have claws. I am a ___", answer: "Crab" },
      { question: "I have a hard shell and live in the sea. I am a ___", answer: "Turtle" },
      { question: "I am a fierce fish with sharp teeth. I am a ___", answer: "Shark" },
      { question: "I live in rivers and have a snout. I am a ___", answer: "Crocodile" },
      { question: "I am flat and live on the sea floor. I am a ___", answer: "Stingray" },
      { question: "I am a tiny creature that makes pearls. I am an ___", answer: "Oyster" },
      { question: "I am a large sea mammal with flippers. I am a ___", answer: "Seal" },
      { question: "I jump out of water and look like a horse. I am a ___", answer: "Seahorse" },
      { question: "I live both in water and on land. I am a ___", answer: "Frog" },
      { question: "I am pinkish and make a loud honking sound. I am a ___", answer: "Flamingo" },
      { question: "I have tentacles and live in a shell. I am a ___", answer: "Snail" },
      { question: "I glow at night in the deep ocean. I am a ___", answer: "Jellyfish" },
      { question: "Fish breathe through ___", answer: "gills" },
      { question: "Aquatic means living in ___", answer: "water" },
      { question: "Whale is a sea ___ (mammal/fish)?", answer: "mammal" },
      { question: "A baby frog is called a ___", answer: "tadpole" },
    ],
  ];
  return sheets[sheetNumber - 1];
}

function genFruits(sheetNumber: number): Question[] {
  const sheets: Question[][] = [
    [
      { question: "I am red and round and sweet. I am an ___", answer: "Apple" },
      { question: "I am yellow, long and monkeys love me. I am a ___", answer: "Banana" },
      { question: "I am the king of fruits and yellow. I am a ___", answer: "Mango" },
      { question: "I am round, orange and juicy. I am an ___", answer: "Orange" },
      { question: "I am red, juicy and heart-shaped. I am a ___", answer: "Strawberry" },
      { question: "I am purple/black and grow in bunches. I am a ___", answer: "Grape" },
      { question: "I am green inside and have black seeds. I am a ___", answer: "Watermelon" },
      { question: "I am yellow inside and have stone seed. I am a ___", answer: "Mango" },
      { question: "I am small, red and grow on trees. I am a ___", answer: "Cherry" },
      { question: "I am tropical and have a rough skin. I am a ___", answer: "Pineapple" },
      { question: "I am a green fruit used in salads. I am a ___", answer: "Avocado" },
      { question: "I am round, red and have seeds inside. I am a ___", answer: "Pomegranate" },
      { question: "I am orange inside and help eyes. I am a ___", answer: "Papaya" },
      { question: "I am a tropical fruit with white flesh. I am a ___", answer: "Coconut" },
      { question: "I am small, black and grow on bushes. I am a ___", answer: "Blackberry" },
      { question: "Fruits give us ___ and minerals.", answer: "vitamins" },
      { question: "Fruits grow on ___ and bushes.", answer: "trees" },
      { question: "Mango is the national fruit of ___.", answer: "India" },
      { question: "Apple a day keeps the ___ away.", answer: "doctor" },
      { question: "Citrus fruits are rich in Vitamin ___.", answer: "C" },
    ],
    [
      { question: "Name a yellow fruit: ___", answer: "Banana/Mango" },
      { question: "Name a red fruit: ___", answer: "Apple/Strawberry" },
      { question: "Name an orange fruit: ___", answer: "Orange/Papaya" },
      { question: "Name a green fruit: ___", answer: "Watermelon/Lime" },
      { question: "Name a purple fruit: ___", answer: "Grapes/Plum" },
      { question: "Name a round fruit: ___", answer: "Apple/Orange" },
      { question: "Name a long fruit: ___", answer: "Banana" },
      { question: "Name a fruit with seeds inside: ___", answer: "Apple/Watermelon" },
      { question: "Name a fruit that grows in bunches: ___", answer: "Grapes/Banana" },
      { question: "Name a fruit with hard outer shell: ___", answer: "Coconut" },
      { question: "I am sour and yellow. I am a ___", answer: "Lemon" },
      { question: "I am sweet, pink and tropical. I am a ___", answer: "Guava" },
      { question: "I am dried and wrinkled. I am a ___", answer: "Raisin" },
      { question: "I am brown and crunchy. I am a ___", answer: "Date/Walnut" },
      { question: "I am a berry that is very small and red. I am a ___", answer: "Cranberry" },
      { question: "Banana is rich in ___", answer: "potassium" },
      { question: "Orange is rich in Vitamin ___", answer: "C" },
      { question: "Fruits that grow in summer are called ___ fruits.", answer: "summer" },
      { question: "We should wash fruits before ___.", answer: "eating" },
      { question: "Fruit juice is healthier than ___.", answer: "fizzy drinks" },
    ],
    [
      { question: "Mango season is in ___.", answer: "summer" },
      { question: "Apple grows in ___ (cold/hot) climate.", answer: "cold" },
      { question: "Coconut grows near the ___.", answer: "sea/coast" },
      { question: "Pineapple grows close to the ___.", answer: "ground" },
      { question: "Grapes grow on ___.", answer: "vines" },
      { question: "Strawberry grows close to the ___.", answer: "ground" },
      { question: "Orange has segments inside — how many?", answer: "about 10" },
      { question: "Which fruit is 90% water?", answer: "Watermelon" },
      { question: "Which fruit floats in water?", answer: "Apple" },
      { question: "Banana peel is ___  (edible/not edible).", answer: "not edible" },
      { question: "Orange peel is ___ (edible/not edible).", answer: "not edible" },
      { question: "Mango is a ___ (seasonal/year-round) fruit.", answer: "seasonal" },
      { question: "The outer cover of fruit is called ___.", answer: "skin/peel" },
      { question: "Seeds inside fruit can grow into ___.", answer: "trees/plants" },
      { question: "Dried grapes are called ___.", answer: "raisins" },
      { question: "Dried plums are called ___.", answer: "prunes" },
      { question: "Fruit salad has ___ fruits together.", answer: "many/mixed" },
      { question: "Juice is made by squeezing ___.", answer: "fruits" },
      { question: "Jam is made from boiled ___.", answer: "fruits" },
      { question: "Pickles can be made from raw ___.", answer: "fruits/mangoes" },
    ],
    [
      { question: "Sort: Apple, Carrot, Mango. Which is NOT a fruit?", answer: "Carrot" },
      { question: "Sort: Orange, Rose, Pear. Which is NOT a fruit?", answer: "Rose" },
      { question: "Sort: Grape, Potato, Banana. Which is NOT a fruit?", answer: "Potato" },
      { question: "Sort: Guava, Onion, Papaya. Which is NOT a fruit?", answer: "Onion" },
      { question: "Sort: Pineapple, Lemon, Tomato. Which is a vegetable?", answer: "Tomato" },
      { question: "Tomato is technically a ___ (fruit/vegetable).", answer: "fruit" },
      { question: "Which fruit is also called 'poor man's apple'?", answer: "Guava" },
      { question: "Which is India's national fruit?", answer: "Mango" },
      { question: "Name a fruit that has no seeds.", answer: "Banana (seedless variety)" },
      { question: "Name a fruit with seeds on outside.", answer: "Strawberry" },
      { question: "Color of ripe mango: ___", answer: "yellow/orange" },
      { question: "Color of ripe banana: ___", answer: "yellow" },
      { question: "Color of ripe apple: ___", answer: "red/green" },
      { question: "Color of watermelon inside: ___", answer: "red" },
      { question: "Color of kiwi inside: ___", answer: "green" },
      { question: "A fruit basket has apples, mangoes and ___", answer: "any fruit name" },
      { question: "Fruit that is used to make wine: ___", answer: "Grape" },
      { question: "Fruit that gives coconut water: ___", answer: "Coconut" },
      { question: "We eat the ___ part of a fruit.", answer: "flesh/pulp" },
      { question: "We do NOT eat the ___ of a fruit.", answer: "seed/stone" },
    ],
  ];
  return sheets[sheetNumber - 1];
}

function genVegetables(sheetNumber: number): Question[] {
  const sheets: Question[][] = [
    [
      { question: "I am orange and good for eyes. I am a ___", answer: "Carrot" },
      { question: "I am green and you cry while cutting me. I am an ___", answer: "Onion" },
      { question: "I am red and used in every curry. I am a ___", answer: "Tomato" },
      { question: "I am green and tall. I am a ___", answer: "Brinjal (no — I am a Bean)" },
      { question: "I am used to make chips and fries. I am a ___", answer: "Potato" },
      { question: "I am green and look like a tree. I am ___", answer: "Broccoli" },
      { question: "I am white and round. I am a ___", answer: "Cauliflower" },
      { question: "I am green, leafy and rich in iron. I am ___", answer: "Spinach" },
      { question: "I am long, green and crunchy. I am a ___", answer: "Cucumber" },
      { question: "I am purple and shiny. I am a ___", answer: "Brinjal/Eggplant" },
      { question: "I am green and peas are inside me. I am a ___", answer: "Pea pod" },
      { question: "I am a root vegetable that is white. I am a ___", answer: "Radish" },
      { question: "I am yellow and used in dals. I am ___", answer: "Lentil/Dal" },
      { question: "I am red and spicy. I am a ___", answer: "Chilli" },
      { question: "I am a leafy vegetable wrapped tightly. I am a ___", answer: "Cabbage" },
      { question: "Vegetables grow from ___ or soil.", answer: "plants" },
      { question: "Green vegetables are rich in ___.", answer: "vitamins and iron" },
      { question: "We should eat ___ vegetables daily.", answer: "fresh" },
      { question: "Root vegetables grow ___.", answer: "underground" },
      { question: "Leafy vegetables include spinach and ___.", answer: "cabbage" },
    ],
    [
      { question: "Name a red vegetable: ___", answer: "Tomato/Chilli" },
      { question: "Name a green vegetable: ___", answer: "Spinach/Beans" },
      { question: "Name an orange vegetable: ___", answer: "Carrot" },
      { question: "Name a white vegetable: ___", answer: "Cauliflower/Radish" },
      { question: "Name a purple vegetable: ___", answer: "Brinjal" },
      { question: "Name a vegetable we eat raw: ___", answer: "Carrot/Cucumber" },
      { question: "Name a vegetable we eat cooked: ___", answer: "Potato/Brinjal" },
      { question: "Name a root vegetable: ___", answer: "Carrot/Radish" },
      { question: "Name a leafy vegetable: ___", answer: "Spinach/Cabbage" },
      { question: "Name a vegetable that grows above ground: ___", answer: "Tomato/Beans" },
      { question: "Potato grows ___.", answer: "underground" },
      { question: "Spinach is a ___ vegetable.", answer: "leafy" },
      { question: "Carrot is a ___ vegetable.", answer: "root" },
      { question: "Cauliflower is a ___ vegetable.", answer: "flower" },
      { question: "We eat the ___ of cabbage.", answer: "leaves" },
      { question: "We eat the ___ of carrot.", answer: "root" },
      { question: "We eat the ___ of peas.", answer: "seeds" },
      { question: "We eat the ___ of brinjal.", answer: "fruit" },
      { question: "We eat the ___ of spinach.", answer: "leaves" },
      { question: "Vegetables give us ___.", answer: "vitamins and minerals" },
    ],
    [
      { question: "Which vegetable makes you cry? ___", answer: "Onion" },
      { question: "Which vegetable is used for chips? ___", answer: "Potato" },
      { question: "Which vegetable is red and round? ___", answer: "Tomato" },
      { question: "Which vegetable looks like a small tree? ___", answer: "Broccoli" },
      { question: "Which vegetable is white and fluffy? ___", answer: "Cauliflower" },
      { question: "Which vegetable is orange and crunchy? ___", answer: "Carrot" },
      { question: "Which vegetable is green and long? ___", answer: "Cucumber/Beans" },
      { question: "Which vegetable has peas inside? ___", answer: "Pea pod" },
      { question: "Which vegetable is purple and shiny? ___", answer: "Brinjal" },
      { question: "Which vegetable is green and leafy? ___", answer: "Spinach" },
      { question: "Salad is made from ___ vegetables.", answer: "raw" },
      { question: "Soup is made from ___ vegetables.", answer: "cooked/boiled" },
      { question: "Pickle can be made from ___.", answer: "vegetables/fruits" },
      { question: "Vegetables should be washed ___ cooking.", answer: "before" },
      { question: "Fresh vegetables are better than ___ vegetables.", answer: "stale" },
      { question: "Garden where vegetables grow: ___", answer: "kitchen garden" },
      { question: "Farmer who grows vegetables: ___", answer: "farmer/vegetable farmer" },
      { question: "Vegetables bought at a market are called ___ vegetables.", answer: "fresh/market" },
      { question: "Canned vegetables last ___.", answer: "longer" },
      { question: "Organic vegetables are grown without ___.", answer: "pesticides" },
    ],
    [
      { question: "Sort: Carrot, Apple, Potato. Which is a fruit?", answer: "Apple" },
      { question: "Sort: Mango, Spinach, Broccoli. Which is a fruit?", answer: "Mango" },
      { question: "Sort: Onion, Orange, Tomato. Which is technically a fruit?", answer: "Tomato" },
      { question: "Sort: Pea, Bean, Lemon. Which is a fruit?", answer: "Lemon" },
      { question: "Ginger is a ___ (root/leaf).", answer: "root" },
      { question: "Garlic is a ___ (root/fruit).", answer: "root" },
      { question: "Cabbage is a ___ (flower/leaf) vegetable.", answer: "leaf" },
      { question: "Cauliflower is a ___ (flower/root) vegetable.", answer: "flower" },
      { question: "Broccoli is a ___ (flower/root) vegetable.", answer: "flower" },
      { question: "Sweet potato is a ___ (root/stem) vegetable.", answer: "root" },
      { question: "Ginger and garlic are used as ___.", answer: "spices/flavour" },
      { question: "Green peas are rich in ___.", answer: "protein" },
      { question: "Spinach is rich in ___.", answer: "iron" },
      { question: "Carrot is rich in Vitamin ___.", answer: "A" },
      { question: "Potato is rich in ___.", answer: "carbohydrates" },
      { question: "Brinjal is also called ___.", answer: "eggplant" },
      { question: "Lady's finger is also called ___.", answer: "okra" },
      { question: "Bitter gourd is called ___ in Hindi.", answer: "karela" },
      { question: "Bottle gourd is called ___ in Hindi.", answer: "lauki" },
      { question: "Radish is called ___ in Hindi.", answer: "mooli" },
    ],
  ];
  return sheets[sheetNumber - 1];
}

function genBodyParts(sheetNumber: number): Question[] {
  const sheets: Question[][] = [
    [
      { question: "We see with our ___.", answer: "eyes" },
      { question: "We hear with our ___.", answer: "ears" },
      { question: "We smell with our ___.", answer: "nose" },
      { question: "We taste with our ___.", answer: "tongue" },
      { question: "We touch and feel with our ___.", answer: "skin/hands" },
      { question: "We think with our ___.", answer: "brain" },
      { question: "We breathe with our ___.", answer: "lungs" },
      { question: "We pump blood with our ___.", answer: "heart" },
      { question: "We digest food with our ___.", answer: "stomach" },
      { question: "We walk with our ___.", answer: "legs/feet" },
      { question: "We hold things with our ___.", answer: "hands" },
      { question: "We chew food with our ___.", answer: "teeth" },
      { question: "We smile with our ___.", answer: "lips/mouth" },
      { question: "Our skeleton is made of ___.", answer: "bones" },
      { question: "Our bones are covered with ___.", answer: "muscles" },
      { question: "We have ___ fingers on each hand.", answer: "5" },
      { question: "We have ___ toes on each foot.", answer: "5" },
      { question: "We have ___ eyes.", answer: "2" },
      { question: "We have ___ ears.", answer: "2" },
      { question: "We have ___ nose.", answer: "1" },
    ],
    [
      { question: "Eyes help us to ___.", answer: "see" },
      { question: "Ears help us to ___.", answer: "hear" },
      { question: "Nose helps us to ___.", answer: "smell" },
      { question: "Tongue helps us to ___.", answer: "taste" },
      { question: "Skin helps us to ___.", answer: "touch/feel" },
      { question: "We keep our eyes clean by ___.", answer: "washing" },
      { question: "We keep our teeth clean by ___.", answer: "brushing" },
      { question: "We keep our hair clean by ___.", answer: "shampooing" },
      { question: "We keep our hands clean by ___.", answer: "washing with soap" },
      { question: "We keep our ears clean by ___.", answer: "wiping gently" },
      { question: "Good eyesight: eat foods rich in Vitamin ___.", answer: "A" },
      { question: "Strong teeth: drink ___ and eat dairy.", answer: "milk" },
      { question: "Strong bones: need calcium from ___.", answer: "milk/dairy" },
      { question: "Healthy lungs: avoid ___.", answer: "smoking/pollution" },
      { question: "Strong muscles: need exercise and ___.", answer: "protein" },
      { question: "We brush teeth ___ times a day.", answer: "2" },
      { question: "We should bathe ___ a day.", answer: "once/twice" },
      { question: "We should sleep ___ hours at night.", answer: "8-10" },
      { question: "We should drink ___ glasses of water daily.", answer: "8" },
      { question: "Exercise keeps our body ___.", answer: "healthy/fit" },
    ],
    [
      { question: "The organ that pumps blood is ___.", answer: "heart" },
      { question: "The organ that helps us breathe is ___.", answer: "lungs" },
      { question: "The organ that controls our body is ___.", answer: "brain" },
      { question: "The organ that digests food is ___.", answer: "stomach" },
      { question: "The largest organ of our body is ___.", answer: "skin" },
      { question: "The strongest muscle in our body is ___.", answer: "heart" },
      { question: "The hardest part of our body is ___.", answer: "teeth (enamel)" },
      { question: "Our brain is protected by the ___.", answer: "skull" },
      { question: "Our heart is inside the ___.", answer: "chest" },
      { question: "Our lungs are like ___ balloons.", answer: "two" },
      { question: "We breathe in ___.", answer: "oxygen" },
      { question: "We breathe out ___.", answer: "carbon dioxide" },
      { question: "Blood carries ___ to all body parts.", answer: "oxygen/food" },
      { question: "Food gives our body ___.", answer: "energy" },
      { question: "Water is important for every part of our ___.", answer: "body" },
      { question: "Number of senses we have: ___", answer: "5" },
      { question: "The 5 senses are: sight, hearing, smell, touch, ___", answer: "taste" },
      { question: "The sense organ for sight is ___.", answer: "eye" },
      { question: "The sense organ for hearing is ___.", answer: "ear" },
      { question: "The sense organ for smell is ___.", answer: "nose" },
    ],
    [
      { question: "Sort: eye, nose, ear — these are sense organs. True/False?", answer: "True" },
      { question: "We use ___ to write.", answer: "hands/fingers" },
      { question: "We use ___ to run.", answer: "legs/feet" },
      { question: "We use ___ to breathe.", answer: "nose/lungs" },
      { question: "We use ___ to speak.", answer: "mouth/tongue" },
      { question: "We use ___ to think.", answer: "brain" },
      { question: "Wearing glasses helps people see ___.", answer: "better" },
      { question: "Hearing aids help people hear ___.", answer: "better" },
      { question: "Calcium keeps our ___ strong.", answer: "bones and teeth" },
      { question: "Protein helps build our ___.", answer: "muscles" },
      { question: "The human body has ___ main parts.", answer: "head, trunk, limbs (3 parts)" },
      { question: "Limbs include arms and ___.", answer: "legs" },
      { question: "Trunk of body is between head and ___.", answer: "waist/lower body" },
      { question: "Elbow is part of the ___.", answer: "arm" },
      { question: "Knee is part of the ___.", answer: "leg" },
      { question: "Shoulder connects arm to the ___.", answer: "body/trunk" },
      { question: "Hip connects leg to the ___.", answer: "body/trunk" },
      { question: "Ankle is below the ___.", answer: "knee" },
      { question: "Wrist is between hand and ___.", answer: "arm" },
      { question: "Thumb is the ___ finger on hand.", answer: "first/biggest" },
    ],
  ];
  return sheets[sheetNumber - 1];
}

function genSenseOrgans(sheetNumber: number): Question[] {
  const organs = [
    { name: "Eyes", sense: "sight", verb: "see", care: "wash daily, avoid bright light" },
    { name: "Ears", sense: "hearing", verb: "hear", care: "clean gently, avoid loud noise" },
    { name: "Nose", sense: "smell", verb: "smell", care: "blow gently, breathe through it" },
    { name: "Tongue", sense: "taste", verb: "taste", care: "brush, avoid very hot food" },
    { name: "Skin", sense: "touch", verb: "feel", care: "keep clean, moisturise" },
  ];
  const qs: Question[] = [];
  for (const [idx, o] of organs.entries()) {
    qs.push({ question: `Sense organ for ${o.sense} is?`, answer: o.name });
    qs.push({ question: `${o.name} help us to ___`, answer: o.verb });
    qs.push({ question: `How to care for ${o.name}?`, answer: o.care });
    qs.push({ question: `The ${o.name} is part of the ___ system.`, answer: "nervous" });
  }
  const extra: Question[] = [
    { question: "Number of sense organs in humans: ___", answer: "5" },
    { question: "The sense organ for taste is ___.", answer: "tongue" },
    { question: "The sense organ for touch is ___.", answer: "skin" },
    { question: "Blind people cannot use their ___.", answer: "eyes" },
    { question: "Deaf people cannot use their ___.", answer: "ears" },
    { question: "We close our eyes when we ___.", answer: "sleep/blink" },
  ];
  const allQs = [...qs, ...extra];
  const start = ((sheetNumber - 1) * 20) % allQs.length;
  const end = start + 20;
  if (end <= allQs.length) return allQs.slice(start, end);
  return [...allQs.slice(start), ...allQs.slice(0, end - allQs.length)];
}

function genHealthyHabits(sheetNumber: number): Question[] {
  const sheets: Question[][] = [
    [
      { question: "We brush our teeth ___ times a day.", answer: "2 (twice)" },
      { question: "We wash hands ___ eating.", answer: "before" },
      { question: "We wash hands ___ using toilet.", answer: "after" },
      { question: "We should drink ___ glasses of water daily.", answer: "8" },
      { question: "We should sleep ___ hours at night.", answer: "8-10" },
      { question: "We should exercise ___ minutes daily.", answer: "30-60" },
      { question: "We should bathe ___ a day.", answer: "once/daily" },
      { question: "We should cut our nails ___ they get long.", answer: "when/before" },
      { question: "We should eat ___ fruits and vegetables.", answer: "fresh" },
      { question: "We should cover our mouth when ___.", answer: "coughing/sneezing" },
      { question: "We should not ___ in public places.", answer: "spit/litter" },
      { question: "We should keep our surroundings ___.", answer: "clean" },
      { question: "Junk food is ___ for our health.", answer: "bad" },
      { question: "Fresh fruits and vegetables are ___ for health.", answer: "good" },
      { question: "Sugar in excess causes ___.", answer: "tooth decay/obesity" },
      { question: "Oily food in excess causes ___.", answer: "obesity/disease" },
      { question: "Regular exercise keeps us ___.", answer: "healthy/fit" },
      { question: "Sleep is important for our ___ and body.", answer: "brain" },
      { question: "Breakfast is the ___ meal of the day.", answer: "most important" },
      { question: "Washing hands prevents spread of ___.", answer: "germs/disease" },
    ],
    [
      { question: "Using a clean handkerchief is a ___ habit.", answer: "good" },
      { question: "Throwing litter on roads is a ___ habit.", answer: "bad" },
      { question: "Helping old people is a ___ habit.", answer: "good" },
      { question: "Being rude to elders is a ___ habit.", answer: "bad" },
      { question: "Wasting food is a ___ habit.", answer: "bad" },
      { question: "Saving water is a ___ habit.", answer: "good" },
      { question: "Watching too much TV is a ___ habit.", answer: "bad" },
      { question: "Reading books is a ___ habit.", answer: "good" },
      { question: "Playing outdoors is a ___ habit.", answer: "good" },
      { question: "Eating slowly is a ___ habit.", answer: "good" },
      { question: "Sharing food with friends is a ___ habit.", answer: "good" },
      { question: "Bullying others is a ___ habit.", answer: "bad" },
      { question: "Telling the truth is a ___ habit.", answer: "good" },
      { question: "Lying is a ___ habit.", answer: "bad" },
      { question: "Keeping room tidy is a ___ habit.", answer: "good" },
      { question: "Staying up late every night is a ___ habit.", answer: "bad" },
      { question: "Drinking plenty of water is a ___ habit.", answer: "good" },
      { question: "Skipping breakfast is a ___ habit.", answer: "bad" },
      { question: "Playing sports is a ___ habit.", answer: "good" },
      { question: "Wasting electricity is a ___ habit.", answer: "bad" },
    ],
    [
      { question: "Personal hygiene means keeping yourself ___.", answer: "clean" },
      { question: "Dental hygiene means keeping your ___ clean.", answer: "teeth" },
      { question: "Washing hair regularly is part of ___.", answer: "personal hygiene" },
      { question: "Trimming nails prevents ___.", answer: "germs/dirt" },
      { question: "Using a clean towel after bath is ___.", answer: "important" },
      { question: "We should change our clothes ___.", answer: "daily" },
      { question: "Dirty hands spread ___.", answer: "germs/disease" },
      { question: "We use ___ to clean our teeth.", answer: "toothbrush and toothpaste" },
      { question: "We use ___ to clean our hair.", answer: "shampoo" },
      { question: "We use ___ to wash our body.", answer: "soap and water" },
      { question: "Flu spreads by ___.", answer: "coughing/sneezing" },
      { question: "To prevent flu: wash hands with ___.", answer: "soap" },
      { question: "Germs are very ___ (tiny/large).", answer: "tiny" },
      { question: "Doctors and nurses wear ___ to prevent germs.", answer: "masks/gloves" },
      { question: "Safe drinking water is water that has been ___.", answer: "purified/boiled" },
      { question: "Boiling water kills ___.", answer: "germs" },
      { question: "Mosquitoes spread ___.", answer: "malaria/dengue" },
      { question: "We should not leave stagnant water as it breeds ___.", answer: "mosquitoes" },
      { question: "Hand sanitiser is an alternative to ___.", answer: "handwashing" },
      { question: "Vaccination prevents ___.", answer: "diseases" },
    ],
    [
      { question: "Eating breakfast gives us ___ for the day.", answer: "energy" },
      { question: "Milk and eggs give us ___.", answer: "protein" },
      { question: "Rice and bread give us ___.", answer: "carbohydrates/energy" },
      { question: "Fruits and vegetables give us ___.", answer: "vitamins and minerals" },
      { question: "Ghee and oil give us ___.", answer: "fat/energy" },
      { question: "Iron is found in ___ leafy vegetables.", answer: "green" },
      { question: "Calcium is found in ___ and dairy.", answer: "milk" },
      { question: "Vitamin C is found in ___.", answer: "citrus fruits" },
      { question: "Vitamin A is found in ___ and carrots.", answer: "milk" },
      { question: "Water makes up ___ % of our body.", answer: "70" },
      { question: "We should eat ___ meals a day.", answer: "3 (three)" },
      { question: "The biggest meal of the day should be ___.", answer: "lunch" },
      { question: "Dinner should be ___ (heavy/light).", answer: "light" },
      { question: "We should eat dinner at least ___ hrs before sleeping.", answer: "2" },
      { question: "Snacks between meals should be ___ (healthy/junk).", answer: "healthy" },
      { question: "A diet with all nutrients is called a ___ diet.", answer: "balanced" },
      { question: "Overeating leads to ___.", answer: "obesity/indigestion" },
      { question: "Undereating leads to ___.", answer: "weakness/malnutrition" },
      { question: "Chewing food well helps in ___.", answer: "digestion" },
      { question: "We should not eat or drink ___ water.", answer: "unclean/dirty" },
    ],
  ];
  return sheets[sheetNumber - 1];
}

function genMyselfMyFamily(sheetNumber: number): Question[] {
  const sheets: Question[][] = [
    [
      { question: "My name is written with ___ letters.", answer: "many" },
      { question: "I was born on my ___ day.", answer: "birthday" },
      { question: "I am a ___ or ___ (boy/girl).", answer: "boy or girl" },
      { question: "I live in a ___.", answer: "house/home" },
      { question: "I go to a ___ to study.", answer: "school" },
      { question: "My favourite colour is ___.", answer: "(any colour)" },
      { question: "I have ___ eyes and ___ ears.", answer: "2, 2" },
      { question: "I have ___ hands and ___ legs.", answer: "2, 2" },
      { question: "I eat food ___ times a day.", answer: "3 (three)" },
      { question: "I sleep at ___.", answer: "night" },
      { question: "I am a human being. True/False?", answer: "True" },
      { question: "My school friend is called a ___.", answer: "classmate" },
      { question: "My teacher teaches me in ___.", answer: "school" },
      { question: "I grow older every ___.", answer: "year" },
      { question: "I was a baby before I became a ___.", answer: "child" },
      { question: "My parents love and ___ me.", answer: "care for" },
      { question: "When I am sick, I go to a ___.", answer: "doctor" },
      { question: "I use a ___ to see myself.", answer: "mirror" },
      { question: "I am different from others because I am ___.", answer: "unique" },
      { question: "I should be kind and ___ to everyone.", answer: "helpful" },
    ],
    [
      { question: "Father + Mother = my ___", answer: "parents" },
      { question: "Father's mother is my ___.", answer: "grandmother (paternal)" },
      { question: "Mother's mother is my ___.", answer: "grandmother (maternal)" },
      { question: "Father's father is my ___.", answer: "grandfather (paternal)" },
      { question: "Grandfather and grandmother are called ___.", answer: "grandparents" },
      { question: "Father's brother is my ___.", answer: "uncle" },
      { question: "Mother's sister is my ___.", answer: "aunt" },
      { question: "Son of my uncle is my ___.", answer: "cousin" },
      { question: "My parents' children are called ___.", answer: "siblings/children" },
      { question: "I call my father's sister ___.", answer: "aunt" },
      { question: "A family has a ___ and a ___.", answer: "father and mother" },
      { question: "Small family = parents + ___ children.", answer: "one or two" },
      { question: "Large family = grandparents + parents + ___.", answer: "children (joint family)" },
      { question: "Family members love and ___ each other.", answer: "care for" },
      { question: "At home we ___ together as a family.", answer: "eat/live" },
      { question: "Festivals are celebrated with ___.", answer: "family" },
      { question: "A family without parents is called an ___ family.", answer: "orphan" },
      { question: "Children without parents live in ___.", answer: "orphanages" },
      { question: "My father's name is ___.", answer: "(student writes own)" },
      { question: "My mother's name is ___.", answer: "(student writes own)" },
    ],
    [
      { question: "My home is a place where I live with my ___.", answer: "family" },
      { question: "Rooms in a home: bedroom, kitchen, bathroom, ___.", answer: "living room" },
      { question: "We cook food in the ___.", answer: "kitchen" },
      { question: "We sleep in the ___.", answer: "bedroom" },
      { question: "We bathe in the ___.", answer: "bathroom" },
      { question: "We watch TV in the ___.", answer: "living room" },
      { question: "We eat meals in the ___ room.", answer: "dining" },
      { question: "A garden is outside the ___.", answer: "house" },
      { question: "We should keep our home ___.", answer: "clean and tidy" },
      { question: "Dustbin is used to throw ___.", answer: "waste/garbage" },
      { question: "We should not shout inside the ___.", answer: "house" },
      { question: "We should not waste ___ at home.", answer: "water/electricity" },
      { question: "Turning off lights saves ___.", answer: "electricity" },
      { question: "Closing taps saves ___.", answer: "water" },
      { question: "My address tells people where I ___.", answer: "live" },
      { question: "Number on our house is our house ___.", answer: "number" },
      { question: "Street/road name is part of our ___.", answer: "address" },
      { question: "City name is part of our ___.", answer: "address" },
      { question: "Pin code/Zip code helps post office deliver ___.", answer: "letters/mail" },
      { question: "We should know our home ___ for safety.", answer: "address" },
    ],
    [
      { question: "My school is a place to ___.", answer: "learn/study" },
      { question: "My teacher is a person who ___.", answer: "teaches" },
      { question: "My classroom has ___ and chairs.", answer: "desks/benches" },
      { question: "I write on a ___ in school.", answer: "notebook/book" },
      { question: "My school bag carries my ___.", answer: "books and stationery" },
      { question: "The person who manages the school is ___.", answer: "principal/headmaster" },
      { question: "School starts in the ___ (morning/evening).", answer: "morning" },
      { question: "We eat lunch at ___ (school).", answer: "lunch break" },
      { question: "We play at ___.", answer: "recess/break time" },
      { question: "Library is a place in school with ___.", answer: "books" },
      { question: "Playground is where we ___.", answer: "play" },
      { question: "Science lab is where we do ___.", answer: "experiments" },
      { question: "We should be ___ in class.", answer: "quiet/attentive" },
      { question: "We should be ___ to classmates.", answer: "kind/friendly" },
      { question: "We should complete our ___ on time.", answer: "homework" },
      { question: "We should ___ before speaking in class.", answer: "raise hand" },
      { question: "Uniform keeps all students ___.", answer: "equal/same" },
      { question: "Absence from school is called ___.", answer: "absence/leave" },
      { question: "Best friends at school are ___.", answer: "classmates" },
      { question: "School teaches us to be ___ citizens.", answer: "good" },
    ],
  ];
  return sheets[sheetNumber - 1];
}

function genShapes(sheetNumber: number): Question[] {
  const sheets: Question[][] = [
    [
      { question: "A circle has ___ sides.", answer: "0" },
      { question: "A circle has ___ corners.", answer: "0" },
      { question: "A square has ___ sides.", answer: "4" },
      { question: "A square has ___ corners.", answer: "4" },
      { question: "All sides of a square are ___.", answer: "equal" },
      { question: "A triangle has ___ sides.", answer: "3" },
      { question: "A triangle has ___ corners.", answer: "3" },
      { question: "A rectangle has ___ sides.", answer: "4" },
      { question: "A rectangle has ___ corners.", answer: "4" },
      { question: "Opposite sides of rectangle are ___.", answer: "equal" },
      { question: "An oval looks like a stretched ___.", answer: "circle" },
      { question: "A star has ___ points.", answer: "5" },
      { question: "A heart has ___ curves at top.", answer: "2" },
      { question: "Sun is shaped like a ___.", answer: "circle" },
      { question: "Pizza is shaped like a ___.", answer: "circle" },
      { question: "Slice of pizza is shaped like a ___.", answer: "triangle" },
      { question: "Book cover is shaped like a ___.", answer: "rectangle" },
      { question: "A door is shaped like a ___.", answer: "rectangle" },
      { question: "Window is shaped like a ___.", answer: "rectangle/square" },
      { question: "Wheel is shaped like a ___.", answer: "circle" },
    ],
    [
      { question: "A pentagon has ___ sides.", answer: "5" },
      { question: "A hexagon has ___ sides.", answer: "6" },
      { question: "A heptagon has ___ sides.", answer: "7" },
      { question: "An octagon has ___ sides.", answer: "8" },
      { question: "A stop sign is shaped like an ___.", answer: "octagon" },
      { question: "A honeycomb is made of ___ shapes.", answer: "hexagons" },
      { question: "A diamond shape is also called a ___.", answer: "rhombus" },
      { question: "An arrow points in one ___.", answer: "direction" },
      { question: "A crescent is the shape of the ___.", answer: "moon" },
      { question: "A cross has ___ arms.", answer: "4" },
      { question: "A shape with no sides is a ___.", answer: "circle" },
      { question: "A shape with 3 sides is a ___.", answer: "triangle" },
      { question: "A shape with 4 equal sides is a ___.", answer: "square" },
      { question: "A shape with 5 sides is a ___.", answer: "pentagon" },
      { question: "A shape with 6 sides is a ___.", answer: "hexagon" },
      { question: "A shape with 8 sides is an ___.", answer: "octagon" },
      { question: "Kite is shaped like a ___.", answer: "diamond/rhombus" },
      { question: "Egg is shaped like an ___.", answer: "oval" },
      { question: "Coin is shaped like a ___.", answer: "circle" },
      { question: "Ruler is shaped like a ___.", answer: "rectangle" },
    ],
    [
      { question: "A ball is shaped like a ___.", answer: "sphere" },
      { question: "A box is shaped like a ___.", answer: "cuboid" },
      { question: "A dice is shaped like a ___.", answer: "cube" },
      { question: "An ice cream cone is shaped like a ___.", answer: "cone" },
      { question: "A tin can is shaped like a ___.", answer: "cylinder" },
      { question: "A sphere has ___ flat faces.", answer: "0" },
      { question: "A cube has ___ faces.", answer: "6" },
      { question: "All faces of a cube are ___.", answer: "equal/square" },
      { question: "A cone has ___ flat face.", answer: "1" },
      { question: "A cylinder has ___ flat faces.", answer: "2" },
      { question: "A cube has ___ edges.", answer: "12" },
      { question: "A cube has ___ corners.", answer: "8" },
      { question: "Globe is shaped like a ___.", answer: "sphere" },
      { question: "Drum is shaped like a ___.", answer: "cylinder" },
      { question: "Party hat is shaped like a ___.", answer: "cone" },
      { question: "Book is shaped like a ___.", answer: "cuboid" },
      { question: "2D shapes are ___.", answer: "flat" },
      { question: "3D shapes are ___.", answer: "solid" },
      { question: "Circle is a ___ (2D/3D) shape.", answer: "2D" },
      { question: "Sphere is a ___ (2D/3D) shape.", answer: "3D" },
    ],
    [
      { question: "What shape is a clock? ___", answer: "Circle" },
      { question: "What shape is a sandwich? ___", answer: "Square/Triangle" },
      { question: "What shape is a brick? ___", answer: "Cuboid" },
      { question: "What shape is a ring? ___", answer: "Circle" },
      { question: "What shape is a pencil? ___", answer: "Cylinder/hexagonal prism" },
      { question: "What shape is a football? ___", answer: "Sphere" },
      { question: "What shape is a button? ___", answer: "Circle" },
      { question: "What shape is a birthday cake? ___", answer: "Cylinder" },
      { question: "What shape is a floor tile? ___", answer: "Square" },
      { question: "What shape is a flag? ___", answer: "Rectangle" },
      { question: "How many corners does a circle have? ___", answer: "0" },
      { question: "How many sides does a hexagon have? ___", answer: "6" },
      { question: "How many faces does a cube have? ___", answer: "6" },
      { question: "How many edges does a cube have? ___", answer: "12" },
      { question: "Name a shape with no corners: ___", answer: "Circle" },
      { question: "Name a 3D shape like a ball: ___", answer: "Sphere" },
      { question: "Name a shape with 4 equal sides: ___", answer: "Square" },
      { question: "Name a shape with 3 sides: ___", answer: "Triangle" },
      { question: "I have 4 sides but they are not equal. I am a ___", answer: "Rectangle" },
      { question: "I am round and flat. I am a ___", answer: "Circle" },
    ],
  ];
  return sheets[sheetNumber - 1];
}

function genColors(sheetNumber: number): Question[] {
  const sheets: Question[][] = [
    [
      { question: "Sky is ___ colour.", answer: "blue" },
      { question: "Grass is ___ colour.", answer: "green" },
      { question: "Sun is ___ colour.", answer: "yellow" },
      { question: "Apple is ___ colour.", answer: "red" },
      { question: "Snow is ___ colour.", answer: "white" },
      { question: "Coal is ___ colour.", answer: "black" },
      { question: "Carrot is ___ colour.", answer: "orange" },
      { question: "Grape is ___ colour.", answer: "purple" },
      { question: "Rose is ___ colour.", answer: "red/pink" },
      { question: "Milk is ___ colour.", answer: "white" },
      { question: "Chocolate is ___ colour.", answer: "brown" },
      { question: "Peacock is ___ colour.", answer: "green/blue" },
      { question: "Panda is ___ and ___ colour.", answer: "black and white" },
      { question: "Rainbow has ___ colours.", answer: "7 (seven)" },
      { question: "Rainbow colours: Red, Orange, Yellow, Green, Blue, Indigo, ___", answer: "Violet" },
      { question: "Mixing red and yellow gives ___.", answer: "orange" },
      { question: "Mixing blue and yellow gives ___.", answer: "green" },
      { question: "Mixing red and blue gives ___.", answer: "purple/violet" },
      { question: "Primary colours are red, blue, and ___.", answer: "yellow" },
      { question: "White + black = ___", answer: "grey" },
    ],
    [
      { question: "Name a red object: ___", answer: "apple/rose/tomato" },
      { question: "Name a blue object: ___", answer: "sky/sea/blueberry" },
      { question: "Name a green object: ___", answer: "grass/leaf/cucumber" },
      { question: "Name a yellow object: ___", answer: "sun/banana/lemon" },
      { question: "Name an orange object: ___", answer: "carrot/orange fruit" },
      { question: "Name a purple object: ___", answer: "grape/violet flower" },
      { question: "Name a brown object: ___", answer: "chocolate/soil/bark" },
      { question: "Name a black object: ___", answer: "coal/tire/night sky" },
      { question: "Name a white object: ___", answer: "milk/snow/cloud" },
      { question: "Name a pink object: ___", answer: "rose/flamingo" },
      { question: "Traffic light: Red means ___", answer: "stop" },
      { question: "Traffic light: Green means ___", answer: "go" },
      { question: "Traffic light: Yellow means ___", answer: "wait/slow" },
      { question: "Danger is shown by colour ___", answer: "red" },
      { question: "Peace is shown by colour ___", answer: "white" },
      { question: "Nature is shown by colour ___", answer: "green" },
      { question: "Happiness is shown by colour ___", answer: "yellow" },
      { question: "Royalty is shown by colour ___", answer: "purple" },
      { question: "Water colour is ___", answer: "transparent/colourless" },
      { question: "Autumn leaves turn ___", answer: "yellow/orange/red" },
    ],
    [
      { question: "Red + Yellow = ___", answer: "orange" },
      { question: "Blue + Yellow = ___", answer: "green" },
      { question: "Red + Blue = ___", answer: "purple" },
      { question: "Red + White = ___", answer: "pink" },
      { question: "Black + White = ___", answer: "grey" },
      { question: "Blue + White = ___", answer: "light blue" },
      { question: "Red + Green = ___", answer: "dark/muddy colour" },
      { question: "Primary colours: Red, Blue, ___", answer: "Yellow" },
      { question: "Secondary colour: made by mixing two primary colours.", answer: "true" },
      { question: "Orange is a secondary colour. True/False?", answer: "True" },
      { question: "Rainbow starts with ___ and ends with ___.", answer: "Red, Violet" },
      { question: "VIBGYOR stands for colours of ___.", answer: "rainbow" },
      { question: "The 7th colour of rainbow is ___.", answer: "Violet" },
      { question: "The 1st colour of rainbow is ___.", answer: "Red" },
      { question: "The 4th colour of rainbow is ___.", answer: "Green" },
      { question: "Pencil colours are also called ___.", answer: "coloured pencils/crayons" },
      { question: "We mix ___ to get new colours.", answer: "colours/paints" },
      { question: "Camouflage means blending with ___ colours.", answer: "background/surroundings" },
      { question: "Autumn brings colours: red, yellow, ___.", answer: "orange/brown" },
      { question: "Spring brings ___ coloured flowers.", answer: "bright/many" },
    ],
    [
      { question: "What colour is the Indian flag saffron stripe?", answer: "orange/saffron" },
      { question: "What colour is the Indian flag white stripe?", answer: "white" },
      { question: "What colour is the Indian flag green stripe?", answer: "green" },
      { question: "What colour is the Ashoka Chakra?", answer: "navy blue" },
      { question: "What colour are leaves (healthy)?", answer: "green" },
      { question: "What colour are leaves (autumn)?", answer: "yellow/orange/red" },
      { question: "What colour is the sky at night?", answer: "dark blue/black" },
      { question: "What colour is the sky at sunset?", answer: "orange/red/pink" },
      { question: "What colour is the sky in day?", answer: "blue" },
      { question: "What colour are clouds usually?", answer: "white/grey" },
      { question: "Emerald is a precious stone of colour ___.", answer: "green" },
      { question: "Ruby is a precious stone of colour ___.", answer: "red" },
      { question: "Sapphire is a precious stone of colour ___.", answer: "blue" },
      { question: "Diamond is a precious stone of colour ___.", answer: "clear/white" },
      { question: "Gold is of colour ___.", answer: "yellow/gold" },
      { question: "Silver is of colour ___.", answer: "silver/grey" },
      { question: "Copper is of colour ___.", answer: "orange-brown" },
      { question: "Iron is of colour ___.", answer: "grey/dark" },
      { question: "Rust (on iron) is of colour ___.", answer: "orange-red" },
      { question: "My favourite colour is ___.", answer: "(student writes own)" },
    ],
  ];
  return sheets[sheetNumber - 1];
}

// Generic fallback KG bank with shuffling
const KG_FALLBACK: Question[] = [
  { question: "I am a student. I go to ___.", answer: "school" },
  { question: "I learn to ___ and write.", answer: "read" },
  { question: "My teacher is a ___.", answer: "teacher" },
  { question: "I have ___ hands.", answer: "two" },
  { question: "I have ___ legs.", answer: "two" },
  { question: "I eat food to get ___.", answer: "energy" },
  { question: "I drink ___ to stay healthy.", answer: "water/milk" },
  { question: "I sleep at ___.", answer: "night" },
  { question: "Sun gives us light and ___.", answer: "heat" },
  { question: "Rain comes from ___.", answer: "clouds" },
  { question: "Plants need water and ___ to grow.", answer: "sunlight" },
  { question: "Leaves are ___ colour.", answer: "green" },
  { question: "Sky is ___ colour.", answer: "blue" },
  { question: "A rainbow has ___ colours.", answer: "7 (seven)" },
  { question: "Ice is ___ (solid/liquid).", answer: "solid" },
  { question: "Water is ___ (solid/liquid).", answer: "liquid" },
  { question: "Steam is ___ (gas/solid).", answer: "gas" },
  { question: "I should say 'please' when I ___.", answer: "ask for something" },
  { question: "I should say 'thank you' when I ___.", answer: "receive something" },
  { question: "I should say 'sorry' when I ___.", answer: "make a mistake" },
  { question: "Counting to 10: 1, 2, 3, 4, 5, 6, 7, 8, 9, ___", answer: "10" },
  { question: "One + One = ___", answer: "2 (Two)" },
  { question: "Two + Two = ___", answer: "4 (Four)" },
  { question: "Three + Three = ___", answer: "6 (Six)" },
  { question: "How many days in a week? ___", answer: "7 (seven)" },
  { question: "How many months in a year? ___", answer: "12 (twelve)" },
  { question: "First day of week is ___.", answer: "Monday" },
  { question: "Last day of week is ___.", answer: "Sunday" },
  { question: "I am a girl/boy. I am a ___.", answer: "human/child" },
  { question: "My country is called ___.", answer: "India" },
  { question: "Our national flag has ___ colours.", answer: "3 (three)" },
  { question: "My city is called ___ (write your city).", answer: "(student writes)" },
  { question: "I live with my ___.", answer: "family" },
  { question: "A friend is someone who ___.", answer: "plays/helps/cares" },
  { question: "I should be ___ to animals.", answer: "kind/gentle" },
  { question: "I should not ___ water.", answer: "waste" },
  { question: "I should not ___ electricity.", answer: "waste" },
  { question: "I should plant ___ to help nature.", answer: "trees" },
  { question: "I should put waste in a ___.", answer: "dustbin" },
  { question: "My doctor helps me when I am ___.", answer: "sick/ill" },
];

function mulberry32(seed: string): () => number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  let s = h >>> 0;
  return () => {
    s |= 0; s = s + 0x6d2b79f5 | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(arr: T[], seed: string): T[] {
  const rng = mulberry32(seed);
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function tk(t: string) { return t.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim(); }

export function generateKindergartenQuestions(
  _gradeId: string,
  topicLabel: string,
  sheetNumber: number
): Question[] {
  const k = tk(topicLabel);

  // Alphabet / Letters
  if (k.includes("capital") || k.includes("small letter")) return genCapitalSmall(sheetNumber);
  if (k.includes("alphabet") && k.includes("a")) return genAlphabetAZ(sheetNumber);
  if (k.includes("letter tracing") || k.includes("tracing")) return genCapitalSmall(sheetNumber);
  if (k.includes("letter recogni") || k.includes("recogni")) return genLetterRecognition(sheetNumber);
  if (k.includes("alphabet match")) return genCapitalSmall(sheetNumber);
  if (k.includes("beginning letter") || k.includes("beginning sound")) return genBeginningSound(sheetNumber);
  if (k.includes("phonics") || k.includes("sound")) return genBeginningSound(sheetNumber);
  if (k.includes("vowel") && !k.includes("consonant")) return genVowels(sheetNumber);
  if (k.includes("consonant")) return genLetterRecognition(sheetNumber);
  if (k.includes("picture") && k.includes("letter")) return genBeginningSound(sheetNumber);
  if (k.includes("sight word") || k.includes("rhym") || k.includes("cvc") || k.includes("word match")) return genBeginningSound(sheetNumber);

  // Mathematics (KG): handled by math generator, not this file

  // General Awareness
  if (k.includes("animal")) return genAnimals(sheetNumber);
  if (k.includes("fruit")) return genFruits(sheetNumber);
  if (k.includes("vegetable")) return genVegetables(sheetNumber);
  if (k.includes("body part")) return genBodyParts(sheetNumber);
  if (k.includes("sense organ")) return genSenseOrgans(sheetNumber);
  if (k.includes("healthy habit") || k.includes("health") || k.includes("hygiene")) return genHealthyHabits(sheetNumber);
  if (k.includes("my") && (k.includes("family") || k.includes("home") || k.includes("school"))) return genMyselfMyFamily(sheetNumber);
  if (k.includes("myself")) return genMyselfMyFamily(sheetNumber);
  if (k.includes("food")) return genHealthyHabits(sheetNumber);

  // Shapes
  if (k.includes("shape") || k.includes("circle") || k.includes("square") || k.includes("visual")) return genShapes(sheetNumber);

  // Colors
  if (k.includes("color") || k.includes("colour")) return genColors(sheetNumber);

  // Logic & Thinking (handled separately)

  // Fallback
  return seededShuffle(KG_FALLBACK, `${topicLabel}|${sheetNumber}`).slice(0, 20);
}
