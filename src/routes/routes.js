import combineRouters from 'koa-combine-routers'

import loginRouter from '../routes/loginRouter'


const router = combineRouters(
  loginRouter
)

export default router