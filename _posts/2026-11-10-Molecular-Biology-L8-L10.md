---
title: Molecular Biology — L8–L10 Notes
date: 2026-11-10 12:00:00 +0800
categories: [Notes, Biology]
tags: []
media_subpath: /assets/img/posts/Molecular_Biology_L8-L10/
math: true
---

# Molecular Biology — L8–L10 Notes

## Lecture 8. Homologous Recombination at the Molecular Level

### Overview and Biological Roles

- **Homologous recombination (HR)**：两条携带相同 genetic loci 的同源 DNA 分子之间发生 reciprocal exchange（相互交换）。
- 并非所有 DNA 都是 recombinant DNA；HR 只描述在有同源序列的 DNA 之间产生新组合的遗传交换。
- HR 的生物学作用：
  - meiosis 中产生 genetic variation；
  - 用完整 homologous DNA 找回 DNA 损伤中丢失的序列；
  - restart stalled or collapsed replication forks；
  - 调节某些基因的表达。

DSB 若未修复会造成 chromosome breakage、aneuploidy 或 cell death。真核细胞可用 HR 或 **non-homologous end joining (NHEJ)** 修复 DSB；NHEJ 直接连接断裂端，HR 则依赖 homologous template 进行较忠实的修复。

![DSB repair by HR or NHEJ](L8-L10Pic/001.png)

### Models for Homologous Recombination

**Holliday model**

1. 两条 homologous DNA molecules 对齐（pairing）。
2. 在 DNA 中形成 breaks，并产生 ssDNA（resection）。
3. **Strand invasion（链侵入）**：一条 ssDNA 侵入 homologous duplex 并寻找互补序列。
4. 形成 **Holliday junction（Holliday 交叉）**：两条 DNA 通过交叉连接在一起。
5. **Branch migration（分支迁移）**：交叉沿 DNA 移动，增加交换区域长度。
6. Resolution（交叉解离）：在交叉附近切割特定 DNA 链，分离两条重组分子并完成交换。

![Holliday-junction model](L8-L10Pic/002.png)

**Holliday-junction resolution**

- 如果在相同 sequence/polarity 的两条链处切割，可产生两种不同产物：
  - **Crossover / splice product**：交换位点两侧的遗传标记发生 reassortment；
  - **Patch / noncrossover product**：交叉被解除但没有交换 flanking genes。
- 因此，形成 Holliday junction 并不必然意味着最终发生 crossing over。

**Double-strand-break repair (DSBR) model**

1. 同源 DNA 之一发生 DSB。
2. 核酸酶切除 DNA 末端，形成 3′ ssDNA tails（5′→3′ resection）。
3. 第一段 3′ tail 侵入未断裂的同源 duplex，形成 D-loop。
4. 第二段 3′ tail 也可侵入，形成 double Holliday junction。
5. 侵入末端作为 primer，以 homologous DNA 为 template 合成 DNA。
6. Branch migration 和 resolution 决定 crossover/noncrossover 产物。

![DSBR model and resolution outcomes](L8-L10Pic/003.png)

- Resolution 的方向和位置可决定是否产生 crossover。
- DSBR 中的 DNA synthesis 可修复 DSB 处丢失的信息，并产生 **gene conversion**。
- 实验性基因组编辑可利用 Cas9 nickase 产生单链 nick 或有限 DSB，以偏向 HDR/HR 并减少随机 indel。

### Homologous Recombination Protein Machines

DNA polymerases、SSBs、topoisomerases 和 ligases 都参与 HR 中的 DNA synthesis、链保护和连接。

**RecBCD processing in E. coli**

- **RecBCD** 同时具有 DNA helicase 和 nuclease activities，并以 ATP 水解供能。
- 从 DSB 进入 DNA 后，RecB 和 RecD 在不同方向、不同速度移动，产生 ssDNA loop。
- **RecC** 识别 **Chi site（$\chi$ site，GCTGGTGG）**。
- 遇到 Chi site 后，RecBCD 的 nuclease activity 改变，停止过度降解，并生成带 3′ 末端的 ssDNA。
- 这一 ssDNA 帮助装载 **RecA** 进行 strand invasion。

