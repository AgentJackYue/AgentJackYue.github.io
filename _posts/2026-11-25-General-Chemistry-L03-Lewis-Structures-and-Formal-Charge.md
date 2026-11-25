---
title: Lecture 03 — Lewis Structures and Formal Charge
date: 2026-11-25 12:00:00 +0800
categories: [Notes, General Chemistry I]
tags: [Lewis Structures, Octet Rule, Formal Charge, Coordinate Bond, Lewis Acids and Bases]
media_subpath: /assets/img/posts/General Chemistry I/
math: true
---

# Lewis Structures and Formal Charge

本讲用 Lewis dot structure（Lewis 点结构）表示价电子、化学键和孤对电子，并介绍形式电荷、配位键、多重结构以及 Lewis acid–base 反应。

## Lewis Structure Rules

Lewis 结构用点表示 valence electrons（价电子），主要规则为：

1. 一对共享电子构成 covalent bond（共价键）；未共享的一对电子是 lone pair（孤对电子）。
2. 每种原子尽量达到自身对应的 noble-gas electron configuration（稀有气体电子构型）。
3. 在不违反前两条时，尽可能多地共享电子。

对第二周期元素，常见的目标是形成 octet（八隅体）；H 和 He 对应的是 2 电子构型。

### Bond Order and Electron Pairs

- 一对共享电子：single bond（单键）
- 两对共享电子：double bond（双键）
- 三对共享电子：triple bond（三键）
- 没有共享的价电子：lone pair（孤对电子）

![O₂、N₂、乙烷、乙烯和乙炔中的单键、双键与三键](img/L03-Lewis-Structures-and-Formal-Charge/figure-01.png)

## Drawing Lewis Structures

系统绘制一个分子的 Lewis 结构时，可以按以下步骤进行：

1. 计算全部 valence electrons：

$$
N_{\mathrm{valence}}
=\sum_i n_iV_i-q
$$

其中 $V_i$ 是第 $i$ 种原子的价电子数，$n_i$ 是原子数，$q$ 是离子电荷。阴离子要在总电子数中加上负电荷数，阳离子则减去正电荷数。

2. 先确定中心原子，再用单键连接各原子。
3. 把剩余电子作为孤对电子分配给 terminal atoms（端基原子），使端基达到八隅体。
4. 若中心原子没有达到八隅体，将端基的孤对电子改为成键电子对，形成双键或三键。
5. 计算每个原子的 formal charge，并比较可能结构的稳定性。

课件以 $\mathrm{POCl_3}$ 为例：

$$
N_{\mathrm{valence}}=5+6+3(7)=32
$$

若 5 个原子都达到八隅体，需要：

$$
5\times8=40
$$

因此共享电子数为：

$$
40-32=8
$$

成键电子对数为：

$$
\frac82=4
$$

所以 P 与 3 个 Cl 和一个 O 之间共有 4 对成键电子。

![Lewis 结构的系统绘制流程](img/L03-Lewis-Structures-and-Formal-Charge/figure-03.png)

## Formal Charge

**formal charge, FC（形式电荷）** 是在假定每条共价键的成键电子由两个原子平均占有的情况下，对原子电荷作出的形式计算：

$$
\mathrm{FC}
=V-N_{\mathrm{lp}}-\frac12N_{\mathrm{bond}}
$$

式中：

- $V$ 是中性原子的价电子数；
- $N_{\mathrm{lp}}$ 是该原子在结构中的孤对电子数；
- $N_{\mathrm{bond}}$ 是参与形成化学键的电子数。

### Choosing a More Stable Lewis Structure

同一组成可能存在多个满足连接方式的结构。通常：

1. formal charges 的绝对值越小越稳定；
2. 不把同种符号的形式电荷放在相邻原子上；
3. 负形式电荷尽量位于电负性较大的原子，正形式电荷尽量位于电负性较小的原子。

### Example：Carbon Monoxide

CO 中如果用 C=O 并给两端补足孤对电子，可以得到接近零的形式电荷，但碳原子仍然只有 6 个价电子，没有满足八隅体。写成 $\mathrm{C\equiv O}$ 时，C 和 O 都满足八隅体，形式电荷分别为 $-1$ 和 $+1$；负形式电荷位于电负性较小的碳上，因此这个结构比“形式电荷为零但碳未满八隅体”的结构更合理。

