import express from 'express'
const router = express.Router()
import tipsData from '../data/tips.js'
import path from 'path'
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});


router.get('/tip', (req, res) => {
    res.json(tipsData);
});


router.get('/tip/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const tip = tipsData.find((tip) => tip.id === id)

    if (tip) {
        res.sendFile(path.join(__dirname, '../../client/public/tip.html'));
    } else {
        res.status(404).json({ error: 'Tip not found' })
    }
})

export default router
