---
layout: post
title: 使用帮助
permalink: /help
---

## 这是什么？
欢迎来到南京邮电大学大学生科学技术协会（以下简称 SAST）的信息公示站，在这里您可以寻找到：
* 我们已经举办的、正在举办的和将要举办的活动
* 科协成员和嘉宾撰写的技术博客，心得体会和其他文章
* 公开分享的讲义、资料和有价值的链接

本站由科协技术中心共同维护，您也可以阅览本文档的[如何贡献](#如何贡献)一节来参与贡献。

本站的搭建离不开以下工具和开源项目的支持，在此一并鸣谢：
* [清华大学 TUNA 协会网站](https://github.com/tuna/tuna.moe)
* [Jekyll](https://jekyllrb.com/)
* [Font Awesome](https://fontawesome.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Lato 字体](https://fonts.google.com/specimen/Lato)
* [Github Page](https://pages.github.com/)

## 如何贡献
如果您有想要发表在本站的文章，可以通过以下两种方式来投稿。请注意，本站的所有内容将遵循 [署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 协议公开，这意味着您的作品也会被采用该协议进行分享。

### 使用 Git
您可以将您的文章以 Markdown 的格式提交到我们的 Git 仓库，遵循以下的步骤：

打开我们的[仓库](https://github.com/NJUPT-SAST-Technology-Center/public.git)并 Fork 我们的项目到您的 Github 账号。

```bash
git clone https://github.com/NJUPT-SAST-Technology-Center/public.git
git remote add <YOUR-GITHUB-USERNAME> <YOUR FORKED URL>
git checkout -b <BRANCH-NAME>
```
注意！不要将您的改动直接放置在 master 分支。

将您的 Markdown 文稿放置在 `_post/blog` 目录内，并使之符合[写作格式](#写作格式)一节的要求。
如果您有需要插入的图片，我们建议您将其放置在 `assets/img/blog/<YOUR-TITLE>` 内一并提交。

```bash
git add --all
git commit --message "YOUR COMMIT MESSAGE"
git push --set-upstream <YOUR-GITHUB-USERNAME> <BRANCHNAME>
```
提交信息格式可以为 `add post: <TITLE>`

然后前往我们的仓库，提交 Pull Request

我们会尽快处理您的请求，如果有什么不合理之处，也会在 Pull Request 的讨论区回复。

### 发送邮件
如果您不熟悉 Git 操作，也可以通过将您的文章发送到 [SAST 邮箱](mailto:sast@njupt.edu.cn)来投稿。但是，我们建议您使用 Git 提交，以便更好地追踪和记录您的贡献。

### 其他贡献
如果您发现了本站的一些 Bug 和使用体验问题，可以在 Github 仓库的 issue 区反馈，当然，您也可以直接提交一个 Pull Request，流程与投稿文章大致类似，只不过，您可能需要在本地设置 Jekyll 环境并充分测试您的改动。

如果您希望举办活动，参加科协以进一步贡献，也可以发送邮件深入咨询。

## 写作格式
我们推荐您下载合适的 Markdown 编辑器，如 [Typora](https://typora.io/) 并花些时间来学习一下 Markdown 的[基本语法](https://www.runoob.com/markdown/md-tutorial.html)。

本站使用 Jekyll 进行驱动，因此，您需要将您的 Markdown 文件改动来符合解析要求。

1. 将您的文章文件名改为 `YYYY-MM-DD-TITLE` 的格式
2. 在您的文档开头添加元信息，具体格式为
   ```
   ---
    layout: post
    title: <YOUR-TITLE>
    date: <YYYY-MM-DD>
    author: <YOUR-NAME>
    permalink: /blog/2020/<LINK-NAME>
    categories:
        - blog (or event)
    tags: <TAG1>, <TAG2>, ...
    thumb: <LINK-TO-THUMB>
    excerpt: <DESCRIPTION>
    bilibili: <LINK-TO-VIDEO> (only active when this is a event)
    slides: <LINK-TO-SLIDE> (only active when this is a event)
    podcast: <LINK-TO-PODCAST> (only active when this is a event)
    poster: <LINK-TO-POSTER> (only active when this is a event)
    place: <EVENT-PLACE> (only active when this is a event)
   ---
   ```
    其中 `layout`、 `author` 和 `permalink` 为必填项。如果您希望以您的文章开头作为摘要，请在合适的地方添加 `<!--more-->` 标签。
3. 插入图片的格式为： `![DESCRIPTION](/public/assets/img/blog/<TITLE>/<FILE-NAME>.png)`，并将相应图片移至该目录下。

其余与一般 Markdown 语法相同，本站支持插入行内和块级公式。

## 信息链接
搭建 Jekyll 环境，请参照官网的文档：https://jekyllrb.com/docs/installation/

欢迎访问 SAST 的官方 Github： https://github.com/NJUPT-SAST-Technology-Center

我们整理了科协人的个人博客，目录在：https://github.com/NJUPT-SAST-Technology-Center/links