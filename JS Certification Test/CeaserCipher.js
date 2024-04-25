function rot13(str) {
    let str1= str.toUpperCase();
    // console.log(str1);
    let cipher =[];
    for(let i=0; i< str1.length;i++){
      console.log(str[i]);
      if(/[^A-Za-z0-9]/.test(str[i])){
  cipher.push(str[i]);
      }
      else{
      let char = str[i];
      let code = char.charCodeAt(0);
          console.log(code);
      let shiftedCode = ((code -65 + 13) % 26);
      console.log(shiftedCode);
      let newChar = String.fromCharCode(shiftedCode + 65);
    
      console.log(newChar);
      cipher.push(newChar);
    }
   
  }
  console.log(cipher);
  let encryptedCipher = cipher.join('');
  console.log(encryptedCipher);
   return encryptedCipher;
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT");