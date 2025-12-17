/* ---------- GLOBAL ARRAY ---------- */
let arr = [];

/* 1. Reverse words in a sentence */
function reverseSentence(){
  let s = prompt("Enter a sentence");
  if(!s) return;
  alert(s.split(" ").reverse().join(" "));
}

/* 2. Extract first and last character */
function firstLastChar(){
  let s = prompt("Enter a string");
  if(!s) return;
  alert("First: " + s[0] + "\nLast: " + s[s.length-1]);
}

/* 3. Find longest word */
function longestWord(){
  let s = prompt("Enter a sentence");
  if(!s) return;
  let words = s.split(" ");
  let longest = words.reduce((a,b)=>a.length>b.length?a:b);
  alert("Longest word: " + longest);
}

/* 4. Convert to Title Case */
function titleCase(){
  let s = prompt("Enter text");
  if(!s) return;
  alert(s.replace(/\b\w/g, c => c.toUpperCase()));
}

/* 5. Replace a word */
function replaceWord(){
  let s = prompt("Enter sentence");
  let oldW = prompt("Word to replace");
  let newW = prompt("New word");
  if(!s || !oldW || !newW) return;
  alert(s.replace(oldW, newW));
}

/* 6. Count vowels */
function countVowels(){
  let s = prompt("Enter string");
  if(!s) return;
  let count = (s.match(/[aeiouAEIOU]/g) || []).length;
  alert("Vowel count: " + count);
}

/* 7. Create array from input */
function createArray(){
  let input = prompt("Enter values separated by commas");
  if(!input) return;
  arr = input.split(",");
  alert("Array created: " + arr);
}

/* 8. Display third element */
function thirdElement(){
  if(arr.length < 3){
    alert("Array has less than 3 elements");
    return;
  }
  alert("Third element: " + arr[2]);
}

/* 9. Find last element */
function lastElement(){
  if(arr.length === 0){
    alert("Array is empty");
    return;
  }
  alert("Last element: " + arr[arr.length-1]);
}

/* 10. Find index of a given element */
function findIndex(){
  let val = prompt("Enter element to find index");
  let idx = arr.indexOf(val);
  if(idx === -1) alert("Element not found");
  else alert("Index: " + idx);
}

/* 11. Apply map() to square each element */
function squareArray(){
  if(arr.length === 0) { alert("Array empty"); return; }
  let squares = arr.map(x => Number(x)*Number(x));
  alert("Squared array: " + squares);
}

/* 12. Sort array ascending */
function sortArray(){
  if(arr.length === 0) { alert("Array empty"); return; }
  let sorted = arr.sort((a,b)=>a-b);
  alert("Sorted array: " + sorted);
}

/* 13. Use splice to replace elements */
function spliceReplace(){
  if(arr.length < 2){ alert("Array too small"); return; }
  arr.splice(1,1,99);
  alert("After splice replace: " + arr);
}

/* 14. Splice delete + insert simultaneously */
function spliceDeleteInsert(){
  if(arr.length < 3){ alert("Array too small"); return; }
  arr.splice(2,1,55);
  alert("After splice delete+insert: " + arr);
}

/* 15. Arithmetic operations based on user choice */
function calculator(){
  let a = Number(prompt("Enter first number"));
  let b = Number(prompt("Enter second number"));
  let op = prompt("Enter operator (+, -, *, /)");
  let result;
  switch(op){
    case "+": result=a+b; break;
    case "-": result=a-b; break;
    case "*": result=a*b; break;
    case "/": result=b!=0?a/b:"Cannot divide by 0"; break;
    default: result="Invalid operator";
  }
  alert("Result: " + result);
}

/* 16. Calculate factorial */
function factorial(){
  let n = Number(prompt("Enter number"));
  if(n<0){ alert("Negative number"); return; }
  let f=1;
  for(let i=1;i<=n;i++) f*=i;
  alert("Factorial: " + f);
}

/* 17. Check even/odd */
function evenOdd(){
  let n = Number(prompt("Enter number"));
  alert(n%2===0?"Even":"Odd");
}

/* 18. Max of 3 numbers */
function maxOfThree(){
  let a = Number(prompt("Enter first"));
  let b = Number(prompt("Enter second"));
  let c = Number(prompt("Enter third"));
  alert("Maximum: " + Math.max(a,b,c));
}

/* 19. Sum of array values */
function sumArray(){
  if(arr.length === 0){ alert("Array empty"); return; }
  let sum = arr.reduce((acc,val)=>acc+Number(val),0);
  alert("Sum: " + sum);
}

/* 20. Allow only 10 digits input */
function tenDigits(){
  let num = prompt("Enter 10-digit number");
  if(!num){ alert("Empty"); return; }
  alert(num.length===10?"Valid 10 digits":"Invalid number length");
}

/* 21. Detect numeric vs string */
function numOrString(){
  let val = prompt("Enter value");
  alert(isNaN(val)?"String":"Number");
}

/* 22. Password min length validation */
function passwordCheck(){
  let p = prompt("Enter password");
  if(!p){ alert("Empty"); return; }
  alert(p.length>=6?"Password valid":"Password too short");
}

/* 23. Required field not empty */
function requiredField(){
  let val = prompt("Enter value");
  alert(val? "OK" : "Required field empty");
}

/* 24-26 handled via form page */

/* 27. Create person object & update age */
function objectUpdate(){
  let person = {name:"Keerthana", age:20};
  let newAge = Number(prompt("Enter new age"));
  if(!newAge) { alert("No age entered"); return; }
  person.age = newAge;
  alert("Updated object: " + JSON.stringify(person));
}

/* 30. Hover event change style */
function hoverEffect(b){
  b.style.background="orange";
}
function removeHover(b){
  b.style.background="";
}
