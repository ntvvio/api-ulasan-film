const express = require('express');
const app = express();
const port = 3300;

// Middleware untuk parsing JSON
app.use(express.json());

// Basis data sementara untuk ulasan
let reviews = [
    {
        id: 1,
        filmId: "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Spirited Away
        user: "Diana",
        rating: 5,
        comment: "Ceritanya lucu soalnya ada hantu gemoyy"
    },
    {
        id: 2,
        filmId: "12cfb892-aac0-4c5b-94af-521852e46d6a", // My Neighbor Totoro
        user: "Intan",
        rating: 4,
        comment: "Totoro lucu banget, aku mau punya temen kaya Totoro juga"
    },
    {
        id: 3,
        filmId: "58611129-2dbc-4a81-a72f-77ddfc1b1b49", // Castle in the Sky
        user: "Viona",
        rating: 5,
        comment: "Visualnya cakep-cakep, ceritannya juga seru kok"
    },
    {
        id: 4,
        filmId: "758bf02e-3122-46e0-884e-67cf83df1786", // Ponyo
        user: "Yasmin",
        rating: 3,
        comment: "Lucu banget ponyooo, pengen punya ikan"
    }
];

// Endpoint status
app.get('/status', (req, res) => {
    res.json({ message: "API berjalan dengan baik" });
});

// Endpoint GET semua review
app.get('/reviews', (req, res) => {
    res.json(reviews);
});

// Endpoint GET review berdasarkan id
app.get('/reviews/:id', (req, res) => {
    const review = reviews.find(r => r.id === parseInt(req.params.id));
    if (review) {
        res.json(review);
    } else {
        res.status(404).json({ error: "Review tidak ditemukan" });
    }
});

// Endpoint POST review baru
app.post('/reviews', (req, res) => {
    const { filmId, user, rating, comment } = req.body;

    // Validasi input
    if (!filmId || !user || !rating || !comment) {
        return res.status(400).json({ error: "Semua field (filmId, user, rating, comment) wajib diisi" });
    }

    const newReview = {
        id: reviews.length + 1,
        filmId,
        user,
        rating,
        comment
    };
    reviews.push(newReview);
    res.status(201).json(newReview);
});

// Endpoint PUT update review
app.put('/reviews/:id', (req, res) => {
    const review = reviews.find(r => r.id === parseInt(req.params.id));
    if (!review) {
        return res.status(404).json({ error: "Review tidak ditemukan" });
    }

    const { filmId, user, rating, comment } = req.body;
    review.filmId = filmId || review.filmId;
    review.user = user || review.user;
    review.rating = rating || review.rating;
    review.comment = comment || review.comment;

    res.json(review);
});

// Endpoint DELETE hapus review
app.delete('/reviews/:id', (req, res) => {
    const reviewIndex = reviews.findIndex(r => r.id === parseInt(req.params.id));
    if (reviewIndex === -1) {
        return res.status(404).json({ error: "Review tidak ditemukan" });
    }

    const deletedReview = reviews.splice(reviewIndex, 1)[0];
    res.json(deletedReview);
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