![RecBCD processing of a broken DNA end](L8-L10Pic/004.png)

**Chi-site genome protection**

- Chi site 在 *E. coli* genome 中约每 65 kb 出现一次，总数约 1000 个。
- Chi site 可提高其远端约 10 kb 范围内的 recombination frequency。
- 自身 genome 富含 Chi sites，因此 RecBCD 倾向产生可用于 recombination 的 ssDNA。
- 外源 phage DNA 通常缺少这些序列，因此更容易被 RecBCD extensively degraded。

**RecA and strand exchange**

- RecA 是 homologous recombination 的 central protein，也是所有生物中 strand-exchange protein 的 founding member。
- RecA 需要：
  - 两条 DNA 间存在 sequence complementarity；
  - 至少一条 DNA 上有 ssDNA；
  - 互补区域内存在 DNA end。
- RecA 在 ssDNA 上以 cooperative 方式形成 protein–DNA filament；filament 的装配具有 5′→3′ polarity。
- Filament 的 secondary DNA-binding site 可短暂、低亲和地结合 dsDNA，使 DNA 局部打开并测试互补性。
- Homology search 后形成三链的 **joint molecule**；strand exchange 将一条亲本链替换，形成 heteroduplex。

![RecA–ssDNA filament](L8-L10Pic/005.png)

- 真核 homologs：
  - **Rad51**：广泛表达，参与 mitotic/meiotic HR；
  - **Dmc1**：meiosis-specific，促进 non-sister chromatids 间 recombination；
  - archaea 的 **RadA**。

**RuvAB and RuvC**

- **RuvA** 特异性识别 Holliday junction。
- **RuvB** 是 hexameric ATPase；RuvA 招募 RuvB 后，RuvB 利用 ATP 水解驱动 branch migration。
- **RuvC** 是 resolvase，在 junction 处切割两条同极性链，产生 5′ phosphate 和 3′–OH；随后 DNA ligase 连接末端。
- RuvC 对序列有一定偏好（约 5′-A/T-T-T-G/C），但允许 branch migration 先寻找合适切割位置。

![RuvAB branch migration and RuvC resolution](L8-L10Pic/006.png)

### Homologous Recombination in Eukaryotes

**Meiotic recombination**

- 减数分裂中 HR 是 chromosome pairing、crossing over 和正确 segregation 所必需。
- 如果缺少 meiotic recombination，homologs 可能不能正确连接 spindle，导致 **nondisjunction**、产生染色体数异常的 gametes，并降低 fertility。
- Crossovers 产生 **chiasmata**，在显微镜下可观察到同源染色体交叉，并在 meiosis-I 中维持 homolog 连接。

**Spo11 initiates programmed DSBs**

- **Spo11** 在 meiosis 的特定时间产生 programmed DSBs；其序列选择性低，主要在 nucleosome packing 较松的 regions 切割，形成 recombination hot spots。
- Spo11 的 tyrosine 攻击 phosphodiester backbone，形成 covalent protein–DNA intermediate；两个 Spo11 molecules 共同产生 DSB。
- Spo11-linked 5′ ends 被 processed，能量暂存于 protein–DNA linkage；在某些情况下可通过 cleavage reaction 的简单逆转重新封闭 DSB。

![Spo11-generated DSB and covalent intermediate](L8-L10Pic/007.png)

**MRX and Rad51/Dmc1**

- **MRX complex**（Mre11–Rad50–Xrs2；人类为 MRN）具有 nuclease activity，对 Spo11-linked 5′ end 进行 5′→3′ resection，产生长于 1 kb 的 3′ ssDNA，并去除共价连接的 Spo11。
- Rad51 和 meiosis-specific Dmc1 在 ssDNA 上形成 filament，促进 strand invasion。
- Dmc1-dependent recombination 更倾向发生在 non-sister homologous chromatids 之间，而不是 sister chromatids 之间，从而产生 genetic diversity。
- 许多 recombination proteins 可形成 large multiprotein **recombination factories**。

### Mating-Type Switching

