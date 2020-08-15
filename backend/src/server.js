const express = require('express'); //importa express
const mongoose = require('mongoose');//instalado usando o yarn
const cors = require('cors');


const routes = require('./routes');//importa do outro arquivo criado

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {
};

io.on('connection', socket => {
    const {user} = socket.handshake.query;

    console.log(user, socket.id);
    connectedUsers[user] = socket.id;

});

// mongoose.connect('mongodb+srv://djanlm:123@cluster0-rrumj.mongodb.net/omnistack8?retryWrites=true&w=majority', {
//     useNewUrlParser: true
// });

// Foi criado um servidor no site mongoDb Atlas, lá criei um banco de dados chamado omnistack8 e esse é o banco de dados usado nesse projeto
mongoose.connect('mongodb+srv://djanlm:djanlm@cluster0-rrumj.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
});



app.use((req, res, next)=>{
    req.io = io; //adiciona a variavel io no req
    req.connectedUsers = connectedUsers; //adiciona a variavel connectedUsers no req

    return next();

});

app.use(cors());
app.use(express.json()); //permite que entenda json
app.use(routes);

server.listen(3333);//seleciona a porta 3333 (pode ser qualquer outra)
