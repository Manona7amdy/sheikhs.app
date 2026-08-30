const sheikhs = [
    { name: "عبد الباسط عبد الصمد", img: "images/2.jpg" },
    { name: "مشاري العفاسي", img: "images/3.jpg" },
    { name: "إسلام صبحي", img: "images/4.jpg" },
    { name: "ماهر المعيقلي", img: "images/1.jpg" },
    { name: "فارس عباد", img: "images/6.jpg" },
    { name: "أحمد العجمي", img: "images/7.jpg" },
    { name: "ياسر الدوسري", img: "images/5.jpg" },
    { name: "محمود خليل الحصري", img: "images/8.jpg" },
    { name: "محمد صديق المنشاوي", img: "images/9.jpg" },
    { name: "علي جابر", img: "images/10.jpg" }
];
const nameElement = document.getElementById("sheikh-name");
const imgElement = document.getElementById("sheikh-img");
const nextBtn = document.getElementById("next-btn");
let currentIndex = 0;
nextBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= sheikhs.length) {
        currentIndex = 0;
    }
    nameElement.innerText = sheikhs[currentIndex].name;
    imgElement.src = sheikhs[currentIndex].img;
});