- 芽殖酵母 *S. cerevisiae* 可以 stable haploid（a 或 α）或 diploid（a/α）形式存在。
- Haploid cells 可与相反 mating type 交配形成 diploid；diploid 可经 meiosis 产生两个 a 和两个 α spores。
- Mating type 由 **MAT locus** 控制：
  - a cells：MAT 位点有 a1；
  - α cells：MAT 位点有 α1、α2；
  - diploid：两类 genes 都表达。
- 另外两个 silent cassettes **HML** 和 **HMR** 保留可复制但不表达的 mating-type genes。

**HO endonuclease and SDSA**

- **HO endonuclease** 只在 MAT locus 产生 site-specific DSB，并严格受细胞周期和细胞类型调控。
- MRX、Rad51 和 Rad52 参与 MAT 的 repair，利用 HML/HMR 作为 donor。
- Mating-type switching 通常通过 **synthesis-dependent strand annealing (SDSA)** 完成：
  1. MAT 处形成 DSB；
  2. 5′→3′ resection；
  3. donor strand invasion 和 DNA synthesis；
  4. 新合成 strand 与新形成的 5′ end anneal；
  5. 去除多余 tail，补全另一条链。
- SDSA 的产物是 **gene conversion without crossing over**，适合只改变 MAT 信息而不交换 flanking markers。

![SDSA-mediated gene conversion](L8-L10Pic/008.png)

### Genetic Consequences of Homologous Recombination

- 两个基因间的 recombination frequency 通常与 physical distance 成正比，因此可用于构建 **genetic map**。
- **Recombination hot spots/cold spots** 会扭曲 physical distance 与 genetic distance 的关系。
- Gene conversion 可由以下原因产生：
  - 3′ ssDNA 在 DSB 附近侵入 donor 并复制 donor information，取代受体中接近 DSB 的 allele；
  - Recombination intermediate 内的 heteroduplex mismatch 被 MMR 修复，使一个 allele 改为另一个 allele 的信息。
- Gene conversion 可解释某些 genetic-map distortion 和非孟德尔式 allele ratio。

### Lecture 8：课程小结

- HR 以同源 DNA 为模板，既修复 DSB/collapsed fork，也产生 meiosis 的 genetic exchange。
- Holliday junction、branch migration 和 resolution 决定 crossover 与 noncrossover 产物。
- RecBCD→RecA→RuvABC 是细菌 HR 的核心蛋白链；真核对应 Spo11、MRX、Rad51/Dmc1 等。
- Mating-type switching 和 SDSA 说明 HR 也可只产生 gene conversion 而不伴随 crossing over。

## Lecture 9. Site-Specific Recombination and Transposition of DNA

### Conservative Site-Specific Recombination

**Conservative site-specific recombination (CSSR)** 发生在 specific target DNA sites，不依赖长段 homology。

- 重组位点包含：
  - 与 recombinase 特异结合的 sequences；
  - DNA cleavage/rejoining site。
- 两个位点的 crossover region 通常不对称，因此具有 polarity（方向性）。
- CSSR 的三种结果：
  - **Insertion（插入）**：两个不同 DNA molecules 之间；
  - **Deletion（删除）**：同一 DNA molecule 上的 **direct repeats** 之间；
  - **Inversion（倒位）**：同一 DNA molecule 上的 **inverted repeats** 之间。

![CSSR outcomes: insertion, deletion and inversion](L8-L10Pic/009.png)

**Covalent protein–DNA intermediate**

- **Serine recombinases** 和 **tyrosine recombinases** 是两大 CSSR 家族。
- 两者都通过 nucleophilic amino-acid side chain 与 DNA phosphate 形成 covalent enzyme–DNA intermediate。
- 反应步骤：
  1. Enzyme OH 攻击 phosphate，DNA 产生 single-strand break；
  2. Cleaved DNA 的 OH 攻击 enzyme–DNA bond；
  3. DNA 被重新连接，recombinase 被释放。
- 这种 covalent-intermediate mechanism 也见于其他 DNA enzymes。

**Serine versus tyrosine recombinases**

