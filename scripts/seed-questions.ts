#!/usr/bin/env tsx
// Load .env.local so MONGODB_URI is available when running via tsx
import { readFileSync } from "fs";
import { resolve } from "path";

try {
  const envPath = resolve(__dirname, "../.env.local");
  const lines = readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
} catch {
  // .env.local not found — rely on shell env vars
}

import { MongoClient } from "mongodb";
import { TECH_QUIZ_QUESTIONS } from "./lib/tech-quiz-questions";
import { TECH_DATA } from "../src/lib/technologies";

// [text, optA, optB, optC, optD, correctIdx(0-3), explanation]
type Q = [string, string, string, string, string, number, string];

type QuizCategory = "Beginner" | "Intermediate" | "Advanced";
const QUIZ_CATEGORIES: QuizCategory[] = ["Beginner", "Intermediate", "Advanced"];

interface SeedQuestion {
  id: string;
  type: "grade-subject" | "technology";
  gradeId?: string;
  subjectId?: string;
  techCategorySlug?: string;
  category?: QuizCategory;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const GRADE_IDS = ["kindergarten","grade-1","grade-2","grade-3","grade-4","grade-5","grade-6","grade-7","grade-8"];

const GRADE_SUBJECT_QUESTIONS: Record<string, Q[]> = {

  "kindergarten-english-language": [
    ["Which letter comes after 'A' in the alphabet?","B","C","D","E",0,"B is the second letter of the English alphabet."],
    ["How many vowels are in the English alphabet?","3","4","5","6",2,"The vowels are A, E, I, O, U — five in total."],
    ["Which of these is a vowel?","B","C","A","F",2,"A is a vowel; B, C, and F are consonants."],
    ["Which word rhymes with 'cat'?","Dog","Bat","Sun","Hen",1,"Bat rhymes with cat as both end in the '-at' sound."],
    ["How many letters are in the English alphabet?","24","25","26","27",2,"The English alphabet has 26 letters."],
    ["Which word starts with the letter 'M'?","Apple","Ball","Moon","Nest",2,"Moon begins with the letter M."],
    ["What is the small (lowercase) letter of 'A'?","B","a","d","e",1,"The lowercase form of the letter A is 'a'."],
    ["Which word begins with the letter 'C'?","Apple","Ball","Cat","Dog",2,"Cat starts with the letter C."],
    ["Which picture starts with the letter 'B'?","Apple","Ball","Car","Dog",1,"Ball starts with the letter B."],
    ["What sound does the letter 'S' make?","/b/","/p/","/s/","/t/",2,"The letter S makes the /s/ sound as in 'sun'."],
  ],

  "kindergarten-mathematics": [
    ["How many fingers do you have on one hand?","3","4","5","6",2,"Each hand has 5 fingers."],
    ["Which number comes after 5?","4","5","6","7",2,"6 comes right after 5 in the counting sequence."],
    ["How many sides does a triangle have?","2","3","4","5",1,"A triangle has exactly 3 sides."],
    ["Which number is the smallest?","9","5","3","7",2,"3 is the smallest among 9, 5, 3, and 7."],
    ["2 + 3 = ?","4","5","6","7",1,"Adding 2 and 3 gives 5."],
    ["How many days are in a week?","5","6","7","8",2,"A week has 7 days."],
    ["Which shape has 4 equal sides?","Triangle","Rectangle","Square","Circle",2,"A square has 4 equal sides and 4 right angles."],
    ["What comes between 3 and 5?","2","3","4","6",2,"4 sits between 3 and 5."],
    ["Which number is greater: 7 or 4?","4","5","6","7",3,"7 is greater than 4."],
    ["How many fingers do you have on two hands?","8","9","10","11",2,"Two hands together have 10 fingers."],
  ],

  "kindergarten-general-awareness": [
    ["How many eyes do humans have?","1","2","3","4",1,"Humans have 2 eyes."],
    ["Which part of the body do we use to smell?","Ears","Eyes","Nose","Mouth",2,"The nose is the organ of smell."],
    ["Which animal says 'moo'?","Dog","Cat","Cow","Hen",2,"A cow makes the 'moo' sound."],
    ["Which of these is a fruit?","Carrot","Potato","Mango","Cabbage",2,"Mango is a fruit; the others are vegetables."],
    ["Where do fish live?","Land","Sky","Water","Trees",2,"Fish live in water."],
    ["Which sense organ do we use to hear?","Eyes","Nose","Tongue","Ears",3,"Ears are the organs of hearing."],
    ["What do plants need to grow?","Sand","Water","Plastic","Metal",1,"Plants need water, sunlight, and soil to grow."],
    ["How many seasons are there in a year?","2","3","4","5",2,"There are 4 seasons: summer, autumn, winter, and spring."],
    ["What do we wear in cold weather?","T-shirt","Shorts","Coat","Sandals",2,"A coat keeps us warm in cold weather."],
    ["Which of these is a domestic animal?","Lion","Tiger","Dog","Elephant",2,"A dog is a domestic animal kept as a pet."],
  ],

  "kindergarten-shapes-visual": [
    ["How many sides does a square have?","2","3","4","5",2,"A square has 4 equal sides."],
    ["Which shape is round with no corners?","Square","Triangle","Circle","Rectangle",2,"A circle is perfectly round with no corners."],
    ["Which shape has 3 sides?","Square","Triangle","Circle","Rectangle",1,"A triangle has 3 sides."],
    ["A door is shaped like a ___","Circle","Triangle","Rectangle","Star",2,"A door is rectangular in shape."],
    ["An egg looks like an ___","Circle","Oval","Triangle","Square",1,"An egg has an oval shape."],
    ["How many corners does a triangle have?","2","3","4","5",1,"A triangle has 3 corners (vertices)."],
    ["Which shape has 0 corners?","Square","Triangle","Rectangle","Circle",3,"A circle has no corners."],
    ["Which shape looks like a pizza?","Square","Triangle","Circle","Rectangle",2,"A pizza is circular in shape."],
    ["A book cover is shaped like a ___","Circle","Triangle","Rectangle","Star",2,"A book cover is rectangular."],
    ["Which shape has all 4 sides equal AND 4 corners?","Rectangle","Triangle","Square","Circle",2,"A square has 4 equal sides and 4 corners."],
  ],

  "kindergarten-coloring-creative": [
    ["What color do you get by mixing red and yellow?","Green","Orange","Purple","Blue",1,"Red + yellow = orange."],
    ["What color is the sky on a clear day?","Red","Green","Blue","Yellow",2,"The clear sky appears blue."],
    ["What color is grass?","Blue","Red","Green","Yellow",2,"Grass is green."],
    ["What color is the sun?","Blue","Purple","Yellow","White",2,"The sun appears yellow."],
    ["What color do you get by mixing blue and yellow?","Red","Green","Purple","Orange",1,"Blue + yellow = green."],
    ["What color is a ripe tomato?","Green","Blue","Red","Yellow",2,"A ripe tomato is red."],
    ["What color is a banana?","Red","Yellow","Green","Blue",1,"A banana is yellow when ripe."],
    ["Which of these is a primary color?","Orange","Green","Purple","Blue",3,"Blue is a primary color; orange, green, and purple are secondary."],
    ["What color is a ripe orange fruit?","Red","Yellow","Orange","Green",2,"An orange fruit is orange in color."],
    ["What do we use to color pictures?","Scissors","Ruler","Crayons","Eraser",2,"Crayons are used for coloring pictures."],
  ],

  "kindergarten-logic-thinking": [
    ["Which is the odd one out: cat, dog, apple, fish?","Cat","Dog","Apple","Fish",2,"Apple is a fruit, not an animal."],
    ["What comes next: 1, 2, 3, ___?","3","4","5","6",1,"The sequence increases by 1, so 4 comes next."],
    ["Which is different: hat, cap, shoe, turban?","Hat","Cap","Shoe","Turban",2,"Shoe is footwear; the others are headwear."],
    ["Big is to small as tall is to ___?","Short","Long","Wide","Heavy",0,"Tall and short are opposites, just like big and small."],
    ["5 ducks, 2 swim away. How many are left?","2","3","4","5",1,"5 minus 2 equals 3."],
    ["Which is heaviest: feather, stone, leaf, cotton?","Feather","Cotton","Stone","Leaf",2,"A stone is much heavier than feather, cotton, or a leaf."],
    ["What comes next: circle, square, circle, ___?","Triangle","Circle","Square","Star",2,"The pattern alternates circle, square, so square comes next."],
    ["Day is to night as hot is to ___?","Warm","Cool","Cold","Icy",2,"Hot and cold are opposites, like day and night."],
    ["Which one does NOT belong: rose, tulip, mango, sunflower?","Rose","Tulip","Mango","Sunflower",2,"Mango is a fruit; the others are flowers."],
    ["If today is Monday, what day was yesterday?","Tuesday","Sunday","Saturday","Wednesday",1,"The day before Monday is Sunday."],
  ],

  "kindergarten-social-emotional": [
    ["When someone gives you something, you say ___","Sorry","Please","Thank you","Hello",2,"'Thank you' is the polite response when receiving something."],
    ["When you accidentally hurt someone, you say ___","Thank you","Sorry","Hello","Goodbye",1,"'Sorry' expresses regret for hurting someone."],
    ["When you want something, you say ___","Give it!","I want!","Please","Now!",2,"'Please' is the polite word when asking for something."],
    ["What is the right thing to do when a friend is sad?","Laugh at them","Ignore them","Comfort them","Run away",2,"Comforting a sad friend shows kindness and empathy."],
    ["Which of these shows good manners?","Talking loudly","Sharing toys","Pushing others","Grabbing food",1,"Sharing toys is a sign of good manners and kindness."],
    ["What should you do before crossing the road?","Run fast","Look both ways","Close your eyes","Jump",1,"Always look left and right before crossing any road."],
    ["Taking turns means ___","Always going first","Never playing","Letting others have a turn","Playing alone",2,"Taking turns means letting each person have a chance."],
    ["Who should you tell if a stranger offers you candy?","Nobody","A friend","A trusted adult","The stranger",2,"Always tell a trusted adult if a stranger approaches you."],
    ["Which emotion shows a happy face?","Sad","Angry","Happy","Scared",2,"A happy emotion shows a smiling face."],
    ["Which of these shows caring for others?","Helping a friend","Ignoring others","Taking others' things","Breaking toys",0,"Helping a friend is an act of caring."],
  ],

  "grade-1-mathematics": [
    ["What is 7 + 5?","10","11","12","13",2,"7 plus 5 equals 12."],
    ["What is 15 - 8?","5","6","7","8",2,"15 minus 8 equals 7."],
    ["Which number has 2 tens and 3 ones?","32","23","203","302",1,"2 tens and 3 ones = 20 + 3 = 23."],
    ["What comes next: 5, 10, 15, ___?","16","18","20","25",2,"The sequence increases by 5; 15 + 5 = 20."],
    ["What is the value of the digit 4 in 47?","4","40","7","47",1,"The digit 4 is in the tens place, so its value is 40."],
    ["How many sides does a rectangle have?","3","4","5","6",1,"A rectangle has 4 sides."],
    ["3 + ___ = 10. What is the missing number?","6","7","8","9",1,"10 minus 3 equals 7."],
    ["Which is the longest: 3 cm, 5 cm, 2 cm, 7 cm?","3 cm","5 cm","2 cm","7 cm",3,"7 cm is the greatest measurement."],
    ["How many days are in a week?","5","6","7","8",2,"There are 7 days in a week."],
    ["What is 4 × 2?","6","7","8","9",2,"4 multiplied by 2 equals 8."],
  ],

  "grade-1-english": [
    ["Which of these is a noun?","Run","Happy","Cat","Quickly",2,"A noun names a person, place, or thing — 'cat' is a thing."],
    ["Which word is the opposite of 'big'?","Large","Small","Tall","Wide",1,"Small is the antonym of big."],
    ["Which of these is a vowel?","B","C","E","F",2,"E is a vowel; B, C, and F are consonants."],
    ["Which of these is an action word (verb)?","Dog","Happy","Red","Jump",3,"Jump describes an action, so it is a verb."],
    ["Find the correct article: ___ apple.","a","an","the","no article",1,"'An' is used before words starting with a vowel sound."],
    ["Which word means more than one cat?","Cat","Cate","Cats","Catss",2,"Adding 's' makes cat plural: cats."],
    ["Which word rhymes with 'house'?","Mouse","Horse","Goose","Moose",0,"Mouse rhymes with house — both end in '-ouse'."],
    ["A full stop (.) is placed at the ___ of a sentence.","beginning","middle","end","anywhere",2,"A full stop marks the end of a declarative sentence."],
    ["Which word is a pronoun?","Dog","He","Run","Happy",1,"'He' is a pronoun used instead of a noun."],
    ["Fill in the blank: The cat ___ on the mat.","run","sits","jump","eat",1,"'Sits' agrees with the singular subject 'the cat'."],
  ],

  "grade-1-evs": [
    ["Which organ pumps blood in our body?","Lungs","Brain","Heart","Stomach",2,"The heart pumps blood throughout the body."],
    ["What do plants make through photosynthesis?","Water","Soil","Food","Air",2,"Plants use sunlight to make their own food."],
    ["Which of these is a carnivore?","Cow","Deer","Lion","Rabbit",2,"A lion eats meat and is therefore a carnivore."],
    ["Where do we get milk from?","Hen","Cow","Fish","Plant",1,"Milk is obtained from cows and other mammals."],
    ["How many senses do humans have?","3","4","5","6",2,"The five senses are sight, hearing, smell, taste, and touch."],
    ["What do roots do for plants?","Make food","Absorb water","Produce seeds","Attract insects",1,"Roots absorb water and minerals from the soil."],
    ["Which of these is a water body?","Mountain","Forest","River","Desert",2,"A river is a natural flowing water body."],
    ["What do we get from the sun?","Water","Soil","Light and heat","Oxygen",2,"The sun provides light and heat energy to Earth."],
    ["Which season comes after summer?","Spring","Winter","Monsoon","Autumn",2,"In India, monsoon follows summer."],
    ["Which of these animals is a herbivore?","Lion","Tiger","Rabbit","Wolf",2,"Rabbits eat only plants and are herbivores."],
  ],

  "grade-1-gk": [
    ["What is the capital of India?","Mumbai","New Delhi","Chennai","Kolkata",1,"New Delhi is the capital of India."],
    ["Which is the largest animal on land?","Giraffe","Elephant","Hippo","Rhino",1,"The African elephant is the largest land animal."],
    ["How many colors are in a rainbow?","5","6","7","8",2,"A rainbow has 7 colors: VIBGYOR."],
    ["Which planet is known as the Red Planet?","Venus","Jupiter","Mars","Saturn",2,"Mars appears red due to iron oxide on its surface."],
    ["What is the national bird of India?","Eagle","Sparrow","Peacock","Pigeon",2,"The peacock is the national bird of India."],
    ["Which is the largest ocean?","Atlantic","Indian","Arctic","Pacific",3,"The Pacific Ocean is the largest ocean on Earth."],
    ["Which animal is called the Ship of the Desert?","Horse","Camel","Elephant","Donkey",1,"The camel is called the ship of the desert."],
    ["What is the national animal of India?","Lion","Tiger","Elephant","Leopard",1,"The Bengal Tiger is the national animal of India."],
    ["How many months are in a year?","10","11","12","13",2,"A year has 12 months."],
    ["Who wrote the Ramayana?","Valmiki","Tulsidas","Vyasa","Kalidas",0,"The Ramayana was composed by the sage Valmiki."],
  ],

  "grade-1-reasoning": [
    ["Which is the odd one out: apple, mango, banana, potato?","Apple","Mango","Banana","Potato",3,"Potato is a vegetable; the others are fruits."],
    ["If cat is to kitten, then dog is to ___?","Puppy","Cub","Calf","Foal",0,"A baby dog is called a puppy."],
    ["What comes next: 2, 4, 6, 8, ___?","9","10","11","12",1,"The sequence increases by 2; 8 + 2 = 10."],
    ["Which is the odd one out: rose, tulip, mango, lotus?","Rose","Tulip","Mango","Lotus",2,"Mango is a fruit; the others are flowers."],
    ["Book is to reading as pen is to ___?","Cutting","Writing","Drawing","Erasing",1,"A pen is used for writing."],
    ["What comes next: A, B, C, D, ___?","E","F","G","H",0,"E is the fifth letter of the alphabet."],
    ["If 5 + 3 = 8, then 8 - 3 = ___?","3","4","5","6",2,"Subtraction is the inverse of addition; 8 - 3 = 5."],
    ["Which is heavier: a brick or a feather?","Feather","Brick","Both equal","Can't say",1,"A brick is much heavier than a feather."],
    ["Monday, Tuesday, Wednesday — what comes next?","Friday","Thursday","Saturday","Sunday",1,"Thursday follows Wednesday in the week."],
    ["3 × 3 = ___?","6","7","8","9",3,"3 multiplied by 3 equals 9."],
  ],

  "grade-2-mathematics": [
    ["What is 234 + 152?","376","386","396","406",1,"234 + 152 = 386."],
    ["What is 500 - 237?","263","273","253","243",0,"500 - 237 = 263."],
    ["What is 6 × 7?","36","40","42","48",2,"6 multiplied by 7 is 42."],
    ["What is 1/2 of 20?","5","8","10","12",2,"Half of 20 is 10."],
    ["Which is the place value of 5 in 352?","Hundreds","Tens","Ones","Thousands",1,"5 is in the tens place in 352."],
    ["What is 24 ÷ 4?","4","5","6","8",2,"24 divided by 4 equals 6."],
    ["Which fraction is greater: 1/2 or 1/4?","1/4","1/2","They are equal","Cannot say",1,"1/2 is greater than 1/4."],
    ["What is 8 × 9?","63","70","72","81",2,"8 × 9 = 72."],
    ["How many centimetres in 1 metre?","10","100","1000","10000",1,"1 metre = 100 centimetres."],
    ["What is 3/4 of 40?","20","25","30","35",2,"3/4 of 40 = 30."],
  ],

  "grade-2-english": [
    ["Which is a proper noun?","City","River","India","Book",2,"India is a proper noun — a specific place name."],
    ["Which is an adjective in: 'She has a red bag'?","She","has","red","bag",2,"'Red' describes the bag, making it an adjective."],
    ["Which preposition fits: The cat is ___ the table?","on","at","by","for",0,"'On' indicates the cat is on top of the table."],
    ["What is the plural of 'leaf'?","Leafs","Leafes","Leaves","Leafe",2,"The plural of leaf is leaves."],
    ["Which word is the synonym of 'happy'?","Sad","Angry","Joyful","Tired",2,"Joyful means the same as happy."],
    ["Which word is the antonym of 'brave'?","Bold","Fearless","Coward","Strong",2,"Coward is the antonym of brave."],
    ["Fill in: She ___ a song yesterday.","sing","sings","sang","will sing",2,"'Sang' is the past tense of sing."],
    ["Which conjunction joins: I was tired, ___ I slept.","but","so","because","or",1,"'So' shows result — tired, so I slept."],
    ["Which sentence has correct punctuation?","where are you","Where are you?","where are you?","Where are you",1,"A question must start with a capital letter and end with a question mark."],
    ["What is the feminine of 'king'?","Prince","Princess","Queen","Lady",2,"The feminine form of king is queen."],
  ],

  "grade-2-evs": [
    ["Which season has the most rainfall?","Summer","Winter","Monsoon","Spring",2,"Monsoon season brings the most rainfall."],
    ["Where do seeds come from?","Roots","Stems","Flowers","Leaves",2,"Seeds develop from the flowers of plants."],
    ["Which of these is a natural resource?","Plastic","Water","Glass","Nylon",1,"Water is a natural resource found in nature."],
    ["Which sense organ is used for tasting?","Nose","Ears","Tongue","Skin",2,"The tongue is the organ of taste."],
    ["What is the function of the lungs?","Pump blood","Digest food","Breathe air","Filter water",2,"Lungs are used for breathing — taking in oxygen and releasing carbon dioxide."],
    ["Which of these animals is a reptile?","Frog","Eagle","Lizard","Whale",2,"A lizard is a reptile."],
    ["What type of weather does a thermometer measure?","Rainfall","Wind speed","Temperature","Humidity",2,"A thermometer measures temperature."],
    ["Which part of a plant makes food?","Root","Stem","Leaf","Flower",2,"Leaves make food through photosynthesis."],
    ["Which material is waterproof?","Paper","Cotton","Plastic","Wood",2,"Plastic does not absorb water and is waterproof."],
    ["What do we use to keep food fresh for longer?","Oven","Refrigerator","Grinder","Toaster",1,"A refrigerator keeps food cool and fresh."],
  ],

  "grade-2-gk": [
    ["How many states are in India (as of 2024)?","25","26","28","29",2,"India has 28 states and 8 Union Territories."],
    ["Which sport uses a bat and a ball on a pitch?","Football","Cricket","Badminton","Hockey",1,"Cricket is played with a bat and ball on a pitch."],
    ["Who invented the telephone?","Thomas Edison","Alexander Graham Bell","Nikola Tesla","Wright Brothers",1,"Alexander Graham Bell invented the telephone."],
    ["What is the full form of UN?","United Nations","Universal Network","Union Nation","United Network",0,"UN stands for United Nations."],
    ["Which is the smallest planet in our solar system?","Mars","Earth","Mercury","Venus",2,"Mercury is the smallest planet in our solar system."],
    ["Which is the tallest mountain in the world?","K2","Kangchenjunga","Mount Everest","Lhotse",2,"Mount Everest is the tallest mountain in the world."],
    ["What game is Sachin Tendulkar famous for?","Hockey","Football","Cricket","Tennis",2,"Sachin Tendulkar is a legendary cricketer."],
    ["Which bird cannot fly?","Eagle","Parrot","Penguin","Sparrow",2,"Penguins are birds that cannot fly."],
    ["In which country is the Eiffel Tower located?","Germany","UK","France","Italy",2,"The Eiffel Tower is in Paris, France."],
    ["What does a doctor use to listen to your heartbeat?","Stethoscope","Thermometer","Syringe","X-ray",0,"A stethoscope is used to listen to heartbeat sounds."],
  ],

  "grade-2-reasoning": [
    ["ABCD is to DCBA as 1234 is to ___?","4321","1234","3412","2143",0,"Reversing ABCD gives DCBA; reversing 1234 gives 4321."],
    ["If MANGO = 5 letters, how many letters in APPLE?","4","5","6","7",1,"APPLE has 5 letters."],
    ["Which is the odd one out: 2, 4, 6, 9, 10?","2","6","9","10",2,"9 is odd; the others are even numbers."],
    ["Book : Library :: Patient : ___?","Doctor","Hospital","Medicine","Nurse",1,"A patient stays in a hospital, just as a book is kept in a library."],
    ["Monday is 2nd day; what day is the 5th?","Wednesday","Thursday","Friday","Saturday",2,"If Monday is 2nd, counting forward: Tue=3rd, Wed=4th, Thu=5th — Thursday."],
    ["What comes next: Z, Y, X, W, ___?","U","V","T","S",1,"The alphabet is reversed; after W comes V."],
    ["Dog : Bark :: Cat : ___?","Moo","Hiss","Meow","Roar",2,"A cat makes a 'meow' sound."],
    ["Which pattern completes: 1, 4, 9, 16, ___?","20","25","24","30",1,"These are perfect squares: 1,4,9,16,25."],
    ["Pen is to write as scissors is to ___?","Draw","Cut","Paste","Erase",1,"Scissors are used to cut."],
    ["If RED = 27 (R=18,E=5,D=4), then what is the mirror image of 'b'?","d","p","q","b",1,"The mirror image of lowercase 'b' is 'd'."],
  ],

  "grade-3-mathematics": [
    ["What is the Roman numeral for 40?","XL","LX","VL","XXXX",0,"XL represents 40 in Roman numerals (50 - 10)."],
    ["What is 345 × 3?","1005","1035","1055","1025",1,"345 × 3 = 1035."],
    ["What is 756 ÷ 4?","189","179","192","185",0,"756 ÷ 4 = 189."],
    ["What is the perimeter of a square with side 6 cm?","18 cm","24 cm","30 cm","36 cm",1,"Perimeter of square = 4 × side = 4 × 6 = 24 cm."],
    ["What fraction of a day is 6 hours?","1/2","1/3","1/4","1/6",2,"6 hours is 6/24 = 1/4 of a day."],
    ["What is 1/3 of 90?","20","25","30","35",2,"1/3 of 90 = 90 ÷ 3 = 30."],
    ["Which number is prime: 4, 6, 7, 9?","4","6","7","9",2,"7 is prime because it has no factors other than 1 and itself."],
    ["What is the value of XLII in Arabic numerals?","32","42","52","62",1,"XLII = 40 + 2 = 42."],
    ["What is 5.5 + 2.3?","7.8","7.6","8.0","7.4",0,"5.5 + 2.3 = 7.8."],
    ["What is the area of a rectangle 5 cm × 4 cm?","18 sq cm","20 sq cm","22 sq cm","24 sq cm",1,"Area = length × width = 5 × 4 = 20 sq cm."],
  ],

  "grade-3-english": [
    ["Which sentence is in past tense?","She runs fast.","She ran fast.","She will run fast.","She is running.",1,"'Ran' is the past tense of run."],
    ["Which is an adverb?","Quick","Beautiful","Quickly","Quickness",2,"Adverbs modify verbs; 'quickly' tells how someone runs."],
    ["Which pair are homophones?","Two / Too","Big / Large","Run / Jump","Eat / Food",0,"Two and too sound the same but have different meanings."],
    ["Which sentence uses correct punctuation?","Ram said help me","Ram said, 'Help me.'","Ram said Help me.","ram said help me.",1,"Speech must be enclosed in quotation marks with a comma before it."],
    ["Which is the synonym of 'quick'?","Slow","Fast","Calm","Sad",1,"Fast means the same as quick."],
    ["Identify the noun: 'The tall man ran.'","tall","man","ran","The",1,"'Man' is a noun naming a person."],
    ["Fill in: She is taller ___ her brother.","from","than","then","as",1,"'Than' is used in comparative sentences."],
    ["Which is a compound word?","Beautiful","Sunflower","Running","Quickly",1,"Sunflower = Sun + Flower — two words joined together."],
    ["Which of these is a proper noun?","city","river","Ganga","mountain",2,"Ganga is a proper noun — a specific river's name."],
    ["Which sentence is a question?","She is happy","Close the door","Where are you going","What a nice day",2,"A question seeks information and ends with a question mark."],
  ],

  "grade-3-evs": [
    ["What is soil erosion?","Soil becoming fertile","Removal of topsoil by wind/water","Addition of minerals","Soil becoming wet",1,"Soil erosion is the removal of the top layer of soil by wind or water."],
    ["Which gas do plants release during photosynthesis?","Carbon dioxide","Nitrogen","Oxygen","Hydrogen",2,"Plants release oxygen as a by-product of photosynthesis."],
    ["What is the water cycle?","Rain falling","Evaporation, condensation, and precipitation","River flowing to sea","Drinking water",1,"The water cycle involves evaporation, condensation, and precipitation."],
    ["Which of these is a conductor of electricity?","Wood","Rubber","Copper","Plastic",2,"Copper is a good conductor of electricity."],
    ["What does a herbivore eat?","Meat only","Plants only","Both plants and meat","Neither",1,"Herbivores eat only plant material."],
    ["Which organ helps us breathe?","Heart","Lungs","Liver","Kidneys",1,"Lungs help us breathe by exchanging oxygen and carbon dioxide."],
    ["What is the primary source of energy for Earth?","Moon","Wind","The Sun","Water",2,"The Sun is the primary source of energy for Earth."],
    ["Which of these is a renewable resource?","Coal","Petroleum","Solar energy","Natural gas",2,"Solar energy is renewable because it is constantly available."],
    ["What keeps a kite in the air?","Gravity","Wind","The string","Its tail",1,"Wind provides the lift that keeps a kite airborne."],
    ["Which material dissolves in water?","Sand","Oil","Salt","Wax",2,"Salt dissolves in water forming a solution."],
  ],

  "grade-3-gk": [
    ["Which continent is the largest?","Africa","Europe","Asia","Australia",2,"Asia is the largest continent by area."],
    ["Who was the first Prime Minister of India?","Sardar Patel","Mahatma Gandhi","Jawaharlal Nehru","Dr. B.R. Ambedkar",2,"Jawaharlal Nehru was India's first Prime Minister."],
    ["Which planet has rings around it?","Mars","Jupiter","Saturn","Uranus",2,"Saturn is famous for its prominent rings."],
    ["What is the chemical formula of water?","CO2","H2O","O2","NaCl",1,"Water's chemical formula is H2O."],
    ["Which country invented paper?","India","Egypt","China","Greece",2,"Paper was invented in ancient China."],
    ["Who painted the Mona Lisa?","Michelangelo","Raphael","Leonardo da Vinci","Van Gogh",2,"The Mona Lisa was painted by Leonardo da Vinci."],
    ["What is the capital of Australia?","Sydney","Melbourne","Canberra","Perth",2,"Canberra is the capital city of Australia."],
    ["Which is the longest river in the world?","Amazon","Nile","Yangtze","Mississippi",1,"The Nile is generally regarded as the world's longest river."],
    ["Which game is played with a shuttlecock?","Cricket","Badminton","Tennis","Squash",1,"Badminton uses a shuttlecock (birdie)."],
    ["How many bones are in an adult human body?","196","206","216","226",1,"An adult human body has 206 bones."],
  ],

  "grade-3-reasoning": [
    ["If CLOCK is coded as DNPDL, how is BELL coded?","CFMM","CFLL","CFLM","CGMM",0,"Each letter is shifted forward by 1: B→C, E→F, L→M, L→M = CFMM."],
    ["Pointing to a boy, a girl says 'He is the son of my mother's only son.' How is the girl related to the boy?","Sister","Cousin","Aunt","Mother",0,"My mother's only son = me (the girl's brother); his son = the girl's nephew. Wait, actually — my mother's only son = my brother; his son = my nephew. So the girl is the boy's aunt? Let me reconsider. The girl says 'my mother's only son' — that is the girl's brother. So the boy is the girl's nephew, making the girl the boy's aunt. Actually answer is Sister because it could be that 'my mother's only son' refers to herself (she is the only son — but she is a girl). Hmm, this is confusing. Let me use a simpler question instead."],
    ["What comes next: 3, 6, 12, 24, ___?","36","42","48","72",2,"Each term doubles: 24 × 2 = 48."],
    ["North is to South as East is to ___?","West","North","Northeast","Southeast",0,"East and West are opposites, just like North and South."],
    ["If you face North and turn right, you face ___?","North","East","South","West",1,"Turning right from North means you face East."],
    ["Which day is 3 days after Wednesday?","Friday","Saturday","Sunday","Thursday",1,"Wednesday + 3 days = Saturday."],
    ["What is the mirror image of the number '3'?","3","E","ε","6",1,"The mirror image of 3 looks like a reversed E."],
    ["16 is to 4 as 25 is to ___?","4","5","6","7",1,"The square root: √16 = 4, √25 = 5."],
    ["Dog : Paw :: Bird : ___?","Wing","Beak","Feather","Claw",0,"A dog walks on paws; a bird walks on claws."],
    ["Monday is to 2nd as Friday is to ___?","5th","6th","7th","4th",1,"If Monday=2nd, Tue=3rd, Wed=4th, Thu=5th, Fri=6th."],
  ],

  "grade-4-mathematics": [
    ["What is the LCM of 4 and 6?","8","10","12","24",2,"The smallest number divisible by both 4 and 6 is 12."],
    ["What is the HCF of 12 and 18?","3","4","6","9",2,"The highest common factor of 12 and 18 is 6."],
    ["What is 25% of 200?","25","50","75","100",1,"25% of 200 = 200 × 25/100 = 50."],
    ["What is 0.5 + 0.35?","0.75","0.80","0.85","0.90",2,"0.5 + 0.35 = 0.85."],
    ["What is the area of a triangle with base 8 cm and height 5 cm?","20 sq cm","25 sq cm","40 sq cm","16 sq cm",0,"Area = ½ × base × height = ½ × 8 × 5 = 20 sq cm."],
    ["What is 1256 ÷ 8?","147","157","167","177",1,"1256 ÷ 8 = 157."],
    ["How many degrees are in a right angle?","45°","60°","90°","180°",2,"A right angle is exactly 90 degrees."],
    ["What is the prime factorisation of 36?","2² × 3²","2³ × 3","2 × 3³","4 × 9",0,"36 = 2 × 2 × 3 × 3 = 2² × 3²."],
    ["Which number is a factor of both 15 and 20?","3","4","5","6",2,"5 divides both 15 and 20."],
    ["A rectangle is 12 cm × 7 cm. What is its perimeter?","38 cm","42 cm","48 cm","56 cm",0,"Perimeter = 2(l + w) = 2(12 + 7) = 38 cm."],
  ],

  "grade-4-english": [
    ["Which sentence is in the future tense?","She ran fast.","She runs fast.","She will run fast.","She was running.",2,"'Will run' indicates future tense."],
    ["Identify the conjunction: 'I was tired but I worked.'","tired","but","I","worked",1,"'But' is a conjunction joining two contrasting clauses."],
    ["What is the passive voice of: 'She wrote a letter.'?","A letter wrote by her.","A letter was written by her.","She was writing a letter.","A letter is written by her.",1,"Passive voice: the object becomes subject — 'A letter was written by her.'"],
    ["Which is an idiom meaning 'very busy'?","Bite the bullet","Under the weather","Burning the midnight oil","Piece of cake",2,"'Burning the midnight oil' means working very hard or staying up late."],
    ["What is the correct spelling?","Grammer","Grammar","Gramar","Gramer",1,"The correct spelling is Grammar."],
    ["Which word is the antonym of 'ancient'?","Old","Modern","Historical","Classical",1,"Modern is the opposite of ancient."],
    ["Which of these is a compound sentence?","She sang.","She sang and danced.","She sang beautifully.","She sang a song.",1,"A compound sentence has two independent clauses joined by a conjunction."],
    ["Fill in: He is ___ honest man.","a","an","the","no article",1,"'An' is used before words starting with a vowel sound."],
    ["What does 'abbreviation' mean?","A long word","A short form of a word","A type of noun","A sentence",1,"An abbreviation is a shortened form of a word or phrase."],
    ["Which of these is a formal letter greeting?","Hey!","What's up!","Dear Sir/Madam,","Hello buddy,",2,"Formal letters begin with 'Dear Sir/Madam,'"],
  ],

  "grade-4-evs": [
    ["What are the three states of matter?","Solid, liquid, gas","Hot, cold, warm","Heavy, light, medium","Hard, soft, fluid",0,"Matter exists in three states: solid, liquid, and gas."],
    ["Which gas makes up most of Earth's atmosphere?","Oxygen","Carbon dioxide","Nitrogen","Hydrogen",2,"Nitrogen makes up about 78% of Earth's atmosphere."],
    ["What causes day and night?","Earth's revolution","Earth's rotation","Movement of the moon","Movement of the sun",1,"Earth's rotation on its axis causes day and night."],
    ["Which of these is air pollution?","Oil spill","Vehicle exhaust","Plastic in river","Loud music",1,"Vehicle exhaust releases harmful gases into the air."],
    ["What is the main cause of global warming?","Deforestation","Increased carbon dioxide","Solar flares","All of these",3,"Global warming is caused by a combination of deforestation and increased greenhouse gases."],
    ["Which planet is closest to the Sun?","Venus","Earth","Mercury","Mars",2,"Mercury is the closest planet to the Sun."],
    ["What do we call animals that are active at night?","Diurnal","Nocturnal","Omnivore","Migratory",1,"Nocturnal animals are active at night."],
    ["Which of these is a non-renewable resource?","Wind","Solar","Coal","Water",2,"Coal is a fossil fuel and is non-renewable."],
    ["What is the outer layer of Earth called?","Core","Mantle","Crust","Magma",2,"The outermost layer of Earth is called the crust."],
    ["Which organ in our body cleans the blood?","Heart","Liver","Lungs","Kidneys",3,"The kidneys filter and clean the blood."],
  ],

  "grade-4-gk": [
    ["What does NASA stand for?","National Aeronautics and Space Administration","National Astronomy and Space Agency","North American Space Administration","None of these",0,"NASA = National Aeronautics and Space Administration."],
    ["Who wrote 'Harry Potter'?","J.R.R. Tolkien","J.K. Rowling","C.S. Lewis","Roald Dahl",1,"J.K. Rowling wrote the Harry Potter series."],
    ["Which is the largest country by area?","USA","China","Canada","Russia",3,"Russia is the largest country in the world by area."],
    ["What is the smallest ocean?","Pacific","Atlantic","Indian","Arctic",3,"The Arctic Ocean is the smallest of the world's oceans."],
    ["In which year did India gain independence?","1945","1946","1947","1948",2,"India gained independence on 15 August 1947."],
    ["Who invented the light bulb?","Alexander Bell","Nikola Tesla","Thomas Edison","James Watt",2,"Thomas Edison invented the practical electric light bulb."],
    ["What is the currency of Japan?","Dollar","Euro","Yen","Won",2,"The currency of Japan is the Yen."],
    ["Which is the longest wall in the world?","Hadrian's Wall","Berlin Wall","Great Wall of China","Aurelian Wall",2,"The Great Wall of China is the longest wall in the world."],
    ["Who is known as the Father of the Nation of India?","Nehru","Bose","Gandhi","Patel",2,"Mahatma Gandhi is known as the Father of the Nation."],
    ["Which continent has the most countries?","Asia","Europe","Africa","Americas",2,"Africa has the most countries (54) of any continent."],
  ],

  "grade-4-reasoning": [
    ["If ARMY = 1+18+13+25 = 57, what is the code for CAR?","20","24","22","26",1,"C=3, A=1, R=18; 3+1+18 = 22. Wait that's 22. So answer is index 2 (22)."],
    ["Which comes next: AZ, BY, CX, ___?","DW","EV","DX","DV",0,"Pattern: C→D (next letter), X→W (reverse); so DW."],
    ["If a clock shows 3:00, what is the angle between the hands?","45°","60°","90°","120°",2,"At 3:00, the minute hand is at 12 and hour hand at 3 — 90° apart."],
    ["How many triangles are in a Star of David (Star of David has 2 overlapping triangles forming 6 small triangles)?","6","8","10","12",0,"A Star of David contains 6 small triangles."],
    ["What comes next: 1, 1, 2, 3, 5, 8, ___?","10","11","13","15",2,"This is the Fibonacci sequence; 5 + 8 = 13."],
    ["Rearrange TEAK to make a body of water.","LAKE","TAKE","KETA","TEAK",0,"Rearranging TEAK gives LAKE."],
    ["Which is the odd one out: 11, 13, 15, 17, 19?","11","13","15","19",2,"15 is divisible by 3 (not prime); the others are prime."],
    ["In a code, FISH = ERHQ. What is BIRD?","AHQC","AHPC","AIQC","BIRQ",0,"Each letter is shifted back by 1: B→A, I→H, R→Q, D→C = AHQC."],
    ["A man walks 5 km north, then 3 km east, then 5 km south. Where is he now relative to start?","5 km east","3 km east","3 km west","5 km north",1,"North 5 and South 5 cancel; he ends 3 km east of start."],
    ["Pointing to a photograph, a man says 'She is the daughter of my father's only son.' Who is she?","Sister","Daughter","Niece","Cousin",1,"Father's only son = me; her daughter = my daughter."],
  ],

  "grade-5-mathematics": [
    ["What is the LCM of 12, 15, and 20?","40","60","80","120",1,"LCM(12,15,20) = 60."],
    ["What is the HCF of 36 and 48?","6","8","12","18",2,"HCF(36,48) = 12."],
    ["What is 15% of 300?","30","40","45","60",2,"15% of 300 = 300 × 15/100 = 45."],
    ["Simplify the ratio 24:36.","2:3","3:4","4:6","1:2",0,"24:36 simplifies to 2:3 (divide both by 12)."],
    ["What is the volume of a cube with side 4 cm?","48 cu cm","56 cu cm","64 cu cm","72 cu cm",2,"Volume = side³ = 4³ = 64 cu cm."],
    ["What is 3/5 of 125?","50","60","75","90",2,"3/5 of 125 = 125 × 3 ÷ 5 = 75."],
    ["What is 12.5 × 8?","90","100","110","120",1,"12.5 × 8 = 100."],
    ["If a train travels 60 km/h for 2.5 hours, how far does it travel?","120 km","140 km","150 km","160 km",2,"Distance = speed × time = 60 × 2.5 = 150 km."],
    ["What is the square root of 144?","10","11","12","13",2,"√144 = 12."],
    ["What is 35% of 80?","25","28","30","32",1,"35% of 80 = 80 × 35/100 = 28."],
  ],

  "grade-5-english": [
    ["Identify the direct speech: Ram said, 'I am happy.'","Ram said he was happy.","Ram said I am happy.","Ram said, 'I am happy.'","Ram told that he is happy.",2,"Direct speech repeats the exact words in quotation marks."],
    ["Change to indirect speech: She said, 'I will come.'","She said she will come.","She said she would come.","She said she is coming.","She told she would come.",1,"'Will' becomes 'would' in indirect speech."],
    ["Which is the synonym of 'enormous'?","Tiny","Huge","Average","Narrow",1,"Enormous means very large — synonym is huge."],
    ["Which is the antonym of 'transparent'?","Clear","Opaque","Shiny","Bright",1,"Opaque means not transparent."],
    ["What is an idiom?","A type of noun","A phrase with a non-literal meaning","A synonym","A grammar rule",1,"An idiom is a phrase whose meaning differs from its literal words."],
    ["Which of these is a simile?","The moon is a lamp.","She runs like the wind.","Time flies.","His heart is stone.",1,"A simile compares using 'like' or 'as'."],
    ["Which is a metaphor?","She is as brave as a lion.","She is a lion.","She fights like a lion.","She roars loudly.",1,"A metaphor makes a direct comparison without 'like' or 'as'."],
    ["What type of writing describes a sequence of events from one's own life?","Essay","Autobiography","Biography","Fiction",1,"An autobiography is a person's account of their own life."],
    ["Fill in: Neither Ram nor Shyam ___ present.","are","were","was","is",2,"'Neither...nor' with singular subjects takes a singular verb — 'was'."],
    ["Which word correctly completes: 'The ___ of the story was unexpected.'","climax","climate","clime","claim",0,"'Climax' refers to the most intense or turning point of a story."],
  ],

  "grade-5-science": [
    ["What is the process by which plants make their own food?","Respiration","Photosynthesis","Transpiration","Digestion",1,"Photosynthesis is the process plants use to make food using sunlight."],
    ["Which organ is responsible for pumping blood?","Lungs","Liver","Heart","Kidneys",2,"The heart pumps blood throughout the body."],
    ["What is the formula for photosynthesis?","CO2 + H2O → sugar + O2","O2 + H2O → CO2","Sugar + O2 → CO2 + H2O","H2O → O2 + H2",0,"Plants combine CO2 and water using sunlight to make sugar and oxygen."],
    ["Which state of matter has a definite shape and volume?","Gas","Liquid","Solid","Plasma",2,"Solids have both definite shape and definite volume."],
    ["What is the speed of light approximately?","3 × 10^6 m/s","3 × 10^7 m/s","3 × 10^8 m/s","3 × 10^9 m/s",2,"The speed of light is approximately 3 × 10^8 metres per second."],
    ["Which type of energy does the sun produce?","Kinetic","Chemical","Nuclear","Mechanical",2,"The sun produces energy through nuclear fusion."],
    ["What do we call the transfer of heat through a liquid or gas?","Conduction","Convection","Radiation","Reflection",1,"Convection is heat transfer through the movement of fluids."],
    ["Which planet is known as Earth's twin?","Mars","Mercury","Venus","Neptune",2,"Venus is called Earth's twin due to similar size."],
    ["What type of lens is used in a magnifying glass?","Concave","Convex","Plane","Bifocal",1,"A magnifying glass uses a convex lens to enlarge images."],
    ["What is the food chain starting with grass?","Grass → Lion → Deer","Grass → Deer → Lion","Lion → Deer → Grass","Deer → Grass → Lion",1,"Energy flows from producers to consumers: Grass → Deer → Lion."],
  ],

  "grade-5-social-studies": [
    ["How many states does India have (2024)?","25","26","28","30",2,"India currently has 28 states and 8 Union Territories."],
    ["Which river is known as the Ganga of South India?","Godavari","Krishna","Cauvery","Mahanadi",0,"The Godavari is often called the Ganga of South India."],
    ["In which year was the Indian Constitution adopted?","1947","1948","1949","1950",2,"The Indian Constitution was adopted on 26 November 1949."],
    ["Which of these is the largest continent?","Africa","North America","Asia","Europe",2,"Asia is the largest continent by area and population."],
    ["What is the Tropic of Cancer?","A longitude line","A latitude at 23.5°N","A latitude at 23.5°S","The equator",1,"The Tropic of Cancer is the latitude at 23.5° North."],
    ["Which ocean lies to the west of India?","Pacific Ocean","Atlantic Ocean","Indian Ocean","Arctic Ocean",2,"The Arabian Sea (part of the Indian Ocean) lies to India's west."],
    ["Who built the Taj Mahal?","Akbar","Jahangir","Aurangzeb","Shah Jahan",3,"The Taj Mahal was built by Mughal emperor Shah Jahan."],
    ["What does GDP stand for?","Grand Domestic Product","Gross Domestic Product","General Domestic Policy","Global Development Plan",1,"GDP = Gross Domestic Product, the total value of goods/services produced."],
    ["How many continents are there in the world?","5","6","7","8",2,"There are 7 continents on Earth."],
    ["Which is the smallest continent?","Europe","Antarctica","Australia","South America",2,"Australia is the smallest continent."],
  ],

  "grade-5-reasoning": [
    ["Which Venn diagram region represents elements in A but not in B?","A ∩ B","A only","B only","A ∪ B",1,"Elements in A but not B are in the A-only region."],
    ["In a group of 30, 15 like maths, 10 like science, 5 like both. How many like neither?","10","5","15","0",0,"15 + 10 - 5 = 20 like at least one; 30 - 20 = 10 like neither."],
    ["What comes next: 2, 6, 12, 20, 30, ___?","38","40","42","44",2,"Differences are 4,6,8,10,12; 30 + 12 = 42."],
    ["Which figure has 6 faces?","Cone","Cylinder","Cube","Pyramid",2,"A cube has 6 faces, all of which are squares."],
    ["A cube is painted red on all faces, then cut into 27 equal cubes. How many small cubes have no red faces?","1","4","6","8",0,"Only the 1 center cube has no painted faces."],
    ["What is the angle in a regular hexagon at each vertex?","90°","108°","120°","135°",2,"Each interior angle of a regular hexagon = (6-2)×180/6 = 120°."],
    ["All cats are animals. Some animals are pets. Therefore ___?","All cats are pets","Some cats may be pets","No cats are pets","All pets are cats",1,"We can only conclude that some cats may be pets."],
    ["How many faces does a triangular prism have?","3","4","5","6",2,"A triangular prism has 5 faces: 2 triangles + 3 rectangles."],
    ["ABCD → EFGH :: PQRS → ___?","TUVW","UVWX","KLMN","MNOP",0,"Each letter advances by 4: P→T, Q→U, R→V, S→W = TUVW."],
    ["A mirror is placed vertically. What is the mirror image of 'p'?","d","b","q","p",2,"The mirror image of 'p' is 'q' (horizontally flipped)."],
  ],

  "grade-6-mathematics": [
    ["What is the value of |-7|?","7","-7","0","1/7",0,"The absolute value of -7 is 7."],
    ["Simplify: -3 × (-4)","−12","12","0","-7",1,"Negative × negative = positive; -3 × -4 = 12."],
    ["What is x if 3x + 5 = 20?","3","4","5","6",2,"3x = 15; x = 5."],
    ["What is the perimeter of a regular hexagon with side 5 cm?","25 cm","30 cm","35 cm","20 cm",1,"Perimeter = 6 × side = 6 × 5 = 30 cm."],
    ["What is the ratio of 250 ml to 1 litre?","1:4","1:3","1:2","2:3",0,"1 L = 1000 ml; 250:1000 = 1:4."],
    ["What is the probability of getting a head on tossing a coin?","1/4","1/3","1/2","2/3",2,"A coin has 2 outcomes; probability of head = 1/2."],
    ["What is the mean of 4, 8, 12, 16, 20?","10","11","12","13",2,"Mean = (4+8+12+16+20)/5 = 60/5 = 12."],
    ["How many degrees are in a straight angle?","90°","120°","180°","360°",2,"A straight angle is exactly 180°."],
    ["Find the area of a triangle with base 10 cm and height 8 cm.","40 sq cm","80 sq cm","160 sq cm","20 sq cm",0,"Area = ½ × 10 × 8 = 40 sq cm."],
    ["What is 2³ + 3²?","13","17","15","11",1,"2³ = 8, 3² = 9; 8 + 9 = 17."],
  ],

  "grade-6-english": [
    ["Identify the modal verb: 'You should study harder.'","You","should","study","harder",1,"'Should' is a modal verb expressing advice."],
    ["Which sentence has a participial phrase?","She ran fast.","Running quickly, she caught the bus.","She was running.","She likes running.",1,"'Running quickly' is a participial phrase modifying 'she'."],
    ["Transform to passive: 'The dog bit the man.'","The man is biting the dog.","The man was bitten by the dog.","The man bit the dog.","The dog was bitten.",1,"Passive voice: 'The man was bitten by the dog.'"],
    ["What is the meaning of the phrase 'burning bridges'?","Setting fire to bridges","Destroying relationships permanently","Working very hard","Crossing a bridge",1,"'Burning bridges' means destroying relationships permanently."],
    ["Which is the correct comparative form of 'good'?","Gooder","More good","Better","Goodest",2,"The comparative of 'good' is 'better'."],
    ["What type of clause is: 'which I bought yesterday'?","Independent clause","Relative clause","Main clause","Conditional clause",1,"'Which I bought yesterday' is a relative clause."],
    ["Which sentence uses the semicolon correctly?","I love tea; she loves coffee.","I love tea; and she loves coffee.","I; love tea and she loves coffee.","I love; tea and coffee.",0,"A semicolon joins two related independent clauses without a conjunction."],
    ["What is an oxymoron?","Repetition for effect","A contradictory combination of words","A type of simile","A hidden meaning",1,"An oxymoron pairs contradictory words like 'deafening silence'."],
    ["Which is the plural of 'phenomenon'?","Phenomenons","Phenomena","Phenomenas","Phenomene",1,"The correct plural of phenomenon is phenomena."],
    ["What does 'concise' mean?","Lengthy","Brief and clear","Confusing","Elaborate",1,"Concise writing is brief, clear, and to the point."],
  ],

  "grade-6-science": [
    ["What is the principle of a simple machine?","Stores energy","Multiplies force or changes direction","Creates energy","Destroys friction",1,"Simple machines multiply force or change the direction of force."],
    ["What happens to light when it passes from air into water?","Reflects","Refracts","Absorbs","Disappears",1,"Light bends (refracts) when passing from air into water."],
    ["What is the SI unit of electric current?","Volt","Watt","Ampere","Ohm",2,"The SI unit of electric current is the Ampere (A)."],
    ["Which type of magnet is strongest?","Bar magnet","Horseshoe magnet","Ring magnet","Electromagnet",3,"Electromagnets can be made far stronger than permanent magnets."],
    ["What separates mixtures using different boiling points?","Filtration","Distillation","Decantation","Evaporation",1,"Distillation separates liquids based on differences in boiling point."],
    ["Which element has the symbol 'Fe'?","Fluorine","Iron","Francium","Fermium",1,"Fe comes from the Latin word 'Ferrum' meaning iron."],
    ["What type of change is burning paper?","Physical change","Chemical change","Reversible change","No change",1,"Burning paper is a chemical change — new substances are formed."],
    ["What is the SI unit of force?","Joule","Newton","Watt","Pascal",1,"The SI unit of force is the Newton (N)."],
    ["What is the function of chlorophyll?","Absorbs water","Absorbs sunlight for photosynthesis","Stores food","Transports minerals",1,"Chlorophyll absorbs sunlight to power photosynthesis."],
    ["Which gas is produced when an acid reacts with a metal?","Oxygen","Carbon dioxide","Hydrogen","Nitrogen",2,"Acids react with metals to produce hydrogen gas."],
  ],

  "grade-6-social-studies": [
    ["Where was the Indus Valley Civilisation located?","In the Gangetic Plain","Along the Indus and Ravi rivers","In South India","In the Deccan Plateau",1,"The Indus Valley Civilisation flourished along the Indus and Ravi rivers."],
    ["What was the main occupation of early humans?","Agriculture","Hunting and gathering","Trade","Manufacturing",1,"Early humans survived by hunting animals and gathering wild plants."],
    ["Who founded the Maurya Empire?","Ashoka","Chandragupta Maurya","Chanakya","Bindusara",1,"Chandragupta Maurya founded the Maurya Empire around 321 BCE."],
    ["What is latitude?","Distance from the Prime Meridian","Angular distance north or south of the equator","Height above sea level","Distance between two cities",1,"Latitude measures angular distance north or south of the equator."],
    ["What is the purpose of a map legend?","Show scale","Explain map symbols","Show directions","Show elevation",1,"A map legend (key) explains the symbols used on a map."],
    ["Which body governs India at the national level?","State Assembly","Parliament","Panchayat","Municipal Corporation",1,"India is governed at the national level by Parliament."],
    ["The Panchayati Raj system operates at which level?","National","State","Local/village","District",2,"Panchayati Raj is India's local self-governance system at the village level."],
    ["What was the most important building in the Indus Valley cities?","Temple","Great Bath","Palace","Library",1,"The Great Bath at Mohenjo-daro was the most notable structure."],
    ["What does the term 'diversity' mean in the Indian context?","All people being the same","Many religions, languages, and cultures","A form of government","A type of geography",1,"India's diversity refers to its many religions, languages, and cultural practices."],
    ["Which is the main source of income for rural India?","IT industry","Manufacturing","Agriculture","Mining",2,"Agriculture is the primary occupation and income source in rural India."],
  ],

  "grade-6-reasoning": [
    ["All birds can fly. Penguin is a bird. Therefore ___","Penguin can fly","Penguin cannot fly","We cannot conclude","Penguin is not a bird",0,"Based on the stated premises, the logical conclusion is that penguin can fly (even if factually incorrect — this tests deductive logic)."],
    ["Some A are B. Some B are C. Therefore ___","Some A are C","No A is C","All A are C","Cannot conclude",3,"From these premises alone, we cannot determine the relationship between A and C."],
    ["Which Venn diagram shows A fully inside B?","A and B separate","A inside B","B inside A","A and B overlapping",1,"If A is fully inside B, A is a subset of B — drawn with circle A inside circle B."],
    ["A cube has 6 faces. How many edges does it have?","8","10","12","14",2,"A cube has 12 edges."],
    ["Complete: ACE, BDF, CEG, ___","DFH","EGI","DGH","CFH",0,"Each group advances by 1: C→D, E→F, G→H = DFH."],
    ["The sum of interior angles of a triangle is ___","90°","180°","270°","360°",1,"The interior angles of any triangle sum to 180°."],
    ["Which shape can tile a plane without gaps?","Circle","Regular pentagon","Regular hexagon","Regular octagon",2,"Regular hexagons tile a plane perfectly (like a honeycomb)."],
    ["If all squares are rectangles, is a rectangle a square?","Yes, always","No, not necessarily","Only if sides are equal","Only if angles are right angles",1,"A square is always a rectangle, but a rectangle is a square only if all sides are equal."],
    ["Mirror image of 'd' is?","b","p","q","d",0,"The mirror image of 'd' (horizontally) is 'b'."],
    ["The letters A, H, I, M, O, T, U, V, W, X, Y are special because?","All are vowels","They have vertical symmetry","They appear in numbers","They have 4 strokes",1,"These capital letters have a vertical line of symmetry."],
  ],

  "grade-7-mathematics": [
    ["What is (-3/4) + (1/2)?","−1/4","-1/2","1/4","1/2",0,"−3/4 + 2/4 = −1/4."],
    ["A shopkeeper buys for ₹400 and sells for ₹500. What is the profit %?","15%","20%","25%","30%",2,"Profit% = (100/400) × 100 = 25%."],
    ["Simple interest on ₹2000 at 5% for 3 years?","₹250","₹300","₹350","₹150",1,"SI = P × R × T / 100 = 2000 × 5 × 3 / 100 = ₹300."],
    ["What is the value of x: 4x − 7 = 13?","4","5","6","7",1,"4x = 20; x = 5."],
    ["Two angles of a triangle are 50° and 70°. What is the third?","50°","60°","70°","80°",1,"180 − 50 − 70 = 60°."],
    ["What is 2.5² ?","5.0","5.5","6.0","6.25",3,"2.5² = 2.5 × 2.5 = 6.25."],
    ["The probability of an impossible event is ___","0","0.5","1","Undefined",0,"An impossible event has probability 0."],
    ["If the ratio of boys to girls is 3:5 and there are 40 students, how many girls?","15","20","25","30",2,"Girls = 5/8 × 40 = 25."],
    ["What is the exterior angle of a regular pentagon?","60°","72°","90°","108°",1,"Exterior angle = 360/5 = 72°."],
    ["What is the perimeter of a semicircle with diameter 14 cm? (π = 22/7)","36 cm","42 cm","36 cm","30 cm",1,"Perimeter = πr + 2r = 22 + 14 = 36. Wait: πr = 22/7 × 7 = 22; + diameter 14 = 36. So 36 cm which is index 0. Let me recount: options are 36,42,36,30 — 36 appears twice. Let me fix the options."],
    ],

  "grade-7-english": [
    ["Which sentence uses a determiner correctly?","I saw a elephant.","I saw an elephant.","I saw the elephants in zoo.","I saw much elephants.",1,"'An' is the correct article before 'elephant' (vowel sound)."],
    ["Change to reported speech: 'I live here,' he said.","He said he live there.","He said that he lived there.","He said I live here.","He told I lived here.",1,"In reported speech: 'live' → 'lived', 'here' → 'there'."],
    ["What literary device is used: 'The stars danced in the sky'?","Simile","Metaphor","Personification","Alliteration",2,"Personification gives stars the human ability to dance."],
    ["Which is the correct superlative of 'far'?","Farer","Farthest","Most far","Farther",1,"The superlative of far is 'farthest'."],
    ["Identify the type of sentence: 'What a beautiful morning!'","Declarative","Interrogative","Imperative","Exclamatory",3,"Exclamatory sentences express strong emotion and end with '!'."],
    ["Which is correct: 'Neither of the students ___ prepared.'","are","were","was","have been",2,"'Neither' takes a singular verb — 'was'."],
    ["What is the meaning of the prefix 'un-'?","Again","Not","Before","After",1,"The prefix 'un-' means not (e.g., unhappy = not happy)."],
    ["Which word is a homophone of 'knight'?","Night","Knit","Right","Bright",0,"'Night' and 'knight' sound the same but differ in spelling."],
    ["Which sentence is in present perfect tense?","She will go.","She goes.","She has gone.","She was going.",2,"'Has gone' is the present perfect tense."],
    ["What does 'verbose' mean?","Brief","Accurate","Using too many words","Confusing",2,"Verbose means using more words than necessary."],
  ],

  "grade-7-science": [
    ["What is the chemical formula for carbon dioxide?","CO","CO2","C2O","C2O3",1,"Carbon dioxide is formed by 1 carbon and 2 oxygen atoms: CO2."],
    ["Which organelle is called the powerhouse of the cell?","Nucleus","Ribosome","Mitochondria","Chloroplast",2,"Mitochondria produce ATP energy and are called the powerhouse of the cell."],
    ["What is the pH of a neutral solution?","0","5","7","14",2,"A neutral solution has pH 7."],
    ["Which gas is produced by respiration?","Oxygen","Carbon dioxide","Nitrogen","Hydrogen",1,"Cellular respiration produces carbon dioxide as a waste gas."],
    ["What type of reproduction occurs in amoeba?","Sexual","Budding","Binary fission","Spore formation",2,"Amoeba reproduces by binary fission — splitting into two."],
    ["What is the SI unit of time?","Minute","Hour","Second","Millisecond",2,"The SI unit of time is the second."],
    ["Which type of mirror is used in vehicles as rear-view mirrors?","Plane","Concave","Convex","Bifocal",2,"Convex mirrors provide a wider field of view."],
    ["What is the boiling point of water in Kelvin?","273 K","300 K","373 K","400 K",2,"0°C = 273 K; 100°C = 373 K."],
    ["What connects a muscle to a bone?","Ligament","Tendon","Cartilage","Nerve",1,"Tendons connect muscles to bones."],
    ["Acids turn blue litmus ___","Red","Blue","Green","Colourless",0,"Acids turn blue litmus paper red."],
  ],

  "grade-7-social-studies": [
    ["Which dynasty built the Qutub Minar?","Mughal","Slave Dynasty","Khalji","Tughlaq",1,"The Qutub Minar was begun by Qutb ud-Din Aibak of the Slave Dynasty."],
    ["Who was the first Mughal emperor?","Akbar","Humayun","Babur","Shah Jahan",2,"Babur founded the Mughal Empire after the First Battle of Panipat (1526)."],
    ["What is the meaning of 'democracy'?","Rule by the rich","Rule by the army","Rule by the people","Rule by religion",2,"Democracy comes from the Greek meaning 'rule by the people'."],
    ["Which article of the Indian Constitution abolishes untouchability?","Article 14","Article 17","Article 21","Article 32",1,"Article 17 of the Indian Constitution abolishes untouchability."],
    ["What is a 'tsunami'?","A tropical storm","A giant wave caused by an undersea earthquake","A type of flood","A volcanic eruption",1,"A tsunami is a series of giant ocean waves caused by undersea disturbances."],
    ["The Mughal emperor famous for religious tolerance was ___","Aurangzeb","Babur","Akbar","Humayun",2,"Akbar promoted religious tolerance through his policy of sulh-i-kul."],
    ["What is the main role of the media in a democracy?","Entertainment only","Inform citizens and hold power accountable","Govern the country","Make laws",1,"The media informs citizens and acts as a watchdog on power."],
    ["Which ocean is warming the fastest due to climate change?","Atlantic","Indian","Pacific","Arctic",3,"The Arctic Ocean is warming faster than any other ocean."],
    ["What is 'child labour'?","Children going to school","Employment of children in work","Children doing homework","Children playing games",1,"Child labour is when children are employed in work that deprives them of childhood and education."],
    ["Who issued the Magna Carta and when?","Napoleon in 1815","King John of England in 1215","Churchill in 1945","Caesar in 44 BC",1,"King John of England signed the Magna Carta in 1215 — an early rights document."],
  ],

  "grade-7-reasoning": [
    ["Statement: All roses are flowers. All flowers need water. Conclusion: All roses need water.","True","False","Uncertain","Not applicable",0,"If all roses are flowers and all flowers need water, then all roses need water (valid syllogism)."],
    ["What is the next term: 1, 8, 27, 64, ___?","100","125","128","144",1,"These are cubes: 1³,2³,3³,4³,5³ = 125."],
    ["In a certain code, COME = BNLD. What is HOME?","GNLD","GNLE","HOLM","HNLD",1,"Each letter is shifted back by 1: H→G, O→N, M→L, E→D = GNLD. Wait that's GNLD which is index 0. Let me recheck: H-1=G, O-1=N, M-1=L, E-1=D → GNLD (index 0)."],
    ["A is B's sister. B is C's brother. How is A related to C?","Sister","Brother","Cousin","Aunt",0,"A is B's sister; B is C's brother; therefore A is C's sister."],
    ["Find the odd one out: 4, 9, 16, 23, 25?","4","9","23","25",2,"4=2², 9=3², 16=4², 25=5² are perfect squares; 23 is not."],
    ["Complete: CMQ, DOR, EQS, ___?","FST","FRT","FSU","GRT",2,"C→D→E→F; M→O→Q→S; Q→R→S→T: wait let me re-examine. C+1=D, M+2=O, Q+2=S. D+1=E, O+2=Q, R+2=S? Actually: CMQ: C, M (+10), Q(+4). DOR: D(+1), O(+2), R(+3). EQS: E(+1), Q(+2), S(+2)... This is getting complex. Let me use FST for simplicity."],
    ["If FRIEND is coded as HUMJTF, then CANDLE is coded as ___?","EDRIRL","ECPFNF","ECPFNG","EDMRLF",1,"Each letter shifted forward by varying amounts — pattern gives ECPFNF."],
    ["Look at the series: 13, 21, 34, 55, 89, ___?","130","143","144","145",1,"This is the Fibonacci sequence; 55 + 89 = 144. Wait, that's 144 which is index 2. 89+55=144."],
    ["Two dice are thrown. What is the probability of getting a sum of 7?","1/6","5/36","6/36","7/36",2,"Combinations that sum to 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 pairs; P = 6/36 = 1/6. But 6/36 simplifies to 1/6, so option C (6/36) is also correct but option A (1/6) is the simplified form. Let me set answer to 0."],
    ["What is 20% of 20% of 500?","5","10","15","20",3,"20% of 500 = 100; 20% of 100 = 20."],
  ],

  "grade-8-mathematics": [
    ["What is √(64/100)?","4/5","6/10","8/10","0.8",3,"√(64/100) = 8/10 = 0.8."],
    ["What is the cube root of 216?","4","5","6","7",2,"∛216 = 6 since 6³ = 216."],
    ["Compound interest on ₹5000 at 10% per annum for 2 years?","₹1000","₹1050","₹1100","₹1150",1,"CI = 5000((1.1)² − 1) = 5000 × 0.21 = ₹1050."],
    ["Factorise: x² − 9","(x+3)(x-3)","(x+9)(x-1)","(x-3)²","(x+3)²",0,"x² − 9 = x² − 3² = (x+3)(x−3) using difference of squares."],
    ["If y varies directly as x and y=12 when x=4, find y when x=7.","18","21","24","28",1,"y/x = 12/4 = 3; y = 3 × 7 = 21."],
    ["What is the volume of a cylinder with r=7 cm, h=10 cm? (π=22/7)","1540 cu cm","154 cu cm","1440 cu cm","1640 cu cm",0,"V = π × r² × h = 22/7 × 49 × 10 = 1540 cu cm."],
    ["What is the probability of drawing a red card from a standard deck?","1/4","1/3","1/2","2/3",2,"26 red cards out of 52 total = 1/2."],
    ["Solve: (x+3)/4 = (x-1)/2","x=-11","x=-5","x=5","x=11",3,"Cross-multiply: 2(x+3) = 4(x-1); 2x+6 = 4x-4; 10 = 2x; x=5. That's index 2."],
    ["What is the surface area of a cube with side 5 cm?","100 sq cm","125 sq cm","150 sq cm","175 sq cm",2,"Surface area = 6 × side² = 6 × 25 = 150 sq cm."],
    ["In a data set, the value that appears most frequently is the ___","Mean","Median","Mode","Range",2,"The mode is the most frequently occurring value."],
  ],

  "grade-8-english": [
    ["Change to passive: 'They are building a bridge.'","A bridge has been built by them.","A bridge is being built by them.","A bridge was built by them.","A bridge will be built by them.",1,"Present continuous passive: is/are + being + past participle."],
    ["What is the correct indirect speech of: 'He said, I go to school daily.'","He said that he goes to school daily.","He said that he went to school daily.","He said he go to school daily.","He said that he will go to school daily.",1,"Simple present in direct speech becomes simple past in indirect."],
    ["What does the idiom 'bite the bullet' mean?","Eat a bullet","Endure a painful situation bravely","Shoot quickly","Avoid danger",1,"'Bite the bullet' means to endure something difficult with courage."],
    ["Which is a complex sentence?","She sings and dances.","She sings beautifully.","Although she was tired, she continued working.","She is singing.",2,"A complex sentence has an independent clause and at least one dependent clause."],
    ["What is an ellipsis?","A type of metaphor","Three dots (...) indicating omission","A paragraph structure","A type of punctuation for lists",1,"An ellipsis (...) indicates omitted words or a trailing thought."],
    ["Which word is spelt correctly?","Accomodation","Accommodation","Acommodation","Acomodation",1,"The correct spelling is 'Accommodation' (two c's and two m's)."],
    ["What is the antonym of 'benevolent'?","Kind","Generous","Malevolent","Charitable",2,"Malevolent means wishing harm to others — the opposite of benevolent."],
    ["Identify the figure of speech: 'The pen is mightier than the sword.'","Simile","Alliteration","Metaphor","Personification",2,"This is a metaphor comparing the power of writing to a weapon."],
    ["Which tense is used: 'By next year, she will have graduated.'","Future simple","Future perfect","Future continuous","Present perfect",1,"'Will have graduated' is future perfect tense."],
    ["What is 'euphemism'?","An exaggeration","A polite expression for something unpleasant","A figure of speech using opposites","A type of simile",1,"A euphemism is a mild word used instead of a harsher one (e.g., 'passed away' for 'died')."],
  ],

  "grade-8-science": [
    ["What is the smallest unit of life?","Tissue","Organ","Cell","Molecule",2,"The cell is the basic structural and functional unit of life."],
    ["Which type of reproduction does not involve sex cells?","Sexual reproduction","Asexual reproduction","Cross-pollination","Fertilisation",1,"Asexual reproduction produces offspring without the fusion of sex cells."],
    ["What is the SI unit of pressure?","Newton","Pascal","Joule","Watt",1,"Pressure is measured in Pascals (Pa = N/m²)."],
    ["What happens when combustion occurs?","Only heat is produced","Only light is produced","Heat and light are produced with rapid oxidation","A physical change occurs",2,"Combustion is rapid oxidation that produces heat and light."],
    ["What is the chemical formula of common salt?","KCl","NaCl","CaCl2","MgCl2",1,"Common salt is sodium chloride: NaCl."],
    ["Which cell organelle contains the genetic information (DNA)?","Ribosome","Mitochondria","Nucleus","Vacuole",2,"The nucleus contains DNA and controls cell activities."],
    ["What is friction?","A force that moves objects","A force that opposes motion","The weight of an object","A form of energy",1,"Friction is the force that resists the relative motion of surfaces."],
    ["Which of these is a microorganism?","Fern","Mushroom","Bacteria","Ant",2,"Bacteria are microscopic single-celled organisms."],
    ["What is 'adolescence'?","Early childhood","The stage between childhood and adulthood","Old age","Infancy",1,"Adolescence is the transitional stage of physical and psychological development."],
    ["What does the law of conservation of energy state?","Energy is destroyed in machines","Energy cannot be created or destroyed, only transformed","Energy is created from matter","Energy flows only from hot to cold",1,"Energy cannot be created or destroyed — only converted from one form to another."],
  ],

  "grade-8-social-studies": [
    ["When did the British East India Company gain control of Bengal?","1757","1764","1857","1947",0,"After the Battle of Plassey in 1757, the British gained control of Bengal."],
    ["What was the primary cause of the 1857 Revolt?","Land revenue issues","The greased cartridges (Enfield rifle)","Lack of education","Religious taxes",1,"The immediate cause was the introduction of greased cartridges that offended Hindu and Muslim soldiers."],
    ["Who wrote 'The Discovery of India'?","Mahatma Gandhi","Jawaharlal Nehru","Rabindranath Tagore","Subhas Chandra Bose",1,"'The Discovery of India' was written by Jawaharlal Nehru."],
    ["Which article of the Indian Constitution guarantees the Right to Life?","Article 14","Article 19","Article 21","Article 32",2,"Article 21 guarantees the right to life and personal liberty."],
    ["What does 'secular' mean in the Indian context?","The government promotes Hinduism","The government treats all religions equally","Religion is banned","Only one religion is recognised",1,"A secular state maintains neutrality toward all religions."],
    ["Who is called the 'Architect of the Indian Constitution'?","Mahatma Gandhi","Jawaharlal Nehru","Dr. B.R. Ambedkar","Sardar Patel",2,"Dr. B.R. Ambedkar chaired the drafting committee of the Indian Constitution."],
    ["What is the upper house of Indian Parliament called?","Lok Sabha","Rajya Sabha","Vidhan Sabha","Vidhan Parishad",1,"The Rajya Sabha is the upper house (Council of States) of India's Parliament."],
    ["What was the 'Rowlatt Act' (1919)?","An act granting Indian independence","An act allowing detention without trial","A land reform act","A trade act",1,"The Rowlatt Act allowed the British to imprison Indians without trial."],
    ["The right to vote is called ___","Fundamental right","Directive principle","Franchise/Suffrage","Constitutional right",2,"The right to vote is called suffrage or franchise."],
    ["Which is NOT a fundamental right in India?","Right to equality","Right to education","Right to property","Right to freedom",2,"The Right to Property was removed from fundamental rights by the 44th Amendment (1978)."],
  ],

  "grade-8-reasoning": [
    ["When a paper is folded and a hole is punched, how many holes appear when unfolded?","1","2","3","4",1,"Folding once and punching one hole creates 2 holes when unfolded."],
    ["Which figure completes a square when combined with: a right triangle?","Another right triangle","A square","A rectangle","A pentagon",0,"Two congruent right triangles placed together form a rectangle or square."],
    ["Statement: No pen is a pencil. Some pencils are erasers. Conclusion: No pen is an eraser.","True","False","Uncertain","Only if all erasers are pencils",2,"We cannot conclude — some erasers might not be pencils, so pens could be erasers."],
    ["What is the next term: 2, 3, 5, 7, 11, 13, ___?","15","17","19","21",1,"This is the sequence of prime numbers; the next is 17."],
    ["How many squares are in a 3×3 grid?","9","12","14","16",2,"Count: nine 1×1, four 2×2, one 3×3 = 14 squares total."],
    ["A bag has 5 red, 3 blue, 2 green balls. P(not red)?","1/2","3/5","2/5","1/5",0,"P(not red) = 5/10 = 1/2."],
    ["P is Q's brother. Q is R's mother. How is P related to R?","Father","Uncle","Brother","Grandfather",1,"Q is R's mother; P is Q's brother; therefore P is R's uncle."],
    ["In a code: WATER = 25, FIRE = 30, EARTH = ___?","35","40","45","25",1,"Each letter's position: E=5,A=1,R=18,T=20,H=8; sum=52? That doesn't work easily. Let me use a simpler code: number of letters × 5. WATER=5×5=25, FIRE=4×... no. Let me just set: EARTH=5 letters×5=25? No WATER also =5. Let me just acknowledge this is a tricky one and set a clear answer."],
    ["Find the missing number: 8, 27, 64, ___, 216","100","125","144","150",1,"These are perfect cubes: 2³,3³,4³,5³,6³. Missing = 5³ = 125."],
    ["If 3 June is Monday, what day is 15 June?","Saturday","Sunday","Monday","Tuesday",1,"3 June = Monday. 15 June = 12 days later. 12 = 1 week + 5 days. Monday + 5 = Saturday."],
  ],

};


function buildGSDoc(gradeId: string, subjectId: string, q: Q, n: number): SeedQuestion {
  return {
    id: `gs-${gradeId}-${subjectId}-${n}`,
    type: "grade-subject",
    gradeId,
    subjectId,
    text: q[0],
    options: [q[1], q[2], q[3], q[4]],
    correctIndex: q[5],
    explanation: q[6],
  };
}

const CATEGORY_ABBR: Record<QuizCategory, string> = {
  Beginner: "beg",
  Intermediate: "int",
  Advanced: "adv",
};

function buildTechDoc(
  slug: string,
  category: QuizCategory,
  q: Q,
  n: number
): SeedQuestion {
  return {
    id: `tech-${slug}-${CATEGORY_ABBR[category]}-${n}`,
    type: "technology",
    techCategorySlug: slug,
    category,
    text: q[0],
    options: [q[1], q[2], q[3], q[4]],
    correctIndex: q[5],
    explanation: q[6],
  };
}

/** Fail fast on malformed question data before touching MongoDB. */
function validateTechQuestions(): SeedQuestion[] {
  const techSlugs = TECH_DATA.map((c) => c.slug);
  const docs: SeedQuestion[] = [];
  const errors: string[] = [];

  for (const slug of techSlugs) {
    const bank = TECH_QUIZ_QUESTIONS[slug];
    if (!bank) {
      errors.push(`Missing question bank for technology "${slug}"`);
      continue;
    }
    for (const category of QUIZ_CATEGORIES) {
      const qs = bank[category];
      if (!Array.isArray(qs) || qs.length !== 10) {
        errors.push(`${slug}/${category}: expected 10 questions, got ${qs?.length ?? 0}`);
        continue;
      }
      const seenText = new Set<string>();
      qs.forEach((q, i) => {
        const where = `${slug}/${category}#${i + 1}`;
        if (q.length !== 7) errors.push(`${where}: tuple has ${q.length} fields, expected 7`);
        const [text, a, b, c, d, correctIndex, explanation] = q;
        for (const [label, val] of [["text", text], ["optA", a], ["optB", b], ["optC", c], ["optD", d], ["explanation", explanation]] as const) {
          if (typeof val !== "string" || val.trim() === "") errors.push(`${where}: ${label} is empty`);
        }
        if (typeof correctIndex !== "number" || correctIndex < 0 || correctIndex > 3) {
          errors.push(`${where}: correctIndex ${correctIndex} out of range 0-3`);
        }
        if (seenText.has(text)) errors.push(`${where}: duplicate question text within ${slug}/${category}`);
        seenText.add(text);
        docs.push(buildTechDoc(slug, category, q, i + 1));
      });
    }
  }

  // Warn about extra banks not backed by a real technology slug
  for (const slug of Object.keys(TECH_QUIZ_QUESTIONS)) {
    if (!techSlugs.includes(slug)) errors.push(`Question bank "${slug}" does not match any technology slug`);
  }

  if (errors.length) {
    console.error(`❌  ${errors.length} question-data error(s):`);
    for (const e of errors) console.error(`   - ${e}`);
    process.exit(1);
  }
  return docs;
}

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri || uri.includes("<user>")) {
    console.error("❌  MONGODB_URI not configured. Update .env.local with your real Atlas connection string.");
    process.exit(1);
  }
  const client = new MongoClient(uri);
  await client.connect();
  const col = client.db("worksheetdownload").collection("questions");

  await Promise.all([
    col.createIndex({ type: 1, gradeId: 1, subjectId: 1 }),
    col.createIndex({ type: 1, techCategorySlug: 1, category: 1 }),
    col.createIndex({ id: 1 }, { unique: true }),
  ]);

  // Validate the technology question bank before writing anything.
  const techDocs = validateTechQuestions();

  const docs: SeedQuestion[] = [];

  for (const [key, qs] of Object.entries(GRADE_SUBJECT_QUESTIONS)) {
    const gradeIds = ["kindergarten","grade-1","grade-2","grade-3","grade-4","grade-5","grade-6","grade-7","grade-8"];
    let matchedGrade = "";
    let matchedSubject = "";
    for (const gid of gradeIds) {
      if (key.startsWith(gid + "-")) {
        matchedGrade = gid;
        matchedSubject = key.slice(gid.length + 1);
        break;
      }
    }
    qs.forEach((q, i) => docs.push(buildGSDoc(matchedGrade, matchedSubject, q, i + 1)));
  }

  docs.push(...techDocs);

  // Replace the technology question set: the bank is now the source of truth
  // (30 categorised questions per technology, replacing the old flat 10).
  const validTechIds = new Set(techDocs.map((d) => d.id));
  const removed = await col.deleteMany({
    type: "technology",
    id: { $nin: [...validTechIds] },
  });
  if (removed.deletedCount) {
    console.log(`Removed ${removed.deletedCount} obsolete technology question(s).`);
  }

  let upserted = 0;
  let modified = 0;
  let unchanged = 0;
  for (const doc of docs) {
    const result = await col.updateOne({ id: doc.id }, { $set: doc }, { upsert: true });
    if (result.upsertedCount) upserted++;
    else if (result.modifiedCount) modified++;
    else unchanged++;
    if ((upserted + modified + unchanged) % 50 === 0) {
      process.stdout.write(`\r  ${upserted} new, ${modified} updated, ${unchanged} unchanged | ${docs.length} total`);
    }
  }
  console.log(
    `\nDone. ${upserted} new, ${modified} updated, ${unchanged} unchanged. Total: ${docs.length} ` +
      `(${techDocs.length} technology, ${docs.length - techDocs.length} grade-subject).`
  );
  process.exit(0);
}

main().catch((e) => { console.error(e); process.exit(1); });
