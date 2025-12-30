const display=document.getElementById("output");
function press(innerText){
    display.innerText+=innerText;
}
function clearDisplay(){
    display.innerText="";
}
function pop(){
    display.innerText=display.innerText.slice(0,display.innerText.length-1);
}
function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}