- **Serine recombinases** 同时切割四条 DNA strands，然后通过 180° rotation/strand swap 与新的 partner 连接。
- **Tyrosine recombinases** 一次只交换一对 strands：
  1. 四个 recombinases 结合两个 sites；
  2. 先切 top strands 并交换；
  3. 形成 Holliday-junction-like intermediate；
  4. 再切 bottom strands 并交换；
  5. 完成双链重组。

![Serine recombinase four-strand exchange](L8-L10Pic/010.png)

**Cre–loxP**

- **Cre** 是来自 bacteriophage P1 的 tyrosine recombinase；**loxP** 含两个 13-bp inverted repeats 和一个 8-bp asymmetric central overlap。
- Cre–loxP 在 phage 中可：
  - 将 linear phage DNA circularize 为 plasmid；
  - decatenate interlinked plasmid rings；
  - 通过 alternative replication 帮助维持 copy number。
- 同一 DNA 上的两个 **same-direction loxP sites** 被 Cre 重组后，可删除中间 DNA；opposite-direction sites 则产生 inversion。
- Conditional knockout 利用 tissue-specific promoter 控制 Cre，只在特定细胞或时间删除被 loxP 夹住的基因。

![Cre–loxP recombination](L8-L10Pic/011.png)

### Biological and Engineering Applications

- Phage λ integration/excision；
- 维持 circular DNA 的 structural integrity；
- 改变 gene expression，例如 Hin inversion；
- 构建 conditional knockout、Gateway cloning 等遗传工程系统。

**Phage λ integration**

- **λ integrase (λInt)** 是 tyrosine recombinase，催化 **attP × attB** recombination。
- 整合后形成 hybrid sites **attL** 和 **attR**。
- attP 含有多个 accessory protein-binding sites；**IHF** 结合并产生大于 160° 的 DNA bend，使远端 λInt sites 与 core 靠近。
- Excision 需要新的 DNA-bending protein **Xis**；Xis 与 IHF、λInt 形成不同构型，使 attL × attR 重组回 attP 和 attB。
- Xis 还能抑制不适当的 integration，因此控制 lysogenic/lytic 状态转换。

![Lambda integrase and att-site architecture](L8-L10Pic/012.png)

**Other examples**

- **Gateway cloning** 利用 λInt 与 accessory proteins 的 BP/LR recombination，在 donor、entry 和 destination vectors 之间高效转移 DNA fragments。
- **Hin recombinase** 通过倒置 DNA segment 使 *Salmonella* 在 H1 与 H2 flagellin 之间切换，从而改变 flagellar antigen。
- **XerCD** 将 replication/recombination 产生的 circular multimers 转换为 monomers，维持 genome stability。

### Transposition Basics

- **Transposition**：mobile genetic elements 从基因组的一个 site 移动到另一个 site。
- 移动元件称为 **transposable elements / transposons**。
- 重组发生在 transposon ends 与 target DNA 之间，可能伴随 target-site duplication。
- 转座可有或没有 transient RNA intermediate；多数元件对 insertion site 没有严格序列偏好。
- Transposons 广泛存在于所有生命形式，占某些 eukaryotic genomes 的很大比例，并在不同 genome 间高度变化。

**Three principal classes**

- **DNA transposons**：如 Tn5、Tn7、Tn10。
- **Virus-like retrotransposons / LTR retrotransposons**：含 long terminal repeats、integrase、reverse transcriptase 和 RNA intermediate；retroviruses 可感染其他 cells。
- **Poly-A retrotransposons / non-LTR retrotransposons**：如 LINE，无 terminal inverted repeats，具有 5′/3′ UTR 和 poly-A tract；ORF1 编码 RNA-binding protein，ORF2 编码 reverse transcriptase/endonuclease。

![Three classes of transposable elements](L8-L10Pic/013.png)

**DNA transposon organization**

- **Terminal inverted repeats (TIRs)** 携带 transposase recognition sequences。
- Central **transposase gene** 负责 excision/integration；还可能携带 regulation genes 或 beneficial genes。
- Insertion 后，target-site sequence 在 transposon 两侧形成 **direct repeats**。
- Autonomous transposon 编码自己的 transposase；nonautonomous element 需要其他 element 提供的 enzyme。

