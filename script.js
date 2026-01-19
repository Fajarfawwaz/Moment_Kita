// Atur tanggal jadian kalian di sini (Tahun, Bulan-1, Tanggal)
const anniversaryDate = new Date("2026-01-17T00:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = now - anniversaryDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateTimer, 1000);

// Fungsi buka surat
function openLetter() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('open');
}

// Efek Salju Hati (Floating Hearts)
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.classList.add('floating-heart');
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);

// Menghilangkan loader
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});