---
title: Lecture 02 — Chemical Formulas, Moles and Atomic Mass
date: 2026-11-25 12:00:00 +0800
categories: [Notes, General Chemistry I]
tags: [Chemical Formulas, Atomic Mass, Isotopes, Avogadro Hypothesis, Mole Concept]
media_subpath: /assets/img/posts/General Chemistry I/
math: true
---

# Chemical Formulas and Atomic Mass

本讲从化学式出发，介绍物质的分类、Dalton 原子论、定比定律、倍比定律、Avogadro 假说、相对与绝对原子质量，最后建立 Avogadro 常数、mole 和摩尔质量之间的联系。

## Chemical Formulas

- **chemical formula（化学式）** 用元素符号和右下角数字表示物质的组成与粒子数量关系。
- 例如 methane（甲烷）为 $\mathrm{CH_4}$，ethanol（乙醇）为 $\mathrm{C_2H_6O}$，white phosphorus（白磷）为 $\mathrm{P_4}$，sodium chloride（氯化钠）为 $\mathrm{NaCl}$，potassium permanganate（高锰酸钾）为 $\mathrm{KMnO_4}$。
- 化学式只表示粒子的种类和数量关系，不一定直接表示分子的三维几何结构。
- **empirical formula（实验式）** 给出各元素原子的最简整数比。
- **molecular formula（分子式）** 给出一个分子中各种原子的实际数目。
- 对于由离子构成的物质，通常使用 **formula unit（化学式单元）**，例如 $\mathrm{NaCl}$ 表示 $\mathrm{Na^+}$ 与 $\mathrm{Cl^-}$ 的最简数量比。

## Classification of Matter

物质可以按组成是否均匀、是否只含一种物质进行分类：

- **heterogeneous mixture（非均相混合物）**：组成不均匀，不同位置的性质可以不同；
- **homogeneous mixture（均相混合物）**：组成均匀，但仍是多种物质；
- **pure substance（纯物质）**：只含一种元素或一种化合物；
- **compound（化合物）**：由两种或更多元素按确定比例组成；
- **element（元素）**：不能用普通化学方法分解为更简单的物质。

化合物按所含元素的种类数还可以分为 binary（二元）、ternary（三元）和 quaternary（四元）化合物。

![物质的分类：混合物、纯物质、化合物和元素](img/L02-Chemical-Formulas-Moles-and-Atomic-Mass/figure-01.png)

## Chemical Elements and the Periodic Table

- **chemical element（化学元素）** 用 element symbol（元素符号）表示，例如 H、O、Cl、Hg、W 和 Sn。
- 元素符号具有国际通用性，但元素名称和中文名称可能有不同的历史来源。
- 元素还可由 atomic number（原子序数）和 relative atomic mass $A_r$ 描述。
- Mendeleev 的 periodic table（周期表）把性质相似的元素放在同一族中，并利用周期性预测当时尚未发现的元素及其性质。

## From Alchemy to Mass Conservation

化学式并非一开始就能通过直接观察原子得到。早期炼金术、冶金和定量实验逐渐建立了“物质具有固定组成”和“反应前后质量守恒”的认识。

古代冶金中有：

$$ 
\mathrm{2CuO(s)+C(s)\xrightarrow{\Delta}2Cu(s)+CO_2(g)} 
$$

铜由 $+2$ 价变为 $0$ 价，被还原；碳由 $0$ 价变为 $+4$ 价，被氧化。

火药燃烧可以表示为：

$$
\mathrm{S(s)+2KNO_3(s)+3C(s)\xrightarrow{\text{ignition}}
K_2S(s)+N_2(g)+3CO_2(g)}
$$

该反应中 S 和 N 被还原，C 被氧化。

Lavoisier 通过定量测量发现，空气中有一部分能够与汞反应，而反应前后物质的总质量不变。课件给出两组过程：

$$
\mathrm{2Hg(l)+O_2(g)\xrightarrow{350^\circ C}2HgO(s)}
$$

$$
\mathrm{2HgO(s)\xrightarrow{>500^\circ C}2Hg(l)+O_2(g)}
$$

由此建立的 **law of conservation of mass（质量守恒定律）** 是化学计量学的基础。对于上述分解反应：

$$
m(\mathrm{HgO})=m(\mathrm{Hg})+m(\mathrm{O_2})
$$

## Dalton Atomic Theory

Dalton 原子论把宏观组成与微观粒子数量联系起来：

- 不同元素具有不同的 identity（身份），用 element symbol（元素符号）表示；
- 原子具有确定的质量，用 relative atomic mass $A_r$（相对原子质量）描述；
- 化合物由固定比例的原子组成，因此可以用化学式表示。

**relative molecular mass $M_r$（相对分子质量）** 是分子中各原子的相对原子质量之和；对于离子晶体，相应量称为 relative formula mass（相对化学式质量）。

以课件给出的近似原子质量 $A_r(\mathrm H)=1$、$A_r(\mathrm S)=32$、$A_r(\mathrm{As})=75$ 计算，所得质量分数与实验值非常接近：

