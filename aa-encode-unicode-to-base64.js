const array = ["John", "Sarah", "সাকিব", "রানা"];
// Original array with Unicode Bengali characters
const jsonString = JSON.stringify(array);
const base64String = Buffer.from(jsonString, "utf-8").toString("base64");
console.log(base64String);
// Outputs: WyJKb2huIiwiU2FyYWgiLCLgprjgpr7gppXgpr/gpqwiLCLgprDgpr7gpqjgpr4iXQ==
export default base64String;
// package.json is required with {"type": "module"} to use export/import feature is javascript project.
