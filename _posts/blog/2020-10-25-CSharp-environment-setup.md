---
layout: post
title: C#环境配置
date: 2020-10-25
author: EnderHorror
categories:
    - blog
tags: C# 
permalink: /blog/2020/CS-environment-setup
---

本文将介绍常见的`C#`环境配置方法。  

<!--more-->

## 1.下载Visual Studio
https://visualstudio.microsoft.com/zh-hans/vs/
版本选择`Community`社区版

## 2. 安装Visual Studio
开发环境选择`.Net开发`

## 3.注册微软账号
在微软官网注册,如果有的话直接登录

## 4.登录并且启动Visual Studio
创建一个`控制台应用程序`项目

## 5.测试
输入下列代码运行
```
using System;

using System;
namespace HelloWorldApplication
{
    class HelloWorld
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.ReadKey();
        }
    }
}
```
如果输出了Hello World则成功配置环境

----
## 学习资料推荐
1. 书籍推荐 Visual C# 从入门到精通
2. 网站推荐菜鸟教程
https://www.runoob.com/csharp/csharp-tutorial.html

### 基础部分推荐自学
