document.addEventListener("DOMContentLoaded", function() {
    // Referensi elemen
    const btnNo = document.getElementById('btn-no');
    const btnYes = document.getElementById('btn-yes');
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');

    // --- LOGIKA TOMBOL KABUR ---
    btnNo.addEventListener('mouseover', function() {
        // Mendapatkan lebar dan tinggi layar agar tombol tidak keluar layar
        const maxX = window.innerWidth - btnNo.clientWidth - 20;
        const maxY = window.innerHeight - btnNo.clientHeight - 20;

        // Menghasilkan posisi acak X dan Y
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Mengubah posisi tombol menjadi fixed dan memindahkannya
        btnNo.style.position = 'fixed';
        btnNo.style.left = randomX + 'px';
        btnNo.style.top = randomY + 'px';
    });

    // Opsional: Lakukan hal yang sama jika di tap di HP
    btnNo.addEventListener('touchstart', function(e) {
        e.preventDefault(); // Mencegah klik tidak sengaja di HP
        const maxX = window.innerWidth - btnNo.clientWidth - 20;
        const maxY = window.innerHeight - btnNo.clientHeight - 20;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        btnNo.style.position = 'fixed';
        btnNo.style.left = randomX + 'px';
        btnNo.style.top = randomY + 'px';
    });

    // --- LOGIKA TOMBOL LAKSANAKAN (MULAI) ---
    btnYes.addEventListener('click', function() {
        // Hilangkan layar intro dengan animasi pudar
        introScreen.style.opacity = '0';
        
        // Tunggu setengah detik sampai pudar, lalu hilangkan total
        setTimeout(() => {
            introScreen.style.display = 'none';
            mainContent.style.display = 'block'; // Tampilkan konten utama
            
            // Panggil fungsi untuk memunculkan bagan satu per satu
            animateChart();
        }, 500);
    });

    // --- FUNGSI ANIMASI BAGAN ---
    function animateChart() {
        const hiddenElements = document.querySelectorAll('.hidden');
        
        hiddenElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.remove('hidden');
            }, index * 200); // 200ms jeda kemunculan antar elemen agar lebih elegan
        });
        
        console.log("Sistem Strategi Nexus: Otorisasi Diterima, Operasi Dimulai.");
    }
});