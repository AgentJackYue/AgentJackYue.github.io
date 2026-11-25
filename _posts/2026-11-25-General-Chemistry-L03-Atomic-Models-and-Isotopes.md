---
title: Lecture 03 — Atomic Models and Isotopes
date: 2026-11-25 12:00:00 +0800
categories: [Notes, General Chemistry I]
tags: [Cathode Rays, Electron, Rutherford Model, Atomic Nucleus, Isotopes]
media_subpath: /assets/img/posts/General Chemistry I/
math: true
---

# Atomic Models and Isotopes

本讲从 cathode ray tube（阴极射线管）和金箔散射实验出发，介绍电子、质子、中子的发现，Rutherford 核式模型，以及质量数、原子序数、同位素和离子的表示方法。

## Discovery of the Electron

### Cathode Ray Tube

- 在低压气体中施加高电压会发生 glow discharge（辉光放电）。
- 阴极射线可以使荧光屏发光，并会在电场和磁场中偏转。
- 射线从阴极射向阳极，带有负电荷。
- J. J. Thomson 通过测量阴极射线在电场和磁场中的偏转，确定其荷质比 $e/m_e$。

电子受到的 electric force 和 magnetic force 分别为：

$$
F_E=eE=ma
$$

$$
F_B=evB
$$

式中 $e$ 为电子电荷量的绝对值，单位 $\mathrm C$；$E$ 为 electric field（电场），单位 $\mathrm{V\,m^{-1}}$；$v$ 为速度，单位 $\mathrm{m\,s^{-1}}$；$B$ 为 magnetic field（磁感应强度），单位 $\mathrm T$。

当电场力与磁场力平衡时：

$$
eE=evB
\Rightarrow
v=\frac EB
$$

结合偏转距离即可求 $e/m_e$。实验得到：

$$
\frac{|e|}{m_e}\approx1.76\times10^8\ \mathrm{C\,g^{-1}}
=1.76\times10^{11}\ \mathrm{C\,kg^{-1}}
$$

若使用电子电荷 $Q_e=-e$，则：

$$
\frac{Q_e}{m_e}
\approx-1.76\times10^{11}\ \mathrm{C\,kg^{-1}}
$$

负号表示电子带负电。该荷质比与阴极材料和残余气体无关，说明电子是各种物质共有的组成部分。

![阴极射线管中电子在电场和磁场中的偏转](img/L03-Atomic-Models-and-Isotopes/figure-01.png)

### Anode Rays and Protons

- **anode ray（阳极射线）** 带正电，其荷质比随气体种类而变化。
- 在所有阳极射线中，proton（质子）具有最大的正荷质比：

$$
\frac{Q}{m}_{\mathrm p}\approx+1.0\times10^8\ \mathrm{C\,kg^{-1}}
$$

电子的质量因此远小于质子：

$$
\frac{m_{\mathrm p}}{m_e}\approx1.8\times10^3
$$

## Thomson's Pudding Model

Thomson 在发现电子后提出 **pudding model（布丁模型）**：

- 正电荷像均匀的“布丁”一样分布在整个原子中；
- 带负电的电子镶嵌在其中；
- 电子的总负电荷与正电荷背景平衡。

这个模型可以解释原子的电中性，却不能解释高能 α 粒子为何会被大角度散射。

## Radioactivity and the Gold-Foil Experiment

Becquerel 和 Marie Curie 的研究表明，放射性物质能够自发发射高能射线。Rutherford 利用 α 粒子轰击金箔，检验原子内部质量与正电荷的分布。

在实验中，大多数 α 粒子直接穿过或只发生 $<0.02^\circ$ 的微小偏转，但极少数 α 粒子发生大角度偏转甚至反弹。

如果正电荷像 Thomson 模型描述的那样均匀分布，α 粒子不可能受到如此集中的大角度偏转。Rutherford 因而提出：

- 原子的正电荷和几乎全部质量集中在极小的 nucleus（原子核）中；
- 电子在核外较大的空间运动；
- 原子核的线度远小于原子整体。

课件给出的尺度约为：

- 原子整体直径约 $100\ \mathrm{pm}$；
- 原子核尺寸可小于 $0.01\ \mathrm{pm}$。

![Rutherford 金箔散射实验与实验观察结果](img/L03-Atomic-Models-and-Isotopes/figure-02.png)

## Rutherford Nuclear Model

