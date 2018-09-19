const $ = require('./split')

exports['block'] = $(`
view scroll-view swiper cover-view
rich-text
button input picker picker-view slider textarea
navigator functional-page-navigator
camera live-pusher
map
canvas
web-view
ad
movable-area cover-image
checkbox-group radio-group
`)

exports['inline-block'] = $(`
movable-view
icon
checkbox radio switch
audio image video live-player
`)

exports['inline'] = $(`
text
form label
`)

exports['flex'] = $(`
progress
`)
