const http = require('http')
const app = require('./app')
const dotenv = require('dotenv')
//require('@tensorflow/tfjs-node');
const cors = require('cors')

app.use(cors());
dotenv.config();

const server = http.createServer(app)

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`)
})