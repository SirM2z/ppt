<template lang='pug'>
#Promise
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Promise
        img(src='./assets/promise.jpg')
        h4 实现符合 Promises/A+ 规范的 Promise 库
      h4.auther By Ryan
    slide(enter='bounceInRight' leave='fadeOut')
      h4 分享主题
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.first-content.center
          <b></b>什么是 Promise，为什么引入 Promise
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.center
          <b></b>Promises/A+ 规范
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.center
          <b></b>* 手撕 Promise
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.center
          <b></b>Promises/A+ 测试
    slide(:steps=3, enter='bounceInDown')
      h4 什么是 Promise，为什么引入 Promise ？
      eg-transition(enter='bounceInDown' leave='bounceOutUp')
          p.first-content(v-if="step >= 2") Promise 是抽象异步处理对象以及对其进行各种操作的组件
      eg-transition(enter='bounceInDown' leave='bounceOutUp')
          p(v-if="step >= 2") Promise 并不是从 JavaScript 中发祥的概念
      eg-transition(enter='bounceInDown' leave='bounceOutUp')
          p(v-if="step >= 3") 解决回掉地狱问题
    slide(enter='bounceInDown')
      h4 Promises/A+ 规范
      eg-transition(enter='bounceInDown' leave='bounceOutUp')
          p.first-content An open standard for sound, interoperable JavaScript promises—by implementers, for implementers.
      eg-transition(enter='bounceInDown' leave='bounceOutUp')
          p.left
            <a href="https://promisesaplus.com/" target="_blank">https://promisesaplus.com/</a>
      eg-transition(enter='bounceInDown' leave='bounceOutUp')
          p.left
            <a href="https://wiki.ryanc.top/translation/promisesaplus.html" target="_blank">译文</a>
    slide(enter='bounceInDown')
      h2.first-content.center 手撕 Promise
    slide(:steps=2, enter='bounceInDown')
      h4 Promises/A+ 测试
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.first-content
          <a href="https://github.com/promises-aplus/promises-tests#readme" target="_blank">promises-aplus-tests</a>
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.left(v-if="step >=2") 在 Promise 实现中加入下方代码
      eg-transition(enter='flipInX')
        eg-code-block(lang='html' v-if="step >=2").
          Promise.defer = Promise.deferred = function () {
            let dfd = {};
            dfd.promise = new Promise((resolve, reject) => {
                dfd.resolve = resolve;
                dfd.reject = reject;
            });
            return dfd;
          }
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.left(v-if="step >=2") 在 package.json 中加入下方 script
      eg-transition(enter='flipInX')
        eg-code-block(lang='html' v-if="step >=2").
          "test": "promises-aplus-tests ./promise.js"

    slide(enter='bounceInDown')
      h1.center.end END
      eg-transition(enter='flipInX')
        h2.center Thanks
      h4.auther By Ryan

</template>

<script>
import eagle from 'eagle.js'
export default {
  mixins: [ eagle.slideshow ],
  infos: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'Promise',
    description: '实现符合 Promises/A+ 规范的 Promise 库',
    path: 'promiseaplus'
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/src/themes/agrume/agrume';
@import url(https://fonts.googleapis.com/css？family=Raleway);
@import './assets/solarized-light';
#Promise{
  .eg-slideshow{
    background-image: url(./assets/subtle_symphony.png);
    background-color: #eee;
    .eg-slide{
      .eg-slide-content{
        width: 35em;
        max-width: 80%;
        margin: 0 auto;
        .frontpage {
          img {
            height: 7em;
          }
        }
        .auther {
          text-align: right;
        }
      }
    }
  }
  h1, h2, h3, h4, p, li, .button, input {
    font-family: 'Pompiere', cursive;
    font-weight: normal;
  }
  .code-box {
    box-shadow: 0 0 0.25em 0.25em #ddd
  }
  .eg-code-comment {
    font-weight: bold;
    color: #dd4321
  }
  .eg-slide-content{
    width: 25em;
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
