const number1 = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
};

const number2 = {
  1: "X",
  2: "XX",
  3: "XXX",
  4: "XL",
  5: "L",
  6: "LX",
  7: "LXX",
  8: "LXXX",
  9: "XC",
};
const number3 = {
  1: "C",
  2: "CC",
  3: "CCC",
  4: "CD",
  5: "D",
  6: "DC",
  7: "DCC",
  8: "DCCC",
  9: "CM",
};

const number4 = {
  1: "M",
  2: "MM",
  3: "MMM",
};

const submit = document.querySelector(".btn");
let input = document.querySelector("#input-number");
const output = document.querySelector("#output");
const output1 = document.querySelector("#output1");
const output2 = document.querySelector("#output2");
const output3 = document.querySelector("#output3");
const result = document.querySelector("#result");
console.log(input.value);

// let userNumber = input.value; //(input.value); 
// let numberSplited = userNumber.split("").reverse();
// console.log(numberSplited);
// console.log(Object.entries(number3));


submit.addEventListener("click",(e)=>{
  let userNumber = input.value;
  console.log(userNumber);

const converter = () => {
  {
    Object.entries(number4).forEach((item) => {
      if (item[0] == numberSplited[3]) {
        console.log(item[1]);
        output.innerHTML = item[1]
      }
    });
  }
};

//converter();

const converter1 = () => {
  Object.entries(number3).forEach((item) => {
    if (item[0] == numberSplited[2]) {
      console.log(item[1]);
      output1.innerHTML = item[1];
    }
  });
};
//converter1();

const converter2 = () => {
  Object.entries(number2).forEach((item) => {
    if (item[0] == numberSplited[1]) {
      console.log(item[1]);
      output2.innerHTML = item[1];
    }
  });
};
////converter2();
const converter3 = () => {
  Object.entries(number1).forEach((item) => {
    if (item[0] == numberSplited[0]) {
      console.log(item[1]);
      output3.innerHTML = item[1];
    }
  });
};


  let numberSplited = userNumber.split("").reverse();
  if (userNumber == ""){
    alert(   "   You should enter a number, please try again  "  )
  }else if (userNumber > 4000){
    alert(" You should enter a number less than 4000")
  }
  else if (numberSplited.length == 1) {
      converter3()}
  else if (numberSplited.length == 2) {
  converter2(),converter3();
  }else if (numberSplited.length ==3) {
 converter1(), converter3(), converter2();
  } else if (numberSplited.length == 4) {
converter(),converter3(), converter2(), converter1()
}
result.innerHTML = userNumber + " => "
input.value = "";
input.focus();
})
//converter3();
 

