---
title: Lectures 08–10 — Multi-Electron Atoms and Electron Configurations
date: 2026-11-25 12:00:00 +0800
categories: [Notes, General Chemistry I]
tags: [Many-Electron Atoms, Effective Nuclear Charge, Shielding, Electron Configuration, Photoelectron Spectroscopy]
media_subpath: /assets/img/posts/General Chemistry I/
math: true
---

# Multi-Electron Atoms and Electron Configurations

本讲从氢原子过渡到多电子原子，介绍电子间排斥、自洽场、有效核电荷、屏蔽与钻穿，进而建立电子排布规则、磁性判断和光电子能谱的读法。

## From Hydrogen to Many-Electron Atoms

氢原子只有一个电子，Schrödinger equation 可以精确求解。对 He、Li 等多电子原子，电子不仅受到原子核吸引，还相互排斥：

```text
electron–nucleus attraction
          versus
electron–electron repulsion
```

多电子体系的势能不再只依赖一个电子坐标，精确求解极其困难，因此采用近似模型。

### Hydrogen-Like Ions

对只有一个电子的 hydrogen-like ions（氢样离子），例如 $\mathrm{He^+}$、$\mathrm{Li^{2+}}$，Coulomb potential 为：

$$
E_p=-\frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{r}
$$

氢样离子的波函数、半径和能量可通过把氢原子中的 $Z=1$ 改为相应核电荷：

$$
\psi_{1s}\propto\exp\left(-\frac{Zr}{a_0}\right)
$$

$$
r_n=\frac{n^2}{Z}a_0,\qquad
E_n=-R_H\frac{Z^2}{n^2}
$$

因此，随着核电荷增大，电子云收缩、能量降低。

## Independent-Electron Model

多电子波函数可以近似写成单电子轨道的乘积：

$$
\Psi(1,2,\ldots,N)
\approx\phi_1(1)\phi_2(2)\cdots\phi_N(N)
$$

这种近似把每个电子看成在其他电子形成的平均场中独立运动。对于两个独立事件：

$$
P(A\text{ and }B)=P(A)P(B)
$$

相应概率密度为：

$$
|\Psi|^2=|\phi_1|^2|\phi_2|^2\cdots|\phi_N|^2
$$

## Self-Consistent Field

**self-consistent field, SCF（自洽场）** 方法用迭代方式处理电子间排斥：

1. 先猜测每个电子感受到的有效场；
2. 计算该场中的轨道；
3. 由新轨道重新计算电子密度和平均排斥场；
4. 重复计算，直到输入场与由轨道得到的场一致。

在 He 中，一个电子对另一个电子产生屏蔽。每个电子感受到的有效电荷不是 $Z=2$，而是：

$$
Z_{\mathrm{eff}}=Z-\sigma
$$

其中 $\sigma$ 是 shielding constant（屏蔽常数）。

He 的 1s 电子经迭代约得到：

$$
Z_{\mathrm{eff}}\approx1.68\text{–}1.69
$$

因此 He 的 1s 轨道可以近似写作：

$$
\phi_{1s}(r)\propto
\exp\left(-\frac{Z_{\mathrm{eff}}r}{a_0}\right)
$$

![He 的自洽场与有效核电荷](img/L08-L10-Multi-Electron-Atoms-and-Electron-Configurations/figure-01.png)

### SCF Example：Helium

迭代中出现的中间有效核电荷包括：

- 初始估计可得到 $Z_{\mathrm{eff}}=1.24$；
- 再用新轨道计算可得到 $1.87$；
- 继续迭代后收敛到约 $1.68\text{–}1.69$。

这些数不是不同原子的真实核电荷，而是不同迭代步骤中的近似有效场。

## Shielding

**shielding effect（屏蔽效应）** 指内层电子部分抵消核对外层电子的吸引。

- 内层电子云位于核与外层电子之间，使外层电子感受到较小的有效核电荷；
- $Z_{\mathrm{eff}}$ 越大，同一壳层轨道越收缩，能量越低；
- 同一主量子数下，不同亚层受到内层电子屏蔽的程度不同。

![内层电子对外层电子的屏蔽](img/L08-L10-Multi-Electron-Atoms-and-Electron-Configurations/figure-02.png)

