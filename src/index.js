import express from 'express';
const app = express();

let PORT = 8080


app.get('/', (req, res) => {
    res.send('Hola Git')
})

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})