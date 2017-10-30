/*
var slide = {
    image:"visuals/cat-76116_960_720.jpg",
    caption:"I'm a cat."
};
*/

var slides = [
    {
        image: "visuals/463028807.jpg",
        caption: "Mondays am I right?"
    },
    {
        image: "visuals/90791227.jpg",
        caption: "WRONG!"
    },
    {
        image: "visuals/463028797.jpg",
        caption: "That was outta left field"
    }
];

for(var i = 0; i < slides.length; i++){
    var slide = slides[i];

    var slideElem = document.createElement("div");
    var img = new Image(); // object construtor
    var cap = document.createElement("p");

    img.src = slide.image;
    cap.textContent = slide.caption;

    slideElem.appendChild(img);
    slideElem.appendChild(cap);

    document.body.appendChild(slideElem);
}
