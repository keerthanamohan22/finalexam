let arr=[];

function reverseSentence(){
 alert(prompt("Sentence").split(" ").reverse().join(" "));
}
function firstLastChar(){
 let s=prompt("String");
 alert(s[0]+" "+s[s.length-1]);
}
function longestWord(){
 let s=prompt("Sentence").split(" ");
 alert(s.reduce((a,b)=>a.length>b.length?a:b));
}
function titleCase(){
 alert(prompt("Text").replace(/\b\w/g,c=>c.toUpperCase()));
}
function replaceWord(){
 let s=prompt("Sentence"),o=prompt("Old"),n=prompt("New");
 alert(s.replace(o,n));
}
function countVowels(){
 alert((prompt("Text").match(/[aeiou]/gi)||[]).length);
}
function createArray(){
 arr=prompt("Array").split(",");
 alert(arr);
}
function thirdElement(){alert(arr[2]);}
function lastElement(){alert(arr[arr.length-1]);}
function findIndex(){alert(arr.indexOf(prompt("Find")));}

function squareArray(){alert(arr.map(x=>x*x));}
function sortArray(){alert(arr.sort((a,b)=>a-b));}
function spliceReplace(){arr.splice(1,1,99);alert(arr);}
function spliceDeleteInsert(){arr.splice(2,1,55);alert(arr);}

function calculator(){
 let a=+prompt("A"),b=+prompt("B"),o=prompt("Op");
 alert(o=="+"?a+b:o=="-"?a-b:o=="*"?a*b:a/b);
}
function factorial(){
 let n=+prompt("N"),f=1;
 for(let i=1;i<=n;i++)f*=i;
 alert(f);
}
function evenOdd(){
 let n=+prompt("N");
 alert(n%2==0?"Even":"Odd");
}
function maxOfThree(){
 alert(Math.max(+prompt("A"),+prompt("B"),+prompt("C")));
}
function sumArray(){
 alert(arr.reduce((a,b)=>+a + +b,0));
}
function tenDigits(){
 alert(prompt("Number").length==10?"Valid":"Invalid");
}
function numOrString(){
 alert(isNaN(prompt("Value"))?"String":"Number");
}
function passwordCheck(){
 alert(prompt("Password").length>=6?"Valid":"Too Short");
}
function requiredField(){
 alert(prompt("Value")==""?"Required":"OK");
}
function objectUpdate(){
 let p={name:"Keerthana",age:20};
 p.age=+prompt("New Age");
 alert(JSON.stringify(p));
}
function hoverEffect(b){b.style.background="orange";}
function removeHover(b){b.style.background="";}