## Penetration

**penetration effect（钻穿效应）** 指某些轨道在靠近原子核的小半径处仍有较大概率密度。

- s 轨道接近核的概率比 p、d、f 更大；
- 越能钻穿内层电子云，受到的屏蔽越少，$Z_{\mathrm{eff}}$ 越大；
- 在相同 $n$ 下，能量通常满足：

$$
E(ns)<E(np)<E(nd)<E(nf)
$$

对 Li，若电子进入 2s 或 2p，2s 的能量更低。因此基态是 $1s^22s^1$，而不是 $1s^22p^1$。

## Revised Subshell Energies

氢原子中同一 $n$ 的 s、p、d 轨道简并。多电子原子中，屏蔽与钻穿使这种简并解除：

$$
1s<2s<2p<3s<3p<4s<3d<\cdots
$$

由于 4s 与 3d 能级接近，且随核电荷变化，过渡金属中还会出现电子在 $4s$ 与 $3d$ 之间的重新排列。

![多电子原子中亚层能级的分裂](img/L08-L10-Multi-Electron-Atoms-and-Electron-Configurations/figure-03.png)

## Electron-Filling Rules

### Aufbau Principle

**Aufbau principle（构造原理）**：电子首先填入能量较低的轨道。

### Pauli Exclusion Principle

**Pauli exclusion principle（Pauli 不相容原理）**：

> 一个空间轨道最多容纳两个电子，且两个电子的自旋必须相反。

因此可用 $\uparrow\downarrow$ 表示同一轨道中的 paired electrons（成对电子）。

![Pauli 不相容原理与自旋量子数](img/L08-L10-Multi-Electron-Atoms-and-Electron-Configurations/figure-04.png)

### Hund's Rule

**Hund's rule（Hund 规则）**：

> 对一组简并轨道，电子优先分别占据不同轨道，并保持相同自旋。

例如：

- $\mathrm C$：$2p^2$，两个 p 电子分别占据不同 p 轨道；
- $\mathrm N$：$2p^3$，三个 p 电子各占一个 p 轨道；
- $\mathrm O$：$2p^4$，三个轨道先各有 1 个电子，再配对第 4 个。

![C、N、O 的 p 亚层电子排布](img/L08-L10-Multi-Electron-Atoms-and-Electron-Configurations/figure-05.png)

## Electron Configurations

### H to Ar

| Element | Configuration | Condensed configuration |
|---|---|---|
| H | $1s^1$ | — |
| He | $1s^2$ | — |
| Li | $1s^22s^1$ | $[\mathrm{He}]2s^1$ |
| Be | $1s^22s^2$ | $[\mathrm{He}]2s^2$ |
| B | $1s^22s^22p^1$ | $[\mathrm{He}]2s^22p^1$ |
| C | $1s^22s^22p^2$ | $[\mathrm{He}]2s^22p^2$ |
| N | $1s^22s^22p^3$ | $[\mathrm{He}]2s^22p^3$ |
| O | $1s^22s^22p^4$ | $[\mathrm{He}]2s^22p^4$ |
| F | $1s^22s^22p^5$ | $[\mathrm{He}]2s^22p^5$ |
| Ne | $1s^22s^22p^6$ | $[\mathrm{He}]2s^22p^6$ |
| Na | $1s^22s^22p^63s^1$ | $[\mathrm{Ne}]3s^1$ |
| Mg | $1s^22s^22p^63s^2$ | $[\mathrm{Ne}]3s^2$ |

![H 到 Ar 的轨道能级与电子排布](img/L08-L10-Multi-Electron-Atoms-and-Electron-Configurations/figure-06.png)

### K to Zn

从 K 开始填入 $4s$，随后进入 $3d$：

- K：$[\mathrm{Ar}]4s^1$
- Ca：$[\mathrm{Ar}]4s^2$
- Sc：$[\mathrm{Ar}]3d^14s^2$
- Ti：$[\mathrm{Ar}]3d^24s^2$
- V：$[\mathrm{Ar}]3d^34s^2$
- Cr：$[\mathrm{Ar}]3d^54s^1$
- Mn：$[\mathrm{Ar}]3d^54s^2$
- Fe：$[\mathrm{Ar}]3d^64s^2$

