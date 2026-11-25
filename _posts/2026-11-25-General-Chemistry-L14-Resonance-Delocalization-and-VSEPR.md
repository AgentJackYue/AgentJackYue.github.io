---
title: Lecture 14 — Resonance, Delocalization and VSEPR
date: 2026-11-25 12:00:00 +0800
categories: [Notes, General Chemistry I]
tags: [Resonance, Delocalization, VSEPR, Steric Number, Molecular Geometry]
media_subpath: /assets/img/posts/General Chemistry I/
math: true
---

# Resonance, Delocalization and VSEPR

本讲先比较价键理论与分子轨道理论，说明共振和离域电子如何描述真实化学键，再用 valence-shell electron-pair repulsion theory（价层电子对互斥理论，VSEPR）根据电子域数目、孤对电子和多重键预测分子几何。

## Bonding Orbital, Lone Pair and Delocalization

价键理论和 LCAO 分子轨道理论关注不同的结构特征：

| Feature | VB theory | LCAO–MO theory |
|---|---|---|
| 基本单元 | 定域的化学键 | 覆盖整个分子的分子轨道 |
| Bonding orbital | 共享电子对 | 成键分子轨道中的电子 |
| Lone pair | 非共享电子对 | 非键分子轨道或定域非键电子 |
| Delocalized bonding | 用多个共振式表示 | 用跨多个原子的分子轨道表示 |

LCAO 可直接形成贯穿三个或更多原子的离域 π 分子轨道，例如 NO₂ 中的 π 电子可以分布在整个 O—N—O 体系中。

![NO₂ 中由分子轨道描述的离域 π 电子](img/L14-Resonance-Delocalization-and-VSEPR/figure-01.png)

## Resonance

当单一 Lewis 结构无法完整描述分子的电子分布时，可以画出多个 **canonical forms（正则结构）**，并用双箭头 **↔** 连接。

- 正则结构中原子核的位置和连接关系保持不变；
- 只有电子对和 π 键的位置发生变化；
- 正则结构通常具有相同或相近的能量；
- 真实分子是这些正则结构的 **resonance hybrid（共振杂化体）**；
- 分子不是在不同正则结构之间来回切换，而是同时具有它们的电子分布特征。

![共振结构、共振杂化体与离域键](img/L14-Resonance-Delocalization-and-VSEPR/figure-02.png)

### Resonance Is Not Chemical Equilibrium

不要把 $\leftrightarrow$ 与 equilibrium（平衡）符号 $\rightleftharpoons$ 混淆。

- Resonance：同一个分子的不同电子描述，原子核没有移动；
- Chemical equilibrium：不同物质之间的可逆转化，例如 $\mathrm{CO_2+H_2O\rightleftharpoons H_2CO_3}$；
- Tautomerism（互变异构）：通常涉及原子核，尤其是一个 H 原子的移动。

课件把这些过程与共振并列比较，说明只有原子核位置改变、形成不同分子或互变异构体时，才涉及 equilibrium 或 tautomerism，而不是 resonance。

### Conditions for Useful Resonance Structures

共振结构应满足：

- 具有相同或相近的电子能量；
- 满足八隅体或合理的价电子数；
- 具有尽量小且分布合理的形式电荷；
- 保留相同的原子骨架。

对不对称体系，各正则结构对共振杂化体的贡献不一定相等。

## Resonance and Bond Order

共振体系中的键级可近似取各正则结构中同一化学键键级的平均值：

$$
\mathrm{B.O.}_{\mathrm{hybrid}}
\approx
\frac{\sum_i w_i\mathrm{B.O.}_i}{\sum_i w_i}
$$

当各正则结构等贡献时：

$$
\mathrm{B.O.}_{\mathrm{hybrid}}
=
\frac{\sum_i\mathrm{B.O.}_i}{n}
$$

其中 $w_i$ 是第 $i$ 个正则结构的贡献权重，$n$ 是等价正则结构数。

### Ozone

$\mathrm{O_3}$ 可写出两个等价结构：

$$
\mathrm{O=O-O\leftrightarrow O-O=O}
$$

同一 O—O 键在一个结构中是双键、在另一个结构中是单键，因此平均键级约为：

$$
\mathrm{B.O.}=\frac{2+1}{2}=1.5
$$

两个 O—O 键应等同，且键长介于单键和双键之间。

### Carbonate

$\mathrm{CO_3^{2-}}$ 有三个等价正则结构，每个 C—O 键在三个结构中分别出现一次双键和两次单键，因此：

$$
\mathrm{B.O.}
=\frac{1+2+2}{3}
=\frac53
\approx1.33
$$

三个 C—O 键实际等价，键长也相同。

