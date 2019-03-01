module.exports = {
    async create(ctx){

        try {
            ctx.body = await ctx.db.Company.create({
            name:ctx.request.body.name,
            city:ctx.request.body.city,
            address:ctx.request.body.address
            });
        }catch(err) {
            ctx.throw(500, err);

        }   

    },
     
    async find(ctx){
        try{
        ctx.body = await ctx.db.Company.findAll({
            include:[
                {
                    model: ctx.db.Job
                }
            ]
        });
        }
        catch(err){
            ctx.throw (500,err);
        }
    },

    async findOne(ctx){
        try{
        const company = ctx.body = await ctx.db.Company.findOne({
        id: ctx.params.id
        })
        if(!company){
            ctx.throw(404,'Company não encontrado')
        }
        ctx.body = company;
        }
        catch(err){
            ctx.throw(500,err)
        }
    },

    async destroy(ctx){
        try{
        const results = ctx.body = await ctx.db.Company.destroy({
        where:{ 
        id: ctx.params.id
        }
        });
        results === 0 ? ctx.throw(500, 'id invalido fornecido') : ctx.body = `company foi deletado com id ${ctx.params.id}`;
        }
        catch(err){
        ctx.throw (500,err);
        }

   
    },

    async update(ctx){
        try{
            const results = ctx.body = await ctx.db.Company.update({
            name: ctx.request.body.name,
            city: ctx.request.body.city,
            address: ctx.request.body.address
            }, { 
                where: {id: ctx.params.id
                }    
                })
            
            ctx.body = results === 0 ? ctx.throw(500, 'id invalido fornecido') : `company foi atualizada com id ${ctx.params.id}`;
            }
            catch(err){ 
            ctx.throw (500,err);
            }
    
    }



};
