let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// Fungsi untuk mengganti konten
function changeContent(page) {
    let content = document.getElementById("main-content");

    if (page === "home") {
        content.innerHTML = `
        <h2>Welcome to My Personal Web</h2>
        <p>Ini adalah projek web yang saya buat untuk matkul Desain Web</p>`;
        
    } else if (page === "education") {
        content.innerHTML = `
            <h2>Education Page</h2>
            <p>Saya TK di, TK Singasari 2 (2011-2012).</p>
            <p>Saya SD di, SD NO 2 Blahkiuh (2012-2018).</p>
            <p>Saya SMP di, SMP Negri 1 Abiansemal (2018-2021).</p>
            <p>Saya SMA di, SMA Negri 1 Abiansemal (2021-2024).</p>
            <p>Berikut foto saya bersama teman-teman di SMA</p>
            <img src="fotobersama.jpg" alt="Education Picture" style="width: 50%; border-radius: 8px;">
        `;
    } else if (page === "family") {
        content.innerHTML = `
            <h2>Family Page</h2>
            <p>Ini adalah foto keluarga saya</p>
            <img src="gambarkeluarga.jpg" alt="My Family" style="width: 50%; border-radius: 8px;">
        `;
    } else if (page === "about") {
        content.innerHTML = `
            <h2>About Me</h2>
            <p>Perkenalkan nama saya, I Made Gede Maha Suputhra</p>
            <p>Saya beralamat di, Br.Ulapan 1 Blahkiuh</p>
            <p>Hobi saya, berenang, menggambar, dan bermain video game</p>
            <p>Sekarang saya sedang melanjutkan pendidikan di Kampus INSTIKI</p>
            <img src="gambardiri.jpg" alt="Education Picture" style="width: 50%; border-radius: 8px;">
        `;
    }
}
