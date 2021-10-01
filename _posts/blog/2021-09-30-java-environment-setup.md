---
 layout: post
 title: Java 环境安装教程（自动配置环境变量）
 date: 2021-09-30
 author: linyuqi9, Jisu-Woniu
 categories:
     - blog
 tags: Java Tutorial
 permalink: /blog/2021/java-environment
---

注意，本文包含 Java 开发与运行环境配置，请选择自己需要安装的环境。

<!--more-->

## Java 下载安装

- 适用平台：Windows，macOS
- 演示环境：Windows 11
- 配置步骤：
  1. 使用浏览器进入 Eclipse Adoptium OpenJDK 下载页面（<https://adoptium.net/archive.html>）选择需要下载的版本（如不确定需要下载哪个版本，推荐下载 OpenJDK 11）。
  2. 根据自己的系统配置选择对应版本的安装包，若要安装运行环境，请选择 JRE，若要下载开发环境，请选择 JDK。
     > 若官网下载速度慢，可以使用[清华大学提供的镜像](https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/)
  3. 运行安装包，在安装向导界面中点击“安装”并等待程序自动安装。
  4. 使用默认设置完成安装，Windows 系统请确保 Add to PATH 和 Set JAVA_HOME variable 已勾选。
  
     ![安装过程截图](/info/assets/img/blog/java-environment/java-installation.png)

     ![安装完毕截图](/info/assets/img/blog/java-environment/java-installation-completed.png)

  5. 若安装 JDK，请打开系统终端，执行 `java --version` 查看是否安装成功。

     ![java --version 执行结果](/info/assets/img/blog/java-environment/java-version.png)