| Compound | Formula | Calculated mass fraction | Experimental mass fraction |
|---|---|---|---|
| Hydrogen sulfide | $\mathrm{H_2S}$ | H 5.88%, S 94.12% | H 5.92%, S 94.08% |
| Realgar（雄黄） | $\mathrm{AsS}$ | As 70.09%, S 29.91% | As 70.03%, S 29.97% |
| Orpiment（雌黄） | $\mathrm{As_2S_3}$ | As 60.98%, S 39.02% | As 60.91%, S 39.09% |

### Mass Percentage from a Formula

以 $\mathrm{H_2S}$ 为例：

$$
M_r(\mathrm{H_2S})=2(1.00)+32.00=34.00
$$

$$
w(\mathrm H)=\frac{2(1.00)}{34.00}\times100\%=5.88\%
$$

$$
w(\mathrm S)=\frac{32.00}{34.00}\times100\%=94.12\%
$$

计算结果与实验值的小差异来自原子质量和测量精度。

## Law of Definite and Multiple Proportions

- **law of definite proportions（定比定律）**：同一种化合物无论来源如何，其组成元素的质量比固定。
- **law of multiple proportions（倍比定律）**：两种元素形成多种化合物时，与同一固定质量的其中一种元素结合的另一元素质量，成简单整数比。

雄黄和雌黄的实验组成分别为：

| Compound | As mass fraction | S mass fraction | $m(\mathrm{As})/m(\mathrm{S})$ |
|---|---:|---:|---:|
| Realgar | 70.03% | 29.97% | 2.337 |
| Orpiment | 60.91% | 39.09% | 1.558 |

比较两种矿物中的 As/S 质量比：

$$
\frac{2.337}{1.558}=1.500\approx\frac32
$$

因此两种化合物中 As 与 S 的原子数量比不同，但两种比例之间由小整数联系。

![雄黄和雌黄的质量组成与 As/S 比例](img/L02-Chemical-Formulas-Moles-and-Atomic-Mass/figure-02.png)

### Empirical Formula

实验组成只能确定最简整数比，因此通常先得到 **empirical formula**：

- 雄黄写为 $\mathrm{AsS}$，而不任意扩大为 $\mathrm{As_2S_2}$ 或 $\mathrm{As_4S_4}$；
- 雌黄写为 $\mathrm{As_2S_3}$，最简比例不能再约分；
- 氢可以表示单个 H 原子，也可以在特定条件下形成 $\mathrm{H_2}$ 分子；
- 氧可以形成 $\mathrm{O_2}$ 或 $\mathrm{O_3}$，说明元素符号与实际存在形态需要区分。

## Gaseous Reactions and Avogadro's Hypothesis

Gay-Lussac 发现气体反应具有简单的体积比。例如，在相同温度和压力下：

$$
\mathrm{2H_2(g)+O_2(g)\rightarrow2H_2O(g)}
$$

氢、氧和水蒸气的体积比为 $2:1:2$。

这组比例与分子数的比例相同，但不能只凭 Dalton 的原子论直接解释。Avogadro 提出：

> 在同温、同压下，相同体积的任何气体含有相同数目的分子。

因此，在相同温度和压力下：

$$
\frac{V_1}{V_2}=\frac{N_1}{N_2}
$$

其中 $V$ 为气体体积，$N$ 为分子数。

这一假说把宏观气体体积比与微观分子数联系起来，并支持分子可以含多个原子的观点。

![Avogadro 假说及其对气体反应体积比的解释](img/L02-Chemical-Formulas-Moles-and-Atomic-Mass/figure-03.png)

课件中的三个典型例子为：

$$
\mathrm{2H_2+O_2\rightarrow2H_2O}
$$

$$
\mathrm{N_2+O_2\rightarrow2NO}
$$

$$
\mathrm{3H_2+N_2\rightarrow2NH_3}
$$

它们的体积比分别为 $2:1:2$、$1:1:2$ 和 $3:1:2$。

## Relative Atomic Mass and Isotopes

**isotope（同位素）** 是质子数相同、质量数不同的同种元素原子。氢的三种主要同位素为：

- ${}_{1}^{1}\mathrm H$，protium（氕）；
- ${}_{1}^{2}\mathrm H$，deuterium（氘）；
- ${}_{1}^{3}\mathrm H$，tritium（氚）。

同位素的 **mass number $A$（质量数）** 是质子数 $Z$ 与中子数 $N$ 之和：

$$
A=Z+N
$$

$A$ 是整数，而元素的相对原子质量 $A_r$ 通常是同位素质量的加权平均值，两者不能混用。

元素的 **relative atomic mass（相对原子质量）** 是其各稳定同位素相对原子质量按丰度加权的平均值：

$$
A_r(\mathrm{element})=\sum_i x_i A_{r,i}
$$

式中 $x_i$ 是第 $i$ 种同位素的 fractional abundance（份额），满足 $\sum_i x_i=1$；$A_{r,i}$ 是该同位素的相对原子质量。$A_r$ 无量纲。

