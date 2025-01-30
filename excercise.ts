// Case 1

let n = 9;
for (let i = 1; i <= 10; ++i)
    console.log(n+" x "+i);


// Case 2

let string : string = "madam";
let reversestring : string ="";

let stringLength = string.length ;

for (let i = (stringLength -1); i>=0 ; --i){
    reversestring = reversestring + string.charAt(i);
}

if (string.toLowerCase()===(reversestring.toLowerCase())){
    console.log (string + " is a Palindrome.");
}
else {
    console.log (string + " is not a Palindrome.");
}


// Case 3 

function cmTokm(cm: number): string {
    const kilometers = cm / 100000;
    return `${kilometers} km`.replace(/\.0$/, "");
  }
  console.log(cmTokm(100000));


// Case 4

function formatToIDR(amount: number): string {
    const format = amount.toLocaleString("id-ID", {minimumFractionDigits: 2, maximumFractionDigits: 2,});
    return `Rp. ${format}`;
  }
  console.log(formatToIDR(1000));


// Case 5


let mSentence:string = "Hello world";
let search_string:string = "ell";
console.log(mSentence.replace(search_string, ""));


// Case 6

const String6 : string = "hello world";
console.log(String6.slice(0,1).toUpperCase()+String6.slice(1,6)+String6.slice(6,7).toUpperCase()+String6.slice(7));

// Case 7

function swapCase(str: string): string {
    return str.split("").map((char) => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
  }
  console.log(swapCase("The QuiCk BrOwN Fox"));


// Case 8

function findLargest(num1: number, num2: number): number {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  console.log(findLargest(42, 27));

// Case 9

function sortThreeNumbers(num1: number, num2: number, num3: number): string {
    let a = num1,
      b = num2,
      c = num3;
  
    if (a > b) [a, b] = [b, a];
    if (a > c) [a, c] = [c, a];
    if (b > c) [b, c] = [c, b];
  
    return `${a}, ${b}, ${c}`;
  }
  console.log(sortThreeNumbers(42, 27, 18));


// Case 10

function checkDataType(i: any): number {
    return typeof i === "string" ? 1 : typeof i === "number" ? 2 : 3;
  }
  console.log(checkDataType("hello"));


// Case 11

function manualReplaceA(input: string): string {
    let output = "";
    for (const char of input) {
      output += char.toLowerCase() === "a" ? "*" : char;
    }
    return output;
  }
  const original = "An apple a day keeps the doctor away";
  const result = manualReplaceA(original);
  console.log(result);