var i = 0;
var txt = 'Aceita namorar comigo de novo? Te amo, Isabele';
var speed = 50;

function showMessage() {
    document.getElementById('message').style.display = 'none';
    document.getElementById('buttons').style.display = 'flex';
}

function showPhotos() {
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('photos').style.display = 'flex';
    typeWriter();
}

function hidePhotos() {
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('photos').style.display = 'none';
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
