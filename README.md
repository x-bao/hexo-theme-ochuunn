Ochuunn
=======

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)

Feature
-------

* 文章界面很清晰，很适合阅读
* Google Search Console
* Google Analytics
* ~~[LiveRe](https://livere.com/) (我去掉了disqus, 国内不翻墙压根连不上)~~
* 基于 `Git Issues` 的评论系统：[gitment](https://github.com/imsun/gitment)
* 打赏
* 页面滚动快捷键，`console`下有惊喜😎

	| 快捷键 | 详情		|
	|:-----:|-----------|
	| j 	| 向下滚动	|
	| k 	| 向上滚动	|
	| n 	| 向下滚的更多|
	| m 	| 向上滚的更多|
	| h 	| 回到博客首页|
	| [ 	| 前一篇文章	|
	| ] 	| 后一篇文章	|

Demo
----

[I am Oliver](http://ochukai.me)

[San Baofeng's](https://sanbf.cn)

Installation
------------

```Bash
$ npm install hexo-renderer-pug --save
$ cd /path/to/blog
$ git clone https://github.com/ochukai/hexo-theme-ochuunn.git themes/ochuunn
```

修改相关的配置文件 */path/to/blog/_config.yml*

```yml
## Themes: https://hexo.io/themes/
# theme: landscape
theme: ochuunn
```

Todo
----

- [ ] 添加 category
- [ ] 添加 tag 页面

Update
------

- 修改首页导航，效果更加炫酷
- 首页导航响应式处理，移动端显示更优秀
- 文章详情页面添加快速翻页，快速选择前/后一篇文章
- 加入更多快捷键
- 使用 [gitment](https://github.com/imsun/gitment) 替换原始的 [LiveRe](https://livere.com/)
	- 评论更加简介
	- 支持 **Markdown** 😱😱😱
- 页面优化
	- 减小顶部 `padding`，空间利用率提高
	- 代码块加入语言类型显示，代码类型更清晰
	- 展现代码块行号，更有利于读码
	- 代码块样式修改
	- 优化表格样式，更加简洁
	- 优化单行代码块显示样式，更加简洁清晰
- bug fix
	- 快速翻页优化，fix `hover` 后文章标题可能会抖动问题
	- fix 使用 `gitment` 之后，在填写评论时，绑定的快捷键导致页面滚动问题
	- fix 文章列表页没有评论情况下控制台报错
	- fix 小屏情况下，首页导航高度无法收缩到 0 问题

License
-------

MIT is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
