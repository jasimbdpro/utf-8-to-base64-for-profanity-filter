# "utf-8" character encoding is very important for working with unicode character.

## As a Bangladeshi, my native language is Bangla. And its character encoding is in unicode.

### Converting Unicode to ASCII and ASCII to Unicode is not straightforward. As base64 saves string in ASCII format. So at first, I need to convert my unicode text to ASCII, then make it base64. I wanted to used profanity filter in my project. But most of the npm package don't have pre-built dictionary of my language's profane words. So, I wanted to add my custom words list in my project. But adding dirty words directly in puplic repository feels me embarrased. So, I wanted to convert the dirty words as base64 and keeps the base64 in a variable, then make my project access the words dynamically from the variable. So, I practiced the project.

### List your words in the banned-words.js's array, then run "node '/create-base64.js", it will generate generatedbase64String.txt, then copy generated string from it. then put the string in decode-base64.js use the file in project.
