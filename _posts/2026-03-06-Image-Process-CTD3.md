---
title: Image Process CTD3
date: 2026-03-06 12:00:00 +0800
categories: [Notes, Image Process]
tags: [Image Enhancement, Image Noise, Spatial Domain,  Gamma Transformation, Contrast Enhancement, Edge Detection, Filter]
media_subpath: /assets/img/posts/
math: true
---

# Image Enhancement and Restoration

**Image Enhancement:** The objective is to improve the quality of an image (e.g contrast, sharpness).

**Image Restoration:** The objective is to restore a degraded image to its original form.

![1773320399281](image/CTD3/1773320399281.png)

optical 光学的   Additive Noise 加性噪声：指在原始图像信号上**直接叠加**上去的随机干扰信号

quantization 量化误差：将连续的颜色/亮度信号转换为数字信号（离散值）时产生的损失。

## Image Enhancement

![1773325318504](image/CTD3/1773325318504.png)

## Image Restoration

Restore degraded image: When the image has high level of noise.

![1773325613585](image/CTD3/1773325613585.png)

## Image Noise

![1773349723573](image/CTD3/1773349723573.png)1. Gaussian Noise 高斯噪声 / **Normal Noise** 正态分布噪声****

* **物理来源** ：电子电路的受热（热噪声）、光照过弱（感光元件感光不足）产生的电子波动。
* **特征** ： **“无处不在、全画分布”** 。它像一层均匀的细沙撒在整张照片上。
* **外观** ：呈现为细小的、深浅不一的 **颗粒感** 。
* **数学要点** ：噪声的强度符合正态分布（高斯分布）。大部分像素点的亮度偏移较小，极少数偏移很

**2.Impulse Noise (脉冲噪声 / 椒盐噪声 Salt-and-Pepper)**

* **物理来源** ：传感器硬件故障（坏点）、数模转换中的剧烈突跳、传输过程中的信号丢失。
* **特征** ： **“极端、孤立的点”** 。它不是让像素稍微变亮变暗，而是直接把像素变成极限值。
* **外观** ：画面上突然出现的 **白点（Salt 盐）**或**黑点（Pepper 胡椒）** 。原图的画面内容在这些点上被完全覆盖了。
* **处理方法** ：通常用**中值滤波 (Median Filter)** 效果最好。

**3.Speckle Noise (乘性噪声 / 斑点噪声)**

* **物理来源** ：常见于主动式成像系统，如 **雷达 (SAR)、超声波 (Ultrasound)** 。它是由于相干干扰产生的。
* **特征** ： **“遇强则强”** 。它是**乘性 (Multiplicative)** 的，即：噪声大小 = 原像素值 × 干扰系数。
* **外观** ：在亮度高的地方噪点特别明显，呈现出高对比度的斑点状颗粒。It appear on the image as grainy pattern with high contrast spots.
* **对比** ：高斯噪声是“加法”（不管天黑天亮，加的灰尘是一样的）；斑点噪声是“比例”（天越亮，噪点越猛）。

**4. Quantization Noise (量化噪声 / 位深缩减噪声)**

* **物理来源** ：数字化过程中的精度丢失。比如将 16位色彩的原始数据强制压缩存为 8位（甚至更低，如 4位）。
* **特征** ： **“细节消失、阶梯化”** 。它不是外部飞入的噪点，而是图像本身精细度的丧失。
* **外观** ：原本平滑的渐变（如夕阳的天空）变成了像台阶一样的 **色带 (Banding)** 。你会发现微小的纹理和细节全部变平滑、变模糊了。
* **理解** ：这更像是一种“精度降级”导致的伪影，而不是随机干扰。

## Image Transformation: Spatial Domain vs Transform Domain

![1773351854168](image/CTD3/1773351854168.png)

**1. Spatial Domain（空域/空间域）**

**类比：** 就像在一张照片上直接用画笔改颜色。

* **核心操作** ：直接对图像的像素点 (x,y)**(**x**,**y**)** 进行加减乘除。
* **方法分类** ：

1. **点运算 (Intensity Transformation)** ：
   * **逻辑** ：每个像素根据**自己**的值变。
   * **例子** ：二值化（大于128变白，小于128变黑）、拉高对比度（让暗的更暗，亮的更亮）。
