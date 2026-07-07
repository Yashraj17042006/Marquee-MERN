const button = document.getElementById('btn');
button.addEventListener('click',printText);
function printText(){
    const textarea  = document.getElementById('message');
    const text = textarea.value;
    document.getElementById('output').textContent= text;
    if (text.trim().toLowerCase() === 'hello'){
        document.body.style.backgroundColor = 'black';
    }else{
        document.body.style.backgroundColor = 'white';
    }
}



const colorList = document.getElementById('color');
colorList.addEventListener('change',changeColor);
function changeColor(){
    const selectedcolor = colorList.value;
    document.body.style.backgroundColor = selectedcolor;
}

const images = [
    "images/1",
    "images/2",
    "images/3",
    "images/4",
]
const image = document.getElementById('image');
const nextbtn = document.getElementById('next');
// nextbtn.addEventListener('click',nextImage);
const prevbtn = document.getElementById('prev');
// prevbtn.addEventListener('click',prevImage);
let currentImage = 0;
if(currentImage == 0){
    
}