**Cut-and-paste transposition**

1. Transposase 结合 two TIRs，形成 synaptic complex/transpososome。
2. Transposase 在 transposon 两端切割，产生带 3′–OH 的 transposon ends。
3. 两个 3′–OH 攻击 target DNA 两条链，将 transposon directly joined 到 target。
4. 两条链的 attack sites 相隔几个 nucleotide，形成 short target-site duplication。
5. Gap repair 完成 insertion。

![Cut-and-paste DNA transposition](L8-L10Pic/014.png)

**Replicative transposition**

- Replicative transposition 在移动过程中复制 transposon，使 donor 和 target 都可能保留一份。
- Transpososome 切割 junctions 产生 3′–OH；3′ ends 通过 strand transfer 结合 target DNA。
- 以 target 3′–OH 为 primer 进行 replication，复制 transposon 并形成 cointegrate。
- 后续 resolution 可产生两份 flanked by short direct repeats 的 transposon。

**RNA-intermediate retrotransposition**

- LTR retrotransposon 由 cellular RNA polymerase 从 one LTR promoter 转录。
- RNA 经 reverse transcriptase 变成 dsDNA/cDNA；integrase 识别 cDNA ends 并插入 genome。
- Poly-A retrotransposon 常通过 **target-site-primed reverse transcription (TPRT)**：
  - ORF2 endonuclease 在 target DNA 产生 nick；
  - target DNA 3′ end 作为 primer；
  - reverse transcriptase 以 transposon RNA 为 template 合成 cDNA。

![Target-site-primed reverse transcription of a poly-A retrotransposon](L8-L10Pic/015.png)

### Transposons as Tools

- **EZ-Tn5 insertion kit** 可用于体外 random insertion、gene knockout、加入 kanamycin resistance marker 和 large DNA sequencing。
- **ATAC-seq**（Assay for Transposase-Accessible Chromatin）利用 hyperactive Tn5 将 sequencing adapters 插入 open chromatin；open regions 获得更多 reads。
- **CUT&RUN** 用 MNase 在 antibody-guided target 附近切割 DNA。
- **CUT&Tag** 将 Protein A 与 Tn5 融合，用 Tn5 在目标 protein 附近插入 sequencing adapters，背景较低且所需细胞数少。

![Tn5-based chromatin profiling](L8-L10Pic/016.png)

### Transposon Regulation and Examples

- Transposons 常通过 **copy-number control** 限制对宿主基因组的伤害。
- 通过 **target-site choice** 偏向 safe havens，或通过 **target immunity** 避免插入自身 DNA。

**Tn10 copy-number control**

- Composite transposon Tn10 由两个 IS10 elements 包围。
- IS10R 编码 functional transposase；IS10L 通常无功能。
- Tn10 具有两个方向相反的 promoters，可产生 transposase mRNA 和较稳定的 antisense RNA。
- Tn10 copy number 越高 → antisense RNA 越多 → transposase translation 越低，形成负反馈。

**Phage Mu target immunity**

- MuA transposase 和 MuB ATPase 促进 Mu insertion。
- 已有 Mu DNA 附近的 sites 会成为 poor targets，因此新转座事件倾向避开自身 genome。

**Engineering examples**

- **Sleeping Beauty (SB)** 是从化石 transposase 序列重建的 synthetic Tc1/mariner transposon，可插入 TA dinucleotide；用于 vertebrate transgenesis、gene therapy 和 insertional mutagenesis。
- **Tn7 + Cas12k**：Cas12k 不切割 DNA，而是作为 programmable targeting beacon，将 Tn7 的 TnsB/TnsC/TniQ 复合体引导到附近约 60–66 bp downstream 并插入 DNA。

### V(D)J Recombination

- Vertebrate immune system 利用 DNA rearrangement 产生 antibody 和 T-cell receptor 的巨大多样性。
- **B cells** 产生 antibodies；**T cells** 产生 cell-surface T-cell receptors。
- Antibody 两条 light chains + 两条 heavy chains。
- Light-chain genes 由 V、J、C segments 组合；heavy-chain genes 还含 D segments。
- Recombination 只把被选中的 V–(D)–J segments 连接起来；其他 V/J segments 仍留在 genome，但不进入最终 mRNA。