2. **邻域运算 (Spatial Filtering)** ：
   * **逻辑** ：每个像素根据**周围邻居**的值来变。
   * **例子** ：
   * **平滑/模糊** ：取邻居平均值。
   * **锐化** ：减去邻居的平均值（突出边缘）。
   * **中值滤波** ：取邻居里的中位数（专门对付“椒盐噪声”）。

**2. Transform Domain（变换域）**

**类比：** 就像把一段音乐转化成“五线谱”。你在五线谱上删掉最高的音

符，再把它弹回音乐，声音就变闷了（去噪）。

* **核心逻辑** ：

1. **变换 (Transform)** ：把图像通过数学变换（如  **傅里叶变换 Fourier Transform** ）从“像素图”变成“频谱图”。
2. **处理** ：在频率的世界里，低频代表“背景/大致轮廓”，高频代表“边缘/噪声”。
3. **反变换 (Inverse Transform)** ：处理完后再还原回图像。

* **为什么要这么麻烦？**
  * **效率** ：有些复杂的空域卷积，在频域只是简单的乘法。
  * **精准** ：在空域很难区分什么是噪声、什么是细节，但在频域，噪声（高频点）一眼就能看出来。

## Spatial Domain Processes

![1773355430406](image/CTD3/1773355430406.png)

### Contrast Stretching Function![1773355608598](image/CTD3/1773355608598.png)

### Power-law (Gamma) Transformation Function 幂律变换/伽马变换

![1773356506667](image/CTD3/1773356506667.png)**r** range: [0,1] 所以$ \gamma < 1$时output是变大的，而$ \gamma > 1$时output是变小的
**Example for Gamma = 3：**![1773357436628](image/CTD3/1773357436628.png)squash/ compress 压缩  penalize/suppress 压制  favorize 偏爱 Emphasize 强调 enhance/boost 增强 expand/stretch 拉伸（expands the low intensity range $\gamma < 1$)![1773357866753](image/CTD3/1773357866753.png)

**Example of various Gammas
![1773358539897](image/CTD3/1773358539897.png)![1773358557284](image/CTD3/1773358557284.png)**

### Intensity-Level Slicing Transformation **灰度级分层/切片**

![1773359635378](image/CTD3/1773359635378.png)第一种方式：Binary Slicing (二值化分层)
	特点：非黑即白。
	用途：**Study the shape characteristics，detect blockage
	**理解 ：当你只想看血管的轮廓、形状、是否有缺口（堵塞 Blockages）时，这种方法最有效。它去除了背景干扰（如骨骼、肌肉），让你一眼看到那个物体的几何形状

第二种方式：Background-Preserved Slicing (保留背景分层)
	特点：突出重点，但不丢掉环境。
	用途 ：**Measure actual flow as a function of time** (测量流量随时间的变化)
理解 ：在观察对比剂（造影剂）在血管随时间流动的序列图中，你需要知道造影剂 相对于背景的位置 。如果把背景全变黑（第一种方式），你就失去了空间参考坐标。![1773360250577](image/CTD3/1773360250577.png)

### Histogram Equalization (HE) for Contrast Enhancement

![1773361220376](image/CTD3/1773361220376.png)![1773361333241](image/CTD3/1773361333241.png)

## Noise Suppression by Mean Filtering

![1773363007486](image/CTD3/1773363007486.png)注意：这里的kernel是翻转了的

### Frame Title

![1773364123101](image/CTD3/1773364123101.png)

归一化系数$\frac{1}{9}$
At the cost of the sharpness of edges. The Larger kernel is，the more blurring gragh will be 。

### Example

![1773364305210](image/CTD3/1773364305210.png)![1773364352881](image/CTD3/1773364352881.png)

### Linear Filters

![1773364574336](image/CTD3/1773364574336.png)
**不变**
![1773364596365](image/CTD3/1773364596365.png)
左移
![1773364502795](image/CTD3/1773364502795.png)

## Edge Enhancement via Convolving with Kernels

### 水平边缘检测

![1773364840596](image/CTD3/1773364840596.png)正交性，kernel竖直方向梯度变化，检测水平的边缘

### 垂直边缘检测

![1773364932840](image/CTD3/1773364932840.png)

### Laplacian Filter

![1773367398725](image/CTD3/1773367398725.png)

## High-pass Filter and Edge Sharpening

![1773367465689](image/CTD3/1773367465689.png)![1773367509955](image/CTD3/1773367509955.png)

