---
title: Lecture 05 — Waves, Matter Waves and Uncertainty
date: 2026-11-25 12:00:00 +0800
categories: [Notes, General Chemistry I]
tags: [Wave Motion, Wave-Particle Duality, Photoelectric Effect, de Broglie Wavelength, Uncertainty Principle]
media_subpath: /assets/img/posts/General Chemistry I/
math: true
---

# Waves, Matter Waves and Uncertainty

本讲从波的基本性质出发，介绍光的波粒二象性、光电效应、de Broglie 物质波和 Heisenberg 不确定原理，最后用 Born 的概率解释建立波函数与电子云之间的联系。

## Wave Basics

- **longitudinal wave（纵波）**：振动方向与传播方向平行；
- **transverse wave（横波）**：振动方向与传播方向垂直；
- 电磁波是 transverse wave，电场和磁场都垂直于传播方向。

### Wave Properties

| Quantity | Symbol | Meaning | Unit |
|---|---|---|---|
| amplitude | $A$ | 最大位移 | 与位移相同 |
| wavelength | $\lambda$ | 相邻同相位点的距离 | $\mathrm m,\mathrm{nm}$ |
| wavenumber | $\tilde\nu$ | 单位长度内的波数，$\tilde\nu=1/\lambda$ | $\mathrm m^{-1}$ |
| period | $T$ | 完成一次完整振荡的时间 | $\mathrm s$ |
| frequency | $\nu$ | 每秒振荡次数，$\nu=1/T$ | $\mathrm{Hz=s^{-1}}$ |
| wave speed | $s$ | 波形传播速度 | $\mathrm{m\,s^{-1}}$ |

波速满足：

$$
s=\frac{\lambda}{T}=\lambda\nu
$$

真空中的光速为：

$$
c=3.00\times10^8\ \mathrm{m\,s^{-1}}
$$

可见光波长大致为 $400\text{–}700\ \mathrm{nm}$。

![波形的振幅、波长、周期和频率](img/L05-Waves-Matter-Waves-and-Uncertainty/figure-01.png)

### Phase

**phase（相位）** $\phi$ 描述波形在空间或时间中的位置：

$$
y=A\sin\phi
$$

在位置 $x$ 处：

$$
\phi(x)=\frac{2\pi x}{\lambda}
$$

相位每增加 $2\pi$，波形重复一次。

## Traveling and Standing Waves

### Traveling Wave

**traveling wave（行波）** 在空间中传播：

$$
y(x,t)=A\sin\left[
2\pi\left(\frac x\lambda-\frac tT\right)
\right]
$$

- 波形向前传播；
- 同时依赖位置 $x$ 和时间 $t$；
- 可以在开放空间中传播。

### Standing Wave

**standing wave（驻波）** 可以看成两列相反方向传播的同频行波叠加：

$$
y(x,t)=A_0\sin\left(\frac{2\pi x}{\lambda}\right)
\cos\left(\frac{2\pi t}{T}\right)
$$

- 不在空间中整体传播；
- 振幅随位置变化，但节点位置固定；
- 可以存在于受边界限制的体系中；
- 振幅始终为 0 的位置称为 **node（节点）**。

![行波与驻波的相位和振幅特征](img/L05-Waves-Matter-Waves-and-Uncertainty/figure-02.png)

驻波和边界条件是后续解释电子能级量子化的关键。

## Wave-Particle Duality

经典物理曾把光和物质分别看作波或粒子。实验表明：

- 光能产生 interference（干涉）和 diffraction（衍射），表现波动性；
- 光也能以 discrete photon（分立光子）的形式与物质相互作用，表现粒子性。

### Photoelectric Effect

当光照射金属表面时，电子可以吸收光子并逸出：

$$
E_{\mathrm{photon}}=h\nu
$$

$$
E_{k,\max}=h\nu-\Phi
$$

式中：

- $E_{k,\max}$ 是光电子最大动能；
- $\Phi$ 是 metal work function（金属功函数），即将电子从金属表面移出所需的最小能量；
- $\nu$ 是入射光频率。

只有满足：

$$
h\nu>\Phi
$$

即：

$$
\nu>\nu_0=\frac{\Phi}{h}
$$

才会产生光电子。$\nu_0$ 是 threshold frequency（截止频率）。

增强光强只增加单位时间内的光子数，因此主要增加 photocurrent（光电流）；不能改变单个光子的频率，所以不能提高光电子的最大动能。

![光电效应中的截止频率、功函数和最大光电子动能](img/L05-Waves-Matter-Waves-and-Uncertainty/figure-03.png)

### Photon Momentum

由 Planck 关系：

$$
E=h\nu
$$

以及质能关系：

$$
E=mc^2
$$

对光子令 $v=c$，可得到：

$$
p=\frac Ec=\frac{h\nu}{c}=\frac h\lambda
$$

因此光子同时具有能量和动量，同时表现波动性和粒子性。

