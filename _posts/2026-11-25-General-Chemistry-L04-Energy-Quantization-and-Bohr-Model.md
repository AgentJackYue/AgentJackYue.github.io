---
title: Lecture 04 — Energy, Quantization and the Bohr Model
date: 2026-11-25 12:00:00 +0800
categories: [Notes, General Chemistry I]
tags: [Coulomb Potential, Blackbody Radiation, Quantization, Atomic Spectra, Bohr Model]
media_subpath: /assets/img/posts/General Chemistry I/
math: true
---

# Energy, Quantization and the Bohr Model

本讲先建立电子与原子核相互作用的能量图像，再通过黑体辐射和原子光谱引入能量量子化，最后利用 Coulomb 力与角动量条件推导 Bohr 模型的轨道半径和能级。

## Kinetic and Potential Energy

- **kinetic energy（动能）** 与物体的运动有关：

$$
E_k=\frac12mv^2
$$

- **potential energy（势能）** 描述物体因位置或相互作用而具有的能量。在均匀重力场中：

$$
E_p=mgh
$$

能量单位为 joule（焦耳，$\mathrm J$）：

$$
\mathrm{1\ J=1\ kg\,m^2\,s^{-2}}
$$

微观体系常使用 electronvolt（电子伏特）：

$$
1\ \mathrm{eV}=1.602\times10^{-19}\ \mathrm J
$$

## Coulomb Interaction

两个点电荷之间的静电力为：

$$
F=\frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r^2}
$$

式中：

- $q_1,q_2$ 为电荷，单位 $\mathrm C$；
- $r$ 为距离，单位 $\mathrm m$；
- $\varepsilon_0=8.854\times10^{-12}\ \mathrm{C^2\,N^{-1}\,m^{-2}}$ 为 vacuum permittivity（真空介电常数）。

同种电荷相互排斥，异种电荷相互吸引。对应的 Coulomb potential energy（Coulomb 势能）为：

$$
E_p=\frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r}
$$

通常把 $r\to\infty$ 时的势能设为 0。对于电子与电荷为 $+Ze$ 的原子核：

$$
E_p=-\frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{r}
$$

负号表示吸引。电子越靠近核，势能越低。

![粒子间 Coulomb 力与距离平方成反比](img/L04-Energy-Quantization-and-Bohr-Model/figure-01.png)

### Example：Hydrogen Atom at $1\ \mathrm{\AA}$

当质子与电子相距：

$$
r=1\ \mathrm{\AA}=1.0\times10^{-10}\ \mathrm m
$$

则：

$$
E_p
=-\frac{1}{4\pi\varepsilon_0}\frac{e^2}{r}
\approx-14.4\ \mathrm{eV}
$$

该结果说明，电子靠近原子核时势能降低；要把电子移到无穷远处，需要输入 $14.4\ \mathrm{eV}$ 的能量。

## Vacuum Level and Bound States

**vacuum level（真空能级）** 是完全脱离任何物质的自由静止电子的能量，常作为参考能级。

- 真空能级以上的电子可以自由运动；
- 能量低于真空能级的电子处于被原子核束缚的状态；
- 被束缚的电子具有分立的 bound energy levels（束缚能级）。

![被限制的电子能级与真空能级](img/L04-Energy-Quantization-and-Bohr-Model/figure-02.png)

## Blackbody Radiation

**blackbody（黑体）** 是能够完全吸收入射辐射、并按照温度发射连续谱的理想物体。

经典理论无法同时解释黑体辐射谱：

- Rayleigh–Jeans law 在长波区域与实验接近，但在短波区域趋于无穷；
- Wien law 在短波区域与实验接近，但在长波区域不符合实验。

Planck 在 1900 年假设：原子或分子中带电振子的能量只能取分立值：

$$
\varepsilon_n=nh\nu,\qquad n=0,1,2,\ldots
$$

其中：

- $\nu$ 是振子频率，单位 $\mathrm{Hz}$；
- $h=6.63\times10^{-34}\ \mathrm{J\,s}$ 是 Planck constant（Planck 常数）；
- $n$ 是整数。

一次能量变化只能为：

$$
\Delta\varepsilon=h\nu
$$

Planck 的 blackbody distribution（黑体辐射分布）可写为：

$$
\rho_T(\nu)
=\frac{8\pi h\nu^3}{c^3}
\frac{1}{e^{h\nu/(k_BT)}-1}
$$

式中 $c$ 为真空光速，$k_B=1.38\times10^{-23}\ \mathrm{J\,K^{-1}}$ 为 Boltzmann constant（Boltzmann 常数），$T$ 为绝对温度。

该公式在长波区域回到 Rayleigh–Jeans 极限，在短波区域给出与 Wien 定律一致的结果。

![Planck 能量量子化与黑体辐射公式](img/L04-Energy-Quantization-and-Bohr-Model/figure-03.png)

### Quantization

- 连续量可以取任意值，如斜坡上的高度。
- **quantized quantity（量子化量）** 只能取某些分立值，如台阶的高度。
- 量子化的能级可以写成 energy-level diagram（能级图）。
- 系统在两个能级之间变化时，吸收或发射离散能量 $\Delta E=h\nu$。

