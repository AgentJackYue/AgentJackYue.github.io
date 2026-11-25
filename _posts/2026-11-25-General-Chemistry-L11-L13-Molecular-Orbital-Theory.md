---
title: Lectures 11–13 — Molecular Orbital Theory
date: 2026-11-25 12:00:00 +0800
categories: [Notes, General Chemistry I]
tags: [LCAO, Molecular Orbitals, Bond Order, Diatomic Molecules, Paramagnetism]
media_subpath: /assets/img/posts/General Chemistry I/
math: true
---

# Molecular Orbital Theory

本讲用 linear combination of atomic orbitals（原子轨道线性组合，LCAO）建立分子轨道，说明成键、反键、σ/π/δ 轨道、电子填充和键级，并解释同核与异核双原子分子的稳定性和磁性。

## Linear Combination of Atomic Orbitals

最简单的分子体系是 $\mathrm{H_2^+}$：

- $\mathrm{H_2^+}$ 的键长约为 $1.06\ \mathrm{\AA}$；
- dissociation energy（解离能）约为 $269\ \mathrm{kJ\,mol^{-1}}$。

两个 H 1s 轨道可以形成两个 linear combinations：

$$
\psi_+\propto\phi_A+\phi_B
$$

$$
\psi_-\propto\phi_A-\phi_B
$$

- $+$, constructive interference（相长干涉）使电子在两个核之间增强，产生 **bonding orbital（成键轨道）**；
- $-$, destructive interference（相消干涉）在核间形成节点，产生 **antibonding orbital（反键轨道）**。

分子轨道在整个分子范围内离域，电子不是只属于某一个化学键。

![两个 H 1s 轨道形成成键和反键分子轨道](img/L11-L13-Molecular-Orbital-Theory/figure-01.png)

## Features of the Correlation Diagram

correlation diagram（轨道相关图）表示原子轨道如何组合成分子轨道：

- 原子轨道和分子轨道的总个数守恒；
- 各分子轨道的能量发生分裂；
- 成键轨道能量降低，反键轨道能量升高；
- 成键轨道中的一个电子趋向于降低总能量，反键轨道中的电子使总能量升高；
- 电子按 Aufbau、Pauli 和 Hund 规则填入分子轨道。

成键-反键的 energy splitting（能量分裂）来自轨道耦合。键的形成可以类比两摆通过弹簧耦合后出现同相和反相两个振动模式。

![分子轨道相关图中的能量分裂与轨道数量守恒](img/L11-L13-Molecular-Orbital-Theory/figure-02.png)

## Conditions for Effective Orbital Overlap

两个原子轨道能够有效组合并形成化学键，需要满足：

1. **maximum orbital overlap（最大重叠）**：轨道空间重叠越多，相互作用越强；
2. **compatible symmetry（合适对称性）**：在分子轴上具有同种对称性的轨道才能有效组合；
3. **similar energy（能量接近）**：两个原子轨道能量越接近，混合越有效。

![轨道重叠程度对分子轨道分裂的影响](img/L11-L13-Molecular-Orbital-Theory/figure-03.png)

![轨道对称性对成键和反键组合的影响](img/L11-L13-Molecular-Orbital-Theory/figure-04.png)

![能量差较大时只能形成弱成键或近似非键轨道](img/L11-L13-Molecular-Orbital-Theory/figure-05.png)

## Orbital Nomenclature

沿原子核连线定义键轴方向 $z$。根据绕键轴旋转时的相位变化，分子轨道分为：

- **σ orbital**：无包含键轴的 nodal plane（节面）；
- **π orbital**：有 1 个包含键轴的节面；
- **δ orbital**：有 2 个包含键轴的节面。

| Orbital type | Atomic orbitals used | $L_z$ |
|---|---|---:|
| σ | s、$p_z$、$d_{z^2}$ 等 | 0 |
| π | $p_x,p_y$、$d_{xz},d_{yz}$ 等 | $\pm\hbar$ |
| δ | $d_{xy},d_{x^2-y^2}$ 等 | $\pm2\hbar$ |

- $\sigma^*$、$\pi^*$、$\delta^*$ 表示相应反键轨道；
- 同核双原子分子还使用 g/gerade 和 u/ungerade 描述中心反演下相位的保持或反转；
- g 表示反演后符号不变，u 表示反演后符号改变。

![σ 轨道的相位分布与键轴节面](img/L11-L13-Molecular-Orbital-Theory/figure-06.png)