![共振结构中的键级平均与等价键长](img/L14-Resonance-Delocalization-and-VSEPR/figure-03.png)

## Asymmetric Resonance

当正则结构不等价时，可以近似估计相对贡献：

- 形式电荷越少，贡献通常越大；
- 负电荷位于电负性较大的原子上更稳定；
- 键能或价键数目不同会使能量不同。

课件给出的结果包括：

- $\mathrm{N_2O}$ 中 N—N 键级约为 2.5；
- $\mathrm{H_2N_2O}$ 中 N—N 键级约为 1.5；
- $\mathrm{SCN^-}$ 中 C—N 键级约为 2.5。

键级越高，通常键长越短。因此实验中可以通过 bond length（键长）和 spectroscopic data（光谱数据）间接判断电子离域程度。

![多原子分子中的键长与离域键](img/L14-Resonance-Delocalization-and-VSEPR/figure-04.png)

### Resonance and Molecular Orbitals

共振结构和离域分子轨道描述的是同一物理事实：

- Lewis/VB 图像把离域键拆成多个定域正则结构；
- MO 图像直接画出跨多个原子的离域轨道；
- 两者都不表示分子真的在多个结构之间快速跳跃。

## VSEPR Theory

**valence-shell electron-pair repulsion theory, VSEPR（价层电子对互斥理论）** 认为：

- 只有中心原子的 valence shell（价层）最重要；
- bonding pairs（成键电子对）与 lone pairs（孤对电子）都占据空间；
- 电子域倾向于尽量远离，以降低排斥能；
- 分子的电子域排列近似由使这些区域最远离的几何结构决定。

### Electron-Domain Repulsion

不同电子域之间的排斥强弱通常为：

$$
E-E>E-X>X-X
$$

其中 $E$ 表示 lone pair，$X$ 表示 bonded ligand（成键配体）。

- 孤对电子只受一个核吸引，电子云更靠近中心原子，占据更大的角向空间；
- 多重键中的电子密度较大，也会比单键产生更强的排斥；
- 因此含孤对或多重键的分子，键角会偏离理想几何的数值。

## VSEPR Notation

将中心原子记为 A，配体记为 X，孤对电子记为 E：

$$
\mathrm{AX}_m\mathrm{E}_n
$$

- $m$：ligand（配体）或者与中心原子相连的原子数；
- $n$：中心原子上的 lone pairs（孤对电子数）；
- **steric number（空间数）**：

$$
\mathrm{SN}=m+n
$$

$SN$ 决定电子域的基本空间排列；忽略孤对电子后得到分子几何。

![VSEPR 的 AXₘEₙ 表示法、空间数和排斥顺序](img/L14-Resonance-Delocalization-and-VSEPR/figure-05.png)

## Electron-Domain Geometries

### SN = 2

两个电子域彼此相反：

- electron-domain geometry：linear（直线形）；
- ideal bond angle：$180^\circ$。

### SN = 3

三个电子域位于同一平面，彼此夹角为 $120^\circ$：

- electron-domain geometry：trigonal planar（平面三角形）。

### SN = 4

四个电子域指向四面体顶点：

- electron-domain geometry：tetrahedral（四面体）；
- ideal bond angle：$109.5^\circ$。

### SN = 5

五个电子域形成 trigonal bipyramid（三角双锥）：

- 两个 axial positions（轴向位置）；
- 三个 equatorial positions（赤道位置）。

### SN = 6

六个电子域形成 octahedron（八面体），相邻方向彼此垂直。

![不同空间数对应的最低能量电子域几何](img/L14-Resonance-Delocalization-and-VSEPR/figure-06.png)

## Molecular Geometry from VSEPR

### SN = 3

- $\mathrm{BF_3}$：$\mathrm{AX_3}$，trigonal planar；
- $\mathrm{CH_3^+}$：$\mathrm{AX_3}$，trigonal planar；
- $\mathrm{SO_2}$：$\mathrm{AX_2E}$，bent（弯曲形）；
- $\mathrm{NO_2}$：电子离域，孤对数可视为 $0.5<n<1$，整体为 bent。

### SN = 4

- $\mathrm{CH_4}$：$\mathrm{AX_4}$，tetrahedral，$109.5^\circ$；
- $\mathrm{NH_3}$：$\mathrm{AX_3E}$，trigonal pyramidal（三角锥），约 $107.8^\circ$；
- $\mathrm{H_2O}$：$\mathrm{AX_2E_2}$，bent，约 $104.5^\circ$。

孤对电子越多，键角减小越明显。

### SN = 5