![CO 中的配位键、形式电荷与结构选择](img/L03-Lewis-Structures-and-Formal-Charge/figure-02.png)

### Example：Azide Ion

对 $\mathrm{N_3^-}$，一种共振式具有 N=N=N 的骨架。

终端 N 的形式电荷为：

$$
\mathrm{FC}=5-4-\frac12(4)=-1
$$

中心 N 的形式电荷为：

$$
\mathrm{FC}=5-0-\frac12(8)=+1
$$

整体电荷为：

$$
2(-1)+(+1)=-1
$$

这与 $\mathrm{N_3^-}$ 的总电荷一致。三种 N 原子位置可以交换，因此该离子具有多个等价或近似等价的 resonance structures（共振结构）。

## Ions

- 对阳离子，先按中性结构计数，再减少与正电荷数相同的电子。
- 对阴离子，先按中性结构计数，再增加与负电荷数相同的电子。
- $\mathrm{LiF}$ 中 Li 转移一个电子给 F，可以表示为 $\mathrm{Li^+[F]^-}$，突出离子键的静电本质。
- $\mathrm{H_3O^+}$ 与 $\mathrm{OH^-}$ 的 Lewis 结构必须在中心 O 上体现正确的 formal charge。

## Coordinate Bond

**coordinate bond（配位键）** 是共享电子对最初由同一个原子提供的共价键。

- 形成配位键后，键本身仍然是普通的共享电子对。
- 形式电荷用于跟踪电子来源，但不等同于原子上的真实电荷。
- 例如 $\mathrm{BF_3}$ 的空 p orbital 可以接受 $\mathrm{F^-}$ 的一对孤对电子，形成 $\mathrm{BF_4^-}$。

## Multiple Structures and Resonance

当单一 Lewis 结构无法完整描述电子分布时，会有多个 **canonical structures（正则结构）**：

- $\mathrm{O_3}$ 可以写成两种等价结构；
- $\mathrm{N_2O}$ 可以写成不同原子排列或电子分配的结构；
- $\mathrm{HN_3}$ 可以画出多种 N—N 键级和形式电荷分布。

这些结构不是分子在多个状态之间来回切换，而是共同表示同一个 **resonance hybrid（共振杂化体）**。单个正则结构不能单独准确表示真实电子分布。

## Ions and Alternative Lewis Structures

对于含离子的结构，应同时检查：

- 总电子数是否等于中性原子的总价电子数减去正电荷或加上负电荷；
- 是否满足八隅体；
- 形式电荷之和是否等于离子的总电荷；
- 哪种电子分配产生更小且更合理的 formal charges。

课件要求练习为 $\mathrm{SO_2}$、$\mathrm{BrO_2^-}$ 和 $\mathrm{NO_3^-}$ 分配形式电荷，并比较不同结构的稳定性。

## Hypervalent Molecules

第二周期元素通常不能扩展八隅体；第三周期及更重元素可以形成 **hypervalent molecule（超价分子）**，即中心原子周围超过 8 个价电子。

常见结构包括：

- $\mathrm{SF_6}$：六配位；
- $\mathrm{WF_6}$：六配位；
- $\mathrm{BrF_5}$：五配位。

绘制这些结构时：

- 先把 terminal atoms（端基原子）补足八隅体；
- 多余电子放在中心原子周围；
- 仍要用 formal charge 和实际几何构型检查结构。

## Lewis Acids and Bases

- **Lewis acid（Lewis 酸）** 接受一对电子；
- **Lewis base（Lewis 碱）** 提供一对电子。

$$
\mathrm{BF_3+F^-\rightarrow BF_4^-}
$$

$\mathrm{BF_3}$ 中心 B 只有 6 个价电子，可以接受 F 的孤对电子；$\mathrm{F^-}$ 则作为电子对给予体。

![BF₃ 作为 Lewis 酸接受 F⁻ 的电子对](img/L03-Lewis-Structures-and-Formal-Charge/figure-04.png)

## Common Errors

- 只追求八隅体而忽略形式电荷。
- 把 formal charge 当成原子真实电荷。
- 将 resonance structures 理解为分子真实地来回振动。
- 对离子忘记加减电子。
- 对第二周期元素错误地扩展八隅体。
- 看到双键或三键就替换全部孤对电子，而没有先满足端基原子的八隅体。