Franck–Hertz 实验通过电子与气体原子碰撞，观察到能量转移呈分立间隔，为原子能级量子化提供了实验证据。

## Atomic Spectra

加热不同盐类或对气体施加高电压时，可以观察到特征颜色的光。这些颜色来自不同原子或离子的能级跃迁。

- 连续光谱包含连续分布的波长；
- **line spectrum（线状光谱）** 只在特定波长处出现亮线。
- 不同元素的线状光谱不同，因此可作为元素的 identification（鉴定）依据。

氢原子的可见光谱线包括约 656、486、434 和 410 nm。Balmer 在 1885 年发现这些谱线可用一个整数公式描述：

$$
\lambda_n=B\frac{n^2}{n^2-4},
\qquad n=3,4,5,\ldots
$$

其中 $B=365\ \mathrm{nm}$。

Rydberg 将规律推广为：

$$
\frac1\lambda
=R\left(\frac1{m^2}-\frac1{n^2}\right),
\qquad m<n
$$

其中 $R=1.097\times10^7\ \mathrm{m^{-1}}$。对于 Balmer series（Balmer 系），$m=2$。不同系列对应不同的较低能级。

![气体放电产生的线状光谱](img/L04-Energy-Quantization-and-Bohr-Model/figure-04.png)

## Bohr Model

Bohr 在 1913 年提出：

1. 电子只能在某些具有固定能量的稳定轨道上运动；
2. 稳定轨道上的电子不发射电磁辐射；
3. 电子在两条轨道之间跃迁时，吸收或发射的光子能量等于能级差。

$$
h\nu=\Delta E=E_{\mathrm{final}}-E_{\mathrm{initial}}
$$

对 H 原子，Bohr 假设角动量只能取：

$$
L=m_evr=n\frac{h}{2\pi},
\qquad n=1,2,3,\ldots
$$

其中 $m_e$ 为电子质量，$v$ 为速度，$r$ 为轨道半径，$n$ 为 principal quantum number（主量子数）。

![Rutherford 模型与 Bohr 轨道模型](img/L04-Energy-Quantization-and-Bohr-Model/figure-05.png)

## Derivation of Bohr Orbit Radius and Energy

电子受到原子核的 Coulomb attraction，该力提供 centripetal force（向心力）：

$$
\frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{r^2}
=\frac{m_ev^2}{r}
\tag{1}
$$

同时使用角动量量子化：

$$
m_evr=n\frac{h}{2\pi}
\tag{2}
$$

由 (2) 得：

$$
v=\frac{nh}{2\pi m_er}
$$

代入 (1)：

$$
\frac{Ze^2}{4\pi\varepsilon_0r}
=m_ev^2
$$

$$
r_n=\frac{\varepsilon_0h^2}{\pi m_ee^2}\frac{n^2}{Z}
=\frac{n^2}{Z}a_0
$$

其中：

$$
a_0=52.9\ \mathrm{pm}=0.529\ \mathrm{\AA}
$$

是 **Bohr radius（Bohr 半径）**。对 H 原子 $Z=1$：

- $n=1$：$r=52.9\ \mathrm{pm}$；
- $n=2$：$r=4a_0=212\ \mathrm{pm}$；
- $n=3$：$r=9a_0=476\ \mathrm{pm}$。

轨道总能量为：

$$
E_n=-\frac{1}{8\pi\varepsilon_0}\frac{Ze^2}{r_n}
$$

代入 $r_n$：

$$
E_n=-R_H\frac{Z^2}{n^2},
\qquad R_H=2.18\times10^{-18}\ \mathrm J=13.6\ \mathrm{eV}
$$

对 H 原子：

- $E_1=-13.6\ \mathrm{eV}$；
- $E_2=-3.40\ \mathrm{eV}$；
- $E_3=-1.51\ \mathrm{eV}$。

能级随 $n$ 增大而趋近 0；$n=\infty$ 对应电子刚好处在真空能级。

![Bohr 模型的轨道能量与能级收敛](img/L04-Energy-Quantization-and-Bohr-Model/figure-06.png)

## Emission and Absorption

若电子从能量较高的初态 $n$ 跃迁到能量较低的终态 $m$：

$$
\Delta E=E_n-E_m
=R_H\left(\frac1{m^2}-\frac1{n^2}\right)
$$

发射光子的频率和波长为：

$$
\nu=\frac{\Delta E}{h},
\qquad
\lambda=\frac{hc}{\Delta E}
$$

因此：

$$
\frac1\lambda
=\frac{R_H}{hc}
\left(\frac1{m^2}-\frac1{n^2}\right)
$$

这就是 Bohr 模型对 Rydberg 公式的解释：不同谱线对应不同的能级差，而不是任意连续的电子运动。

## Successes and Limitations

Bohr 模型成功解释了：

- 氢原子的稳定轨道；
- 氢原子分立能级；
- Balmer 和 Rydberg 谱线；
- 电离能和量子化角动量。

但当存在多于一个电子时，电子之间的排斥不可忽略。Bohr 模型对 He 原子的能级和光谱完全失败，因此需要更一般的 quantum mechanics（量子力学）。
