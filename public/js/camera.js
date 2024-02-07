const video = document.getElementById('video');
const canvasElement = document.getElementById('photo-canvas');
const btnCapture = document.getElementById('btn-capture');

let stream;

navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (mediaStream) {
        stream = mediaStream;
        video.srcObject = mediaStream;
        video.play();
        video.addEventListener('loadedmetadata', function () {
            // Video telah dimuat sepenuhnya, tombol Ambil Foto dapat diaktifkan
            btnCapture.disabled = false;
        });
    })
    .catch(function (error) {
        console.error('Error accessing camera: ', error);
    });

document.addEventListener('DOMContentLoaded', function () {
    btnCapture.addEventListener('click', function () {
        capturePhoto();
    });
});

function capturePhoto() {
    console.log('Button Clicked');
    const context = canvasElement.getContext('2d'); // Gunakan canvasElement di sini bukan variabel baru "canvas"
    context.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
    }
    
    // Opsional, Anda dapat menyimpan atau memanipulasi foto yang diambil di sini.
}
