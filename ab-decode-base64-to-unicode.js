const base64String =
  "WyJKb2huIiwiU2FyYWgiLCLgprjgpr7gppXgpr/gpqwiLCLgprDgpr7gpqjgpr4iXQ==";

// Step 1: Decode the Base64 string back to a UTF-8 JSON string
const decodedJson = Buffer.from(base64String, "base64").toString("utf-8");
const decodedArray = JSON.parse(decodedJson);
console.log(decodedArray);
// Outputs: ["John", "Sarah", "সাকিব", "রানা"]
