// Fungsi untuk menampilkan halaman tertentu
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

// Set default halaman ke beranda
showPage('home');

// Fungsi untuk menampilkan detail berita
function showNews(newsId) {
    let newsData = {
        1: {
            title: "RUU TNI Memperkuat Peran Militer",
            date: "Jumat, 21 Maret 2025 11:50 WIB",
            image: "tentara.jpg",
            content: `
                <p><strong>NUSANEWS.COM -</strong> Seluruh fraksi partai di Komisi I DPR dan pemerintah sepakat memboyong Rancangan Undang-Undang tentang Perubahan UU No.34 Tahun 2004 tentang Tentara Nasional Indonesia (RUU TNI) dalam rapat paripurna yang rencananya digelar Kamis (20/03/2025). Pemerintah dan DPR mengabaikan tuntutan masyarakat sipil yang meminta pembahasan tidak dilakukan terburu-buru, dan memberi waktu yang memadai untuk dikaji lebih komprehensif.</p>

                <p>Direktur Eksekutif Imparsial, Ardi Manto menilai revisi UU TNI digarap cepat dan prosesnya tertutup serta tanpa diawali evaluasi implementasi UU 34/2004. Selain absen kajian, proses revisi UU TNI tidak dilandasi adanya kebutuhan yang mendesak.</p>

                <p>UU TNI yang berusia lebih dari 20 tahun ini menurut Ardi sudah layak dievaluasi dengan melibatkan partisipasi publik secara bermakna dan luas. Sayangnya, proses pembahasan RUU TNI terkesan tertutup, karena sempat dibahas maraton di hotel selama 3 hari tanpa partisipasi masyarakat sipil.</p>

                <p>“Pemerintah terpaksa membuka draf RUU TNI dan mengakomodir sebagian keinginan masyarakat sipil. Tapi tetap kita khawatir ini akan mengembalikan dwi fungsi TNI dalam kehidupan sipil,” kata Ardi.</p>
            `
        },
        2: {
            title: "Real Madrid Vs Barcelona 2-5",
            date: "Senin, 13 Januari 2025 02:30 WIB",
            image: "barcelona.jpg",
            content: `
                <p><strong>NUSANEWS.COM -</strong> Jeddah - Pelatih Real Madrid, Carlo Ancelotti, menyebut cuma Kylian Mbappe yang tampil bagus dalam laga final Piala Super Spanyol kontra Barcelona. Madrid takluk 2-5.</p>

                <p>Pertandingan final Piala Super Spanyol 2025 antara Real Madrid vs Barcelona berlangsung di King Abdullah Sports City, Jeddah, Arab Saudi, pada Minggu (12/1/2025) atau Senin (13/1/2025) dini hari WIB.</p>

                <p>Dalam duel bertajuk El Clasico tersebut, Barcelona menutup laga dengan kemenangan 5-2.</p>

                <p>Kemenangan Barcelona lahir berkat gol-gol Lamine Yamal (22'), Robert Lewandowski (36' pen.), Raphinha (39', 48'), dan Alejandro Balde (45+10').</p>

                <p>Skuad beralias Los Blancos hanya bisa menambah satu gol melalui Rodrygo pada babak kedua. "Anda harus bertahan dengan baik untuk memenangkan pertandingan-pertandingan seperti ini," ucap pelatih Real Madrid, Carlo Ancelotti, dilansir dari Football Espana.</p>

                <p>Real Madrid pun tak bisa mempertahankan Supercopa de Espana alias gelar Piala Super Spanyol.</p>

                <p>Koleksi trofi Piala Super Spanyol Madrid tetap bertahan di angka 13. Sebaliknya, Barcelona memastikan diri meraih trofi Supercopa de Espana ke-15 di sepanjang sejarah mereka.</p>
            `
        },
        3: {
            title: "Legislator Apresiasi Bonus Hari Raya untuk Ojol",
            date: "Minggu, 16 Maret 2025 00:30 WIB",
            image: "ojol.jpg",
            content: `
                <p><strong>NUSANEWS.COM -</strong> Jakarta - Anggota Komisi IX DPR Netty Prasetiyani Aher menilai Bonus Hari Raya (BHR) kepada pengemudi ojek online (ojol) dan kurir online memang sudah seharusnya diberikan. Ia pun meminta pihak aplikator untuk memenuhi imbauan dari Pemerintah.</p>

                <p>"Langkah tepat dari Pemerintah untuk memperhatikan nasib para pekerja berbasis aplikasi. BHR untuk pengemudi ojol dan kurir online adalah bentuk kepedulian dan apresiasi yang layak diberikan," kata Netty dalam keterangan tertulisnya, Sabtu (15/3/2025).</p>

                <p>Oleh karenanya, Netty mengapresiasi langkah Presiden Prabowo Subianto yang mengimbau perusahaan aplikasi untuk memberikan BHR bagi ojol dan kurir online. Ia menilai langkah itu menunjukkan keberpihakan presiden ke pekerja berbasis online.</p>

                <p>"Presiden menunjukkan keberpihakannya kepada para pekerja berbasis aplikasi yang selama ini belum mendapatkan BHR," ujarnya.</p>

                <p>Netty mengatakan, para ojol dan kurir online memiliki peran penting dalam perekonomian digital dan mobilitas masyarakat. Apalagi saat ini masyarakat sudah bergantung terhadap jasa para ojol dan kurir online.</p>

                <p>"Para pengemudi ojol dan kurir online telah menjadi bagian penting dalam kehidupan masyarakat. Mereka bekerja keras, menghadapi berbagai tantangan di jalan, dan tetap melayani meskipun dalam situasi sulit," ungkap Netty.</p>

                <p>Lebih lanjut, legislator PKS ini menekankan pentingnya memperhatikan kesejahteraan pengemudi ojol dan kurir online. Meskipun saat ini pengemudi ojol dan kurir online berstatus mitra dalam platform digital, kata Netty, mereka juga memiliki hak-hak pekerja.</p>
            `
        }
    };

    let news = newsData[newsId];

    // Menampilkan berita yang dipilih
    document.getElementById("news-title").innerText = news.title;
    document.getElementById("news-date").innerText = news.date;
    document.getElementById("news-image").src = news.image;
    document.getElementById("news-content").innerHTML = news.content; // Pakai innerHTML agar format tetap rapi

    // Menampilkan halaman detail berita dan menyembunyikan daftar berita
    document.getElementById("news-detail").classList.remove("hidden");
    document.getElementById("news-list").classList.add("hidden");
}

// Fungsi untuk kembali ke daftar berita
function backToNewsList() {
    document.getElementById("news-detail").classList.add("hidden");
    document.getElementById("news-list").classList.remove("hidden");
} // Mode Gelap/Terang
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Cek preferensi pengguna dari localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.innerText = "☀️";
}

// Toggle dark mode saat tombol diklik
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.innerText = "☀️";
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeToggle.innerText = "🌙";
    }
});