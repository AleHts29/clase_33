import express from 'express';
import { config } from './utils/config.js';
const app = express();

let PORT = config.node.port || 8080


app.get('/', (req, res) => {
    res.send('Hola Git')
})

app.get('/ruta-dev', (req, res) => {
    res.send('Hola dev')
})

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})