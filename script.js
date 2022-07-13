
var card = Array.from(document.getElementsByClassName("card"));

// clicking anywhere on card gets the first child's(img) source
card.forEach(card => {
    card.addEventListener("click", () => {
    const image = Array.from(card.children);
    const source = image[0].src;
    passImage(source);
    });

})

function passImage(link){
    const modalImage = document.getElementById("modalImage");
    modalImage.src = `${link}`;

}