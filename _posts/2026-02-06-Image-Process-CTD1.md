---
title: Image Process CTD1
date: 2026-02-06 12:00:00 +0800
categories: [Notes, Image Process]
tags: [Histogram Equalization, Segmentation, Threshold, Otsu’s Algorithm]
media_subpath: /assets/img/posts/
math: true
---

# Lecture1

## Image Formation，Acquisition, and Representation

### Digital Image Acquisition

![1770252932663](image/CTD1/1770252932663.png)

### Image Representation

![1770252961472](image/CTD1/1770252961472.png)

**灰度/色彩分辨率（bit depth）**：每个像素能表示多少级灰度/颜色（0–255 之类）

黑色 0  白色 255

![1770253091607](image/CTD1/1770253091607.png)

**f( 行数row, 列数column )**

![1770253406718](image/CTD1/1770253406718.png)

### Spatial Resolution（空间分辨率）

![1770253453616](image/CTD1/1770253453616.png)

fine 精细的， coare 粗略的

### Digital Image

![1770253838734](image/CTD1/1770253838734.png)

模拟信号转化数字信号。

**Sampling 采样：is to sample the function in both coordinatesxandy.**

**Quantization 量化：digitizing the amplitude values into discrete quantities.**

## Histograms of Images

### Histograms

![1770254312390](image/CTD1/1770254312390.png)

bin 箱, interval  间隔

### Probability and Cumulative Density Functions

![1770254747274](image/CTD1/1770254747274.png)

（Left：PDF    Right：CDF）

**Probability  Density Functions  概率密度函数**
	连续变量 (X) 的 PDF 记为 $f(x)$：
		$f(x)$不是概率本身，是“密度”

    单点概率:$P(X=x)=0$

    区间概率：$P(a\le X\le b)=\int_a^b f(x),dx$

    归一性：$\int_{-\infty}^{\infty} f(x),dx=1$

图像里如果把亮度看作连续量并做理论推导，有时会用 (f(r))（r 为连续灰度）来讲；但实际 8-bit 存储最后还是离散的 (p(i))。

 **Cumulative Density Functions  累积分布函数**
	$F(x)=P(X\le x)$

离散（用 PMF 求和）

    $cdf(i)=F(i)=\sum_{j=0}^{i} h(j)$
	单调不减
	$cdf(L-1)=1$（归一化情况下）

    若你用的是未归一化直方图计数$h(j)$：
	$CDF(i)=\sum_{j=0}^{i} h(j)$

    这时$CDF(L-1)=N$（最后等于总像素数），它只是“累积计数”，不是概率意义上的 0~1 CDF。

 连续（用 PDF 积分）

    若 (X) 连续且 PDF 为$f(x)$：$F(x)=\int_{-\infty}^{x} f(t),dt$

### Histogram Equalization 直方图均衡化

![1770257402624](image/CTD1/1770257402624.png)

**Example**

![1770336937045](image/CTD1/1770336937045.png)

**1、统计直方图
2、归一化，算PDF
3、累加得CDF
4、构造映射，乘L-1**

![1770340386773](image/CTD1/1770340386773.png)

ceil 向上取整  floor 向下取整

![1770339929493](image/CTD1/1770339929493.png)

**Contrast Stretching  对比度拉伸：** 对直方图拉伸而非原始像素

![1770340363594](image/CTD1/1770340363594.png)

## Segmentation and Thresholding

### Image Segmentation 图像分割

![1770341334108](image/CTD1/1770341334108.png)

* **Intensity（强度/灰度）** ：亮度值是否相近
* **Color（颜色）** ：RGB/HSV 等颜色特征是否相似
* **Texture（纹理）** ：局部结构模式（如平滑/粗糙、重复纹理）
* **Pixel position（像素位置）** ：空间上是否相邻、是否形成连通区域
* 以及可能的：边缘/梯度、形状先验、时间信息（视频）等

### Segmentation using Intensity Thresholding

![1770341498278](image/CTD1/1770341498278.png)

**multiple thresholding 多阈值分割**

### Threshold Choice

![1770341703527](image/CTD1/1770341703527.png)

**Global Threshold 全局阈值**

**Local / Adaptive Threshold 局部阈值 / 自适应阈值**

### Impact of Illumination 光照 and Reflectance 反射率

![1770342211211](image/CTD1/1770342211211.png)

Noise可能会破环像素，导致modes被抹开

解决办法：

* **Denoising（去噪）** ：降低随机扰动（如均值滤波/中值滤波/双边滤波/更高级去噪）。
* **Smoothing（平滑）** ：抑制高频噪声，让直方图峰更清晰（但可能模糊边缘）。
* **Adaptive thresholding（自适应/局部阈值）** ：阈值随位置变化 (T(x,y))，更能应对光照渐变、阴影等问题。