## Smoothing using Gaussian Kernel as a Low-Pass Filter

![1773368589955](image/CTD3/1773368589955.png)![1773368613449](image/CTD3/1773368613449.png)

处理高斯噪声

## Noise Suppression by Median Filtering

![1773368815382](image/CTD3/1773368815382.png)![1773368830789](image/CTD3/1773368830789.png)

处理Impulse噪声椒盐噪声

## Frequency Domain Techniques

![1773369260136](image/CTD3/1773369260136.png)![1773369283412](image/CTD3/1773369283412.png)

### 1. 核心工具：Butterworth 滤波器 (Butterworth Filters)

#### 为什么需要 Butterworth？ (对比背景)

* **Ideal Filter (理想滤波器)**：像一堵墙，强制切断某个频率。这会导致图像出现 **振铃效应 (Ringing effect)**——在边缘出现类似水波纹的假影。
* **Butterworth Filter**：在通过带和阻断带之间提供 **平滑过渡 (Transition)**。它既能有效滤除噪声，又几乎不产生振铃效应，是工业界的平衡方案。

---

#### 2. 公式拆解：$BL$ (低通) vs. $BH$ (高通)

##### **BL(u, v) —— 低通 (Low-pass)**

用于：**去噪、平滑、模糊**（让低频通过）。

$$
BL(u, v) = \frac{1}{1+ c [D(u, v)/D_T]^{2n}}
$$

* **$D(u, v)$**：点 $(u, v)$ 到频率中心（低频区）的距离。
* **$D_T$ (Cut-off frequency)**：截止频率（阈值半径）。
* **逻辑**：

  * 当距离 $D < D_T$ 时，分母接近 1，结果趋近 **1 (通过)**。
  * 当距离 $D > D_T$ 时，分母迅速变大，结果趋近 **0 (阻断)**。

##### **BH(u, v) —— 高通 (High-pass)**

用于：**提取边缘、锐化**（让高频通过）。

$$
BH(u, v) = \frac{1}{1+ c [D_T/D(u, v)]^{2n}}
$$

* **对比**：中括号内翻转为 $D_T/D$。
* **逻辑**：距离中心越远（高频），结果越趋近 **1 (通过)**。

---

#### 3. 三个核心调节参数 (必考点)

| 参数 | 名称 | 作用与物理意义 |

|:---|:---|:---|

|**$D_T$**|**截止频率 (Threshold)**| 决定“圈”的大小。由**图像能量 (Power)** 决定，通常选在包含总能量 90% 或 95% 的位置。 |

|**$n$**|**阶数 (Order)**|**控制陡峭程度 (Steepness)**。$n$ 越大越接近理想滤波器，但 $n > 20$ 会产生振铃效应。通常取 **$n=1$ 或 $2$**。 |

|**$c$**|**系数 (Coefficient)**| 调节过渡位置的常数。 |

![1773369436499](https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/Jack_YXMH/Desktop/France/Image%20Process/Slides/image/CTD3/1773369436499.png)![1773370603406](image/CTD3/1773370603406.png)


### 2. 能量占比分析：$\beta$ 的指导作用

#### 能量占比公式 (Power Ratio)

$$
\beta = \frac{\sum_{(u,v)\in S} |F(u, v)|^2}{\sum_{\forall(u,v)} |F(u, v)|^2}\times100
$$

* **分子**：保留区域 $S$（即 $D_T$ 圆圈内）的所有频率点的能量总和。
* **分母**：整张图所有频率点的总能量（包含所有细节与背景）。
* **$|F(u, v)|^2$**：**功率谱 (Power Spectrum)**，代表该频率成分的强弱。

#### 为什么在考试中需要计算 $\beta$？

* **痛点**：盲目选取 $D_T$（如 $D_T=50$）无法评估对画质的损害。
* **解决方法**：
  1. 预设目标：如“保留原图 95% 的能量”（$\beta = 95$）。
  2. 从中心（低频）向外扩大圆圈，累计能量直到达到 95%。
  3. 此时的圆半径即为最科学的 **$D_T$**。

> **小贴士**：在自然图像中，低频（背景）占据了 90% 以上的能量，而高频（边缘和噪声）能量占比极小。

## Filtering with the Butterworth Filter

![1773370788522](image/CTD3/1773370788522.png)![1773370794787](image/CTD3/1773370794787.png)![1773370820852](image/CTD3/1773370820852.png)
