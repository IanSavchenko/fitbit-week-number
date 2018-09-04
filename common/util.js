let toMonoSpace = function(text) {
  if (typeof text !== 'string') {
    text = text.toString();
  }
  
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    console.log(char);
    if (char >= '0' && char <= '9') {
      let code = 0x10 + (char.charCodeAt(0) - '0'.charCodeAt(0));
      char = String.fromCharCode(code);
    }
    
    result += char;
  }
  
  return result;
};

export default {
  toMonoSpace
};
