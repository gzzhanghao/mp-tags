const $ = require('./split')

/**
 * Run following code in https://developers.weixin.qq.com/miniprogram/dev/component/view.html
 *
 * copy($$('.articles').map(a => [...a.children].map(c => c.firstElementChild.innerText.trim()).join(' ')).join('\n'))
 */
const nav = $(`
view scroll-view swiper movable-view cover-view
icon text rich-text progress
button checkbox form input label picker picker-view radio slider switch textarea
navigator functional-page-navigator
audio image video camera live-player live-pusher
map
canvas
open-data web-view ad
`)

// Tags are not listed in https://developers.weixin.qq.com/miniprogram/dev/component/view.html

const hidden = $(`
template slot block
movable-area cover-image
checkbox-group radio-group
`)

module.exports = [...nav, ...hidden]
