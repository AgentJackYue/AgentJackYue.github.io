---
title: Lectures 06–07 — Quantum Mechanics and Hydrogen Orbitals
date: 2026-11-25 12:00:00 +0800
categories: [Notes, General Chemistry I]
tags: [Particle in a Box, Wavefunctions, Quantum Numbers, Atomic Orbitals, Radial Distribution]
media_subpath: /assets/img/posts/General Chemistry I/
math: true
---

# Quantum Mechanics and Hydrogen Orbitals

本讲从波函数的概率解释出发，利用一维箱中的驻波说明能级量子化，再过渡到二维和三维边界条件，最后介绍氢原子轨道的形状、量子数、角动量和径向分布。

## Wavefunction and Probability

微观粒子的状态用 wave function（波函数）$\psi$ 描述：

- 波函数通常同时包含实部和虚部；
- 波函数随时间演化遵循 Schrödinger equation（薛定谔方程）；
- 概率分布由波函数模的平方给出。

对一维空间：

$$
P(x)=\|\psi(x)\|^2
$$

$P(x)$ 是 probability density（概率密度）。粒子在 $x$ 到 $x+dx$ 之间出现的概率为：

$$
dP=P(x)\,dx=\|\psi(x)\|^2dx
$$

粒子在整个空间内必定出现，因此：

$$
\int_{-\infty}^{\infty}\|\psi(x)\|^2dx=1
$$

这称为 wavefunction normalization（波函数归一化）。

- **stationary state（定态）** 是能量具有确定值的状态；
- 定态波函数通常可写成空间部分与时间振荡部分的乘积；
- 叠加不同能量的定态可形成 time-dependent state（随时间变化的状态）。

## Particle in a One-Dimensional Box

粒子在一个长度为 $L$ 的一维箱中运动，箱内势能为 0：

$$
V(x)=0,\qquad0<x<L
$$

箱外势能无限高：

$$
V(x)=\infty,\qquad x\leq0\ \text{或}\ x\geq L
$$

因此边界条件为：

$$
\psi(0)=\psi(L)=0
$$

第 $n$ 个驻波型波函数满足：

$$
\psi_n(x)\propto\sin\left(\frac{n\pi x}{L}\right),
\qquad n=1,2,3,\ldots
$$

为了在两端都形成节点：

$$
n\lambda=2L
$$

因此：

$$
\lambda_n=\frac{2L}{n}
$$

结合 de Broglie 关系 $p=h/\lambda$：

$$
p_n=\frac{nh}{2L}
$$

箱内只有动能：

$$
E_n=\frac{p_n^2}{2m}
=\frac{n^2h^2}{8mL^2}
$$

其中：

- $m$ 是粒子质量；
- $L$ 是箱长；
- $h$ 是 Planck 常数；
- $n$ 是 principal quantum number（主量子数）。

### Nodes and Energy

- $n=1$：ground state（基态），箱内没有节点；
- $n=2$：第一激发态，箱中央有 1 个节点；
- $n=3$：第二激发态，箱内有 2 个节点。

因此：

$$
\text{量子数 }n=\text{箱内节点数}+1
$$

能量随 $n^2$ 增大：

$$
E_n\propto n^2
$$

箱越短，相邻能级间隔越大；粒子越重，能级间隔越小。

![一维箱中前三阶波函数及节点数](img/L06-L07-Quantum-Mechanics-and-Hydrogen-Orbitals/figure-01.png)

![一维箱的驻波条件、波函数与能级](img/L06-L07-Quantum-Mechanics-and-Hydrogen-Orbitals/figure-02.png)

## Two-Dimensional Standing Waves

二维箱或圆形边界会出现两类节点：

- **angular node / nodal line（角节点/节点线）**：沿径向延伸，振幅在一条线上为 0；
- **radial node / nodal ring（径向节点/节点环）**：在半径方向形成闭合的零振幅圆环。

量子数等于总节点数加 1：

$$
n=N_{\mathrm{nodes}}+1
$$

二维振动可以与鼓面或沙粒在振动板上的图案类比。不同量子数对应不同的正负相位区域；颜色表示波函数的符号，并不表示空间中有真实的“正电荷区域”或“负电荷区域”。

![二维振动中的节点环、节点线和总量子数](img/L06-L07-Quantum-Mechanics-and-Hydrogen-Orbitals/figure-03.png)

