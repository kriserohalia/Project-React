import express from "express"


const books = [
    {
        id: 1,
        title: "Asbabul Wurud",
        cover: "https://ebook.perpus.org/sketch/asbabul-wurud/asbabul-wurud-min.jpg",
        synopsis: "sebuah buku karya Imam Ibnu Hajar al-Asqalani yang terkenal dengan judul lengkapnya Asbab al-Wurud li Haditsi man 'anqada al-Taharah min al-Hadath. Buku ini adalah sebuah karya penting dalam literatur hadis dalam Islam. Buku ini mengupas mengenai hadits-hadits yang berkaitan dengan hukum suci (taharah) setelah seseorang mengalami hadats besar (junub) atau hadats kecil (kecil). Hadats adalah kondisi ketidak-sucian yang bisa disebabkan oleh hal-hal seperti tidur, buang air kecil, buang air besar, dan sebagainya. ",
    },
    {
        id: 2,
        title: "Dahsyatnya Kekuatan Berpikir Positif",
        cover: "https://ebook.perpus.org/sketch/dahsyatnya-kekuatan-berpikir-positif-317/dahsyatnya-kekuatan-berpikir-positif-317-min.jpg",
        synopsis: "buku yang ditulis oleh Dr. Ibrahim Elfiky, seorang motivator dan penulis asal Mesir yang terkenal dalam bidang pengembangan diri dan motivasi. Buku ini fokus pada pentingnya berpikir positif dalam kehidupan sehari-hari dan bagaimana sikap mental yang positif dapat mempengaruhi kualitas hidup seseorang.menggambarkan betapa kuatnya pengaruh pikiran positif dalam mengubah sikap dan hasil hidup seseorang. Penulis menjelaskan bahwa pikiran adalah daya kreatif yang mampu membentuk realitas sekitar kita. Dengan berfokus pada pikiran positif, kita dapat mengatasi rintangan, mengatasi masalah, dan mencapai tujuan kita dengan lebih mudah.Buku ini menguraikan berbagai konsep terkait dengan berpikir positif, seperti memahami kekuatan sugesti, hukum tarik-menarik (Law of Attraction), dan bagaimana cara mengatasi pikiran negatif yang dapat menghalangi kesuksesan dan kebahagiaan. Dr. Ibrahim Elfiky juga memberikan panduan praktis tentang bagaimana mengembangkan pikiran positif, mengelola stres, dan meningkatkan kepercayaan diri. ",
    },
    {
        id: 3,
        title: "Pirates and Emperors",
        cover: "https://ebook.perpus.org/sketch/pirates-and-emperors-by-noam-chomsky/pirates-and-emperors-by-noam-chomsky-min.jpg",
        synopsis: "buku yang ditulis oleh Noam Chomsky, seorang intelektual terkenal dalam bidang linguistik, ilmu politik, dan kritik media. Buku ini menganalisis hubungan antara terorisme internasional, politik global, dan media.Buku ini juga membahas dampak peristiwa-peristiwa besar seperti serangan 11 September dan respon internasional terhadapnya, serta bagaimana narasi yang disebarkan oleh pemerintah dan media berdampak pada persepsi global tentang terorisme dan konflik.Sebuah karya yang menantang pembaca untuk mempertanyakan narasi-narasi yang dihasilkan oleh pemerintah dan media mengenai terorisme dan konflik internasional. Buku ini mendorong pemahaman yang lebih kritis terhadap politik global dan pengaruh media terhadap persepsi publik.",
    },
    {
        id: 4,
        title: "Sapiens",
        cover: "https://ebook.perpus.org/sketch/sapiens-by-yuval-noah-harari/sapiens-by-yuval-noah-harari-min.jpg",
        synopsis: "Buku yang ditulis oleh Yuval Noah Harari, seorang sejarawan dan penulis asal Israel. Buku ini memberikan pandangan menyeluruh tentang sejarah manusia, dari awal perkembangan spesies Homo sapiens hingga perubahan signifikan dalam masyarakat modern.'Sapiens' mengajak pembaca untuk menjelajahi perjalanan panjang dan kompleks evolusi manusia. Buku ini memulai dengan menjelaskan asal-usul Homo sapiens di Afrika dan bagaimana spesies ini akhirnya menyebar ke seluruh dunia. Penulis menggambarkan perubahan dari kehidupan berburu dan meramu menjadi revolusi pertanian yang membawa manusia beralih ke kehidupan berbasis pertanian. ",
    },
    {
        id: 5,
        title: "Citizen 4.0",
        cover: "https://ebook.perpus.org/sketch/citizen-4.0-by-hermawan-kertajaya/citizen-4.0-by-hermawan-kertajaya-min.jpg",
        synopsis: "Buku yang ditulis oleh Yuval Noah Harari, seorang sejarawan dan penulis asal Israel. Buku ini memberikan pandangan menyeluruh tentang sejarah manusia, dari awal perkembangan spesies Homo sapiens hingga perubahan signifikan dalam masyarakat modern.'Sapiens' mengajak pembaca untuk menjelajahi perjalanan panjang dan kompleks evolusi manusia. Buku ini memulai dengan menjelaskan asal-usul Homo sapiens di Afrika dan bagaimana spesies ini akhirnya menyebar ke seluruh dunia. Penulis menggambarkan perubahan dari kehidupan berburu dan meramu menjadi revolusi pertanian yang membawa manusia beralih ke kehidupan berbasis pertanian. ",
    },
    {
        id: 6,
        title: "Buya Hamka",
        cover: "https://ebook.perpus.org/sketch/buya-hamka-pribadi-dan-martabat-by-rusydi-hamka/buya-hamka-pribadi-dan-martabat-by-rusydi-hamka-min.jpg",
        synopsis: "Buku yang ditulis oleh Yuval Noah Harari, seorang sejarawan dan penulis asal Israel. Buku ini memberikan pandangan menyeluruh tentang sejarah manusia, dari awal perkembangan spesies Homo sapiens hingga perubahan signifikan dalam masyarakat modern.'Sapiens' mengajak pembaca untuk menjelajahi perjalanan panjang dan kompleks evolusi manusia. Buku ini memulai dengan menjelaskan asal-usul Homo sapiens di Afrika dan bagaimana spesies ini akhirnya menyebar ke seluruh dunia. Penulis menggambarkan perubahan dari kehidupan berburu dan meramu menjadi revolusi pertanian yang membawa manusia beralih ke kehidupan berbasis pertanian. ",
    },
    {
        id: 7,
        title: "Berani Tidak Disukai",
        cover: "https://ebook.perpus.org/sketch/berani-tidak-disukai-764/berani-tidak-disukai-764-min.jpg",
        synopsis: "Karya Untuk Semua Orang yang Ingin Berubah Tetapi Tak Kunjung Melakukannya adalah buku yang ditulis oleh Ichiro Kishimi dan Fumitake Koga.Buku ini menggambarkan ide- ide dari filsuf Alfred Adler, terutama melalui dialog antara seorang filsuf muda dan seorang pemuda muda.Pembaca dihadapkan pada sejumlah ide dan prinsip yang berasal dari psikologi Adlerian, terutama tentang cara pandang dan perilaku seseorang dalam menghadapi kehidupan. Buku ini mempresentasikan konsep-konsep tersebut melalui dialog antara seorang pemuda muda yang mencari arti dalam hidupnya dan seorang filsuf muda yang mengajarkan prinsip-prinsip psikologi Adlerian. ",
    },
    {
        id: 8,
        title: "Islamku Islam Anda Islam Kita",
        cover: "https://ebook.perpus.org/sketch/islamku-islam-anda-islam-kita-abdurrahman-wahid-gus-dur-209/islamku-islam-anda-islam-kita-abdurrahman-wahid-gus-dur-209-min.jpg",
        synopsis: "Buku yang ditulis oleh Yuval Noah Harari, seorang sejarawan dan penulis asal Israel. Buku ini memberikan pandangan menyeluruh tentang sejarah manusia, dari awal perkembangan spesies Homo sapiens hingga perubahan signifikan dalam masyarakat modern.'Sapiens' mengajak pembaca untuk menjelajahi perjalanan panjang dan kompleks evolusi manusia. Buku ini memulai dengan menjelaskan asal-usul Homo sapiens di Afrika dan bagaimana spesies ini akhirnya menyebar ke seluruh dunia. Penulis menggambarkan perubahan dari kehidupan berburu dan meramu menjadi revolusi pertanian yang membawa manusia beralih ke kehidupan berbasis pertanian. ",
    },
    {
        id: 9,
        title: "Bandar Mology",
        cover: "https://ebook.perpus.org/sketch/bandar-mology/bandar-mology-min.jpg",
        synopsis: "Buku yang ditulis oleh Yuval Noah Harari, seorang sejarawan dan penulis asal Israel. Buku ini memberikan pandangan menyeluruh tentang sejarah manusia, dari awal perkembangan spesies Homo sapiens hingga perubahan signifikan dalam masyarakat modern.'Sapiens' mengajak pembaca untuk menjelajahi perjalanan panjang dan kompleks evolusi manusia. Buku ini memulai dengan menjelaskan asal-usul Homo sapiens di Afrika dan bagaimana spesies ini akhirnya menyebar ke seluruh dunia. Penulis menggambarkan perubahan dari kehidupan berburu dan meramu menjadi revolusi pertanian yang membawa manusia beralih ke kehidupan berbasis pertanian. ",
    },
];

const router = express.Router();

router.get("/", (_req, res)=> {
    res.json(
        books.map((book)=>{
            return {id:book.id, title:book.title, cover:book.cover};
        })
    );
});

router.get("/:id",(req,res)=>{
    const book = books.find((p)=> p.id == req.params.id);
    if (book) {
        res.json(book);
    }else {
        res.status(404);
        res.send("buku tidak ditemukan");
    }
});


export default router;