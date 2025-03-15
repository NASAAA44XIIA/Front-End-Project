<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NUSANTARA NEWS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            color: black;
            transition: background 0.3s, color 0.3s;
        }
        body.dark-mode {
            background-color: #1e1e1e;
            color: white;
        }
        header {
            background-color: #1a237e;
            color: white;
            padding: 15px;
            text-align: center;
        }
        nav {
            background: #1976d2;
            padding: 10px;
            text-align: center;
        }
        nav a {
            color: white;
            margin: 0 15px;
            text-decoration: none;
            font-weight: bold;
        }
        .container {
            width: 80%;
            margin: 20px auto;
        }
        .news-article {
            background: #e3f2fd;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
        }
        .news-image {
            width: 200px;
            height: 120px;
            object-fit: cover;
            border-radius: 8px;
            margin-right: 15px;
        }
        body.dark-mode .news-article {
            background: #333;
        }
        .toggle-container, .search-container {
            text-align: center;
            margin: 15px;
        }
        .toggle-btn, .search-box {
            padding: 10px;
            font-size: 16px;
            border-radius: 5px;
        }
        .toggle-btn {
            background-color: #ff9800;
            color: white;
            border: none;
            cursor: pointer;
        }
        .toggle-btn:hover {
            background-color: #e65100;
        }
        body.dark-mode .toggle-btn {
            background-color: #ffc107;
            color: black;
        }
        .search-box {
            width: 60%;
            border: 1px solid #ccc;
        }
        footer {
            background-color: #1a237e;
            color: white;
            text-align: center;
            padding: 15px;
            margin-top: 20px;
        }
        @media (max-width: 768px) {
            .news-article {
                flex-direction: column;
                text-align: center;
            }
            .news-image {
                margin-bottom: 10px;
                width: 100%;
                height: auto;
            }
        }
    </style>
</head>
<body>

<header>
    <h1>Portal Berita</h1>
</header>

<nav>
    <a href="#">Beranda</a>
    <a href="#">Politik</a>
    <a href="#">Teknologi</a>
    <a href="#">Olahraga</a>
    <a href="#">Hiburan</a>
</nav>

<div class="toggle-container">
    <button class="toggle-btn" onclick="toggleDarkMode()">🌙 Mode Gelap</button>
</div>

<div class="search-container">
    <input type="text" class="search-box" id="searchInput" onkeyup="searchNews()" placeholder="🔍 Cari berita...">
</div>

<div class="container" id="newsContainer">
    <div class="news-article">
        <img class="news-image" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/France_champion_World_Cup_2018.jpg" alt="Piala Dunia 2018">
        <div>
            <h2>Piala Dunia 2018: Prancis Juara Setelah Kalahkan Kroasia</h2>
            <p><strong>Dipublikasikan pada: </strong>15 Juli 2018</p>
            <p>Prancis berhasil memenangkan Piala Dunia 2018 setelah mengalahkan Kroasia dengan skor 4-2 dalam final yang berlangsung di Stadion Luzhniki, Moskow.</p>
        </div>
    </div>

    <div class="news-article">
        <img class="news-image" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Black_hole_-_Messier_87_crop_max_res.jpg" alt="Lubang Hitam">
        <div>
            <h2>Penemuan Lubang Hitam Terbesar Sepanjang Sejarah</h2>
            <p><strong>Dipublikasikan pada: </strong>10 April 2019</p>
            <p>Para ilmuwan dari Event Horizon Telescope (EHT) berhasil menangkap gambar pertama dari lubang hitam supermasif di pusat galaksi M87.</p>
        </div>
    </div>

    <div class="news-article">
        <img class="news-image" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/COVID-19_Outbreak_World_Map.svg" alt="COVID-19">
        <div>
            <h2>Pandemi COVID-19 Mengubah Dunia</h2>
            <p><strong>Dipublikasikan pada: </strong>11 Maret 2020</p>
            <p>WHO secara resmi menyatakan COVID-19 sebagai pandemi global, menyebabkan lockdown di berbagai negara dan dampak ekonomi besar.</p>
        </div>
    </div>

    <div class="news-article">
        <img class="news-image" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Crew_Dragon_2.jpg" alt="SpaceX">
        <div>
            <h2>Elon Musk Kirim Manusia ke Luar Angkasa dengan SpaceX</h2>
            <p><strong>Dipublikasikan pada: </strong>30 Mei 2020</p>
            <p>SpaceX sukses meluncurkan misi Crew Dragon Demo-2 yang membawa dua astronot NASA ke ISS, menandai era baru eksplorasi luar angkasa.</p>
        </div>
    </div>
</div>

<footer>
    <p>&copy; 2025 Portal Berita. Semua Hak Dilindungi.</p>
</footer>

<script>
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        let btn = document.querySelector(".toggle-btn");
        if (document.body.classList.contains("dark-mode")) {
            btn.innerHTML = "☀️ Mode Terang";
        } else {
            btn.innerHTML = "🌙 Mode Gelap";
        }
    }

    function searchNews() {
        let input = document.getElementById("searchInput").value.toLowerCase();
        let articles = document.querySelectorAll(".news-article");

        articles.forEach(article => {
            let title = article.querySelector("h2").innerText.toLowerCase();
            let content = article.querySelector("p:nth-of-type(2)").innerText.toLowerCase();

            if (title.includes(input) || content.includes(input)) {
                article.style.display = "";
            } else {
                article.style.display = "none";
            }
        });
    }
</script>

</body>
</html>
