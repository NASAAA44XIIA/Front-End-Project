function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

// Set default halaman ke beranda
showPage('home');

// Data berita (tanpa perubahan)
const newsData = {
    1: {
        title: "RUU TNI Memperkuat Peran Militer",
        date: "Jumat, 21 Maret 2025 11:50 WIB",
        image: "tentara.jpg",
        content: `
            <p><strong>NUSANEWS.COM -</strong> Seluruh fraksi partai di Komisi I DPR dan pemerintah sepakat memboyong Rancangan Undang-Undang tentang Perubahan UU No.34 Tahun 2004 tentang Tentara Nasional Indonesia (RUU TNI) dalam rapat paripurna yang rencananya digelar Kamis (20/03/2025).</p>
            <p>Pemerintah dan DPR mengabaikan tuntutan masyarakat sipil yang meminta pembahasan tidak dilakukan terburu-buru, dan memberi waktu yang memadai untuk dikaji lebih komprehensif.</p>
            <p>Direktur Eksekutif Imparsial, Ardi Manto, menilai revisi UU TNI digarap cepat dan prosesnya tertutup serta tanpa diawali evaluasi implementasi UU 34/2004. Selain absen kajian, proses revisi UU TNI tidak dilandasi adanya kebutuhan yang mendesak.</p>
        `
    },
    2: {
        title: "Real Madrid Vs Barcelona 2-5",
        date: "Senin, 13 Januari 2025 02:30 WIB",
        image: "barcelona.jpg",
        content: `
            <p><strong>NUSANEWS.COM -</strong> Jeddah - Pelatih Real Madrid, Carlo Ancelotti, menyebut cuma Kylian Mbappe yang tampil bagus dalam laga final Piala Super Spanyol kontra Barcelona. Madrid takluk 2-5.</p>
            <p>Pertandingan final Piala Super Spanyol 2025 antara Real Madrid vs Barcelona berlangsung di King Abdullah Sports City, Jeddah, Arab Saudi, pada Minggu (12/1/2025) atau Senin (13/1/2025) dini hari WIB.</p>
        `
    },
    3: {
        title: "Legislator Apresiasi Bonus Hari Raya untuk Ojol",
        date: "Minggu, 16 Maret 2025 00:30 WIB",
        image: "ojol.jpg",
        content: `
            <p><strong>NUSANEWS.COM -</strong> Jakarta - Anggota Komisi IX DPR Netty Prasetiyani Aher menilai Bonus Hari Raya (BHR) kepada pengemudi ojek online (ojol) dan kurir online memang sudah seharusnya diberikan. Ia pun meminta pihak aplikator untuk memenuhi imbauan dari Pemerintah.</p>
            <p>"Langkah tepat dari Pemerintah untuk memperhatikan nasib para pekerja berbasis aplikasi. BHR untuk pengemudi ojol dan kurir online adalah bentuk kepedulian dan apresiasi yang layak diberikan," kata Netty dalam keterangan tertulisnya, Sabtu (15/3/2025).</p>
        `
    },
    4: {
        title: "Topan Jude Terjang Mozambik, 16 Orang Tewas-60 Terluka",
        date: "Senin, 17 Maret 2025 15:00 WIB",
        image: "cyclone.jpg",
        content: `
            <p><strong>Jakarta</strong> - Topan Jude menerjang Mozambik utara sejak pekan lalu. Total 16 orang dilaporkan tewas.</p>
            <p>"Jumlah korban tewas akibat Topan Jude yang melanda Mozambik utara minggu lalu telah meningkat menjadi sedikitnya 16 orang," kata Institut Meteorologi di Mozambik dilansir AFP, Minggu (16/3/2025).</p>
            <p>Institut Meteorologi Mozambik juga melaporkan 60 orang luka-luka akibat terjangan Topan Jude.</p>
        `
    },
    5: {
        title: "Ketum PSSI Pamer Kabar Baik Timnas Indo Setelah Dipermalukan Australia",
        date: "Kamis, 20 Maret 2025",
        image: "bola.jpg",
        content: `
            <p><strong>NUSANEWS.COM -</strong> Ketua Umum PSSI, Erick Thohir, saat ini dalam sorotan setelah timnas Indonesia kalah memalukan dari Australia dengan skor 5-1 pada putaran ketiga Kualifikasi Piala Dunia 2026 Zona Asia.</p>
            <p>Erick jadi sorotan karena keputusannya untuk memecat Shin Tae-yong dari kursi pelatih timnas. Patrick Kluivert yang datang dengan jajaran tim kepelatihan berkelas justru gagal mencapai ekspektasi.</p>
            <p>Meski dalam badai tekanan, Erick Thohir memberikan kabar baik dari timnas U-17 Indonesia.</p>
        `
    }
};

function showNews(newsId) {
    const news = newsData[newsId];
    if (news) {
        document.getElementById("news-title").innerText = news.title;
        document.getElementById("news-date").innerText = news.date;
        const newsImage = document.getElementById("news-image");
        newsImage.src = news.image;
        newsImage.alt = news.title;
        newsImage.onerror = () => {
            newsImage.src = 'placeholder.jpg';
            newsImage.alt = "Image not available";
        };
        document.getElementById("news-content").innerHTML = news.content;

        document.getElementById("news-detail").classList.remove("hidden");
        document.getElementById("news-list").classList.add("hidden");
    }
}

function backToNewsList() {
    document.getElementById("news-detail").classList.add("hidden");
    document.getElementById("news-list").classList.remove("hidden");
}

// Mode Gelap/Terang
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

const isDarkMode = localStorage.getItem("darkMode") === "enabled";
body.classList.toggle("dark-mode", isDarkMode);
darkModeToggle.innerText = isDarkMode ? "☀️" : "🌙";

darkModeToggle.addEventListener("click", () => {
    const darkModeEnabled = body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");
    darkModeToggle.innerText = darkModeEnabled ? "☀️" : "🌙";
});