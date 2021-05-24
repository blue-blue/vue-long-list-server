import path from 'path'
import Koa from 'koa';
import cors from '@koa/cors'
import koaBody from 'koa-body'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'

const app = new Koa()

app.use(koaBody())
app.use(cors())
app.use(helmet())
app.use(statics(path.resolve(__dirname, '../public')))
app.use(router())
app.listen(3000)