## From Circular Waves to Atomic Orbitals

氢原子中的电子受到中心原子核的吸引：

$$
E_p=-\frac{1}{4\pi\varepsilon_0}\frac{Ze^2}{r}
$$

这种 Coulomb potential 是球对称的，因此氢原子的波函数通常用 spherical polar coordinates（球坐标）表示：

- $r$：到原子核的距离；
- $\theta$：polar angle（极角）；
- $\phi$：azimuthal angle（方位角）。

波函数可分离为 radial part（径向部分）和 angular part（角向部分）：

$$
\psi_{n,l,m_l}(r,\theta,\phi)
=R_{n,l}(r)Y_{l,m_l}(\theta,\phi)
$$

径向部分决定电子在不同距离处出现的概率；角向部分决定轨道的空间方向和节面形状。

## 1s Orbital

1s 轨道的波函数为：

$$
\psi_{1s}
=\frac{1}{\sqrt\pi}a_0^{-3/2}
\exp\left(-\frac r{a_0}\right)
$$

其中：

- $a_0=53\ \mathrm{pm}=0.53\ \mathrm{\AA}$；
- $1\ \mathrm{\AA}=10^{-10}\ \mathrm m$；
- 波函数在 $r=0$ 附近最大，并随距离指数衰减。

1s 轨道没有 node（节点），概率密度 $\|\psi\|^2$ 在核附近最大。三维图中常用颜色表示 $\|\psi\|^2$ 的大小或波函数的正负相位。

![1s 轨道的波函数与电子概率分布](img/L06-L07-Quantum-Mechanics-and-Hydrogen-Orbitals/figure-04.png)

## 2s Orbital

2s 轨道的波函数为：

$$
\psi_{2s}
=\frac{1}{4\sqrt{2\pi}}a_0^{-3/2}
\left(2-\frac r{a_0}\right)
\exp\left(-\frac r{2a_0}\right)
$$

括号中的 $2-r/a_0$ 在：

$$
r=2a_0
$$

处变为 0，因此形成一个 **nodal sphere（球形节点）**。

- 节点处 $\psi=0$，因此 $\|\psi\|^2=0$；
- 节点两侧波函数符号相反；
- 2s 轨道有一个径向节点。

![2s 轨道中的球形节点](img/L06-L07-Quantum-Mechanics-and-Hydrogen-Orbitals/figure-05.png)

## 2p Orbitals

2p 轨道可以沿 $x$、$y$ 或 $z$ 方向取向。以 $2p_z$ 为例：

$$
\psi_{2p_z}
=\frac{1}{4\sqrt{2\pi}}a_0^{-3/2}
\frac r{a_0}
\exp\left(-\frac r{2a_0}\right)
\cos\theta
$$

其中 $R_{21}$ 是 radial part，$Y_{1,0}\propto\cos\theta$ 是 angular part。

当：

$$
\cos\theta=0
$$

即：

$$
\theta=90^\circ
$$

时，$\psi=0$。因此 $2p_z$ 在 $xy$ 平面中有一个 angular nodal plane（角向节面）。

三个 p 轨道：

- $2p_x$
- $2p_y$
- $2p_z$

能量在氢原子中相同，但空间方向彼此垂直。

![2p_z 轨道的径向部分、角向部分和节点平面](img/L06-L07-Quantum-Mechanics-and-Hydrogen-Orbitals/figure-06.png)

## d Orbitals

3d 轨道包括：

- $d_{xy}$、$d_{xz}$、$d_{yz}$：位于坐标平面之间；
- $d_{x^2-y^2}$：沿 $x$ 轴和 $y$ 轴；
- $d_{z^2}$：主要沿 $z$ 轴分布，并带有环形区域。

d 轨道具有更复杂的角向节面和相位分布。不同 d 轨道的形状与方向会影响过渡金属化合物中的成键与晶体场分裂。

![五个 3d 轨道的空间取向和相位](img/L06-L07-Quantum-Mechanics-and-Hydrogen-Orbitals/figure-07.png)

## Quantum Numbers

### Principal Quantum Number $n$

$$
n=1,2,3,\ldots
$$

- 决定主壳层和氢原子的主要能量；
- 影响轨道平均半径；
- $n$ 越大，轨道通常越扩展。

### Angular Momentum Quantum Number $l$