![1770342355528](image/CTD1/1770342355528.png)

**illumination ramp 非均匀光照** ，让valley消失

### Global Thresholding

![1770343506461](image/CTD1/1770343506461.png)

**Application**

![1770343600867](image/CTD1/1770343600867.png)

### Otsu's Method for Optimum Global Thresholding

![1770343688410](image/CTD1/1770343688410.png)

**False Positive (FP，假阳性/误检) :**  本来是背景的像素，**被错分成前景**（把背景当成物体）。 常见原因：**阈值太低** ,因为门槛低，很多背景像素也会“超过阈值”被判成前景。
直观效果：前景区域里冒出很多“杂点/噪点”，背景被污染。

**False Negative (FN，假阴性/漏检):** 本来是前景的像素，**被错分成背景**（把物体当成背景）。常见原因：**阈值太高**  ,因为门槛高，很多真实物体像素达不到阈值，被判成背景，导致目标被“吃掉”。
直观效果：物体边缘断裂、目标变小甚至消失。

![1770344558921](image/CTD1/1770344558921.png)

1. **Use Otsu’s Method** 大津法
   * 自动寻找“最佳”全局阈值（best threshold），减少因阈值选取不当造成的  **FP / FN** 。
2. **Apply Adaptive (Local) Thresholding**
   * 在每个位置 ((x,y)) 基于其邻域计算阈值 (T(x,y))，而不是整幅图用同一个全局 (T)。
   * 适合光照不均、背景渐变等情况。
3. **Preprocessing Techniques（预处理）**
   * **Gaussian blur** ：降低噪声，减少噪声点导致的误分（尤其 FP）。
   * **Histogram equalization** ：增强对比度，使前景/背景更可分，从而减少 FP / FN。

![1770344630584](image/CTD1/1770344630584.png)

 **目标** ：自动选一个全局阈值 (t)，使得

* **类内方差（Intra-class / Within-class variance）最小**
  等价于
* **类间方差（Inter-class / Between-class variance）最大**

并且它在**直方图双峰（bimodal histogram）** 时有效。

**类内方差(Intra-class)** 衡量“每一类内部灰度有多分散”*spread out / scattered* 。

把图像按阈值 (t) 分两类：

* $C_0$：背景（灰度 $\le t$）
* $C_1$：前景（灰度$> t$）

常用定义（Otsu）：$\sigma_w^2(t)=\omega_0(t)\sigma_0^2(t)+\omega_1(t)\sigma_1^2(t)$

* $\sigma_0^2, \sigma_1^2$：背景/前景各自的方差（类内部的散布程度）
* $\omega_0, \omega_1$：两类所占比例（概率/权重）

 **直观** ：

* $\sigma_w^2$ 越小 ⇒ 每一类内部越“紧”（compact）
* 两类更容易被一个阈值切开 ⇒ 分离性更好（well-separated）

**类间方差（Inter-class Variance）** 它衡量“两类均值相差多大、分得有多开”。

常见定义：$\sigma_b^2(t)=\omega_0(t)\omega_1(t)\big(\mu_0(t)-\mu_1(t)\big)^2$

* $\mu_0, \mu_1$：两类的平均灰度

 **直观** ：

* $\sigma_b^2$ 越大 ⇒ 两类中心距离越远（更可分）

## Demo

### Otsu’s Method

![1770345298456](image/CTD1/1770345298456.png)

#### Otsu’s Method:  Efficient Reformulation

![1770367252723](image/CTD1/1770367252723.png)

**问题背景（Otsu/全局阈值里用到的量）**

- 灰度级：i = 0,1,...,L-1
- 归一化直方图：p_i，表示“随机抽一个像素，其灰度等于 i 的概率”
- 满足：$\sum_{i=0}^{L-1} p_i = 1$

**累积概率 P1(k) 是不是 CDF？**

- 是。$P_1(k)$ 就是离散情形下在灰度 k 处的 CDF 值（到 k 为止的累计概率）：
  $P_1(k)=\sum_{i=0}^{k} p_i = P(X\le k)$
- 直观：灰度落在 0..k 的像素占比是多少。

**为什么要定义累计一阶矩 m(k)=\sum_{i=0}^{k} i p_i？它是什么？**

- $m(k)$ 不是“均值”，而是“到 k 为止的加权总量”（一阶矩的累计）：$m(k)=\sum_{i=0}^{k} i\,p_i$
- 对比全局均值用到的总一阶矩：$m_G=\sum_{i=0}^{L-1} i\,p_i$
- 直观：把灰度值 i 按其概率 p_i 加权后相加，但只算到 k，因此它代表“0..k 这部分对全局均值/期望贡献了多少总量”。

