import Router from 'koa-router'
import NewsListControl from '../api/newsListControl'

const router = new Router()

router.get('/newslist', NewsListControl.getList)

export default router