// ### **Task 13:**

// Remove all spaces from `"I am learning JS"`.
let str = "I am learning JS";
const removeSpace = str.replace(/\s+/g, "");
console.log(removeSpace);

//Explain/logic behind the argument (/\s+g,"")

// (/\s+/g, "") is the second and third argument of replace, and each tiny part has a job:

// /\s+/g  this is a regular expression (regex) pattern.

// / ... /  the slashes mark the start and end of the regex.

// \s  “whitespace character”; it matches spaces, tabs, newlines, etc.

// +  “one or more” of the previous thing, so \s+ means one or more whitespace characters in a row.

// g  the global flag, meaning “find all matches in the string”, not just the first.

// ""  this is the replacement string: an empty string.

// So every group of one or more whitespace characters that the regex finds is replaced with nothing (removed).

// Put together in str.replace(/\s+/g, ""), it means: “find every run of whitespace in str and delete it, returning a new string with no whitespace.”
