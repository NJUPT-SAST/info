---
 layout: post
 title: 如何征服DAC与李沙育图形
 date: 2021-12-11
 author: 刘泽天
 permalink: /blog/2021/How-to-conquer-DAC
 categories:
     - blog
 tags: STM32

---

<!--more-->
## 如何征服DAC与李沙育图形

## DAC是什么

DAC，顾名思义就是数字转模拟，这个功能一般模拟用得比较多。通院电赛A题就用到了这个功能。

我们的STM32F401和STM32F411是不具备这个功能的，在这里我用了STM32F407。

## DMA是什么

#### DMA是什么

 DMA就是单片机把数据自动在内存与外设之间搬运的搬运工。它无需经过CPU处理，因而节省了大量资源且速度更快。把一个地址给DMA，并告诉它要读的数据个数就可以让它循环搬运某组数据。

#### 为什么我用了DMA来DAC

DMA速度更快，在输出波形时能够达到更高频率，占用更少CPU资源。

## 先来说一下DAC

这里直接贴上手册：

DAC 模块是 12 位电压输出数模转换器。DAC 可以按 8 位或 12 位模式进行配置，并且可与 

DMA 控制器配合使用。在 12 位模式下，数据可以采用左对齐或右对齐。DAC 有两个输出 

通道，每个通道各有一个转换器。在 DAC 双通道模式下，每个通道可以单独进行转换；当 

两个通道组合在一起同步执行更新操作时，也可以同时进行转换。可通过一个输入参考电压

引脚 VREF+ （与 ADC 共享）来提高分辨率。

## 实践开始

### 配置：

#### 1.先进CubeMX把基础的配好

#### 2.Analog中点开DAC并把通道打开（用几个就开几个）

<img src="..\..\assets\img\blog\How-to-conquer-DAC\DACDMA01.png"/>

#### 3.Timers中点开TIM6（TIM7），把Trigger Event Selection 改成Update Event

PSC和ARR可以像定时器中断一样设置，这里定时器用来触发DMA（<u>DMA被触发的频率和定时器中断计算方式一样</u>，注意，这里的频率并不是输出波形的频率，还要<u>除以你的数组长度</u>（更确切地说是你让DMA搬运的个数））。

<img src="..\..\assets\img\blog\How-to-conquer-DAC\DACDMA02.png"/>

#### ４.回到DAC，如图配置（用几个就配几个）

<img src="..\..\assets\img\blog\How-to-conquer-DAC\DACDMA03.png"/>

**<u>Output Buffer 启用后可增加其输出能力，但输出电压范围会变小，我们这边不需要太大输出，所以我没开</u>**

这边DAC中有一个 Wave generation mode  。只想要输出三角波直接可以在这里面选择Triangle wave generation ，这是自带的三角波发生器。（可以看这里[BV1Yi4y1s7eN](https://b23.tv/JW7N2Oq) ）

<img src="..\..\assets\img\blog\How-to-conquer-DAC\DACDMA04.png"/>

#### 5.一些要注意的点

我在做题时发现，似乎一个定时器只能对一个DAC通道，而且其定时器似乎也不会产生中断，这里建议两个通道分别用两个定时器控制，这样也方便两个输出频率控制。

#### 6.生成代码并打开

### 代码：（这边演示2个通道都用）

#### 1.首先打开计时器，然后开始DAC

在  /* USER CODE BEGIN 2* / 与 / *USER CODE END 2 */ 之间添加

```c
HAL_TIM_Base_Start(&htim6);//打开计时器
HAL_TIM_Base_Start(&htim7);
HAL_DAC_Start_DMA(&hdac,DAC_CHANNEL_1,(uint32_t*)（你的数组）,（你的数组的长度）,DAC_ALIGN_12B_R);//开始DAC
HAL_DAC_Start_DMA(&hdac,DAC_CHANNEL_2,(uint32_t*)（你的数组）,（你的数组的长度）,DAC_ALIGN_12B_R);
```

这样单片机就在就A4、A5口输出了。

<img src="..\..\assets\img\blog\How-to-conquer-DAC\DACDMA10.JPG"/>

如果要停止DAC

```
HAL_DAC_Stop_DMA(&hdac,DAC_CHANNEL_1);
HAL_DAC_Stop_DMA(&hdac,DAC_CHANNEL_2);
```

如果要更换DMA搬运的地址的话，务必停止DAC后再开。

#### 有关波形

波形是由你的数组决定的，数组中每一个数对应模拟的电压，不断根据数组改变当前电压，就形成了波形。

至于如何写出自己的波形，直接手写也是可以的，对一些能用数学表达出来的波形，就可以自己编个程序来生成。要注意，我们用的是12位（DAC_ALIGN_12B_R），因此数组中数只能在**<u>0~4095</u>**（2^12-1）中。这种方式可以生成一个固定的波形。

那如何让波形改变呢？

如果只是改变其频率、振幅和相位，因为是最基本的伸缩平移，直接以原数组为基础，把每位数字处理后放到新的数组里去，然后用这个新的数组去控制DAC就好了。改频率我是通过改定时器来实现的（比如：`TIM6->PSC=8；`）

如果是要改变占空比、三角波上下的时间，就可以把你在C中写的程序搬进单片机，在占空比之类的数据变化时运行一遍，生成数组。

## 李沙育图形

##### 百度这样说：

将被测正弦信号和频率已知的标准信号分别加至示波器的Y轴输入端和x轴输入端，在示波器显示屏上将出现一个合成图形，这个图形就是李沙育图形。李沙育图形随两个输入信号的频率、相位、幅度不同，所呈现的波形也不同。当两个信号相位差为90°时，合成图形为正椭圆，此时若两个信号的振幅相同的话，合成图形为圆；当两个信号相位差为0°时，合成图形为直线，此时若两个信号振幅相同则为与x轴成45°的直线。

<img src="..\..\assets\img\blog\How-to-conquer-DAC\DACDMA11.JPG"/><img src="..\..\assets\img\blog\How-to-conquer-DAC\DACDMA12.JPG"/><img src="..\..\assets\img\blog\How-to-conquer-DAC\DACDMA13.JPG"/><img src="..\..\assets\img\blog\How-to-conquer-DAC\DACDMA14.JPG"/><img src="..\..\assets\img\blog\How-to-conquer-DAC\DACDMA15.JPG"/><img src="..\..\assets\img\blog\How-to-conquer-DAC\DACDMA16.JPG"/>

###### 

##### 科协电子部部员 刘泽天

##### 2021/12/11
