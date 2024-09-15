const rangeNum=document.getElementById('rangeNum');
const range=document.getElementById('range');
 
rangeNum.textContent=range.value 

range.addEventListener("input",()=>{
    rangeNum.textContent=range.value  
})

const passworDisplay=document.getElementById('passworDisplay');
const generate=document.getElementById('generate');

const clickedUpper=document.getElementById('upperCase');
const clickedLower=document.getElementById('lowerCase');
const clickedNumber=document.getElementById('number');
const clickedSymbol=document.getElementById('symbol');

const upperLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetter="abcdefghijklmnopqrstuvwxyz";
const numberrr="0123456789";
const symbolll="!@#$%^&*()";

generate.addEventListener("click",()=>{
    // passworDisplay.value="Mayuri patil";
    let generatePassword="";
    let selectedCharacter="";

    // console.log(selectedCharacter[3])
    selectedCharacter+=clickedUpper.checked?upperLetter:"";
    selectedCharacter+=clickedLower.checked?lowerLetter:"";
    selectedCharacter+=clickedSymbol.checked?symbolll:"";
    selectedCharacter+=clickedNumber.checked?numberrr:"";
    console.log(selectedCharacter);
  const length=parseInt(range.value);
  if(selectedCharacter==="" || selectedCharacter.length===0){
    alert("Please select any Field")
    return;
  }

  for(let i=0;i<length;i++){
    const randomnumber=Math.floor(Math.random()*selectedCharacter.length);
   generatePassword+=selectedCharacter[randomnumber];    
  }
  passworDisplay.value=generatePassword;
})

const copy=document.getElementById('copy');

copy.addEventListener('click',()=>{
    if(passworDisplay.value!==""){
        navigator.clipboard.writeText(passworDisplay.value)
        copy.classList.replace("fa-copy","fa-check");
        
    }
    setTimeout(()=>{
        copy.classList.replace("fa-check","fa-copy");
    },2000)
})