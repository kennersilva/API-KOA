
module.exports = {
    async create(ctx){

        try {
            if(!ctx.request.body.title){
                ctx.throw(400,'Por favor forneça o titulo do Job')
            }
        
            if(!ctx.request.body.CompanyId){
                ctx.throw(400,'Por favor forneça o nome da Company')
            }

            ctx.body = await ctx.db.Job.create({
                title: ctx.request.body.title,
                CompanyId: ctx.request.body.CompanyId
            });
            
        }
            
        catch(err) {
            ctx.throw(500, err);

        };  

    },

    async find(ctx){
        try{
        ctx.body = await ctx.db.Job.findAll({
            include:[
                {
                    model: ctx.db.Candidate
                }
            ]
        });
        }
        catch(err){
            ctx.throw (500,err);
        }
    },







}