## Matter Waves

de Broglie 提出：不仅光，具有动量的物质粒子也对应一个波长：

$$
\lambda=\frac hp=\frac{h}{mv}
$$

该波长称为 **de Broglie wavelength（de Broglie 波长）**。

对电子，可以在静电势差 $U$ 中加速：

$$
eU=\frac12m_ev^2
$$

$$
p=m_ev=\sqrt{2m_eeU}
$$

因此：

$$
\lambda
=\frac{h}{\sqrt{2m_eeU}}
$$

其中 $U$ 的单位为 $\mathrm V$，$e$ 的单位为 $\mathrm C$。

![电子衍射与加速电子波长的关系](img/L05-Waves-Matter-Waves-and-Uncertainty/figure-04.png)

### Example：1000 V 加速电子

已知：

- $h=6.626\times10^{-34}\ \mathrm{J\,s}$
- $m_e=9.109\times10^{-31}\ \mathrm{kg}$
- $e=1.602\times10^{-19}\ \mathrm C$
- $U=1000\ \mathrm V$

则：

$$
\lambda
=\frac{6.626\times10^{-34}}
{\sqrt{2(9.109\times10^{-31})(1.602\times10^{-19})(1000)}}
$$

$$
\lambda=3.88\times10^{-11}\ \mathrm m
\approx39\ \mathrm{pm}
$$

该波长与 X-ray（X 射线）的数量级相近，因此电子也可以被晶体衍射并显示波动性。

电子双缝实验进一步表明，单个电子逐次到达屏幕后，随着数量增加会形成干涉图样；这种图样具有统计意义。

## Heisenberg Uncertainty Principle

**Heisenberg uncertainty principle（Heisenberg 不确定原理）** 表明，微观粒子的位置和动量不能同时被任意精确确定：

$$
\Delta x\,\Delta p\geq\frac{h}{4\pi}
$$

其中：

- $\Delta x$ 是位置的不确定度，单位 $\mathrm m$；
- $\Delta p$ 是动量的不确定度，单位 $\mathrm{kg\,m\,s^{-1}}$；
- 不确定度在严格表述中对应 standard deviation（标准差）。

![Heisenberg 不确定原理中的位置与动量不确定度](img/L05-Waves-Matter-Waves-and-Uncertainty/figure-05.png)

宏观物体的动量和位置不确定度通常远大于 $h/(4\pi)$ 所要求的尺度，因此可以近似使用确定轨道和 Newton 力学。微观粒子的路径概念则被概率分布取代。

### Correspondence Principle

当量子数 $n\to\infty$ 或速度尺度满足 $v\to0$ 等经典极限时，量子力学结果应逐渐回到经典物理结果。这种“经典物理向下兼容”的关系称为 **correspondence principle（对应原理）**。

## Photon and Electromagnetic Wave

光频决定单个光子的能量：

$$
E_{\mathrm{photon}}=h\nu
$$

光强与电磁场的振幅 $\mathcal E$ 的平方成正比：

$$
E_{\mathrm{light}}\propto\mathcal E^2
$$

因此：

- 光的 frequency（频率）决定单个光子的能量；
- 光的 intensity（强度）决定单位时间内的光子数。

这就是光电效应中“频率阈值”和“光强影响光电流”能够同时存在的原因。

![光子观点与电磁波观点描述同一束光](img/L05-Waves-Matter-Waves-and-Uncertainty/figure-06.png)

## Wave Function and Probability

微观粒子的状态由 **wave function（波函数）** $\psi(x,t)$ 描述：

- 波函数通常具有 real part（实部）和 imaginary part（虚部）；
- 它随时间的变化遵循 Schrödinger equation（薛定谔方程）；
- 波函数本身通常不是可直接测量的物理量。

Born 对波函数提出概率解释：

$$
P(x)=|\psi(x)|^2
$$

$P(x)$ 是 particle probability density（粒子概率密度）。对于三维空间：

$$
P(\mathbf r)=|\psi(\mathbf r)|^2
$$

在体积元 $d\tau$ 内找到粒子的概率为：

$$
dP=|\psi(\mathbf r)|^2d\tau
$$

在原子和分子中，电子没有确定的经典轨迹，其空间概率分布可以用 **electron cloud（电子云）** 表示。

![波函数的平方给出电子在空间中的概率密度](img/L05-Waves-Matter-Waves-and-Uncertainty/figure-07.png)

### Common Confusions

- 光强不是光子能量；光强主要决定单位时间内的光子数。
- 当入射频率低于阈值时，单纯提高光强不能产生光电子。
- de Broglie 波长描述整个粒子的波动性，不是电子内部某个机械波的波长。
- $|\psi|^2$ 是概率密度，不是概率本身；在空间区域内求概率必须乘以体积元并积分。
- 波函数可以为负或为复数，而 $|\psi|^2$ 始终非负。
