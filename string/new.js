function replaceAlphabets(str, n) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) { // for uppercase letters
        result += String.fromCharCode(((code - 65 + n) % 26) + 65);
      } else if (code >= 97 && code <= 122) { // for lowercase letters
        result += String.fromCharCode(((code - 97 + n) % 26) + 97);
      } else { // for non-alphabets
        result += str.charAt(i);
      }
    }
    return result;
  }
  