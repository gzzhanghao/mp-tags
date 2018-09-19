# mp-tags

Tag list in [miniprogram](https://developers.weixin.qq.com/miniprogram/dev/component/).

```bash
npm i mp-tags
```

## Usage

```javascript
const { TAGS, DISPLAY } = require('mp-tags')

// All native tags in miniprogram
// ['view', 'scroll-view', ...]
TAGS

// Tags with default `display` property
DISPLAY['block']
DISPLAY['inline-block']
DISPLAY['inline']
DISPLAY['flex']
```
