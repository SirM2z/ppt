<template lang='pug'>
#MyFirstSlideshow
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Vue.js
        img(src='./assets/logo.png')
        h4 Vue.js 响应式原理分析
      h4.auther By Ryan
    slide(enter='bounceInRight' leave='fadeOut')
      h3
        | 最终目标
        .inline(class='animated infinite pulse heart')
      eg-transition(enter='flipInX')
        eg-code-block(lang='html').
          const demo = new Vue({
            data: {
              text: "before",
            },
            render(h){ <eg-code-comment enter='flipInY'>对应的template 为  &lt;div&gt;&lt;span&gt;{ {text} }&lt;/span&gt;&lt;/div&gt;</eg-code-comment>
              return h('div', {}, [
                h('span', {}, [this.__toString__(this.text)])
              ])
            }
          })
          setTimeout(function(){
            demo.text = "after"
          }, 3000)
      eg-transition(enter='flipInX')
        p 对应的虚拟DOM变化
      eg-transition(enter='flipInX')
        eg-code-block(lang='html').
          &lt;div&gt;&lt;span&gt;before&lt;/span&gt;&lt;/div&gt; <eg-code-comment enter='flipInY'>变化前</eg-code-comment>
          &lt;--经过3000毫秒后--&gt;
          &lt;div&gt;&lt;span&gt;after&lt;/span&gt;&lt;/div&gt; <eg-code-comment enter='flipInY'>变化后</eg-code-comment>
    slide(:steps=3, enter='bounceInDown')
      h4 第一步,监听data下的所有属性
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p.first-content(v-if="step >= 2")
            <b>1.</b> 当data下的某个属性变化时，如何触发相应的函数？
      eg-transition(enter='bounceInRight' leave='bounceOutRight')
        p(v-if="step >= 3")
          <b>方案：</b> ES5中新添加了一个方法:Object.defineProperty，通过这个方法，可以自定义 getter 和 setter 函数，那么在获取对象属性或者设置对象属性时就能够执行相应的回调函数
    slide(enter='bounceInDown')
      h4 Object.defineProperty 介绍
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          img(src='./assets/object_defineProperty_mdn.png')
    slide(enter='bounceInRight' leave='fadeOut')
      .vue-code
        eg-transition(enter='flipInX')
          eg-code-block(lang='html').
            class Vue {
              constructor(options) {
                this.$options = options
                this._data = options.data
                observer(options.data, this._update.bind(this))
                this._update()
              }
              _update(){
                this.$options.render()
              }
            }
            function observer(obj, cb) {
              Object.keys(obj).forEach((key) => {
                defineReactive(obj, key, obj[key], cb)
              })
            }
            function defineReactive(obj, key, val, cb) {
              Object.defineProperty(obj, key, {
                enumerable: true,
                configurable: true,
                get: () => {
                  console.log('你访问了' + key)
                  return val
                },
                set: newVal => {
                  if (newVal === val)
                    return
                  console.log('你设置了' + key)
                  console.log('新的' + key + ' = ' + newVal)
                  val = newVal
                  cb()
                }
              })
            }
      .vue-obj-code
        eg-transition(enter='flipInX')
          eg-code-block(lang='html').
            var demo1 = new Vue({
              el: '#demo',
              data: {
                text: "before"
              },
              render(){
                console.log("我要render了")
              }
            })
    slide(enter='bounceInDown')
      h4 data中的属性是一个对象还能转换为响应式么？
      eg-transition(enter='flipInX')
        eg-code-block(lang='html').
          var demo2 = new Vue({
            el: '#demo',
            data: {
              text: "before",
              o: {
                text: "o-before"
              }
            },
            render(){
              console.log("我要render了")
            }
          })
    slide(enter='bounceInDown')
      h4 用递归解决，将观察者函数(observer)改造
      eg-transition(enter='flipInX')
        eg-code-block(lang='html').
          function observer(obj, cb)) {
            Object.keys(obj).forEach((key) => {
              if (typeof obj[key] === 'object') { <eg-code-comment enter='flipInY'>加上判断，进行递归</eg-code-comment>
                new observer(obj[key], cb)
              }
              defineReactive(obj, key, obj[key], cb))
            })
          }
    slide(enter='bounceInDown')
      h4 添加代理，将 demo._data.text 写法转换为 demo.text
      eg-transition(enter='flipInX')
        eg-code-block(lang='html').
          _proxy(key) {
            const self = this
            Object.defineProperty(self, key, {
              configurable: true,
              enumerable: true,
              get: function proxyGetter() {
                return self._data[key]
              },
              set: function proxySetter(val) {
                self._data[key] = val
              }
            })
          }
      p 构造函数中加上如下代码
      eg-transition(enter='flipInX')
        eg-code-block(lang='html').
          Object.keys(options.data).forEach(key => this._proxy(key))
    slide(:steps=5, enter='bounceInRight' leave='bounceOutDown')
      h3 转换响应式工作完工
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 2") <b>1.</b> 只要 data 的属性发生变化，就会触发 render 函数
      eg-transition(enter='bounceInRight' leave='bounceOutRight')
        p(v-if="step >= 3") <b>2.</b> 这也是为什么只有 data 中的属性是响应式的，而其他地方声明的值不是的原因
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 4") 但是这里有个问题 -- ？
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.center(v-if="step >= 5") 即触发 render 函数的准确度问题！
    slide(:steps=3, enter='bounceInDown')
      h4 第二步,解决准确度问题，引出虚拟dom
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 2") 思考下边的 demo
      eg-transition(v-if="step >= 2" enter='flipInX')
        eg-code-block(lang='html').
          new Vue({
            template: `
              &lt;div&gt;
                &lt;span&gt;name:&lt;/span&gt; { {name} }
              &lt;div&gt;`,
            data: {
              name: 'js',
              age: 24
            }
          })

          setTimeout(function(){
            demo.age = 25 <eg-code-comment :active='step === 3' enter='flipInY'>修改 age 属性，会触发渲染么？</eg-code-comment>
          }, 3000)
    slide(:steps=3, enter='bounceInRight' leave='bounceOutDown')
      h3 简单介绍虚拟 dom
      .dom-left
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2") vue有以下两种写法：
        eg-transition(v-if="step >= 2" enter='flipInX')
          eg-code-block(lang='html').
            // template模板写法（最常用的）
            new Vue({
              data: {
                text: "before",
              },
              template: `
                &lt;div&gt;
                  &lt;span&gt;text:&lt;/span&gt; {{text}}
                &lt;/div&gt;`
            })
            // render函数写法，类似react的jsx写法
            new Vue({
              data: {
                text: "before",
              },
              render (h) {
                return (
                  &lt;div&gt;
                    &lt;span&gt;text:&lt;/span&gt; {{text}}
                  &lt;/div&gt;
                )
              }
            })
      .dom-right
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 3") 转化为下边格式：
        eg-transition(v-if="step >= 3" enter='flipInX')
          eg-code-block(lang='html').
            new Vue({
              data: {
                text: "before",
              },
              render(){
                return this.__h__('div', {}, [
                  this.__h__('span', {}, [this.__toString__(this.text)])
                ])
              }
            })
    slide(enter='bounceInDown')
      p.center 透过上边的 render 函数中的 this.__h__ 方法，可以简单了解下虚拟dom
      eg-transition(enter='flipInX')
        eg-code-block(lang='html').
          function VNode(tag, data, children, text) {
            return {
              tag: tag, // html标签名
              data: data, // 包含诸如 class 和 style 这些标签上的属性
              children: children, // 子节点
              text: text // 文本节点
            }
          }
    slide(enter='bounceInDown')
      h4.center.dom-demo-title 简单的虚拟dom demo
      .dom-demo-code
        eg-transition(enter='flipInX')
          eg-code-block(lang='html').
            function VNode(tag, data, children, text) {
              return {
                tag: tag,
                data: data,
                children: children,
                text: text
              }
            }

            class Vue {
              constructor(options) {
                this.$options = options
                const vdom = this._update()
                console.log(vdom)
              }
              _update() {
                return this._render.call(this)
              }
              _render() {
                const vnode = this.$options.render.call(this)
                return vnode
              }
              __h__(tag, attr, children) {
                return VNode(tag, attr, children.map((child)=>{
                  if(typeof child === 'string'){
                    return VNode(undefined, undefined, undefined, child)
                  }else{
                    return child
                  }
                }))
              }
              __toString__(val) {
                return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val);
              }
            }

            var demo = new Vue({
              el: '#demo',
              data: {
                text: "before",
              },
              render(){
                return this.__h__('div', {}, [
                  this.__h__('span', {}, [this.__toString__(this.text)])
                ])
              }
            })
    slide(enter='bounceInDown')
      h4 回头看问题
      p.zongjie 我们需要知道 render 函数中依赖了 data 中的哪些属性，只有这些属性变化，才需要去触发 render 函数
    slide(:steps=3, enter='bounceInDown')
      h4 第三步，依赖收集，准确渲染
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 2") <b>思路：</b> 在这之前，我们已经把 data 中的属性改成响应式了，当去获取或者修改这些变量时便能够触发相应函数。那这里就可以利用这个相应的函数做些手脚了。
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 2") 当声明一个 vue 对象时，在执行 render 函数获取虚拟dom的这个过程中，已经对 render 中依赖的 data 属性进行了一次获取操作，这次获取操作便可以拿到所有依赖。
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 3") 其实不仅是 render，任何一个变量的改别，是因为别的变量改变引起(观察者模式)，都可以用上述方法，也就是 computed 和 watch 的原理
    slide(enter='bounceInDown')
      h4.shouji 依赖收集
      p.shouji-p 首先需要写一个依赖收集的类，每一个data中的属性都有可能被依赖，因此每个属性在响应式转化(defineReactive)的时候，就初始化它。
      eg-transition(enter='flipInX')
        eg-code-block(lang='html').
          class Dep {
            constructor() {
              this.subs = []
            }
            add(cb) {
              this.subs.push(cb)
            }
            notify() {
              console.log(this.subs)
              this.subs.forEach((cb) => cb())
            }
          }

          function defineReactive(obj, key, val, cb) {
            const dep = new Dep()
            Object.defineProperty(obj, key, {
              // 省略
            })
          }
    slide(:steps=5, enter='bounceInDown')
      h4 执行过程
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 2") 当执行render函数的时候，依赖到的变量的get就会被执行，然后就把这个 render函数加到subs里面去。
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 3") 当set的时候,就执行notify，将所有的subs数组里的函数执行，其中就包含render的执行。
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 4") 代码中有一个Dep.target值，这个值时用来区分是普通的get还是收集依赖时的get
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 5") <b>完整代码：</b> https://github.com/SirM2z/assets/blob/master/vue-demo.js
    slide(enter='bounceInDown')
      h4 vue react响应式简单对比
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p <b>综上发现：</b> 用Object.defineProperty这个特性可以精确的写出订阅发布模式，从这点来说，vue是优于react的，在没经过优化之前，vue的渲染机制一定是比react更加准确的，为了验证这一说法，我用两个框架同时写了两个相同的简单项目进行对比。
    slide(:steps=2, enter='bounceInDown')
      h4 没有对比就没有伤害
      ul
        li react项目地址：http://sirm2z.github.io/react-vue-test/react/index.html
        li vue项目地址：http://sirm2z.github.io/react-vue-test/vue/index.html
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 2") 通过对比发现，react 在正常使用的过程中产生了多余的渲染，在移动端或者组件嵌套非常深的情况下会产生非常大的性能消耗，因此在使用 react 的过程中，写好 react 生命周期中的 shouldComponentUpdate 是非常重要的！
    slide(enter='bounceInDown')
      h4 所有资源
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          ul
            li <b>完整代码：</b> https://github.com/SirM2z/assets/blob/master/vue-demo.js
            li <b>PPT网址：</b> http://sirm2z.github.io/vue-demo-ppt/index.html
            li <b>博客文章网址：</b> http://www.jianshu.com/p/7374c4e91891
            li <b>react项目地址：</b> http://sirm2z.github.io/react-vue-test/react/index.html
            li <b>vue项目地址：</b> http://sirm2z.github.io/react-vue-test/vue/index.html
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
    title: 'Vue.js',
    description: 'Vue.js 响应式原理分析',
    path: 'vue-data-binding'
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/src/themes/agrume/agrume';
@import url(https://fonts.googleapis.com/css?family=Raleway);
@import './assets/solarized-light';
#MyFirstSlideshow{
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
          img.control-schema {
            width: 8em;
            height: 3em;
          }
        }
        .heart {
          width: 1em;
          height: 0.8em;
          margin-left: 0.1em;
          margin-right: 0.1em;
          background-image: url('./assets/heart.svg');
          background-position: center center;
          background-repeat:  no-repeat;
          background-size: contain;
        }
        .auther {
          text-align: right;
        }
        .first-content {
          margin-top: 150px;
        }
        .vue-code {
          margin-top: 20px;
          float: left;
          width: 60%;
        }
        .vue-obj-code {
          margin: 300px 0 0 20px;
          float: left;
          width: 35%;
        }
        .dom-left {
          float: left;
          width: 42%;
          margin-right: 1%;
          p {
            margin-top: 0;
            margin-bottom: 10px;
          }
        }
        .dom-right {
          float: left;
          width: 55%;
          p {
            margin-top: 0;
            margin-bottom: 10px;
          }
        }
        .dom-demo-title {
          margin-bottom: 10px;
        }
        .dom-demo-code {
          max-height: 700px;
          overflow-y: auto;
          overflow-x: hidden;
        }
        .zongjie {
          margin-top: 200
        }
        .shouji {
          margin-bottom: 0;
        }
        .shouji-p {
          margin-top: 5px;
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
