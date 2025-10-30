const values = ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
const button = document.getElementById("button_one");
let index=0;

button.addEventListener("click",()=>{
    button.innerHTML=values[index];
    index=index+1;
    if(index>=values.length){
        index=0;
    }
})