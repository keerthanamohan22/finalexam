let arr = [];

/* 1. Reverse words in a sentence */
function reverseSentence(){
  let s = prompt("Enter a sentence");
  if(!s) return;
  alert(s.split(" ").reverse().join(" "));
}

/* 2. First & last character */
function firstLastChar(){
  let s = prompt("Enter a string");
  if(!s) return;
  alert("First: "+s[0]+" | Last: "+s[s.length-1]);
}

/* 3. Longest word */
function longestWord(){
  let s = prompt("Enter a sentence");
  if(!s) return;
  let words = s.split(" ");
  let longest = words.reduce((a,b)=>a.length>b.length?a:b);
  alert("Longest word: "+longest);
}

/* 4. Title Case */
function titleCase(){
  let s = prompt("Enter text");
  if(!s) return;
  alert(s.replace(/\b\w/g,c=>c.toUpperCase()));
}

/* 5. Replace a word */
function replaceWord(){
  let s=prompt("Sentence"),oldW=prompt("Word to replace"),newW=prompt("New word");
  if(!s||!oldW||!newW)return;
  alert(s.replace(oldW,newW));
}

/* 6. Count vowels */
function countVowels(){
  let s=prompt("Enter string");
  if(!s)return;
  alert("Vowels: "+(s.match(/[aeiouAEIOU]/g)||[]).length);
}

/* 7. Create array */
function createArray(){
  let input=prompt("Enter values comma separated");
  if(!input)return;
  arr=input.split(",");
  alert("Array: "+arr);
}

/* 8. Third element */
function thirdElement(){
  if(arr.length<3) { alert("Array too short"); return; }
  alert("Third element: "+arr[2]);
}

/* 9. Last element */
function lastElement(){
  if(arr.length===0) { alert("Empty array"); return; }
  alert("Last element: "+arr[arr.length-1]);
}

/* 10. Find index */
function findIndex(){
  let val=prompt("Element to find");
  let idx=arr.indexOf(val);
  alert(idx==-1?"Not found":"Index: "+idx);
}

/* 11. Square each element */
function squareArray(){
  if(arr.length===0){ alert("Empty array"); return; }
  alert("Squared: "+arr.map(x=>Number(x)*Number(x)));
}

/* 12. Sort ascending */
function sortArray(){
  if(arr.length===0){ alert("Empty array"); return; }
  alert("Sorted: "+arr.sort((a,b)=>a-b));
}

/* 13. Splice replace */
function spliceReplace(){
  if(arr.length<2){ alert("Array too small"); return; }
  arr.splice(1,1,99);
  alert("After splice replace: "+arr);
}

/* 14. Splice delete+insert */
function spliceDeleteInsert(){
  if(arr.length<3){ alert("Array too small"); return; }
  arr.splice(2,1,55);
  alert("After splice delete+insert: "+arr);
}

/* 15. Arithmetic */
function calculator(){
  let a=Number(prompt("Num1")),b=Number(prompt("Num2")),op=prompt("Operator + - * /"),res;
  switch(op){ case "+": res=a+b; break; case "-": res=a-b; break; case "*": res=a*b; break; case "/": res=b!=0?a/b:"Cannot divide by 0"; break; default: res="Invalid"; }
  alert("Result: "+res);
}

/* 16. Factorial */
function factorial(){
  let n=Number(prompt("Enter number"));
  if(n<0){ alert("Negative"); return; }
  let f=1; for(let i=1;i<=n;i++) f*=i;
  alert("Factorial: "+f);
}

/* 17. Even/Odd */
function evenOdd(){
  let n=Number(prompt("Enter number"));
  alert(n%2===0?"Even":"Odd");
}

/* 18. Max of 3 */
function maxOfThree(){
  let a=Number(prompt("1")),b=Number(prompt("2")),c=Number(prompt("3"));
  alert("Max: "+Math.max(a,b,c));
}

/* 19. Sum array */
function sumArray(){
  if(arr.length===0){ alert("Empty array"); return; }
  alert("Sum: "+arr.reduce((a,b)=>a+Number(b),0));
}

/* 20. 10 digits only */
function tenDigits(){
  let n=prompt("Enter 10-digit number");
  alert(n.length===10?"Valid":"Invalid");
}

/* 21. Number/String */
function numOrString(){
  let val=prompt("Enter value");
  alert(isNaN(val)?"String":"Number");
}

/* 22. Password validation */
function passwordCheck(){
  let p=prompt("Password");
  if(!p) return;
  alert(p.length>=6?"Valid":"Too short");
}

/* 23. Required field */
function requiredField(){
  let val=prompt("Enter value");
  alert(val?"OK":"Required empty");
}

/* 27-28. Object update */
function objectUpdate(){
  let person={name:"Keerthana",age:20};
  let a=Number(prompt("New age"));
  if(!a) return;
  person.age=a;
  alert("Updated: "+JSON.stringify(person));
}

/* 30. Hover effect */
function hoverEffect(b){ b.style.background="orange"; }
function removeHover(b){ b.style.background=""; }

/* 29. Countdown timer placeholder */
function countdownTimer(){ alert("Countdown timer feature can be implemented separately."); }
