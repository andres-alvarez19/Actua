let index = 0;
let interval = 4000; // In milliseconds
let back= document.querySelector('.back')
let next = document.querySelector('.next')
let imgElement = document.getElementById("image");
let images = [
    "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
    "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
    "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
];

imgElement.src = images[0]; // Set the first image
function changeImage(){
    imgElement.src = images[index];
    if(index === images.length - 1){
        index = 0;
    }else {
        index++;
    }
}
setInterval(() => {
    changeImage();
},interval);

// Logica a botones
next.addEventListener('click',()=>{
    changeImage()
});
back.addEventListener('click',()=>{
    if(index === 0){
        index = images.length - 1;
    }else {
        index--;
    }
    imgElement.src = images[index];
});

