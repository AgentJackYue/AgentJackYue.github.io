---
title: Lecture 13 — Valence Bond Theory and Hybridization
date: 2026-11-25 12:00:00 +0800
categories: [Notes, General Chemistry I]
tags: [Valence Bond Theory, Hybridization, Sigma Bond, Pi Bond, Molecular Geometry]
media_subpath: /assets/img/posts/General Chemistry I/
math: true
---

# Valence Bond Theory and Hybridization

本讲用价键理论把电子对、原子轨道重叠和化学键直接联系起来，再通过 $sp^3$、$sp^2$、$sp$ 杂化解释分子的方向性、键角和多重键，并与分子轨道理论进行比较。

## Valence Bond Theory

**valence bond theory, VB（价键理论）** 关注每个单独的化学键，并用定域在相邻原子之间的波函数描述成键。

基本假设：

- 每个化学键由一个 localized bond wavefunction（定域成键波函数）描述；
- 成键波函数由两个单电子原子轨道相乘构成；
- 两个电子必须具有相反 spin（自旋）；
- 自旋配对满足 Pauli exclusion principle；
- 两个原子接近时，轨道重叠使体系能量降低并形成化学键。

最简单的 VB 波函数可写为：

$$
\Psi_{\mathrm{VB}}(1,2)
\propto
\phi_A(1)\phi_B(2)
+\phi_A(2)\phi_B(1)
$$

两个括号中的项分别对应“电子 1 在 A、电子 2 在 B”和“电子 2 在 A、电子 1 在 B”。将两种不可区分情况组合起来，可以对两个电子的归属作对称处理。

![两个氢原子轨道重叠形成价键波函数](img/L13-Valence-Bond-Theory-and-Hybridization/figure-01.png)

## Bond Formation and Electron Spin

当两个原子相距很远时，轨道几乎不重叠，相互作用很弱。

当原子接近时：

- 两个未成对电子占据的轨道发生重叠；
- 两个电子自旋相反；
- 电子在核间区域的概率增大；
- 电子受到两个核的吸引，体系能量降低到平衡键长。

如果原子继续靠近，核—核排斥和电子—电子排斥迅速增大，能量再次升高。

![价键理论对轨道重叠和电子自旋配对的基本要求](img/L13-Valence-Bond-Theory-and-Hybridization/figure-02.png)

## VB Description of Multiple Bonds

多重键通常由以下部分构成：

- 1 个 **σ bond（σ 键）**：沿核间连线头对头重叠；
- 1 或 2 个 **π bond（π 键）**：由未参与 σ 成键、彼此平行的 p 轨道侧面重叠。

例如 N₂ 中：

- 一个 $2p$ 轨道头对头形成 σ 键；
- 另外两个相互垂直的 p 轨道对形成两个 π 键；
- 总键级为 3。

![N₂ 中 σ 键和两个 π 键的价键描述](img/L13-Valence-Bond-Theory-and-Hybridization/figure-03.png)

## Successes and Problems of VB Theory

### Works Well

- 两个原子各有 1 个未成对电子时，可以形成简单的双中心单键；
- 电子对和自旋配对能够直观解释 H₂ 等简单分子；
- 多重键可由 σ + π 的组合描述。

### Does Not Work

仅使用纯 s、p 原子轨道时：

- 无法解释水分子中两个 O—H 键为什么等价；
- 无法解释水分子约 104.5° 的键角；
- 无法解释甲烷的四个完全等价的 C—H 键和 109.5° 的四面体构型；
- 无法很好描述 B、C 等原子的某些多重键和分子几何。

![纯原子轨道无法解释的价键结构](img/L13-Valence-Bond-Theory-and-Hybridization/figure-04.png)

## Hybridization

Pauling 提出 **hybridization（杂化）**：中心原子的 s、p 或 d 轨道可以先线性组合，形成一组新的等价 hybrid orbitals（杂化轨道），这些杂化轨道再参与成键。

杂化不是原子先真实地“变成”杂化原子，而是为了描述成键方向性而采用的一种等价数学组合。

### General Form

两个原子轨道 $\phi_1,\phi_2$ 可以组合为：

$$
\chi_1=c_{11}\phi_1+c_{12}\phi_2
$$

$$
\chi_2=c_{21}\phi_1+c_{22}\phi_2
$$

杂化轨道仍然是归一化的单电子空间轨道，其方向由系数决定。

## $sp^3$ Hybridization

一个 s 轨道和三个 p 轨道组合形成四个等价的 **$sp^3$ hybrid orbitals**：

$$
s+3p\longrightarrow4sp^3
$$

- 四个杂化轨道指向 tetrahedron（四面体）的四个顶点；
- 相邻轨道夹角为 $109.5^\circ$；
- 每个 $sp^3$ 轨道可以与其他原子的单电子轨道形成 σ 键。

甲烷 $\mathrm{CH_4}$ 中，C 的四个 $sp^3$ 轨道分别与四个 H 1s 轨道重叠，因此四个 C—H 键等价。

