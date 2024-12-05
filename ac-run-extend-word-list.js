import fs from "fs";
import bnNoun from "./aa-bn-nount.js";
import enBnStatic from "./ab-en-bn-static.js";
//reusable function
const generateVariations = (wordList, suffixList) => {
  return wordList.flatMap((word) => suffixList.map((suffix) => word + suffix));
};

const suffixNoun = [
  "টি",
  "টা",
  "খানা",
  "খানি",
  "গুলো",
  "গুলি",

  "টির",
  "টার",
  "খানার",
  "খানির",
  "গুলোর",
  "গুলির",

  "টিতে",
  "টাতে",
  "খানাতে",
  "খানিতে",
  "গুলোতে",
  "গুলিতে",

  "টায়",
  "খানায়",

  "গুলোয়",

  "টিকে",
  "টাকে",
  "খানাকে",
  "খানিকে",
  "গুলোকে",
  "গুলিকে",

  "ের",
  "দের",
  "তে",
  "য়",
];

const bnNounList = generateVariations(bnNoun, suffixNoun);
const bannedWordList = [...bnNounList, ...enBnStatic];

fs.writeFileSync("bad-words.txt", bannedWordList.toString());
export default bannedWordList;
