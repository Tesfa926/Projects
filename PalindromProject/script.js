// const checkBtn = document.querySelector("#check-btn");

// const check = () =>{
//   let textInput = document.querySelector("#text-input").value.trim();
//   const result = document.querySelector("#result");

//   if(!textInput){
//     alert("Please input a value");
//   }
//   else if(textInput.length === 1){
//     result.innerText = `"${textInput}" is a plalindrome `;
//   }
// }
// checkBtn.addEventListener("click",check);


let textInput = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let result = document.getElementById("result");

checkBtn.addEventListener("click" ,palindrome);

function palindrome(){
  if(textInput.value=== ""){
    alert("Please input a value");
  }

  // creating a logic

  const processedStr = textInput.value.replace(/[\W_]/g,"").toLowerCase();
  let isPalindrome = true;
  const inputLength = processedStr.length;

  // loop over the entire textInput
  for(let i=0; i < Math.floor(processedStr.length/2);i++){
    if(processedStr[i] !== processedStr[inputLength-i-1]){
      isPalindrome = false;
      break;
    }
  }
  // After looping and checking the palindromeness of the textinput set the result elment to is palindorome or not
    if(isPalindrome){
      result.innerHTML = `${textInput.value} is a palindrome`;
    }
    else{
      result.innerHTML = `${textInput.value} is not a palindrome`
    }
  }

