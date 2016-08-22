import Timer from './components/timer.vue'

Vue.component('timer', Timer)

const { body } = document

// 消除移动端 300ms 的点击延迟
FastClick.attach(body)

// 启动 web app
import router from './views/router'
const div = document.createElement('div')
body.appendChild(div)
router.start(require('./views/_root.vue'), div)
