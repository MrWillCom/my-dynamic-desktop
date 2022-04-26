import path from 'path';
import url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

import 'dotenv/config';

import logPrefix from './prefix.mjs';

import express from 'express';
const app = express();
const PORT = process.env.PORT || 3521;

import api from './api.mjs';


app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/:api', (req, res) => {
    switch (req.params.api) {
        case 'ackee':
            api.ackee(req, res);
            break;

        default:
            break;
    }
})

app.listen(PORT, () => {
    console.log(`${logPrefix.time()} ${logPrefix.info} Server listening at port ${PORT}`)
})