$$
l=0,1,2,\ldots,n-1
$$

| $l$ | Subshell | Shape |
|---:|---|---|
| 0 | s | spherical |
| 1 | p | two-lobed，3 个方向 |
| 2 | d | 5 个方向 |
| 3 | f | 更复杂的角向结构 |

$l$ 决定 orbital angular momentum（轨道角动量）的大小；在量子力学中，其测量值大小与 $l$ 有关。

### Magnetic Quantum Number $m_l$

$$
m_l=-l,-l+1,\ldots,0,\ldots,l
$$

对给定 $l$，可取的 $m_l$ 数量为：

$$
2l+1
$$

因此：

- $l=0$：1 个 s 轨道；
- $l=1$：3 个 p 轨道；
- $l=2$：5 个 d 轨道。

$m_l$ 决定轨道在空间中的方向。

### Spin Quantum Number $m_s$

$$
m_s=+\frac12\quad\text{或}\quad-\frac12
$$

电子具有 intrinsic spin（内禀自旋）。每个 spatial orbital 最多容纳两个自旋相反的电子。

![n、l、m_l 与原子轨道数目的关系](img/L06-L07-Quantum-Mechanics-and-Hydrogen-Orbitals/figure-08.png)

## Orbital Angular Momentum

旧量子论中的 Bohr 角动量为：

$$
L_n=n\frac h{2\pi}=n\hbar
$$

量子力学给出的大小为：

$$
L=\sqrt{l(l+1)}\,\hbar
$$

其中：

$$
\hbar=\frac h{2\pi}
$$

方向由量子数 $m_l$ 描述。由于角动量的三个分量不能同时具有确定值，一个轨道不能被简单画成具有确定旋转平面的经典轨道。

## Orbit versus Orbital

- **orbit（轨道）**：Bohr 模型中的固定圆形路径；
- **orbital（原子轨道）**：电子的一组量子态及其波函数，代表电子概率分布，不是确定的运动轨迹。

因此，后来的“电子云”不是电子像烟雾一样散开，而是大量重复测量中电子出现位置的概率分布。

## Radial Distribution Function

径向波函数 $R_{n,l}(r)$ 表示沿某一固定方向上的波函数随 $r$ 的变化。为了描述半径 $r$ 附近球壳中的总概率，引入 radial distribution function（径向分布函数）：

$$
D(r)=r^2R_{n,l}^2(r)
$$

$D(r)dr$ 表示在半径为 $r$、厚度为 $dr$ 的球壳中找到电子的概率。

- $R^2$ 是某方向上的概率密度；
- $r^2$ 来自球壳体积随半径平方增大；
- $D(r)$ 的峰值给出最概然半径 $r_{\mathrm{mp}}$。

![径向波函数、径向密度和径向分布函数](img/L06-L07-Quantum-Mechanics-and-Hydrogen-Orbitals/figure-09.png)

## Most Probable Radius

对 1s、2p、3d 等没有额外内层径向节点的轨道，Bohr 模型与量子模型的 most probable radius（最概然半径）数值相同：

$$
r_{\mathrm{mp},n}=n^2a_0
$$

因此：

- 1s：$r_{\mathrm{mp}}=a_0$；
- 2p：$r_{\mathrm{mp}}=4a_0$；
- 3d：$r_{\mathrm{mp}}=9a_0$。

对 2s、3s 等轨道，$D(r)$ 有多个峰，最概然半径与 Bohr 半径不再简单相等。

![不同轨道的径向分布和最概然半径](img/L06-L07-Quantum-Mechanics-and-Hydrogen-Orbitals/figure-10.png)

## Orbital Energy and Degeneracy

氢原子的轨道能量只由 $n$ 决定：

$$
E_n=-\frac{R_H}{n^2},
\qquad R_H=2.18\times10^{-18}\ \mathrm J=13.6\ \mathrm{eV}
$$

- $n=1$：1 个轨道；
- $n=2$：$1+3=4$ 个轨道；
- $n=3$：$1+3+5=9$ 个轨道。

同一 $n$ 下不同 $l,m_l$ 的轨道具有相同能量，称为 **degenerate orbitals（简并轨道）**。这种 s、p、d 能级简并是氢原子只有一个电子时的特殊结果；多电子原子中，电子间排斥和屏蔽会解除这种简并。
