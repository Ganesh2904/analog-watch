const hHand = document.getElementById("h");
const mHand = document.getElementById("m");
const sHand = document.querySelector("#s");

setInterval(()=>{
    let date= new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    sHand.style.rotate = `${s*6}deg`;
    mHand.style.rotate = `${m*6}deg`;
    hHand.style.rotate = `${h*30}deg`;
},1000);