Rutherford 模型把原子表示为一个带正电的核和核外电子。核与外部粒子之间的 Coulomb potential energy（Coulomb 势能）为：

$$
V(r)=-\frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{r}
$$

式中：

- $Z$ 为原子核的电荷数；
- $e$ 为基本电荷，单位 $\mathrm C$；
- $r$ 为粒子到核的距离，单位 $\mathrm m$；
- $\varepsilon_0$ 为 vacuum permittivity（真空介电常数）。

负号表示异种电荷之间的吸引作用。当 $r$ 趋近于 0 时，势能绝对值迅速增大，因此近距离的 α 粒子会受到强烈偏转。

![Rutherford 核式模型及原子尺度](img/L03-Atomic-Models-and-Isotopes/figure-03.png)

### Limitations of the Nuclear Model

Rutherford 模型解释了原子核的存在与 α 粒子散射，但没有解释：

- 核外电子为什么没有因加速运动而持续辐射能量并坠入核；
- 原子为什么只发射某些特定频率的光；
- 电子在原子中的能量为什么具有分立结构。

这些问题推动了 Bohr 模型和后续量子力学的发展。

## Discovery of the Neutron

- Rutherford 曾提出核中存在由质子与电子组成的复合中性粒子。
- 1932 年，Chadwick 发现 **neutron（中子）**。
- 中子不带电，质量与质子接近，因此可以解释质量数大于原子序数的现象。

原子核由 protons（质子）和 neutrons（中子）组成；核外电子数决定原子的电荷状态。

## Atomic Number, Mass Number and Isotopes

### Nuclear Notation

核素用以下符号表示：

$$
{}_{Z}^{A}\mathrm X
$$

- $X$ 是元素符号；
- $Z$ 是 **atomic number（原子序数）**，等于质子数；
- $A$ 是 **mass number（质量数）**，等于质子数加中子数。

$$
A=Z+N
$$

其中 $N$ 是中子数。质子数决定元素种类；具有相同 $Z$ 但不同 $A$ 的原子互为 **isotopes（同位素）**。

![核素符号、质量数、原子序数、同位素和离子](img/L03-Atomic-Models-and-Isotopes/figure-04.png)

### Isotopes and Ions

| Species | Protons | Neutrons | Electrons | Meaning |
|---|---:|---:|---:|---|
| ${}_{1}^{1}\mathrm H$ | 1 | 0 | 1 | protium（氕） |
| ${}_{1}^{2}\mathrm H$ | 1 | 1 | 1 | deuterium（氘） |
| ${}_{1}^{3}\mathrm H$ | 1 | 2 | 1 | tritium（氚） |
| $\mathrm H^+$ | 1 | 0 | 0 | proton（质子） |
| $\mathrm H^-$ | 1 | 0 | 2 | hydride（氢负离子） |

- **cation（阳离子）** 的电子数少于质子数，例如 $\mathrm{Na^+}$。
- **anion（阴离子）** 的电子数多于质子数，例如 $\mathrm{Cl^-}$。
- 形成离子只改变电子数，不改变原子核中的质子数和中子数。

### Relative Atomic Mass versus Mass Number

- **mass number $A$** 是某一个具体核素中质子数与中子数的整数和。
- **relative atomic mass $A_r$** 是元素各同位素按天然丰度加权后的平均相对质量，通常不是整数。

例如 Cl 的稳定同位素主要为 ${}^{35}\mathrm{Cl}$ 和 ${}^{37}\mathrm{Cl}$，所以单个核素的质量数分别是 35 和 37，而元素氯的相对原子质量为约 35.45。

## Charge-to-Mass Measurement

荷质比实验说明同一种粒子在不同实验条件下具有固定的 $Q/m$，而不同气体产生的阳极射线则具有不同的 $Q/m$。因此：

- 电子是各种原子共有的亚原子粒子；
- 原子核中的正电粒子与残余气体有关，其最小正电单元为 proton；
- 不同元素以及同一元素的不同 isotopes 具有不同质量，后续可用 mass spectrometry（质谱）进一步区分。

### Common Confusions

- 原子序数 $Z$ 不是质量数，也不等于中子数。
- 元素的相对原子质量不等于任一具体同位素的质量数。
- 核素符号左上角的 $A$ 是质子数与中子数之和，不是原子质量。
- 离子中电子数发生改变，但元素身份仍由质子数决定。