**为什么类1（0..k）的均值是 m1(k)=m(k)/P1(k)？**

- 类1均值本质是条件期望：$m_1(k)=E[X\mid X\le k]$
- 条件期望公式（离散）：
  $E[X\mid X\le k]=\frac{\sum_{i=0}^{k} i\,P(X=i)}{P(X\le k)}=\frac{\sum_{i=0}^{k} i\,p_i}{\sum_{i=0}^{k} p_i}=\frac{m(k)}{P_1(k)}$
- 直观解释：
  - 分子 m(k) 是类1内部“灰度×占比”的总量（总贡献）
  - 分母 P1(k) 是类1的总占比（类1的“总概率/份额”）
  - 相除得到“在类1内部的平均灰度”
- 你提到的理解可以这样更严谨地说：
  “m(k) 是总量，不是平均；因为类1只占整图的一部分（P1(k) < 1），要除以 P1(k) 才得到类1内部的平均（条件均值）。”

**（补充）类2的概率与均值怎么写（便于看完整结构）**

- 类2概率：$P_2(k)=1-P_1(k)$
- 类2的一阶矩是“全局减去前半段”：$m_G - m(k)$
- 类2均值：
  $m_2(k)=\frac{m_G-m(k)}{1-P_1(k)}=\frac{m_G-m(k)}{P_2(k)}$

**一句话总结**

- $P_1(k)$ 是 CDF（累计概率）；$m(k)$ 是累计的一阶矩（总量）；类均值 $m_1(k)$ 之所以要除以 $P_1(k)$，是因为它是条件均值：把“总量”转换为“类内平均”。

#### Otsu’s Method:  Effectiveness Measure

![1770367438919](image/CTD1/1770367438919.png)

#### Otsu’s Algorithm

![1770367777036](image/CTD1/1770367777036.png)

**Algorithm 2：Optimum global thresholding using Otsu’s method**

**1) 计算归一化直方图**

- 得到 $p_i$（灰度级 $i=0,\dots,L-1$ 的概率）
- 满足 $\sum_{i=0}^{L-1} p_i = 1$

**2) 计算累计和（累计概率 / CDF）**

- 对每个阈值 $k=0,\dots,L-1$：
  $P_1(k)=\sum_{i=0}^{k} p_i$

**3) 计算累计均值（累计一阶矩）**

- 对每个 $k$：
  $m(k)=\sum_{i=0}^{k} i\,p_i$

**4) 计算全局均值**

- $m_G=\sum_{i=0}^{L-1} i\,p_i$

**5) 计算类间方差（between-class variance）**

- 对每个 $k=0,\dots,L-1$ 计算 $\sigma_B^2(k)$，常用高效形式：
  $\sigma_B^2(k)=\dfrac{(m_G P_1(k)-m(k))^2}{P_1(k)(1-P_1(k))}$
- 注意：跳过 $P_1(k)=0$ 或 $P_1(k)=1$（分母为 0）

**6) 选择 Otsu 阈值 $k^*$**

- $k^*=\arg\max_k \sigma_B^2(k)$
- 若最大值不唯一：把所有达到最大值的 $k$ 取平均得到 $k^*$（再取整到合法灰度级）

**7) 计算全局方差与可分离度（可选评价）**

- 全局方差：
  $\sigma_G^2=\sum_{i=0}^{L-1} (i-m_G)^2\,p_i$
- 可分离度（separability measure）：
  $\eta^*=\dfrac{\sigma_B^2(k^*)}{\sigma_G^2}$
- 解释：$\eta^*$ 越大，分割越好

### Performance Enhancement

![1770367877921](image/CTD1/1770367877921.png)

![1770367952024](image/CTD1/1770367952024.png)

![1770368119113](image/CTD1/1770368119113.png)

**为什么这能改进（直觉）**

* 全图直方图：背景像素多 → 统计被背景压制 → 阈值容易偏向背景。
* 边缘像素直方图：更集中在“类别交界” → 更能体现两类差异 → Otsu 更容易找到合理阈值。

### Complex Thresholding Problem

![1770368379685](image/CTD1/1770368379685.png)

![1770368407859](image/CTD1/1770368407859.png)

**基于边缘/高变化像素改进 Otsu 阈值（思路笔记）**

**问题**

- 直接对整幅图做 Otsu（用全图直方图）在复杂场景常失败：
  - 目标（亮点/前景）面积很小，直方图被大量背景主导
  - 噪声/光照不均导致前景背景分布重叠，“谷”不明显

**核心想法**

