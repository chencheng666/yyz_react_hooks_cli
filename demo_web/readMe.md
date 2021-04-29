# 轻应用DEMO


## 技术栈
- React: [文档](https://react.docschina.org/)
- React-router-dom: [文档](http://react-guide.github.io/react-router-cn/docs/API.html)
- Mobx: [文档](https://cn.mobx.js.org/)
- tinper: [UI组件库](http://bee.tinper.org/)
- eslint规则
    - eslit规则: https://eslint.bootcss.com/docs/rules/
    - vscode 修改tab为4个空格
        ```
        "editor.tabSize": 4,
        "editor.detectIndentation": false,
        ```

## 本地开发环境
1. 本地hosts新增: 127.0.0.1 test.yyuap.com
2. npm i
3. npm run dev
4. 浏览器访问：http://test.yyuap.com:5555

## 跨域
- 后端配置cors跨域

## 测试环境打包
- npm run daily-build

## 预发布环境打包
- npm run pre-build

## 生产环境打包
- npm run dist-build

## 目录别名
- @: './src'
- @utils: './src/utils'
- @models: './src/models'
- @pages: './src/pages'
- @assets: './src/assets'
- @components: './src/components'

## 获取当前环境
- process.env.NODE_ENV
    - development:  本地开发环境
    - test:         测试环境
    - u8cDaily:     u8cDaily环境
    - yonsuite:     
    - pre:          预发布环境
    - production:   生产环境

## 目录结构
```
├── jsconfig.json
├── .babelrc
├── package-lock.json
├── package.json
├── postcss.config.js
├── readMe.md
├── src
│   ├── App.js                                      # 入口文件
│   ├── assets                                      # 静态资源，参与打包编辑
│   │   ├── images
│   │   └── style
│   │       ├── antd-theme.js                       # Antd的重置样式，在webpack/base.js里进行了覆盖
│   │       ├── common.css                          # 全局样式
│   │       └── reset.css                           # 重置样式
│   ├── components                                  # 公共组件
│   ├── config                                      # 配置文件
│   │   ├── axios.js                                # http 请求拦截
│   │   └── config.js                               # 域名配置文件
│   ├── lang                                        # 多语
│   │   ├── en.js
│   │   ├── index.js
│   │   ├── zh_cn.js
│   │   └── zh_tw.js
│   ├── main.js                                     # 主入口文件
│   ├── models                                      # model层，所有的请求放入这里，业务组件里只处理返回结果
│   │   └── home
│   ├── pages                                       # 页面
│   │   └── home
│   ├── router                                      # 路由配置
│   │   └── index.js
│   ├── static                                      # 静态资源，不参与打包，直接复制到打包后的dist目录
│   ├── store                                       # 状态管理
│   │   ├── config.js                               # 域名配置相关
│   │   ├── index.js
│   │   └── user.js                                 # 用户信息相关
│   ├── template
│   │   └── index.html                              # 模板文件
│   └── utils                                       # 工具类
│       ├── browser.js
│       ├── index.js
│       └── time.js
└── webpack
    ├── base.js
    ├── dev.js
    ├── pre.js
    ├── prod.js
    └── test.js
```

## 多语方案
web 端多语方案，采用了平台的 [ac-lang-cn](https://package.yonyoucloud.com/package/detail/ac-lang-cn) 语言包的方案，此包放在了用友云的仓库。

### 业务方面
1. 先登录多语平台预发布： https://yonsuite-pre.diwork.com/#/ 【账号：17839985126 / yonyou@1988】
2. 再打开多语平台预发布: https://3ec-y3me-pre.diwork.com/multilang-fe/#/dev
3. 左侧找到属于自己的业务节点，添加对应的中文资源，后续有同事会翻译成对应的英文、繁体
4. 在左侧节点找到此应用对应的多语服务编码（如：YS_OA_XTHUATI、YS_OA_XTGONGWEN 等）

### 代码方面
#### 安装
1. npm install ynpm-tool -g
2. ynpm install ac-lang-cn --save
3. 修改main.js里的 LANG_MODULE_CODE 变量值，替换成自己业务的多语的服务编码
