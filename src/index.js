console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    newImage();
    addBreed();
});

function newImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(response => response.json())
        .then(result => {
            result.message.forEach(image => addImage(image))
        });
}
