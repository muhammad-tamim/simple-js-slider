let images = [
    'img/Capture.PNG',
    'img/htmlFile.PNG',
    'img/jsfile.PNG'
]
let imgIndex = 0;
let imgElement = document.getElementById('imgElement');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex]
    imgElement.setAttribute('src', imgUrl)
    imgIndex++;
}, 3000);