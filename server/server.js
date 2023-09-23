import express from 'express'
import tipsRouter from './routes/tips.js'

const app = express()

app.use('/public', express.static('./client/public'))
app.use('/scripts', express.static('../client/public/scripts'))
app.use(express.static('client/public'));


app.use('/', tipsRouter)


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
