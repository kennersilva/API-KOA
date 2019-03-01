const Koa = require('koa');
const app = new Koa();
const PORT = 4000;
const bodyParser = require('koa-parser');
const router = require('./routes');
const db = require('./models');

db.sequelize.sync({force: true})
  .then(() => console.log('models synced!'))
  .catch(err => console.log(err));

app.context.db = db;

app.use(bodyParser());
app.use(router.routes());


app.listen(PORT);
console.log(`Servidor está de pé em PORT`, PORT);