const base64String =
  "WyLgprjgp4vgpqjgpr7gprAg4Kas4Ka+4KaC4Kay4Ka+Iiwi4KaG4Kau4Ka/IOCmpOCni+CmruCmvuCnnyDgpq3gpr7gprLgpqzgpr7gprjgpr8iXQ==";
const decodedJson = Buffer.from(base64String, "base64").toString("utf-8");
const bannedWords = JSON.parse(decodedJson);
console.log(bannedWords);
export default bannedWords;
