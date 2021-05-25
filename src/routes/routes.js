import combineRouters from 'koa-combine-routers'

import loginRouter from '../routes/loginRouter'
import newsListRouter from '../routes/newsListRouter'


const router = combineRouters(
  loginRouter,
  newsListRouter
)

export default router