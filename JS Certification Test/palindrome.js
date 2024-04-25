function palindrome(str) {
    let str1 = str.toLowerCase();
    // console.log(str1);
    let strRep = str1.split(/\s+/);
      console.log(strRep); 
    // let str2 = strRep.map(part=> part.replace(/[.,_*#:-]/g,''))
    let str2 = strRep.map(part=> part.replace(/[^A-Za-z0-9]/g, ''))
    console.log(str2);
    let mainStr = str2.join('')
    console.log(mainStr); 
  
    let str3 = mainStr.split('');
     console.log(str3);
    let str4 = str3.reverse().join('') 
    console.log(str4);
    if(mainStr === str4){
      return true;
    }
    else
      return false;
  }
  
  palindrome("0_0 (: /-\ :) 0-0");