- 不用“所有像素”建直方图
- 先找出“更可能包含前景-背景分界或亮点结构”的像素（变化强）
- 只用这些像素的灰度分布来求 Otsu 阈值，使两类更可分

**步骤（Using edges / Laplacian mask 版本）**

1) 输入原图 I（灰度图）
2) 计算变化强度图（任选一种）
   - 梯度幅值：$G(x,y)=|\nabla I(x,y)|$
   - 或拉普拉斯幅值：$L(x,y)=|\nabla^2 I(x,y)|$
3) 对变化强度图阈值化得到 mask
   - $M(x,y)=1$ 若 $L(x,y)>T_L$（或 $G(x,y)>T_G$），否则 $0$
   - 常把 $T_L$ 选为高分位数（例如 99.5 percentile），得到稀疏像素集合
4) 用 mask 筛选原图像素
   - $I_M(x,y)=I(x,y)\cdot M(x,y)$
   - 只取 $I_M$ 的非零像素去统计直方图（忽略大面积背景）
5) 在“非零像素直方图”上运行 Otsu，得到阈值 $k^*$（或 $T^*$）
6) 把得到的阈值应用回原图 I 做最终分割
   - $S(x,y)=1$ 若 $I(x,y)>k^*$，否则 $0$

**为什么有效（直觉）**

- 变化强的像素更集中在边界/亮斑等“与目标相关”的区域
- 用这些像素建直方图，前景/背景分布更容易呈现两团（更可分）
- Otsu 更容易找到合理阈值（类间方差更大、可分离度更高）
- 最后仍在原图上阈值化，得到需要的目标区域

**注意点**

- mask 太稀疏：统计不稳定；mask 太稠密：又被背景淹没
- 该方法仍是“全局阈值”，若光照强烈不均，可能仍需自适应阈值或光照校正

### Multiple Thresholds based on Otsu’s Method

![1770368832578](image/CTD1/1770368832578.png)

**Multiple Thresholds based on Otsu’s Method（多阈值/多级大津法）**

- 二值 Otsu 只解决“前景 vs 背景”（两类、一个阈值）。
- 但很多应用需要把图像分成 3 类、4 类……（需要多个阈值）。
- 仅靠灰度强度（intensity）往往不够稳定，因为不同类别的灰度分布可能重叠、受光照影响大。

**为什么“多阈值”常不只用 intensity**

- 类别一多，灰度直方图的峰/谷不一定清晰；
- 不同物体可能灰度接近（同灰不同物），导致仅用强度无法区分；
- 光照、阴影会让同一类灰度范围变宽，阈值更难选。

**解决思路：使用额外描述符（additional descriptors）**

- 除了 intensity，再引入其他能区分类别的特征，例如：
  - color（颜色：RGB/HSV 等通道）
  - texture（纹理特征）
  - spatial info（位置、邻域统计）
  - edge/gradient（边缘强度）等
- 本质：把“只看一个数的阈值化”升级为“基于多维特征的分类/分割”，更容易把多类分开。

**补充：多阈值 Otsu 的概念**

- 多级 Otsu 会寻找多个阈值 $k_1<k_2<...<k_{m-1}$，把灰度分成 m 类，
  目标仍是最大化类间方差（或最小化类内方差）的多类扩展。
- 但当类别多、分布重叠时，引入颜色/纹理等特征通常比仅做多阈值更稳。

### Local Image Properties:  Variable Thresholding

![1770368920365](image/CTD1/1770368920365.png)

![1770369124392](image/CTD1/1770369124392.png)

* **增大 a**：阈值更高、更严格 →  **前景变少** （FP↓，FN↑ 风险）
* **减小 a**：阈值更低、更宽松 →  **前景变多** （FN↓，FP↑ 风险）
* **增大 b**：更跟随局部亮度，整体阈值抬高/降低幅度更大。

![1770369850733](image/CTD1/1770369850733.png)

![1770369940111](image/CTD1/1770369940111.png)

![1770369943555](image/CTD1/1770369943555.png)

![1770370153750](image/CTD1/1770370153750.png)

![1770370175539](image/CTD1/1770370175539.png)

![1770370261570](image/CTD1/1770370261570.png)

![1770370342674](image/CTD1/1770370342674.png)

### Segmentation by Region Growing

![1770370608983](image/CTD1/1770370608983.png)

**Example**

![1770371181941](image/CTD1/1770371181941.png)

**常见的选种子思路**

* 人工点选（交互式分割）
* 自动选：局部极值/亮点检测、连通域中心、形态学 marker、距离变换的峰值、或先粗分割再取区域中心做 seeds

**Application**

![1770371275812](image/CTD1/1770371275812.png)
