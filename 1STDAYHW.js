//conditional operator OR
var x=40;
var y=20;
var result = (x<y)||(x==40);
console.log(result);

//conditional operator AND
var a=4;
var b=9;
var result1 = (a<b)&&(a==4);
console.log(result1);


//conditional operator NEGATION
var d=4;
var e=9;
var result2 = !(d<e)
console.log(result2);


//IF ELSE
var s=105;
var w=501;
if(s>w)
console.log(s);
else
console.log(w); 


//FOR LOOP PRINT FROM 0 TO 10
var i;
for(i=0;i<=10;i++){
    console.log(i);
}

//FOR LOOP PRINT FROM 10 TO 0
var j;
for(j=10;j>=1;j--){
    console.log(j);
}


//EVEN NUMBERS
var k;
for (var k = 0; k <= 10; k += 2) {
    console.log(k);
  }



// FINDING NUMBER EVEN OR ODD
  var i = 2568749654;

if (i % 2 === 0) {
  console.log("It's even");
} else if ((2 * i + 2) % 2 === 0) {
  console.log("It's even");
} else if ((2 * i + 1) % 2 === 0) {
  console.log("It's odd");
} else {
  console.log("Not a number");
}