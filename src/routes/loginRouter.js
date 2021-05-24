import Router from 'koa-router'
import LoginControl from '../api/loginControl'

const router = new Router()

router.get('/getcaptcha', LoginControl.getCaptcha)

export default router