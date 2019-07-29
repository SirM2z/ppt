<template lang='pug'>
#AST
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 AST
        img(src='./assets/ast.png')
        h4 从AST(抽象语法树)角度看前端
      h4.auther By Ryan
    slide(enter='bounceInRight' leave='fadeOut')
      h4 分享主题
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.first-content.center
          <b></b>什么是 AST
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.center
          <b></b>社区中 AST parser 实现
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.center
          <b></b>Babel 如何通过 AST 读懂 js 代码
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.center
          <b></b>AST 前端用例
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.center
          <b></b>热更新小程序代码
    slide(:steps=3, enter='bounceInDown')
      h4 前端需要掌握什么 ？
      eg-transition(enter='bounceInDown' leave='bounceOutUp')
          p(v-if="step >= 2")
            <b>普遍的观点认为</b>
      eg-transition(enter='bounceInDown' leave='bounceOutUp')
          p(v-if="step >= 2")
            <b>1.</b>前端就是打好 HTML、CSS、JS 三大基础，深刻理解语义化标签
      eg-transition(enter='bounceInDown' leave='bounceOutUp')
          p(v-if="step >= 2")
            <b>2.</b>了解 N 种不同的布局方式，掌握语言的语法、特性、内置 API
      eg-transition(enter='bounceInDown' leave='bounceOutUp')
          p(v-if="step >= 2")
            <b>3.</b>再学习一些主流的前端框架，使用社区成熟的脚手架，即可快速搭建一个前端项目
      eg-transition(enter='bounceInDown' leave='bounceOutUp')
          p(v-if="step >= 3")
            <b>但是</b> 技术推陈出新，版本快速迭代
    slide(:steps=2, enter='bounceInDown')
      h4 万变不离其宗
      eg-transition(enter='bounceInDown' leave='bounceOutUp')
          p.first-content
            <b></b>现在很多前端工具致力于流程自动化、规范化，服务于简洁、优雅、高效的编码，将问题高度抽象化、层次化。
      eg-transition(enter='bounceInDown' leave='bounceOutUp')
          p
            <b></b>而编译原理，作为一门基础理论学科，除了 JS 语言本身的编译器之外，更成为 Babel、ESLint、Stylus、Flow、Pug、YAML、Vue、React、Marked 等开源前端框架的理论基石之一。
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
          p.center(v-if="step >= 2")
            <b>AST(抽象语法树)</b>
    slide(enter='bounceInDown')
      h4 什么是 AST ？
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b>维基定义</b> 在计算机科学中，抽象语法树（abstract syntax tree或者缩写为AST），或者语法树（syntax tree），是源代码的抽象语法结构的树状表现形式，这里特指编程语言的源代码。
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          img(src='./assets/ast1.png')
    //- slide(:steps=4, enter='bounceInDown')
    //-   h4 传说中程序员的三大浪漫
    //-   .center
    //-     eg-transition(enter='bounceInDown' leave='bounceOutUp')
    //-       p.first-content(v-if="step >= 2")
    //-         <b>编译原理</b>
    //-   .center
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(v-if="step >= 3")
    //-         <b>图形学</b>
    //-   .center
    //-     eg-transition(enter='bounceInRight' leave='bounceOutRight')
    //-       p(v-if="step >= 4")
    //-         <b>操作系统</b>
    slide(enter='bounceInDown')
      h4 社区中 AST parser 实现
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.first-content
          <b>uglifyjs / esprima</b> - 早期的两个项目
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          img.img-logo(src='./assets/eslint_logo.png')
          <b>espree</b> - 基于esprima，用于eslint
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          img.img-logo(src='./assets/webpack_logo.png')
          <b>acorn</b> - 号称是相对于esprima性能更优，Webpack用到
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          img.img-logo(src='./assets/babel_logo.png')
          <b>babylon</b> - fork的acorn项目,用于babel
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b>babel-eslint</b> - babel团队维护的，用于配合使用ESLint
    slide(:steps=2, enter='bounceInDown')
      h4 工具中的 AST
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>这些 JavaScript Parser 可以把代码转化为一颗抽象语法树（AST），这颗树定义了代码的结构，通过操纵这颗树，我们可以精准的定位到声明语句、赋值语句、运算语句等等，实现对代码的分析、优化、变更等操作
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          img(src='./assets/ast.png')
      .center
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 2")
            <b>接下来就从 Babel 深入 AST</b>
    slide(:steps=4, enter='bounceInDown')
      h4 Babel 如何通过 AST 读懂 js 代码
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 2")
          <b>代码是什么</b>
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 3")
          <b></b>去掉高亮，其实就是文本，真正赋予这串文本意义的是 <b>编译器</b> 和 <b>解释器</b>
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 3")
          <b></b>而对于 js 这门语言来说 就是 <b>JIT</b> -- <b>「即时编译」</b>
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 4")
          <b></b>编译过程中，同样会经过<b>分词／词法分析</b>, <b>解析／语法分析</b>, <b>代码生成</b>三个阶段
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 4")
          <b>生成抽象语法树需要经过两个阶段：</b>分词(tokenize), 语义分析(parse)
    slide( enter='bounceInDown')
      h4 编译过程
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>Babel的编译过程跟绝大多数其他语言的编译器大致同理，分为三个阶段
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b>1. parse</b> 使用babylon库将源代码转换为AST
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b>2. transform</b> 利用各种插件进行代码转换，如JSX transform将React JSX转换为plain object
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b>3. generate</b> 将AST转换成代码
    slide(:steps=2, enter='bounceInDown')
      h4 编译过程图
      .center.first-content
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          img(src='./assets/ast2.png')
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.center(v-if="step >= 2")
          <b></b>在.babelrc里配置的presets和plugins都是在第2步工作的
    slide(:steps=4, enter='bounceInDown')
      h4 每一步原理
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 2")
          <b>第1步</b> 将源代码 字符串 转换成 抽象语法树
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 3")
          <b>第2步</b> 遍历这个对象所描述的抽象语法树，遇到哪里需要做一下改变，就直接在对象上进行操作。比如我把IfStatement给改成WhileStatement就达到了把条件判断改成循环的效果
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 4")
          <b>第3步</b> 递归遍历这颗语法树，然后生成相应的代码
    slide( enter='bounceInDown')
      h4 第一步(parse 阶段)详解
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.first-content
          <b></b>生成抽象语法树需要经过两个阶段：
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b>1. 分词(tokenize)</b> 将整个代码字符串分割成 语法单元 数组
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b>2. 语义分析(parse)</b> 在分词结果的基础之上分析 语法单元之间的关系
    slide(:steps=3, enter='bounceInDown')
      h4 分词(tokenize)
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>什么是语法单元？
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>被解析语法当中具备实际意义的最小单元，通俗点说就是类似于自然语言中的词语
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 2")
          <b>明天将下雨</b> 不管词性及主谓关系等，拆分情况如何？
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 3")
          <b>明天</b>、<b>将</b>、<b>下雨</b>
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 3")
          <b></b>这就是分词：把整句话拆分成有意义的最小颗粒，这些小块不能再被拆分，否则就失去它所能表达的意义了
    slide(enter='bounceInRight' leave='fadeOut')
      h3 回到代码解析中
      .vue-code.three
        eg-transition(enter='flipInX')
          eg-code-block(lang='html').
            if (1 > 0) {
              alert("if \"1 > 0\"");
            }
      .vue-obj-code.four
        eg-transition(enter='flipInX')
          eg-code-block(lang='html').
            // 分词结果
            // 这个过程没有取巧，就是一个一个字符读取，并配合大量的 if else 判断
            [
              { type: "whitespace", value: "\n" },
              { type: "identifier", value: "if" },
              { type: "whitespace", value: " " },
              { type: "parens", value: "(" },
              { type: "number", value: "1" },
              { type: "whitespace", value: " " },
              { type: "operator", value: ">" },
              { type: "whitespace", value: " " },
              { type: "number", value: "0" },
              { type: "parens", value: ")" },
              { type: "whitespace", value: " " },
              { type: "brace", value: "{" },
              { type: "whitespace", value: "\n " },
              { type: "identifier", value: "alert" },
              { type: "parens", value: "(" },
              { type: "string", value: "\"if 1 > 0\"" },
              { type: "parens", value: ")" },
              { type: "sep", value: ";" },
              { type: "whitespace", value: "\n" },
              { type: "brace", value: "}" },
              { type: "whitespace", value: "\n" },
            ]
    slide(enter='bounceInDown')
      h4 语义分析(parse)
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.first-content
          <b></b>把词汇进行立体的组合，确定有多重意义的词语最终是什么意思、多个词语之间有什么关系以及应该再哪里断句等
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>语义分析的过程又是个遍历语法单元的过程，不过相比较而言更复杂，因为分词过程中，每个语法单元都是独立平铺的，而语法分析中，语句和表达式会以树状的结构互相包含
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>针对这种情况我们可以用栈，也可以用递归来实现
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>看语义分析结果：https://astexplorer.net/
    slide(enter='bounceInRight' leave='fadeOut')
      h3
        | AST 用例
        .inline(class='animated infinite pulse heart')
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.first-content.center
          <b></b>AST in UglifyJS
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.center
          <b></b>AST in ESLint
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.center
          <b></b>AST in Babel
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.center
          <b></b>AST in Webpack
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.center
          <b></b>AST in css
      eg-transition(enter='bounceInRight' leave='bounceOutLeft')
        p.center
          <b></b>解析小程序包/react 的 jsx 语法/虚拟 dom
    slide(enter='bounceInDown')
      h4 AST in UglifyJS
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>UglifyJs 是一个js 解释器、混淆器、压缩器、美化器工具集
      eg-transition(enter='flipInX')
        p 修改代码中的数字 为 16进制代码：
      eg-transition(enter='flipInX')
        eg-code-block(lang='html').
          var UglifyJS = require("uglify-js");

          var code = "var a = 1;";
          var toplevel = UglifyJS.parse(code); <eg-code-comment enter='flipInY'>toplevel就是语法树</eg-code-comment>
          var transformer = new UglifyJS.TreeTransformer(function (node) {

          if (node instanceof UglifyJS.AST_Number) { <eg-code-comment enter='flipInY'>查找需要修改的叶子节点</eg-code-comment>
                  node.value = '0x' + Number(node.value).toString(16);
                  return node; <eg-code-comment enter='flipInY'>返回一个新的叶子节点 替换原来的叶子节点</eg-code-comment>
              };
          });

          toplevel.transform(transformer);  <eg-code-comment enter='flipInY'>遍历AST树</eg-code-comment>
          var ncode = toplevel.print_to_string(); <eg-code-comment enter='flipInY'>从AST还原成字符串</eg-code-comment>

          console.log(ncode); <eg-code-comment enter='flipInY'>var a = 0x1;</eg-code-comment>
    slide(enter='bounceInDown')
      h4 全部 16 进制混淆过的代码
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          img(src='./assets/ug.png')
    slide(:steps=2, enter='bounceInDown')
      h4 AST in ESLint
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>ESLint的检查基于AST，除了通过配置规则来规范代码，还提供了API，使得我们可以利用源代码生成的AST，开发自定义插件和自定义规则

      eg-transition(enter='flipInX')
        eg-code-block(lang='html').
          // 要求赋值语句中，变量名长度大于两位
          module.exports = {
              rules: {
                  "var-length": {
                      create: function (context) {
                          return {
                              // 关注的语法单元类型
                              VariableDeclarator: node => { <eg-code-comment enter='flipInY'>开发插件时是不可能记住这么多语法单元类型的</eg-code-comment>
                                  if (node.id.name.length < 2) {
                                      context.report(node, 'Variable names should be longer than 1 character');
                                  }
                              }
                          };
                      }
                  }
              }
          };
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p(v-if="step >= 2")
          <b></b>https://astexplorer.net/
    slide(enter='bounceInDown')
      h4 AST in Babel
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>Babel是为使用下一代JavaScript语法特性来开发而存在的编译工具，最初这个项目名为6to5，意为将ES6语法转换为ES5
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>发展到现在，Babel已经形成了一个强大的生态
    slide(enter='bounceInDown')
      h4 Babel提供的 API 可以对代码进行AST转换并且进行各种操作
      eg-transition(enter='flipInX')
        eg-code-block(lang='html').
          import * as babylon from "babylon";
          import traverse from "babel-traverse";
          import generate from "babel-generator";

          const code = `function square(n) {
              return n * n;
          }`

          const ast = babylon.parse(code);<eg-code-comment enter='flipInY'>将源代码字符串 转换为 AST 树</eg-code-comment>
          traverse(ast,{<eg-code-comment enter='flipInY'>遍历 AST 树</eg-code-comment>
              enter(path){
                  if(path.node.type === 'Identifier' && path.node.name === 'n'){
                      path.node.name = 'x'
                  }
              }
          })
          generate(ast,{},code)<eg-code-comment enter='flipInY'>还原 AST 树为 代码</eg-code-comment>
    slide(enter='bounceInDown')
      h4 AST in Webpack
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.first-content
          <b></b>Webpack在打包流程中也需要AST的支持，它借助acorn库解析源码，生成AST，提取模块依赖关系
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.first-content
          <b></b>由Rollup提出，Webpack目前也提供支持的一个特性是treeshaking，去除没有引用的模块
    slide(enter='bounceInRight' leave='fadeOut')
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>两份代码
      .vue-code
        eg-transition(enter='flipInX')
          eg-code-block(lang='html').
            //math.js
            export {doMath, sayMath}

            const add = (a, b) => a + b
            const subtract = (a, b) => a - b
            const divide = (a, b) => a / b
            const multiply = (a, b) => a * b

            function doMath(a, b, operation) {
              switch (operation) {
                case 'add':
                  return add(a, b)
                case 'subtract':
                  return subtract(a, b)
                case 'divide':
                  return divide(a, b)
                case 'multiply':
                  return multiply(a, b)
                default:
                  throw new Error(`Unsupported operation: ${operation}`)
              }
            }

            function sayMath() {
              return 'MATH!'
            }
      .vue-obj-code
        eg-transition(enter='flipInX')
          eg-code-block(lang='html').
            //main.js
            import {doMath}
            doMath(2, 3, 'multiply') // 6
    slide(enter='bounceInDown')
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>经过 treeshaking 特性 处理过后
      .vue-code.one
        eg-transition(enter='flipInX')
          eg-code-block(lang='html').
            //math.js
            export {doMath, sayMath}

            const add = (a, b) => a + b
            const subtract = (a, b) => a - b
            const divide = (a, b) => a / b
            const multiply = (a, b) => a * b

            function doMath(a, b, operation) {
              switch (operation) {
                case 'add':
                  return add(a, b)
                case 'subtract':
                  return subtract(a, b)
                case 'divide':
                  return divide(a, b)
                case 'multiply':
                  return multiply(a, b)
                default:
                  throw new Error(`Unsupported operation: ${operation}`)
              }
            }

            function sayMath() {
              return 'MATH!'
            }
      .vue-obj-code.two
        eg-transition(enter='flipInX')
          eg-code-block(lang='html').
            //math.js
            export {doMath}

            const add = (a, b) => a + b
            const subtract = (a, b) => a - b
            const divide = (a, b) => a / b
            const multiply = (a, b) => a * b

            function doMath(a, b, operation) {
              switch (operation) {
                case 'add':
                  return add(a, b)
                case 'subtract':
                  return subtract(a, b)
                case 'divide':
                  return divide(a, b)
                case 'multiply':
                  return multiply(a, b)
                default:
                  throw new Error(`Unsupported operation: ${operation}`)
              }
            }
    slide(enter='bounceInDown')
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>基于AST，进行更为完善的代码覆盖率分析，应当可以实现这样的效果
      .vue-code
        eg-transition(enter='flipInX')
          eg-code-block(lang='html').
            //math.js
            export {doMath, sayMath}

            const add = (a, b) => a + b
            const subtract = (a, b) => a - b
            const divide = (a, b) => a / b
            const multiply = (a, b) => a * b

            function doMath(a, b, operation) {
              switch (operation) {
                case 'add':
                  return add(a, b)
                case 'subtract':
                  return subtract(a, b)
                case 'divide':
                  return divide(a, b)
                case 'multiply':
                  return multiply(a, b)
                default:
                  throw new Error(`Unsupported operation: ${operation}`)
              }
            }

            function sayMath() {
              return 'MATH!'
            }
      .vue-obj-code
        eg-transition(enter='flipInX')
          eg-code-block(lang='html').
            //math.js
            export {doMath}

            const multiply = (a, b) => a * b

            function doMath(a, b, operation) {
              return multiply(a, b)
            }
    slide(:steps=2, enter='bounceInDown')
      h4.center 配置工程师
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.center.first-content(v-if="step >= 2")
          <b></b>其实可以认为我们是在玩 <b>编译器</b>，瞬间就高大上了
    slide(:steps=2, enter='bounceInDown')
      h4 AST in css
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.first-content
          <b></b>PostCSS 提供了一个解析器，它能够将 CSS 解析成抽象语法树（AST）
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.first-content.center(v-if="step >= 2")
          <b></b>自动补充css前缀插件：autoprefixer
    slide(enter='bounceInDown')
      h3 热更新小程序代码
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p.first-content
          <b>原理</b>
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>解析 JavaScript 代码字符串，得到 JavaScript 代码的抽象语法树（AST）。解析可以通过开源库，比如 acornjs/acorn 。结果会解析成标准的 ESTree
      eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
        p
          <b></b>JavaScript 的语法树是有标准格式的 estree/estree ，所以只需要对照这个标准格式进行实现语法树的求值，只要保证 JavaScript 一样的语义，就和 eval / new Function 等效果差不多了
    slide(enter='bounceInDown')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          img(src='./assets/re.gif')
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
    title: 'AST',
    description: '从AST(抽象语法树)角度看前端',
    path: 'AST'
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/src/themes/agrume/agrume';
@import url(https://fonts.googleapis.com/css？family=Raleway);
@import './assets/solarized-light';
#AST{
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
        .one {
          width: 48%;
        }
        .three {
          margin: 300px 0 0 20px;
          width: 35%;
        }
        .vue-obj-code {
          margin-top: 300px;
          float: left;
          width: 35%;
        }
        .two {
          margin: 20px 0 0 20px;
          width: 48%;
        }
        .four {
          margin: 20px 0 0 20px;
          float: right;
          width: 60%;
        }
        .img-logo {
          height: 60px;
          vertical-align: middle;
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
