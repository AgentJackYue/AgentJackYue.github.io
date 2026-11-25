---
title: Lectures 10–11 — Periodic Trends and Bond Character
date: 2026-11-25 12:00:00 +0800
categories: [Notes, General Chemistry I]
tags: [Atomic Radius, Ionization Energy, Electron Affinity, Electronegativity, Oxide Acidity]
media_subpath: /assets/img/posts/General Chemistry I/
math: true
---

# Periodic Trends and Bond Character

本讲从有效核电荷与电子屏蔽解释原子半径、电离能和电子亲和能的周期性，再通过电负性描述化学键由离子键到极性共价键再到非极性共价键的连续变化，最后讨论氧化物和氢化物的周期性。

## Atomic Radius

原子半径通常由 valence s subshell（价层 s 亚层）决定。可用 Bohr 型近似：

$$
r_{n,Z}\approx a_0\frac{n^2}{Z_{\mathrm{eff}}}
$$

其中：

- $n$ 是价层主量子数；
- $Z_{\mathrm{eff}}$ 是价电子感受到的有效核电荷；
- $a_0$ 是 Bohr 半径。

### Across a Period

同一周期从左到右，$n$ 基本不变，核电荷 $Z$ 增大。虽然新增电子会屏蔽部分核吸引，但 $Z_{\mathrm{eff}}$ 总体增大，因此原子半径总体上减小。

### Down a Group

同一主族从上到下，价电子进入更高的主壳层，$n$ 增大，原子半径总体增大。内层电子虽然有屏蔽作用，但主量子数增大对半径的扩张作用更强。

![原子半径随原子序数和主族的变化](img/L10-L11-Periodic-Trends-and-Bond-Character/figure-02.png)

## Isoelectronic Ions

**isoelectronic ions（等电子离子）** 具有相同的总电子数。电子数相同时，核电荷越大，核对外层电子的吸引越强，离子半径越小。

例如 $\mathrm{F^-}$、$\mathrm{Ne}$、$\mathrm{Na^+}$ 都有 10 个电子，但核电荷分别为 9、10、11：

$$
r(\mathrm{F^-})>r(\mathrm{Ne})>r(\mathrm{Na^+})
$$

![等电子离子的半径随核电荷增大而减小](img/L10-L11-Periodic-Trends-and-Bond-Character/figure-01.png)

## Slater's Rules

Slater's rules（Slater 规则）用于估计 shielding constant（屏蔽常数）和有效核电荷。

- 同一周期内，s 和 p 价电子的 $Z_{\mathrm{eff}}$ 约按 $\Delta Z_{\mathrm{eff}}\approx0.65\Delta Z$ 增大；
- 对 d 价电子，$Z_{\mathrm{eff}}$ 约按 $\Delta Z_{\mathrm{eff}}\approx0.15\Delta Z$ 增大；
- f 价电子受到的有效核电荷随原子序数变化更小。

这些是近似规则，用于解释周期性趋势，而不是精确计算真实电子能量。

## Ionization Energy

**first ionization energy $IE_1$（第一电离能）** 是从气态中性原子移走一个电子所需的最小能量：

$$
\mathrm{X(g)\rightarrow X^+(g)+e^-}
$$

$$
\Delta E=IE_1>0
$$

第二电离能对应：

$$
\mathrm{X^+(g)\rightarrow X^{2+}(g)+e^-}
$$

对同一元素：

$$
IE_1<IE_2<IE_3<\cdots
$$

因为移走电子后，剩余电子受到更有效的核吸引，而且电子数越少，继续电离越困难。

### Periodic Trend in $IE_1$

- 同一周期从左到右，$Z_{\mathrm{eff}}$ 增大，$IE_1$ 总体升高；
- 同一主族从上到下，电子进入更高主壳层，$IE_1$ 总体降低；
- 稀有气体具有很高的 $IE_1$；
- 碱金属的 $IE_1$ 较低，容易形成 $+1$ 离子。

![第一电离能的周期趋势](img/L10-L11-Periodic-Trends-and-Bond-Character/figure-03.png)

趋势不是严格单调的。例如：

- Be 的 $2s$ 亚层全充满，移走电子会破坏较稳定的全充满结构；
- N 的 $2p$ 亚层为半充满，具有额外的 exchange stabilization（交换稳定）；
- O 增加第 4 个 $2p$ 电子时必须与已有电子配对，电子间排斥增加。

因此周期中出现局部的 $IE$ 异常。

### Relativistic Effect in Mercury

Hg 的 $6s^2$ 电子具有较高的有效核电荷和较大的速度。课件用 $Z=80$ 估计：

$$
\frac vc\approx\frac{80}{137}\approx0.58
$$

相对论使电子的有效质量增大：

$$
m'_e=\frac{m_e}{\sqrt{1-v^2/c^2}}
$$

这种效应使 6s 轨道收缩，Hg 的 $IE_1$ 异常升高。Hg 的电子排布为：

$$
[\mathrm{Xe}]4f^{14}5d^{10}6s^2
$$

失去一个电子后成为：

$$
[\mathrm{Xe}]4f^{14}5d^{10}6s^1
$$

## Electron Affinity

**electron affinity, EA（电子亲和能）** 描述气态原子获得一个电子时释放的能量：

$$
\mathrm{X(g)+e^-\rightarrow X^-(g)}
$$

- $EA$ 越大，表示该原子越容易接受电子，形成的阴离子越稳定；
- Cl 具有较大的电子亲和能；
- 稀有气体和碱土金属的 EA 通常很小，因为新增电子会进入已有电子占据的较高能级。

![电子亲和能的周期趋势](img/L10-L11-Periodic-Trends-and-Bond-Character/figure-04.png)

