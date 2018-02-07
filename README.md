Ochuunn
=======

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)

Feature
-------

* 文章界面很清晰，很适合阅读
* Google Search Console
* Google Analytics
* [LiveRe](https://livere.com/) (我去掉了disqus, 国内不翻墙压根连不上)
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

License
-------

MIT is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).