![π 轨道的相位分布与包含键轴的节面](img/L11-L13-Molecular-Orbital-Theory/figure-07.png)

![由 d 轨道形成 δ 分子轨道](img/L11-L13-Molecular-Orbital-Theory/figure-08.png)

## Bond Order

**bond order（键级）** 衡量成键电子和反键电子对化学键的净贡献：

$$
\mathrm{B.O.}
=\frac{N_{\mathrm b}-N_{\mathrm a}}2
$$

式中：

- $N_{\mathrm b}$ 是 bonding electrons（成键电子）数；
- $N_{\mathrm a}$ 是 antibonding electrons（反键电子）数。

常见关系：

- 单键：键级 1；
- 双键：键级 2；
- 三键：键级 3；
- 键级越大，bond length（键长）通常越短，bond energy（键能）通常越大；
- 键级为 0 时，分子通常不能稳定存在。

若直接数键：

$$
\mathrm{B.O.}
=\frac{\text{成键轨道电子数}-\text{反键轨道电子数}}2
$$

![键级与键长、键能的关系](img/L11-L13-Molecular-Orbital-Theory/figure-09.png)

## Simple Homonuclear Diatomic Molecules

### $\mathrm{H_2^+}$、$\mathrm{H_2}$、$\mathrm{He_2^+}$、$\mathrm{He_2}$

| Species | Molecular-orbital configuration | Bond order | Magnetic behavior |
|---|---|---:|---|
| $\mathrm{H_2^+}$ | $(\sigma_{1s})^1$ | 0.5 | paramagnetic |
| $\mathrm{H_2}$ | $(\sigma_{1s})^2$ | 1 | diamagnetic |
| $\mathrm{He_2^+}$ | $(\sigma_{1s})^2(\sigma^*_{1s})^1$ | 0.5 | paramagnetic |
| $\mathrm{He_2}$ | $(\sigma_{1s})^2(\sigma^*_{1s})^2$ | 0 | diamagnetic |

$\mathrm{H_2}$ 的反键轨道为空，因此形成稳定单键；$\mathrm{He_2}$ 的成键与反键电子数相等，净成键效应抵消。

$\mathrm{He_2^+}$ 虽然键级只有 0.5，但净成键电子多于反键电子，因此仍可存在。

### Li₂ and Be₂

- $\mathrm{Li_2}$ 的内层 $1s$ 基本不参与成键，两个 $2s$ 电子形成单键：

$$
(\sigma_{2s})^2,
\qquad\mathrm{B.O.}=1
$$

- $\mathrm{Be_2}$ 的两个 $2s$ 电子在成键轨道，另两个在反键轨道：

$$
(\sigma_{2s})^2(\sigma^*_{2s})^2,
\qquad\mathrm{B.O.}=0
$$

因此在简单 MO 图像中 $\mathrm{Be_2}$ 不能形成稳定分子。

## Second-Period Diatomics

对第二周期元素，$2s$ 与 $2p$ 的轨道能量接近，尤其在 B、C、N 中会发生明显的 $s$–$p$ mixing（s–p 混合）。这会使：

$$
\pi_{2p}<\sigma_{2p}
$$

而在 O、F 中 $2s$ 与 $2p$ 能量差较大，常用正常顺序：

$$
\sigma_{2p}<\pi_{2p}
$$

### B₂, C₂ and N₂

- $\mathrm{B_2}$：

$$
\pi_{2p}^1\pi_{2p}^1
$$

键级为 1，存在两个未成对电子，因此 paramagnetic（顺磁性）。

- $\mathrm{C_2}$：

$$
\pi_{2p}^4
$$

键级为 2，所有电子成对，因此 diamagnetic（抗磁性）。

- $\mathrm{N_2}$：

$$
(\sigma_{2s})^2(\sigma^*_{2s})^2
(\pi_{2p})^4(\sigma_{2p})^2
$$

键级为：

$$
\frac{8-2}{2}=3
$$

因此 N₂ 具有很强的三重键。

### O₂ and F₂

- $\mathrm{O_2}$：

$$
(\sigma_{2s})^2(\sigma^*_{2s})^2
(\sigma_{2p})^2(\pi_{2p})^4
(\pi^*_{2p})^1(\pi^*_{2p})^1
$$

键级为：

$$
\frac{8-4}{2}=2
$$

两个反键 $\pi^*$ 轨道各有一个未成对电子，使 O₂ 成为 **paramagnetic（顺磁性）** 分子。这与简单 Lewis 结构预测的“所有电子成对”不同，是分子轨道理论的重要成功。

