const sheikhs = [
    { name: "عبد الباسط عبد الصمد", img: "images/2.jpg", audio: "audio/baset.mp3" },
    { name: "مشاري العفاسي", img: "images/3.jpg", audio: "audio/el3afasy.mp3" },
    { name:"اسلام صبحي ", img: "images/4.jpg", audio: "audio/eslam.mp3" },
    { name: "ماهر المعيقلي", img: "images/1.jpg", audio: "audio/elm3eqly.mp3" },
    { name: "فارس عباد", img: "images/6.jpg", audio: "audio/fares.mp3" },
    { name: "أحمد العجمي", img: "images/7.jpg", audio: "audio/el3agmy.mp3" },
    { name: "ياسر الدوسري", img: "images/5.jpg", audio: "audio/eldosry.mp3" },
    { name: "محمود خليل الحصري", img: "images/8.jpg", audio: "audio/elhosary.mp3" },
    { name: "محمد صديق المنشاوي", img: "images/9.jpg", audio: "audio/elmenshawy.mp3" },
    { name: "علي جابر", img: "images/10.jpg", audio: "audio/jaber.mp3" }
];
const nameElement = document.getElementById("sheikh-name");
const imgElement = document.getElementById("sheikh-img");
const audioElement = document.getElementById("sheikh-audio");
const nextBtn = document.getElementById("next-btn");
let currentIndex = 0;
nextBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= sheikhs.length) {
        currentIndex = 0;
    }
    nameElement.innerText = sheikhs[currentIndex].name;
    imgElement.src = sheikhs[currentIndex].img;
    audioElement.src = sheikhs[currentIndex].audio;
});