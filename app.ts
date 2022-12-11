
import express from "express"
import todoroutes from './routes/todos'
import bodyparser from "body-parser"
import bodyParser from "body-parser"
const app = express()
app.use(bodyParser.json())
app.use(todoroutes)
app.listen(2000)