**Recombination signal sequences (RSSs)**

- RSS 位于 V、D、J segments 两侧，含 conserved heptamer 和 nonamer，二者间有 spacer。
- 两类 RSS 分别有 **12-bp spacer** 和 **23-bp spacer**。
- V(D)J recombination 只允许 12-bp RSS 与 23-bp RSS 之间发生重组，称为 **12/23 rule**，从而控制片段连接的顺序。
- Recombination-activating genes **RAG1/RAG2** 构成 recombinase；cleavage mechanism 与 transposon excision 类似。

![V(D)J RSS and 12/23 rule](L8-L10Pic/017.png)

### Lecture 9：课程小结

- CSSR 在特定序列间进行 insertion、deletion 或 inversion，Ser/tyrosine recombinases 通过 covalent protein–DNA intermediate 完成交换。
- Transposons 分为 DNA transposons、LTR retrotransposons 和 poly-A retrotransposons；可经 cut-and-paste、replicative 或 RNA intermediate 机制移动。
- Transposons are regulated by copy number、target choice 和 target immunity，并被改造成基因工程与染色质分析工具。
- V(D)J recombination 借助 RSS 和 12/23 rule 产生免疫受体多样性。

## Lecture 10. Gene and Genome Editing

### Genome Editing Overview

- **Genome editing**：在特定 genomic location 对 DNA 进行 targeted modification。
- 主要结果：
  - **Gene knockout**：通过 small indel 等破坏 open reading frame；
  - **Gene correction/replacement**：修正 point mutation 或替换目标序列；
  - **Gene insertion**：在目标位点插入外源 sequence。
- 应用包括 gene-function study、disease models、gene therapy、immune-cell engineering、agriculture 和 industrial biotechnology。

### Programmable Nucleases

**Zinc-finger nucleases (ZFNs)**

- Zinc-finger DNA-binding domain 识别 target sequence；多数 zinc finger 约识别 3 bp。
- 两个 ZFN 结合 target 两侧，使 **FokI nuclease domains** dimerize 并切割中间 DNA，形成 DSB。
- DSB 由 NHEJ 修复时常生成 indel，可用于 knockout。
- 若提供 homologous donor template，HDR 可产生精确替换。

![ZFN structure and FokI cleavage](L8-L10Pic/018.png)

**TALENs**

- **Transcription activator-like effector nucleases (TALENs)** 也使用 FokI nuclease domain。
- TALE DNA-binding domain 由 tandem 34-amino-acid repeats 组成，每个 repeat 主要通过 **repeat-variable diresidue (RVD)** 识别一个 DNA base。
- TALEs 最初发现于植物病原菌 *Xanthomonas*；细菌将其注入植物细胞，TALE 进入 nucleus 并激活 host promoters。
- 两个 TALEN 结合相邻 target sequences 后，FokI domains dimerize 并在 spacer 中切割 DNA。
- TALEN 设计需组装长重复序列，construction 复杂且昂贵，multiplexing 和 delivery 也受限。

![TALEN and TALE repeat recognition](L8-L10Pic/019.png)

**ZFN vs TALEN vs CRISPR–Cas9**

- ZFN：protein–DNA recognition，需 protein engineering。
- TALEN：protein–DNA recognition，依赖 RVD code，也需 protein engineering。
- CRISPR–Cas9：RNA–DNA recognition；改变 guide RNA 的 spacer 即可改变 target，设计和 multiplexing 更简单。

### CRISPR–Cas Systems

**Adaptive immunity**

- **CRISPR** = Clusters of Regularly Interspersed Short Palindromic Repeats。
- CRISPR locus 转录为 precursor RNA，再加工成 short crRNAs，与 Cas proteins 一起识别外源核酸。
- **Protospacer**：virus/plasmid DNA 中会被选择的约 30–40 bp foreign sequence。
- **Spacer**：整合到 bacterial CRISPR array 中的同源 foreign sequence。
- **PAM (protospacer adjacent motif)**：protospacer 附近 short motif，通常不整合进 spacer。

