const Contact = require('../Model/ContactForm');


module.exports = {
    
    async Store(req, res){
        const { firstName, lastName, city, celPhone, subject, message, email} = req.body
    
        try{
            const contact = new Contact({
                firstName, lastName, city, celPhone, subject, message, email
            })
            const response = await contact.save()
            return res.json(response)
            
        } catch (erro)
        {
            return res.status(400).send({ "erro": "contact unsaved" })
            
        }
    },

    async Index(req, res){
    
        try{
           
            const contact = await Contact.find(req.body)
            return res.json(contact)
            
        } catch (erro)
        {
            return res.status(400).send({ "erro": "contact unListed" })
           
        }
    },

    async IndexOne(req, res){
    
        try{
			const contact = await Contact.findOne({_id:req.params.id});
			res.send(contact)
		}catch(erro){
			return res.status(400).send({"error": "falha ao listar Contactos"})
		}
    },

    async DeleteOne(req, res){
		try{
			const contact = await Contact.deleteOne({_id:req.params.id});
			res.send({"message": "Messagem de Contacto apagado com sucesso"})

		}catch(erro){
			return res.status(400).send({"error": "falha ao Deletar contacto"})
		}
	}
}