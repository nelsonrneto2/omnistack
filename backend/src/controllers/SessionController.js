//index(listagem), show(única sessão), (store Criar Sessão), update (atualizar sessão), destroy (eliminar sessão)
const User = require('../models/User')

module.exports = {
    async store(req, res){
        const {email} = req.body

        let user = await User.findOne({email})

        if(!user){
            user = await User.create({email})
        }
        //const user = await User.create({ email })

        return res.json(user)
    }

}