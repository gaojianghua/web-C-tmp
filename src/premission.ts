import { message } from "./libs";
import router from "./router";
import useStore from "./store";
/**
 * 处理需要登录页面的访问权限
 */
router.beforeEach((to, from) => {
    // 无需登录的页面访问
    if (!to.meta.user) {
        return
    }
    // 需要登录之后才能访问
    if (useStore().user.token) {
        return true
    }
    // 需要登录才能访问的页面, 并且用户没有登录
    message('warn', '登录失效, 请重新登录')
    return '/'
})