以近似数据 ${}_{17}^{35}\mathrm{Cl}$ 占 75%、${}_{17}^{37}\mathrm{Cl}$ 占 25% 为例：

$$
A_r(\mathrm{Cl})\approx0.75(35)+0.25(37)=35.5
$$

现代原子质量基准采用：

$$
A_r({}_{6}^{12}\mathrm C)=12
$$

因此，其他元素的相对原子质量是与 ${}_{6}^{12}\mathrm C$ 原子质量的 $1/12$ 相比较得到的值。

> 课件表格中 B 的两个同位素丰度排列疑似有误。若采用表中的 10.013（80%）和 11.009（20%），平均值约为 10.21，与 $A_r(\mathrm B)\approx10.8$ 不符；按约 20% 的 ${}_{5}^{10}\mathrm B$ 与约 80% 的 ${}_{5}^{11}\mathrm B$ 计算才得到常见值。

## Absolute Atomic Mass

相对原子质量是无量纲的相对值；**absolute atomic mass $m_a$（绝对原子质量）** 是单个原子、离子或化学式单元的真实质量。

Faraday 通过电化学沉积测得：每通过 $1\ \mathrm C$ 电荷，约有 $1.12\ \mathrm{mg}$ Ag 沉积。若每个 $\mathrm{Ag^+}$ 获得一个电子：

$$
m_a(\mathrm{Ag})
=(1.12\times10^{-3}\ \mathrm{g\,C^{-1}})
(1.60\times10^{-19}\ \mathrm C)
=1.79\times10^{-22}\ \mathrm g
$$

再利用相对原子质量比例：

$$
m_a({}_{6}^{12}\mathrm C)
=m_a(\mathrm{Ag})
\frac{A_r({}_{6}^{12}\mathrm C)}{A_r(\mathrm{Ag})}
=1.99\times10^{-23}\ \mathrm g
$$

这里 $A_r(\mathrm{Ag})\approx107.9$。整个计算中，电荷单位相互抵消，最后得到单个原子的质量单位 $\mathrm g$。

![Faraday 电化学测量与绝对原子质量的计算](img/L02-Chemical-Formulas-Moles-and-Atomic-Mass/figure-04.png)

## Avogadro's Number and the Mole

**mole（摩尔）** 是物质的量的单位，1 mole 物质含有 Avogadro 常数 $N_A$ 个指定粒子：

$$
N_A=6.02\times10^{23}\ \mathrm{mol^{-1}}
$$

课件用两种方式得到该数值：

$$
N_A
=\frac{12\ \mathrm{g\,mol^{-1}}}{m_a({}_{6}^{12}\mathrm C)}
=\frac{12\ \mathrm{g\,mol^{-1}}}{1.99\times10^{-23}\ \mathrm g}
\approx6.02\times10^{23}\ \mathrm{mol^{-1}}
$$

$$
N_A=\frac{F}{e}
=\frac{96485\ \mathrm{C\,mol^{-1}}}{1.60\times10^{-19}\ \mathrm C}
\approx6.02\times10^{23}\ \mathrm{mol^{-1}}
$$

- $F=96485\ \mathrm{C\,mol^{-1}}$ 是 Faraday constant（Faraday 常数），表示每 mole 电子的电荷量；
- $e=1.60\times10^{-19}\ \mathrm C$ 是一个电子的电荷量。

![Avogadro 常数、mole、原子、分子、离子和摩尔质量的关系](img/L02-Chemical-Formulas-Moles-and-Atomic-Mass/figure-05.png)

### Molar Mass and Particle Number

**molar mass $M$（摩尔质量）** 是 1 mole 物质的质量，常用单位为 $\mathrm{g\,mol^{-1}}$。

$$
n=\frac{m}{M}
$$

$$
N=nN_A
$$

式中 $n$ 为物质的量，单位 $\mathrm{mol}$；$m$ 为质量，单位 $\mathrm g$；$N$ 为粒子数，无单位。

| Substance | $M/(\mathrm{g\,mol^{-1}})$ | $1\ \mathrm{mol}$ 所含的指定粒子 |
|---|---:|---|
| Ag | 107.9 | $6.02\times10^{23}$ 个 Ag 原子 |
| $\mathrm{H_2O}$ | 18.0 | $6.02\times10^{23}$ 个 $\mathrm{H_2O}$ 分子 |
| NaCl | 58.4 | $6.02\times10^{23}$ 个 NaCl 化学式单元 |

### Mole Conversion

计算 $36.0\ \mathrm g$ 水中的水分子数：

$$
n(\mathrm{H_2O})=\frac{36.0\ \mathrm g}{18.0\ \mathrm{g\,mol^{-1}}}
=2.00\ \mathrm{mol}
$$

$$
N=(2.00\ \mathrm{mol})(6.02\times10^{23}\ \mathrm{mol^{-1}})
=1.20\times10^{24}
$$

结果为 $1.20\times10^{24}$ 个 $\mathrm{H_2O}$ 分子。计算时需保证质量、摩尔质量和物质的量的单位一致，并根据已知量保留相应的 significant figures（有效数字）。
