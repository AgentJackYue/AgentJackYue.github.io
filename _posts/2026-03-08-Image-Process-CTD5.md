---
title: Image Process CTD5
date: 2026-03-08 12:00:00 +0800
categories: [Notes, Image Process]
tags: [Template Matching, Feature Extraction, Local Binary Pattern, Edge Detection, Corner Detector]
media_subpath: /assets/img/posts/
math: true
---

# Feature Extraction for Object Detection and Recognition (I)

## Template Matching

![1773067486836](image/CTD5/1773067486836.png)![1773068213031](image/CTD5/1773068213031.png)![1773068224581](image/CTD5/1773068224581.png)![1773068255081](image/CTD5/1773068255081.png)![1773068277305](image/CTD5/1773068277305.png)

## Similarity Measures

### Sum of Absolute Differences 绝对差和

![1773069816604](image/CTD5/1773069816604.png)Sum of Absolute Differences, O(n)

### Least Square Differences 平方差和

![1773069981796](image/CTD5/1773069981796.png)

### Normalised Cross Correlation 归一化互相关

![1773070057468](image/CTD5/1773070057468.png)

对线性亮度变换（尺度和偏移）不变，值域[-1,1]，1表示完美匹配。

## Drawbacks

![1773072688007](image/CTD5/1773072688007.png)

## Feature Extraction

### Definition

![1773103155768](image/CTD5/1773103155768.png)

![1773103482135](image/CTD5/1773103482135.png)

blobs  斑点  orientation 朝向  attributes/feature/charateristic 特征

### Features Types

![1773106663108](image/CTD5/1773106663108.png)

1. 统计特征（Statistical Features）
* 含义：从像素值或局部区域的数值分布提取统计量（描述分布、集中和离散程度）。
* 图像示例：局部灰度均值、方差、标准差、偏度、峰度、直方图统计。
2. 几何特征（Geometric Features）
* 含义：描述形状、边界、角度、拓扑关系等几何属性。
* 图像示例：轮廓周长、面积、长宽比、形状矩、角点位置（Harris/FAST）、凸包、形状角度。
3. 频域特征（Frequency-Domain Features）
* 含义：将图像从空间域转换到频域（如傅里叶Fourier、小波），在频谱上提取能量、主频成分等。
* 图像示例：傅里叶能量谱、低/高频能量比、小波子带能量、频域主方向。
4. 文本/语言特征（Textual or Linguistic Features）
* 含义：主要用于自然语言处理，但在图像-文本任务或图像标注中可对应标签/描述的词频、n-gram、词性等。
* 图像示例：图像标注中关键短语出现次数、视觉词袋（visual bag-of-words）中“词”频统计。

# Local Binary Pattern

## As a Feature Extractor

![1773174983011](image/CTD5/1773174983011.png)

## 3x3 Patch Example

![1773175306861](image/CTD5/1773175306861.png)

顺时针，左上角开始。

![1773179326211](image/CTD5/1773179326211.png)

## Problem Formulation

![1773182264435](image/CTD5/1773182264435.png)

大于等于中心就=1，小于中心=0

如果是radius半径为2，那么是16个，也就是八个方向各两个

# Edge Detection

![1773182372720](image/CTD5/1773182372720.png)![1773186990958](image/CTD5/1773186990958.png)

derivative 微分  amplitude 振幅/广度

Peak是Edge；
Amplitude represents transition  width. A sharpe edge means a strong edge. A blurry/ramp edge means a weak edge.

## Effects of Noise

![1773193070019](image/CTD5/1773193070019.png)

## Removing the Effects of Noise via Smoothing

![1773195910767](image/CTD5/1773195910767.png)

高斯滤波Gaussian filter to reduce the noise

### Better Approach!

![1773196006583](image/CTD5/1773196006583.png)

$$
G_\sigma(x,y)=\frac{1}{2\pi\sigma^2}exp^{-\frac{x^2+y^2}{2\sigma^2}}
$$

$$
=\left(\frac{1}{2\pi\sigma^2}exp^{-\frac{x^2}{2\sigma^2}}\right) \left(\frac{1}{2\pi\sigma^2}exp^{-\frac{y^2}{2\sigma^2}}\right)
$$

$K\times K$次运算降为$2K$次运算

## 2D Edge Detection using Gradient Operator

![1773228563297](image/CTD5/1773228563297.png)

$I_x\quad I_y$是进行了线性映射的图像，0对应128，从白色到黑色区域，gradient为负数，映射到0-128呈现深色区域；黑色到白色区域，gradient为正数，映射到128-255区域。

梯度强度，平方和开根，丢失方向。
梯度方向，像素值变化最开的方向，$\theta=arctan(\frac{I_y}{I_x})$。梯度方向总与边缘线方向垂直。

### Gradient Magnitude

**Definition: It measures steepness of slope at each pixel (= edge contrast).**

![1773283310124](image/CTD5/1773283310124.png)![1773283326944](image/CTD5/1773283326944.png)

## Canny Edge Detection Algorithm

![1773283909645](image/CTD5/1773283909645.png)

![1773283983156](image/CTD5/1773283983156.png)

![1773284003959](image/CTD5/1773284003959.png)

![1773284194361](image/CTD5/1773284194361.png)![1773285551958](image/CTD5/1773285551958.png)![1773288948645](image/CTD5/1773288948645.png)![1773288966823](image/CTD5/1773288966823.png)![1773289252922](image/CTD5/1773289252922.png)

# Corner Detector

## Harris Corner Detector

![1773289510330](image/CTD5/1773289510330.png)

## Feature/Keypoint Detection

It is also refereed to Keypoints Localisation.
In this example, keypoints (feature of interests) are used to track face in a video.

![1773290677225](image/CTD5/1773290677225.png)

## Corners Point Detection

![1773290939263](image/CTD5/1773290939263.png)

$$
\begin{bmatrix} -1 & 0 & 1\\  -1 & 0 & 1\\  -1 & 0 & 1\end{bmatrix}=\begin{bmatrix}-1 & 0 & 1\end{bmatrix} \times \begin{bmatrix}1 \\ 1 \\ 1\end{bmatrix}
$$

**Prewitt Filter/Convolution** 
    水平梯度/垂直边缘
    水平梯度（Horizontal Gradient）$\times$ 均值平滑（Blurry Smoothing）

![1773282600317](image/CTD5/1773282600317.png)

**Sobel Filter/Convolution**

![1773282647821](image/CTD5/1773282647821.png)

**Laplacian**

![1773282776010](image/CTD5/1773282776010.png)![1773282855005](image/CTD5/1773282855005.png)

## 2D Gradient Space

![1773291950182](image/CTD5/1773291950182.png)

cluster 簇，聚类