![CRISPR locus and repeat–spacer architecture](L8-L10Pic/020.png)

**Three stages**

1. **Adaptation**：Cas1–Cas2 获取 protospacer 并插入 CRISPR array，形成新的 spacer。
2. **crRNA expression/processing**：CRISPR array 转录、加工成 mature crRNA。
3. **Interference**：crRNA-guided Cas effector 识别 complementary foreign sequence 并切割。

![Acquisition of protospacer by Cas1–Cas2](L8-L10Pic/021.png)

**Classification**

- **Class 1**：multi-subunit effector complexes（如 Cas3-containing systems）。
- **Class 2**：single-effector systems（Cas9、Cas12、Cas13），最适合 genome editing。
- DNA targeting：Cas9/Cas12；RNA targeting：Cas13。

**Type II CRISPR–Cas9**

- **crRNA** 含 target-complementary guide sequence 和 repeat-derived region。
- **tracrRNA** 与 pre-crRNA repeat 配对，帮助 RNase III 加工 pre-crRNA，并提供 Cas9 激活所需 stem-loop。
- 工程化的 **sgRNA** 将 crRNA 与 tracrRNA 融合为单条 guide RNA。
- Cas9 domains：
  - REC lobe 负责 RNA/DNA recognition；
  - **HNH** 切 target strand（与 guide 互补、进入 R-loop 的 strand）；
  - **RuvC** 切 non-target strand；
  - PAM-interacting domain 识别 PAM。
- 常用 *S. pyogenes* Cas9 识别 **5′-NGG-3′ PAM**；PAM 是 target recognition 所必需，不是切割位点。
- Cas9 在 PAM 上游约 3 bp 处通常产生 **blunt-ended DSB**。
- 2020 年 Emmanuelle Charpentier 和 Jennifer Doudna 因开发 CRISPR–Cas9 获 Nobel Prize in Chemistry。

![Cas9–sgRNA targeting and DNA cleavage](L8-L10Pic/022.png)

**Cas12a and Cas13**

- **Cas12a (Cpf1)** 使用 single crRNA，不需要 tracrRNA；识别 T-rich PAM，并产生 staggered DSB（5–7 nt overhang）。
- **Cas13** 靶向 ssRNA，造成 RNA cleavage，通常不永久改变 DNA；可用于 RNA knockdown、RNA detection 和 RNA manipulation。
- Cas13 某些 subtypes 有 PFS preference；Cas13 对 RNA secondary structure 较敏感。

### Precision Editing

**Base editing**

- **Cytosine base editor (CBE)** 使用 cytidine deaminase、Cas9 nickase 和 uracil glycosylase inhibitor。
- CBE 将 target window 内的 C 转换为 U，复制后实现 **C·G→T·A**。
- **Adenine base editor (ABE)** 使用 evolved adenine deaminase（如 TadA）把 A 转为 inosine；复制后实现 **A·T→G·C**。
- Base editors 不依赖 DSB 或 donor template，但只能在 editing window 内进行 limited conversion。
- Window 内多个可编辑 bases 可能同时改变，产生 **bystander edit**；最终结果还受 deaminase、target strand、sequence context 和 nicking 影响。

![Cytosine base editing mechanism](L8-L10Pic/023.png)

**RNA base editing**

- 可用 RNA-targeting deaminase（READ/ADAR 系统）在 transcript 水平进行 A-to-I editing；I 在翻译时通常被读作 G。
- RNA editing 通常是 transient，且不改变 genome sequence，适合需要可逆调控的场合。

**Prime editing**

- Prime editor 由 **Cas9 nickase–reverse transcriptase fusion** 和 **pegRNA** 组成。
- pegRNA 的 spacer 识别 target；3′ extension 含 desired edit 和 primer-binding site。
- Cas9 nickase 切开 target strand，reverse transcriptase 以 pegRNA 为 template 把新信息写入 DNA。
- 可实施 substitutions、small insertions 和 deletions，不需要 DSB 或 separate donor DNA template。
- 局限包括 pegRNA 设计复杂、efficiency 依 locus 而异，以及可能产生 unintended edits。