- $\mathrm{F_2}$：

$$
(\sigma_{2p})^2
(\pi_{2p})^4
(\pi^*_{2p})^4
$$

键级为 1，所有电子成对，因此 diamagnetic。

### Ne₂

$\mathrm{Ne_2}$ 的成键与反键轨道全部填满，键级为 0，因此极不稳定。

![第二周期双原子分子的电子排布、键级和磁性](img/L11-L13-Molecular-Orbital-Theory/figure-10.png)

## Molecular Orbitals and Magnetic Properties

- **paramagnetic（顺磁性）**：存在未成对电子，会被外磁场吸引；
- **diamagnetic（抗磁性）**：所有电子成对，会被外磁场轻微排斥。

O₂ 的顺磁性来自两个简并 $\pi^*_{2p}$ 轨道中的未成对电子。这两个未成对电子按 Hund 规则保持相同自旋。

![O₂ 的两个反键 π 电子与顺磁性](img/L11-L13-Molecular-Orbital-Theory/figure-11.png)

## Oxygen-Related Species

从 $\mathrm{O_2^+}$ 到 $\mathrm{O_2^{2-}}$，反键电子数逐渐增加：

| Species | Bond order | Relative bond length | Magnetic behavior |
|---|---:|---|---|
| $\mathrm{O_2^+}$ | 2.5 | 最短 | paramagnetic |
| $\mathrm{O_2}$ | 2 | 居中 | paramagnetic |
| $\mathrm{O_2^-}$ | 1.5 | 较长 | paramagnetic |
| $\mathrm{O_2^{2-}}$ | 1 | 最长 | diamagnetic |

增加反键电子会降低键级，使键长增加、键能降低。$\mathrm{O_2^+}$、$\mathrm{O_2}$、$\mathrm{O_2^-}$、$\mathrm{O_2^{2-}}$ 都是 isoelectronic series（等电子系列）中的相关物种，但电子填充不同。

## Nitrogen-Related Species

与 N₂ 相关的物种也可以用同一套 MO 图分析：

| Species | Bond order | Expected trend |
|---|---:|---|
| $\mathrm{NO^+}$ | 3 | 与 N₂ 等电子，键最强 |
| $\mathrm{NO}$ | 2.5 | 有未成对电子 |
| $\mathrm{NO^-}$ | 2 | 键级降低 |

不同物种的 electronegativity、核电荷和电子数会进一步改变轨道能级，因此异核与同核体系的图示不能完全等同。

### Antibonding Orbitals and Photochemistry

电子被激发到反键轨道会降低键级。例如：

$$
\mathrm{Cl_2\xrightarrow{h\nu}(Cl_2)^*}
$$

激发后的 $\mathrm{Cl_2^*}$ 在反键轨道中具有电子，键级降低，可能发生解离：

$$
\mathrm{Cl_2^*\rightarrow Cl+Cl}
$$

因此，吸收光子不仅改变能量状态，也可直接改变化学键的强度。

## Heteronuclear Diatomic Molecules

异核双原子分子的两个原子轨道能量不同。以 HF 为例：

- F 的 $2p$ 轨道能量明显低于 H 的 $1s$；
- 低能量的分子轨道主要由 F $2p$ 组成；
- 高能量的反键轨道含有较多 H $1s$ 成分；
- 成键电子偏向 F，形成极性共价键。

![HF 的异核分子轨道能级图](img/L11-L13-Molecular-Orbital-Theory/figure-12.png)

对 heteronuclear diatomic molecule（异核双原子分子）：

- 两个原子轨道的能量差决定混合程度；
- 电负性较大的原子通常提供能量较低、电子密度更集中的原子轨道；
- 成键轨道的成分不再是五五开，而会偏向能量较低、电负性较大的元素；
- 反键轨道则更多分布在能量较高、电负性较小的元素上。

## Common Errors

- 把分子轨道视为简单的“原子轨道相加”，忽略相位和对称性。
- 只数电子对而忘记反键电子会抵消成键作用。
- 认为键级越大键长一定越短而不考虑核间距和成键类型。
- 以 Lewis 结构判断 O₂ 为完全抗磁性；实际 O₂ 有两个未成对电子。
- 对 B、C、N 和 O、F 使用同一个 $2p$ 轨道顺序，忽略 $s$–$p$ mixing。
- 异核分子中仍按同核双原子分子的对称能级顺序处理。