在相同电子距离下：

- $Z_{\mathrm{eff}}$ 增大通常提高电离能；
- $Z_{\mathrm{eff}}$ 增大也通常提高电子亲和能；
- 未成对电子、亚层是否半充满或全充满会造成局部异常。

## Electronegativity

**electronegativity, $\chi$（电负性）** 描述成键原子吸引共享电子的倾向。

### Mulliken Electronegativity

Mulliken 把电负性与电离能和电子亲和能联系：

$$
\chi\propto\frac12(IE_1+EA)
$$

一个原子越难失去电子、同时越容易接受电子，就越倾向于吸引成键电子。

### Pauling Electronegativity

Pauling 通过比较异核键与同核键的能量来定义电负性差：

$$
\Delta=E_{AB}-\sqrt{E_{AA}E_{BB}}
$$

其中 $E_{AB}$ 是 A—B 键能，$E_{AA}$、$E_{BB}$ 是对应同核键能。异核键额外增强的能量与电荷分离和电负性差相关：

$$
(\chi_A-\chi_B)^2\propto q^2\propto\Delta
$$

常用参考点：

$$
\chi_{\mathrm F}=4.0,\qquad\chi_{\mathrm H}=2.2
$$

![Pauling 电负性的键能差定义与参考点](img/L10-L11-Periodic-Trends-and-Bond-Character/figure-05.png)

![电负性在主族和周期中的变化](img/L10-L11-Periodic-Trends-and-Bond-Character/figure-06.png)

电负性总体趋势：

- 同一周期从左到右增大；
- 同一主族从上到下减小；
- F 的电负性最大；
- Cs 等左下角金属的电负性很小。

## From Ionic to Covalent Bonding

电负性差 $\Delta\chi$ 越大，成键电子越偏向电负性较大的原子，键的 ionic character（离子性）越强。

| Electronegativity difference | Approximate bond character |
|---|---|
| $\Delta\chi<0.4$ | nonpolar covalent（非极性共价） |
| $0.4<\Delta\chi<2.0$ | polar covalent（极性共价） |
| $\Delta\chi>2.0$ | predominantly ionic（主要为离子键） |

这些界限是经验性的，不能把化学键严格分成互不连续的三种类型。键型是连续变化的。

![键的离子性与电负性差之间的连续关系](img/L10-L11-Periodic-Trends-and-Bond-Character/figure-07.png)

### Polarization

即使电负性差较大，离子键中也可能存在共价成分：

- 阳离子电荷高、半径小，polarizing power（极化能力）强；
- 阴离子半径大、电子云易变形，polarizability（可极化性）强；
- 离子间电子云变形会增加共价性，例如 $\mathrm{Cu^+}$ 和 $\mathrm{I^-}$。

## Bond Length and Melting Point

离子化合物的 bond length（键长）和 melting point（熔点）受 Coulomb attraction 控制：

$$
E_{\text{Coulomb}}\propto\frac{q_+q_-}{r}
$$

因此：

- 离子电荷越大，晶格能通常越大，熔点更高；
- 离子半径越小，离子间距越短，库仑吸引更强；
- 例如 MgO 中 $2+$ 与 $2-$ 的相互作用远强于 NaCl 中的 $1+$ 与 $1-$，因此 MgO 的熔点更高。

## Acid–Base Properties of Oxides

氧化物的酸碱性随元素在周期表中的位置变化：

- 左下角的金属氧化物通常为 basic（碱性）；
- 右上角的非金属氧化物通常为 acidic（酸性）；
- 中间若干氧化物为 amphoteric（两性），既能与酸反应，也能与碱反应。

### Basic Oxide

$$
\mathrm{Na_2O+H_2O\rightarrow2Na^+(aq)+2OH^-(aq)}
$$

### Acidic Oxide

$$
\mathrm{Cl_2O_7+H_2O\rightarrow2ClO_4^-(aq)+2H^+(aq)}
$$

### Amphoteric Oxide

与酸反应：

$$
\mathrm{Al_2O_3+6H^+\rightarrow2Al^{3+}+3H_2O}
$$

与碱反应：

$$
\mathrm{Al_2O_3+2OH^-+3H_2O\rightarrow2[Al(OH)_4]^-}
$$

![氧化物的碱性、酸性和两性区域](img/L10-L11-Periodic-Trends-and-Bond-Character/figure-08.png)

最高氧化态含氧酸中：

- 课件将 $\mathrm{HClO_4}$ 列为最强酸；
- 课件将 $\mathrm{CsOH}$ 列为最强碱。

## Hydrides

氢化物的键型也随元素位置变化：

- 左侧金属形成 ionic hydride（离子型氢化物），如 LiH、NaH；
- 中间元素形成 covalent hydride（共价型氢化物），如 $\mathrm{CH_4}$、$\mathrm{NH_3}$、$\mathrm{H_2O}$；
- 右侧元素形成的 X—H 键越来越 polar（极性）。

![氢化物从离子型到共价型和极性共价型的过渡](img/L10-L11-Periodic-Trends-and-Bond-Character/figure-09.png)

氢化物的酸碱性也随中心元素变化：左侧氢化物倾向作为强还原剂和碱，右侧氢化物逐渐表现酸性，例如 HCl 是强酸。

## Common Confusions

- 原子半径和离子半径的变化不能只看电子数，还必须看核电荷。
- 电离能、电子亲和能和电负性相关，但不是同一个物理量。
- Pauling 电负性差是判断键型的辅助工具，不是绝对边界。
- 配平氧化物酸碱反应时，氢、氧原子和电荷都必须同时守恒。
- 同一主族从上到下原子半径总体增大，但离子半径的变化还要考虑电荷和电子构型。