![Prime editing with Cas9 nickase and reverse transcriptase](L8-L10Pic/024.png)

### Delivery Methods

- **AAV**：组织递送效率高，但 cargo capacity 较小，可能引起 immune responses。
- **Lentivirus**：可整合 genome，提供长期 expression，但 integration 有 safety concerns。
- **Adenovirus**：payload 较大、expression 强，但 immunogenicity 高。
- **Lipid nanoparticles (LNPs)**：适合 RNA/protein delivery。
- **Electroporation** 和 **microinjection**：常用于 ex vivo cells 或 embryos。
- 细菌 contractile injection system 等可编程 protein delivery 是较新的研究方向。

![Genome-editing delivery strategies](L8-L10Pic/025.png)

### Applications

**Genome-wide CRISPR screens**

- Pooled sgRNA libraries 可系统敲除大量 genes。
- 比较 sgRNA enrichment/depletion，可寻找 tumor suppressors、essential genes、drug-resistance genes 和 immune regulators。

**Diagnostics**

- **SHERLOCK** 基于 Cas13 识别 target RNA 后的 **collateral cleavage**。
- Reporter 被切开后产生可检测 signal，可结合 lateral-flow strip assay 快速检测 SARS-CoV-2 等病原体 RNA。

**Sickle-cell disease and Casgevy**

- Sickle-cell disease 由 $\beta$-globin mutation 引起，mutant **HbS** 在低氧/酸性条件下聚合，使 red blood cells 变成 sickle shape 并易 hemolyze。
- Casgevy（exa-cel）从 patient 提取 hematopoietic stem cells，用 CRISPR–Cas9 破坏 **BCL11A** 的 erythroid-specific enhancer。
- BCL11A 通常抑制 $\gamma$-globin，使 HbF 降低；破坏 enhancer 后 **fetal hemoglobin (HbF, $\alpha_2\gamma_2$)** 重新表达，可补偿 defective adult hemoglobin 并减少 sickling。
- 2023 年 Casgevy 成为首个获批的 CRISPR-based therapy。

![Sickle cell disease and hemoglobin](L8-L10Pic/026.png)

**Agriculture and biotechnology**

- Tomato：CRISPR 在 **GAD** gene 的自抑制 domain 引入 single-nucleotide insertion，增强 glutamate decarboxylase 活性，提高 GABA accumulation。
- *Corynebacterium glutamicum*：用 CRISPRi knock down pgi、pck、pyk，重新分配 metabolic flux，提高 L-lysine 和 L-glutamate production。

### Safety and Ethical Considerations

- **Somatic editing** 改变 patient 的体细胞，通常不遗传给 offspring。
- **Germline editing** 改变 embryo、egg 或 sperm，可能传给 future generations；未来个体不能对今日的改变表示 consent。
- **Off-target mutations**：在 unintended genomic sites 产生 edits。
- **On-target errors**：目标位点发生 large deletion、rearrangement 或其他非预期变化。
- 还需讨论 treatment versus enhancement、social justice、human diversity 和 eugenics。
- 2018 年 He Jiankui 宣布编辑 twin girls 的 CCR5 gene，以试图降低 HIV susceptibility；该实验因 insufficient justification、uncertain safety 和违反 responsible embryo-editing standards 被广泛谴责，并于 2019 年受到刑事处罚。

### Lecture 10：课程小结

- ZFN/TALEN 依赖 programmable DNA-binding proteins；CRISPR–Cas9 通过 guide RNA 碱基配对识别 DNA，设计和 multiplexing 更简单。
- CRISPR 的 bacterial immunity 分为 adaptation、crRNA processing 和 interference；Cas9 使用 crRNA/tracrRNA 或 sgRNA，并在 PAM 附近产生 DSB。
- Base editing 和 prime editing 可在不依赖完整 DSB/HDR 的情况下完成更精确的 sequence change。
- Genome editing 已用于 screens、diagnosis、sickle-cell therapy、agriculture 和 metabolic engineering，但必须同时处理 off-target、delivery 和 germline ethics。