- $\mathrm{PCl_5}$：$\mathrm{AX_5}$，trigonal bipyramidal；
- $\mathrm{SF_4}$：$\mathrm{AX_4E}$，seesaw（跷跷板形）；
- $\mathrm{ClF_3}$：$\mathrm{AX_3E_2}$，T-shaped（T 形）；
- $\mathrm{XeF_2}$：$\mathrm{AX_2E_3}$，linear。

在三角双锥中，孤对电子优先占据 equatorial positions（赤道位置），因为该位置有 2 个近邻而不是 3 个，可以降低 $90^\circ$ 方向的孤对—成键电子排斥。

### SN = 6

- $\mathrm{SF_6}$：$\mathrm{AX_6}$，octahedral；
- $\mathrm{BrF_5}$：$\mathrm{AX_5E}$，square pyramidal（四方锥）；
- $\mathrm{XeF_4}$：$\mathrm{AX_4E_2}$，square planar（正方平面）。

两个孤对电子在八面体中占据相反方向，可以最大程度降低彼此排斥。

## Molecular-Geometry Table

| SN | Type | Observed molecular shape |
|---:|---|---|
| 2 | $\mathrm{AX_2}$ | linear |
| 3 | $\mathrm{AX_3}$ | trigonal planar |
| 3 | $\mathrm{AX_2E}$ | bent |
| 4 | $\mathrm{AX_4}$ | tetrahedral |
| 4 | $\mathrm{AX_3E}$ | trigonal pyramidal |
| 4 | $\mathrm{AX_2E_2}$ | bent |
| 5 | $\mathrm{AX_5}$ | trigonal bipyramidal |
| 5 | $\mathrm{AX_4E}$ | seesaw |
| 5 | $\mathrm{AX_3E_2}$ | T-shaped |
| 5 | $\mathrm{AX_2E_3}$ | linear |
| 6 | $\mathrm{AX_6}$ | octahedral |
| 6 | $\mathrm{AX_5E}$ | square pyramidal |
| 6 | $\mathrm{AX_4E_2}$ | square planar |

![三角双锥和八面体中孤对电子在不同位置受到的 90° 排斥](img/L14-Resonance-Delocalization-and-VSEPR/figure-07.png)

![VSEPR 电子域、孤对数与分子形状总表](img/L14-Resonance-Delocalization-and-VSEPR/figure-08.png)

### Lone Pairs and Bond Angles

孤对电子比成键电子对更“胖”，会压缩相邻键角。典型例子为：

$$
\angle(\mathrm{H-N-H})\approx107.8^\circ
<\angle(\mathrm{H-C-H})=109.5^\circ
$$

$$
\angle(\mathrm{H-O-H})\approx104.5^\circ
$$

多重键的电子云较集中，也会产生类似孤对电子的键角压缩效应。

## VSEPR Procedure

1. 先画正确的 Lewis 结构。
2. 数出中心原子的 bonded atoms（连接原子）和 lone pairs（孤对电子）。
3. 计算 $\mathrm{SN}=m+n$。
4. 按照电子域的最低能量几何位置排列所有电子域。
5. 只根据配体的位置读出分子形状，忽略孤对电子的空间位置。
6. 在 SN=5 中把孤对电子放在 equatorial（赤道）方向。
7. 根据孤对电子和多重键修正理想键角。

## Comparison of VB and LCAO

![VB、LCAO、电子域和分子性质之间的关系图](img/L14-Resonance-Delocalization-and-VSEPR/figure-09.png)

- LCAO 直接给出分子轨道、能级、键级和离域电子结构；
- VB 给出定域化学键、杂化和直观的分子几何；
- VSEPR 是建立在 Lewis 结构上的几何预测工具，与 VB 的电子域图像一致；
- 对过渡金属配合物，VSEPR 常不能给出可靠结构；
- 对离域体系和磁性，MO 理论通常更适合；
- 对简单主族分子，VSEPR 快速、直观，且能很好预测几何。

### Limitations of VSEPR

- 只给出定性几何，不提供精确键能；
- 对孤对数和多重键的排斥大小只能作经验判断；
- 对过渡金属化合物和某些电子离域体系预测能力有限；
- 真实键角受配体大小、电负性、多重键和分子间作用影响。

## Common Errors

- 将共振箭头当作可逆反应符号。
- 把共振结构理解为分子真实地来回振动。
- 将 $\mathrm{NO_2}$ 的孤对数机械地当作整数 0 或 1，而忽略电子离域。
- 在三角双锥中把孤对电子放在轴向位置。
- 将电子域几何与最终分子几何混为一谈，例如把 $\mathrm{H_2O}$ 的 $\mathrm{AX_2E_2}$ 直接称为四面体分子。
- 忘记孤对电子和多重键会压缩理想键角。