![四个 sp³ 杂化轨道形成四面体构型](img/L13-Valence-Bond-Theory-and-Hybridization/figure-05.png)

## $sp^2$ Hybridization

一个 s 轨道和两个 p 轨道组合形成三个等价的 **$sp^2$ hybrid orbitals**：

$$
s+2p\longrightarrow3sp^2
$$

- 三个 $sp^2$ 轨道在同一平面中，夹角约为 $120^\circ$；
- 未参与杂化的 p 轨道垂直于该平面；
- 两个原子之间可以先通过 $sp^2$ 轨道形成 σ 键，再由剩余 p 轨道侧面重叠形成 π 键。

乙烯 $\mathrm{C_2H_4}$ 中，每个 C 形成三个 $sp^2$ 轨道，C=C 由 1 个 σ 键和 1 个 π 键组成。

![sp² 杂化轨道、σ 骨架和 π 键](img/L13-Valence-Bond-Theory-and-Hybridization/figure-06.png)

## $sp$ Hybridization

一个 s 轨道和一个 p 轨道组合形成两个等价的 **$sp$ hybrid orbitals**：

$$
s+p\longrightarrow2sp
$$

- 两个 $sp$ 轨道沿同一直线相反方向取向；
- 夹角为 $180^\circ$；
- 剩余两个 p 轨道相互垂直，可形成两个 π 键。

乙炔 $\mathrm{C_2H_2}$ 中，C 的 σ 骨架为直线形，两个 C 之间由 1 个 σ 键和 2 个 π 键构成三键。

![sp 杂化轨道形成线性 σ 骨架](img/L13-Valence-Bond-Theory-and-Hybridization/figure-07.png)

### Summary of Hybrid Orbitals

| Hybridization | Number of hybrid orbitals | Geometry | Ideal angle | Remaining p orbitals |
|---|---:|---|---:|---:|
| $sp^3$ | 4 | tetrahedral | 109.5° | 0 |
| $sp^2$ | 3 | trigonal planar | 120° | 1 |
| $sp$ | 2 | linear | 180° | 2 |

## Hypervalent Molecules

对于五配位和六配位的分子，传统 VB 图像会引入 d 轨道参与：

- $\mathrm{PCl_5}$：三角双锥；
- $\mathrm{SF_6}$：八面体。

课件用扩展杂化模型表示：

- $\mathrm{PCl_5}$：$sp^3d$ 的五配位图像；
- $\mathrm{SF_6}$：$sp^3d^2$ 的六配位图像。

需要强调的是，这种 d 轨道参与是简化的价键模型，现代分子轨道理论对超价分子的描述并不一定要求中心原子真正使用大量 d 电子。这里的重点是理解配位数和空间方向，而不是把 d 轨道数目机械地当作唯一解释。

![PCl₅ 和 SF₆ 的扩展杂化模型](img/L13-Valence-Bond-Theory-and-Hybridization/figure-08.png)

## Example：HCN

HCN 的结构为：

$$
\mathrm{H-C\equiv N}
$$

分析与成键方式：

1. C 采用 $sp$ 杂化，能与 H 和 N 形成 $180^\circ$ 的线性 σ 骨架。
2. C—H 键由 C 的 $sp$ 轨道与 H 的 $1s$ 轨道重叠形成。
3. C—N 键包含 1 个 σ 键和 2 个 π 键。
4. 两个未杂化 p 轨道分别形成两个相互垂直的 π 键。
5. N 上保留 1 对孤对电子。

分子整体为线性，键角约为 $180^\circ$。

## VB and LCAO Views of CO₂

二氧化碳可以写为：

$$
\mathrm{O=C=O}
$$

### VB picture

- C 使用 $sp$ 杂化；
- 两个 $sp$ 轨道分别与两个 O 形成 σ 键；
- C 的剩余两个 p 轨道分别与两个 O 的 p 轨道形成 π 键；
- 得到两个 C=O 双键。

![CO₂ 的价键模型：sp 骨架与两个 π 键](img/L13-Valence-Bond-Theory-and-Hybridization/figure-09.png)

### LCAO picture

CO₂ 的 π 体系可以由多个原子 p 轨道离域组合：

- 形成贯穿三个原子的 π bonding 和 π antibonding 轨道；
- 电子在两对 C—O 之间离域；
- 两个 C=O 键在几何上等价。

![CO₂ 的离域 π 分子轨道图像](img/L13-Valence-Bond-Theory-and-Hybridization/figure-10.png)

### Comparison of Models

| Aspect | VB theory | LCAO–MO theory |
|---|---|---|
| 重点 | 定域化学键 | 整个分子的离域轨道 |
| 多重键 | σ + π 组合 | 由分子轨道相位和电子填充决定 |
| 分子几何 | 杂化轨道方向性直观 | 通过轨道对称性和能级解释 |
| 电子分布 | 常根据单个键划分 | 电子分布在整个分子上 |

两种模型不是互相排斥的实验事实，而是对同一电子结构的互补描述。简单分子常可用 VB 的局域图像快速判断键角和键级，离域体系则往往需要分子轨道图像。
