import fs from "fs";
import bannedWordList from "./banned-words.js";
const jsonString = JSON.stringify(bannedWordList);
const base64String = Buffer.from(jsonString, "utf-8").toString("base64");
fs.writeFileSync("generatedbase64String.txt", base64String.toString());
export default base64String;
