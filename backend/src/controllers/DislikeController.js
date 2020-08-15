const Dev = require('../models/Dev');


module.exports = {
    async store(req, res) {        
        const { user }  = req.headers;
        const{ devId } = req.params;
        
        const loggedDev = await Dev.findById(user); //o usuario que da like
        const targetDev = await Dev.findById(devId); //usuario que recebe o like

        if(!targetDev){
            return res.status(400).json({ error: 'Dev not exists'});     
        }

        loggedDev.dislikes.push(targetDev._id);
        await loggedDev.save();

        return res.json(loggedDev);
    }
};