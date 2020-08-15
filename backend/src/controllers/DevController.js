const axios = require('axios');
const Dev = require('../models/Dev');
module.exports = {

    async index(req, res){
        const { user } = req.headers; //pega o id do usuario logado

        const loggedDev = await Dev.findById(user); //pega todos os dados do usuario logado usando o id
        const users = await Dev.find({ //filtro pra retornar somente pessoas que nao levaram dislikes nem likes
            $and: [
                { _id: { $ne: user } }, //me traz todos os usuarios que o id nao seja igual ao user
                { _id: { $nin: loggedDev.likes } }, //nin= not in... nao mostra todos os usuario que ele ja deu like
                { _id: { $nin: loggedDev.dislikes } },
            ],
        })
        return res.json(users);
    },


   async store(req, res){ //tem que usar o async por causa do await, que serve pra esperar o retorno do axios.get
        const {username} = req.body;
        
        const userExists = await Dev.findOne({user: username});

        if(userExists){ //se o usuario ja existir, a funcao retorna ele mesmo e nao adiciona no banco de dados
            return res.json(userExists);
        }

        // busca os dados do usuário usando a api do github
        const response= await axios.get(`https://api.github.com/users/${username}`);
        // dados usados para salvarmos o usuario no banco de dados
        const {name, bio, avatar_url: avatar} = response.data;
        // salva o usuario no banco de dados
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })
        
        // retorna os dados do usuário criado.
        return res.json(dev);
    }
};