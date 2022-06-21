require('dotenv').config();
const express = require('express')

const app = express()

const homeRoutes = require('./routes/homeRoutes')

const PORT = 5050

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Rutas */
app.use('/api/v1', homeRoutes);

app.listen(PORT, () => {
    console.log(`Server On Port: ${PORT}`);
})