Cr 的 $3d^5 4s^1$ 比 $3d^4 4s^2$ 稳定，因为半充满 d 亚层与半充满 s 亚层具有较低交换能和较均匀的电子分布。Cu 也采取类似形式：

$$
\mathrm{Cu}:\ [\mathrm{Ar}]3d^{10}4s^1
$$

书写时可根据需要将 $3d$ 放在 $4s$ 前；填充顺序并不总是最终能量顺序，过渡金属的核电荷和电子间相互作用会使 $3d$ 与 $4s$ 的能量接近并发生重排。

## Core and Valence Electrons

- **core electrons（核心电子）**：填满内层壳层，通常不直接参与化学键。
- **valence electrons（价电子）**：最外层或最高主量子数 $n$ 的电子，决定元素的典型化学性质。

例如：

$$
\mathrm{C}:\ [\mathrm{He}]2s^22p^2
$$

其中 $1s^2$ 是 core electrons，$2s^22p^2$ 的 4 个电子是 valence electrons。

对过渡金属，通常把 $(n-1)d$ 和 $ns$ 电子共同视为参与化学行为的价电子。

## Periodic-Table Blocks

周期表可按最后填入的 subshell 分为：

- **s block**：Groups 1–2，加 He；
- **p block**：Groups 13–18；
- **d block**：transition metals；
- **f block**：lanthanides 与 actinides。

![周期表的 s、p、d、f 分区](img/L08-L10-Multi-Electron-Atoms-and-Electron-Configurations/figure-07.png)

周期表的结构直接对应电子排布的顺序；同一 group（族）的元素具有相似的 valence-electron configuration。

## Magnetic Properties

- **paramagnetic（顺磁性）**：存在未成对电子，会被外磁场吸引；
- **diamagnetic（抗磁性）**：所有电子均成对，被外磁场轻微排斥。

例如：

- $\mathrm Li$：$1s^22s^1$，有 1 个未成对电子，顺磁；
- $\mathrm He$：$1s^2$，全部成对，抗磁；
- $\mathrm C$：$2p^2$，Hund 规则给出 2 个未成对电子，顺磁。

电子数不一定决定磁性，关键是未成对电子的数量。

## Photoelectron Spectroscopy

**photoelectron spectroscopy, PES（光电子能谱）** 用已知能量的光子击出电子，并测量其 kinetic energy（动能）。

由能量守恒：

$$
h\nu=IE+E_k
$$

因此：

$$
IE=h\nu-E_k
$$

式中：

- $h\nu$ 是入射光子能量；
- $IE$ 是电子从特定 orbital（轨道）中被移除所需的 ionization energy（电离能）；
- $E_k$ 是逃逸电子的动能。

PES 图中的每个峰对应一个能级；峰的位置给出电子结合能，峰的相对面积近似反映该亚层中的电子数。

![光电子能谱中光子、电子结合能和电子动能的关系](img/L08-L10-Multi-Electron-Atoms-and-Electron-Configurations/figure-08.png)

Neon 的 PES 使用 $1253.6\ \mathrm{eV}$ 的光子，可观察到不同亚层的电子峰。结合能越大，出射电子的动能越小，因此谱峰的位置可以用于重建原子的电子结构。

![Neon 的光电子能谱峰与亚层能量](img/L08-L10-Multi-Electron-Atoms-and-Electron-Configurations/figure-09.png)

### Reading a PES Spectrum

1. 找到已知入射光子的能量 $h\nu$。
2. 从峰的位置读出电子动能 $E_k$。
3. 用 $IE=h\nu-E_k$ 计算该亚层的结合能。
4. 比较各峰的结合能，判断电子所在的亚层。
5. 用峰面积或分裂模式判断电子占据情况。

### Common Confusions

- $Z_{\mathrm{eff}}$ 不是原子核的真实核电荷，而是对该电子感受到的净吸引的近似描述。
- 屏蔽和钻穿同时影响轨道能量；不能只用主量子数 $n$ 判断所有轨道能量。
- $4s$ 与 $3d$ 的填充顺序和最终电子构型需要区分。
- 顺磁性来自未成对电子，而不是电子总数。
- PES 峰的面积对应电子占据，不是光子能量。
