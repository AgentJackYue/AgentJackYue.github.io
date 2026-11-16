---
title: Molecular Biology — L4–L5 Notes
date: 2026-11-06 12:00:00 +0800
categories: [Notes, Biology]
tags: []
media_subpath: /assets/img/posts/Molecular_Biology_L4-L5/
math: true
---

# Lecture 4. Techniques of Molecular Biology

## Nucleic acids: basic methods

### Nucleic-acid separation

**Gel electrophoresis 凝胶电泳**

- Melted agarose琼脂 is poured into a form equipped with removable comb梳子.
- Comb “teeth” form slots凹槽 in the solidified凝固 agarose.
- DNA samples are placed in the slots.
- An electric current is run through the gel at a neutral pH.

DNA is negatively charged. DNA带负电.因为phosphate backbone 磷酸基团
往anode阳极(=positive pole正极)走
大小DNA所受frictional drag摩擦力不同
- Largest near the top
- Smallest near the bottom

DNA is stained with fluorescent dye DNA用荧光染料染色

RNA separation (glyoxalated to disrupt secondary structure)RNA分离（经乙二醛处理以破坏二级结构）
乙二醛（glyoxal）是一种变性剂，能与RNA碱基反应，阻止RNA形成二级结构。
**为什么需要**：RNA是单链，容易自身折叠形成二级结构（发夹、茎环等），这会影响电泳迁移率，使分离结果不能真实反映RNA大小。用乙二醛处理后可保持RNA呈伸展的线性状态，从而按大小分离。
**对比**：常规双链 DNA 通常不需要先变性，而是以双链形式电泳；若 DNA 的异常二级结构明显干扰迁移，也可使用加热、甲酰胺或 denaturing PAGE。RNA 则常先用 glyoxal 等变性剂处理，使其按分子长度而非折叠形状分离。

---
**DNA separation by polyacrylamide gel electrophoresis (PAGE)** 聚丙烯酰胺凝胶电泳（PAGE）分离DNA
a method of separating DNA fragments/proteins depending on size, structure, and molecular weight (MW)
**适用对象**：DNA片段 和 蛋白质（注意：琼脂糖凝胶主要用于核酸；PAGE分辨率更高，常用于小片段DNA和蛋白质）。
- 琼脂糖凝胶电泳：分离较大DNA片段，分辨率较低。
- PAGE：分辨率高，可分离小片段DNA（相差1 bp都能分开）和蛋白质。
- **Pulsed-field gel electrophoresis (PFGE，脉冲场凝胶电泳)** 通过周期性改变电场方向，使伸展开的超大 DNA 分子能够按大小分离，适用于完整细菌或真核染色体级别的大片段。

**凝胶介质**：聚丙烯酰胺（polyacrylamide），由丙烯酰胺单体聚合而成，孔径可通过调整单体浓度控制。
蛋白质PAGE常加SDS（SDS-PAGE），使蛋白质变性并带上均匀负电荷，从而主要按分子量分离；而DNA的PAGE可按大小/结构分离。

---

### Restriction endonucleases and blotting

Restriction endonuclease 限制性内切酶
recognizes specific short sequences of DNA and cleaves the duplex
黏性末端（sticky ends）或平末端（blunt ends）

- **Sticky ends** 由 staggered cleavage 产生，短的单链 overhang 可通过互补配对帮助两个 DNA fragments ligate。
- **Blunt ends** 由同一位置的双链切割产生，连接时不依赖互补 overhang，但通常需要更高 ligase 条件且连接方向控制较差。

---
**Southern Blotting印迹 and Northern Blotting**
Southern blotting involves the transfer of DNA from a gel to a membrane膜, followed by detection of specific sequences by hybridization with a labeled probe探针.

Northern blotting:similar but transfer of RNA
![alt text](L4-L5Pic/output-011-000.jpg)

- Southern blot 通常先将电泳分离的 DNA 原位处理并 denature（变性），再 transfer 到 membrane；固定后用 labeled probe 与目标序列杂交，洗去未结合 probe 并检测信号。
- Northern blot 分析 RNA，可同时提供 transcript size 和 relative abundance 信息；RNA 在电泳前需保持 denatured，常使用 glyoxal 或 formaldehyde。
- Southern/Northern 的信号位置反映 fragment/transcript size，信号强度反映目标核酸含量；与 PCR 相比，它们不进行指数扩增，因而能直接展示分子大小并减少扩增偏差。

---

### DNA cloning and library construction

**DNA Cloning**
- Cloning a fragment of DNA requires a speciallyengineered vector载体.
- Recombinant DNA – A DNA molecule that has been created by joining together two or more molecules from different sources.
- Ligating (or ligation)连接 – The process of joining together two DNA fragments.
- Transformation – The acquisition of new genetic material by incorporation of added exogenous外源性, nonviral DNA.
- Blue/white selection allows the identification of bacteria that contain the vector plasmid and vector plasmids that contain an insert.

plasmid 质粒
DNA ligase DNA连接酶

- Blue/white selection 常使用带 **lacZα** 的 plasmid 和含 **X-gal** 的培养基。无 insert 时，α-complementation 产生 functional $\beta$-galactosidase，菌落呈蓝色；insert 破坏 lacZα 后不能水解 X-gal，菌落呈白色。

~ | DNA library construction | cDNA library construction
<div style="display: flex; align-items: flex-start; gap: 10px;">
  <img src="L4-L5Pic/output-016-000.jpg"
       style="width: 33%; height: auto;"
       alt="DNA library construction process">

  <img src="L4-L5Pic/output-017-001.jpg"
       style="width: 33%; height: auto;"
       alt="DNA library construction">

  <img src="L4-L5Pic/output-018-002.jpg"
       style="width: 33%; height: auto;"
       alt="cDNA library construction">
</div>

- **Genomic DNA library**：用 restriction enzymes 或机械剪切把整个 genome 切成片段并克隆到 vectors。它包含 coding、noncoding 和 regulatory sequences，但是否含完整 gene 取决于片段大小与切点。
- **cDNA library**：先从 mRNA 经 reverse transcriptase 合成 cDNA，再克隆。它代表特定细胞、组织或发育阶段实际表达的 genes，不含 introns，但不包含 promoter、intron 和非转录调控区。
- Genomic library 适合寻找 genome sequence 和 regulatory elements；cDNA library 更适合分离 expressed genes、比较 transcript isoforms 或构建 expression library。

---

### DNA synthesis and amplification

**Chemical synthesis of defined DNA sequences**
- Around 10-100 bases.
- Used for site-directed mutagenesis定点诱变.
- Used as primer for PCR reaction（Polymerase Chain Reaction，聚合酶链式反应）.

Polymerase chain reaction (PCR) permits the exponential amplification指数级扩增 of a desired sequence, using primers引物 that anneal to the sequence of interest目标序列.

| Step                | 温度（典型值）   | 作用                           |
| ------------------- | --------- | ---------------------------- |
| 1. Denaturation（变性） | 94–98°C   | 双链 DNA 分离为两条单链               |
| 2. Annealing（退火）    | 约 50–65°C | Primers 与模板 DNA 互补结合         |
| 3. Extension（延伸）    | 约 72°C    | DNA polymerase 从引物的 3′ 端开始延伸 |
![alt text](L4-L5Pic/output-022-000.jpg)

- RT-PCR uses **reverse transcriptase** to convert RNA to DNA for
use in a PCR reaction.
- Real-time, or quantitative, PCR detects the products of PCR amplification during their synthesis, and is more sensitive and quantitative than conventional PCR.
- PCR depends on the use of thermostable DNA polymerases耐热 DNA 聚合酶 that can withstand multiple cycles of template denaturation.
- **qPCR / real-time PCR** 在每一轮 amplification 过程中检测 fluorescent signal。达到设定阈值所需 cycle 数（$C_q$ 或 $C_t$）越小，通常表示起始 template 越多。
- 绝对定量通常依赖已知浓度的 standard curve；相对定量常通过 reference genes 归一化。

---

### DNA sequencing and genomics

**DNA Sequencing** DNA测序
Classical chain termination sequencing经典的链终止测序法 uses dideoxynucleotides(ddNTPs) to terminate DNA synthesis at particular nucleotides, developed by Frederick Sanger in 1977.

Primer - A single stranded nucleic acid molecule with a 3′–OH
used to initiate DNA polymerase replication of a paired template
strand.

**Chain-termination sequencing 链终止测序**

- Sanger 法使用正常的 dNTP 延长 DNA，并混入少量 **ddNTP**（dideoxynucleotide，双脱氧核苷酸）。
- ddNTP 的脱氧核糖缺少 3′–OH，一旦掺入就无法继续形成下一个 phosphodiester bond，因此造成 **chain termination**（链终止）。
- 四个反应分别使用 A、T、G、C 的特异性终止底物，产物按长度分离，即可从短到长读出序列。
- 现代自动化 Sanger 测序使用 fluorescently labeled ddNTPs（荧光标记 ddNTP）和 capillary electrophoresis（毛细管电泳），灵敏度与通量更高。

![Sanger sequencing with dideoxynucleotides](L4-L5Pic/001.png)

**Next-generation sequencing and RNA-seq**

- **Next-generation sequencing (NGS)** 将大量 DNA 片段同时固定在固相表面并进行大规模并行测序，显著降低单碱基测序成本。
- 常见流程包括：fragment library construction（片段文库构建）、adapter ligation（接头连接）、immobilization、sequencing by synthesis（边合成边测序）和 read mapping（序列比对）。
- **Genomic sequencing** 对整个基因组进行测序；深的 sequence coverage（覆盖度）可以减少随机错误和等位基因丢失的影响。
- Illumina 平台常用 bridge amplification（桥式扩增）产生 cluster，并使用 reversible terminators（可逆终止子）逐轮读取荧光信号。
- **RNA-seq** 先将 RNA 反转录为 cDNA，再测序。它可测量 transcript abundance（转录本丰度）、剪接异构体、差异表达和未知转录本。
- NGS 将 genome 打断后并行读取许多 short reads；随后通过 reference alignment 或 de novo assembly 将 reads 拼接为更长 contig。Coverage 指一个位点平均被测序 read 覆盖的次数。

![Genomic sequencing workflow](L4-L5Pic/002.png)

![Illumina sequencing](L4-L5Pic/003.png)

![RNA-seq transcriptome analysis](L4-L5Pic/004.png)

---

### Genome engineering and CRISPR screens

Genome engineering (CRISPR) to fix point mutations
![alt text](L4-L5Pic/output-037-000.jpg)

Prime editing

![alt text](L4-L5Pic/output-038-000.png)

**CRISPR screens**

- **Pooled CRISPR screen**：向细胞群体导入 sgRNA library（单向导 RNA 文库），每个细胞通常只获得一种 sgRNA。
- 通过比较处理前后 sgRNA 的富集或丢失，可以找出影响细胞存活、药物敏感性、肿瘤生长或免疫反应的基因。
- 常用设计包括 knockout screen（敲除筛选）、CRISPRi（抑制转录）和 CRISPRa（激活转录）。

---
## Proteins

### Protein purification and separation

**Protein purification**蛋白质纯化
- Endogenous内源性 or exogenous proteins
- Perform at 4 degree to avoid protein denaturation.
- Break the cells to escape the proteins.
- Separate the proteins from one another using column chromatography柱层析 (Ion-exchange chromatography离子交换层析(a), Gel filtration chromatography凝胶过滤层析(b), Affinity chromatography亲和层析)

![alt text](L4-L5Pic/output-042-000.jpg)

**Column chromatography 柱层析**

- **Ion-exchange chromatography（离子交换层析）**：利用蛋白质表面 net charge（净电荷）不同，使不同蛋白与带电 resin 的结合强弱不同；改变 salt concentration 或 pH 可依次洗脱。
- **Gel-filtration / size-exclusion chromatography（凝胶过滤/体积排阻层析）**：小分子能进入 porous beads，路径更长；较大的 protein complex 被排阻、先洗脱。因此可按 apparent size/shape 分离。
- **Affinity chromatography（亲和层析）**：把 ligand、antibody 或 tag-binding reagent 固定在 column 上，目标蛋白特异结合，其他蛋白先流出，再通过竞争或改变条件洗脱目标蛋白。
- 整个纯化过程通常保持低温，以减少 proteolysis 和 denaturation。

**SDS-PAGE**

- **SDS (sodium dodecyl sulfate)** 是 anionic detergent，使蛋白质变性并沿 polypeptide 均匀结合，掩盖蛋白质原有的 net charge。
- 变性后的 protein–SDS complexes 通常按 **molecular weight (MW)** 分离：分子越小，迁移越快。
- SDS-PAGE 可用于检查 protein purity、估算 subunit molecular weight，以及比较不同样品中的 protein abundance。

Western blotting entails separation of proteins on a sodium dodecyl sulfate (SDS) gel, transfer to a nitrocellulose membrane, and detection of proteins of interest using antibodies硝酸纤维素膜.

- Western blot 流程：SDS-PAGE separation → transfer to membrane → blocking → primary antibody → enzyme- or fluorophore-labeled secondary antibody → detection。
- SDS-PAGE 依据 size 分离，而 Western blot 通过 antibody 提供 **antigen specificity**，因此可以检测复杂 lysate 中的某一 protein 或 post-translational modification。

---

### Protein sequencing and proteomics

**Protein molecules can be directly sequenced**
- Edman degradation
  - 原理：从蛋白质的N端（氨基端）开始，每次循环切下一个氨基酸并鉴定，从而确定N端序列。
  - 特点：属于化学测序法；对N端封闭的蛋白质无效；每次只能测一条链，且长度有限（通常几十个氨基酸）
  - 经典试剂：异硫氰酸苯酯（PITC）
- Tandem Mass Spectrometry (MS/MS)
  - 原理：将蛋白质/多肽酶切成小肽段，进入质谱仪。第一级质谱（MS1）分离特定肽段，碎裂后进入第二级质谱（MS2）分析碎片离子的质量差，从而推导出氨基酸序列。
  - 特点：现代主流方法；灵敏度高、通量高；不仅能测N端，还能测内部序列；可以处理混合物；是蛋白质组学的核心技术。

Edman degradation
![alt text](L4-L5Pic/output-046-000.jpg)

右侧：化学反应的分子机制（以第一个氨基酸Gly为例）
- 反应物：上方是异硫氰酸苯酯（Phenylisothiocyanate, PITC），下方是一条短肽，其N端（最左侧）是甘氨酸（Gly）。
- Labeling（标记/偶联）：PITC与多肽N端的氨基（-NH₂）发生反应，形成苯氨基硫甲酰基衍生物（PTC-肽）。注意看中间那个框，PITC已经连在了Gly的N端上。
- Release（释放/裂解）：在酸性条件下（通常用三氟乙酸），连接第一个氨基酸（Gly）和第二个氨基酸（Asp）之间的肽键断裂。
- 产物：
  - 下方生成了PTH-丙氨酸（PTH-alanine）。（注：这里教材图可能有个小笔误，或者是为了举例随便写的名字。实际上因为切下来的是N端的甘氨酸，所以生成的应该是 PTH-Gly，即PTH-甘氨酸。图里写了PTH-alanine，可能是为了展示通用结构，但侧链画的是Gly的-H。考试以“切下N端第一个氨基酸生成PTH-氨基酸”为准）。 这个PTH-氨基酸非常稳定，可以通过色谱（HPLC）鉴定出具体是哪种氨基酸。
  - 右侧剩下的肽链："peptide shortened by one residue"，即缩短了一个氨基酸残基的肽链。它的新N端变成了第二个氨基酸（Asp）。

左侧：循环操作流程（如何测出全长序列）
- First round（第一轮）：
  - 原始肽链是 1-2-3-4-5。
  - labeling（标记）：把1标上（绿色六边形）。
  - release（释放）：把带标记的1切下来（鉴定出是氨基酸1）。
  - 剩下的肽链变成 2-3-4-5（此时2暴露成为新的N端）。
- Second round（第二轮）：
  - 对剩下的 2-3-4-5 重复上述操作。
  - labeling（标记）：把2标上。
  - release（释放）：把带标记的2切下来（鉴定出是氨基酸2）。
  - 剩下的肽链变成 3-4-5。

- 以此类推，每一轮切下一个N端氨基酸并鉴定，就能直接读出蛋白质的氨基酸序列（1-2-3-4-5...）。

LC-MS
![alt text](L4-L5Pic/output-047-000.jpg)
a. LC-MS（液相色谱-质谱联用）：把多肽变成“带电的子弹”
- 左边：多肽混合物（peptide mixture）进入液相色谱柱（liquid-chromatography column），把复杂的混合物分离开。
- 右边：分离出的多肽通过一个高压喷针（spray needle）喷出，施加正电压（+），变成极细的带电液滴（droplets）。溶剂蒸发后，多肽离子（peptide ions）诞生，并飞入质谱仪（mass spectrometer）。

b. Total mass spectrum（总质谱图）：看看“总共有哪些重量”
- 这一步是 MS1（第一级质谱）。它测的是完整多肽的质荷比（m/z）。
- 图中横轴是 m/z，纵轴是强度（intensity）。比如图中的最高峰 435.77 和 534.75 代表不同的多肽。
- 局部放大图：展示了 617.28 这个峰。你会看到旁边还有 617.78 和 618.28 的峰，这通常是因为同位素（比如碳-13）造成的。

c. Common peptide fragments（多肽的碎裂规律）—— 核心考点！
- 为了测序，我们得把选定的多肽“砸碎”（在质谱仪里碰撞诱导解离）。它会在肽键（-CO-NH-）处断开。
- 为什么分 y 离子和 b 离子？肽键断裂时，电荷可能会留在左边片段，也可能留在右边片段。
- b 离子（b1, b2, b3...）：电荷留在 N端（左边），从左边开始数。
- y 离子（y1, y2, y3...）：电荷留在 C端（右边），从右边开始数。
- （另外还有a离子，是b离子进一步失去CO形成的）
- 算账逻辑：相邻的 b 离子之间（比如 b2 和 b3）的质量差，就是切下来的那个氨基酸的残基质量！y 离子同理。这样就能反推出氨基酸序列。

d. 破译密码：实验图谱 vs 理论图谱
- 这也就是 MS2（第二级质谱）。多肽碎裂后，形成一系列带不同电荷的碎片离子，打出一张图（左下角：tandem-MS spectrum）。
- 怎么测出序列？
- 计算机先猜一个序列（假设是 A C D E C A G H K）。
- 计算机会算出如果真的是这个序列，应该长什么样（右下角：theoretical spectrum 理论图谱）。
- 将实验图谱和理论图谱做比对（autocorrelation）。如果峰能对上，说明猜对了

**Proteomics to capture the cell’s entire repertoire of proteins and their modification (LS/MS)**

- 鉴定复杂提取物中的单个蛋白质。
- 蛋白质组比较可识别细胞之间的重要差异。
- 质谱法还可以监测蛋白质的修饰状态。

---

### Protein interactions and chromatin assays

**Proximity labeling 邻近标记**

- 将一个具有 labeling activity 的 enzyme（如 APEX、BioID）与目标蛋白融合。
- 酶在活细胞中给邻近蛋白加上 biotin（生物素）标签，再用 streptavidin 富集并进行质谱鉴定。
- 邻近标记可研究弱/瞬时互作、蛋白复合体组成、亚细胞定位和空间蛋白质组（spatial proteomics）。

![Proximity-labeling workflow](L4-L5Pic/005.png)

**Yeast two-hybrid（Y2H，酵母双杂交）**

- 将候选蛋白分别融合到 DNA-binding domain 和 transcriptional activation domain。
- 两个蛋白若发生相互作用，两个 domain 被带到同一 promoter 附近，激活 reporter gene（报告基因）。
- Y2H 适合筛选蛋白-蛋白互作，但结果仍需要免疫共沉淀或体外实验验证。

![Yeast two-hybrid assay](L4-L5Pic/006.png)

**Immunoprecipitation（IP，免疫沉淀）**

- 使用特异性 antibody 结合目标蛋白，再由 Protein A/G beads 将其从细胞裂解液中沉淀。
- **Co-immunoprecipitation（Co-IP）** 可检测目标蛋白与另一个蛋白是否处于同一复合体。
- 高通量结合质谱可建立 protein-interaction network（蛋白互作网络）。

**Electrophoretic mobility shift assay（EMSA，凝胶迁移实验）**

- 将 fluorescently or radioactively labeled DNA/RNA probe 与蛋白质混合后进行 native gel electrophoresis。
- Protein–nucleic-acid binding 会形成更大、更慢的复合物，使条带发生 **gel shift**（迁移滞后）。
- 可用于测定结合特异性、亲和力以及加入 competitor（竞争探针）后的竞争效果。

![EMSA detects protein–DNA binding](L4-L5Pic/007.png)

**DNA footprinting DNA足迹实验**

- 先让 DNA-binding protein 结合标记的 DNA，再用 DNase I 等 reagent 随机切割未被保护的 DNA。
- 蛋白质覆盖的序列不会或较少被切开，电泳凝胶上出现一段“protected region”（保护区域），就像 DNA 上留下了蛋白的 footprint。
- 足迹实验可定位具体 binding site，并判断保护区域的大小。

![DNase-I footprinting](L4-L5Pic/008.png)

**Chromatin immunoprecipitation（ChIP，染色质免疫沉淀）**

- 先用 formaldehyde 交联细胞内的 protein–DNA interaction，再碎裂 chromatin。
- 用目标蛋白或 histone modification 的特异性 antibody 做免疫沉淀，解交联后分析富集的 DNA。
- **ChIP-on-chip** 用 microarray 检测 ChIP-enriched DNA；**ChIP-seq** 则使用高通量测序，可在全基因组定位转录因子结合位点、组蛋白修饰和染色质状态，通常具有更高分辨率和更低背景。

![ChIP-seq workflow](L4-L5Pic/009.png)

**Chromosome conformation capture（3C，染色体构象捕获）**

- 3C 用于检测同一染色体上相隔较远区域是否在三维空间接近。
- 常用流程：交联 → 限制酶消化 → 极低浓度连接 → 去交联 → PCR 检测特定连接产物。
- 后续扩展技术（4C、5C、Hi-C）可分别从“一个位点对全基因组”“多区段”到“全基因组全互作”分析 chromatin looping。

![3C detects long-range chromatin interactions](L4-L5Pic/010.png)

---

# Lecture 5

Prokaryotes原核生物
Eukaryotes真核生物

Genome基因组 Sizes vs Gene Density
![alt text](L4-L5Pic/output-005-000.png)
| Organism | Genome Size (Mb) | Gene Numbers | Density (genes/Mb) |
|---|---:|---:|---:|
| *E. coli* K12（大肠杆菌） | 4.6 | 4,400 | 950 |
| *Homo sapiens*（人类） | 3,200 | 20,000 | 6 |

---
Genes make up only a small proportion of the eukaryotic chromosomal DNA.
![alt text](L4-L5Pic/Lecture5-008-001.jpg)

## Genome Organization and Variation

- 细菌通常具有 circular chromosome；真核生物具有 multiple linear chromosomes。
- 每个物种通常维持 characteristic chromosome number。真核生物可呈 **diploid（二倍体）**、**haploid（单倍体）**、**polyploid（多倍体）** 或 **aneuploid（非整倍体）**。
- 基因组越大、生物越复杂，并不必然意味着 gene density 越高。人类基因组约 3,200 Mb，却只有约 20,000 genes；*E. coli* 约 4.6 Mb，含有约 4,400 genes。
- 人类大多数 genes 含 introns；平均 transcript 长约 27 kb，平均 coding sequence（CDS）仅约 1.3 kb。酵母仅约 3.5% genes 有 introns。
- 人类 genome 的多数 intergenic DNA 为 repetitive DNA，并含大量 **transposons**（转座子）。genes 只占 eukaryotic chromosomal DNA 的一小部分。
- 人工基因组研究说明 chromosome number 并非绝对不可改变：科学家曾用 chromosome fusion 构建单染色体酵母； **Mycoplasma** 最小 synthetic genome 保留 473 genes。
- Chromosome number 异常可造成 miscarriage、developmental disorders 和 cancer。Aneuploidy 常源于 chromosome duplication/segregation 或 checkpoint 失控。

---
**Centromere着丝粒 and Centrosome中心体**
![alt text](L4-L5Pic/Lecture5-014-000.jpg)

---
Telomere端粒 Length and Life Span

**Telomeres and telomerase**

- **Telomere（端粒）** 是线性染色体末端的 repetitive DNA–protein cap，可防止末端被误认为 DSB，并保护染色体不被过度降解或融合。
- Telomere length 随细胞分裂逐渐缩短；较短的 telomeres 可触发 replicative senescence（复制性衰老）。
- **Telomerase（端粒酶）** 是携带 RNA template 的 reverse transcriptase，在 germ cells、stem cells 和许多 cancer cells 中活性较高。其详细复制机制见 L6。
- Telomere maintenance 使肿瘤细胞能够避免持续缩短，因此 telomerase 是癌症研究的重要靶点。

---
**The Eukaryotic Mitotic Cell Cycle 真核生物有丝分裂细胞周期**

## Chromosome Dynamics and Segregation

真核细胞周期通常包含：

- **G1**：细胞生长并为 DNA 复制作准备。
- **S phase**：DNA replication，基因组复制一份。
- **G2**：复制完成后的检查和质量控制。
- **M phase**：mitosis（有丝分裂）和 cytokinesis（胞质分裂）。

复制检查点（replication checkpoint）监控每个 origin 在每个细胞周期只启动一次，避免部分染色体未被复制或重复复制。

**Centromere、kinetochore and centrosome**

- **Centromere（着丝粒）**：染色体上用于组装 kinetochore 的特定 DNA-染色质区域。
- **Kinetochore（动粒）**：连接 centromere 与 mitotic spindle microtubules（纺锤体微管）的蛋白复合体。
- **Centrosome（中心体）**：动物细胞中的主要 microtubule-organizing center（微管组织中心），形成纺锤体两极。
- 着丝粒含 CENP-A 等特殊组蛋白，因此其身份不能仅由 DNA 序列解释。

**Mitosis**

- Sister chromatids 先与有丝分裂纺锤体结合。
- **Cohesin（黏连蛋白）** 维持姐妹染色单体间的 cohesion（黏连）。
- Anaphase 开始时，separase 切除 cohesin，sister chromatids 分离并被拉向两极。
- **Condensin（凝缩蛋白）** 参与有丝分裂染色体的 compaction（凝缩）。
- Cohesin 和 condensin 都属于 **SMC protein complexes**（SMC 蛋白复合体）。

![Mitotic chromosome segregation overview](L4-L5Pic/011.png)

**Meiosis**

- 减数分裂前进行一轮 DNA replication，随后经历两次分裂。
- Homologous chromosomes 配对，并在 chiasmata（交叉点）处发生 genetic exchange。
- 同源染色体的 **monovalent attachment** 使两个同源染色体在同一 meiosis-I 纺锤体上朝向相反两极，从而实现 homologous chromosome segregation。

## Three-Dimensional Chromatin

染色质具有层级结构：

$$\text{DNA}\rightarrow\text{nucleosome}\rightarrow\text{chromatin fiber}\rightarrow\text{chromatin loops/domains}\rightarrow\text{chromosome}$$

- 光学/电子显微镜可观察到“beads on a string”（串珠状）染色质。
- **Topologically associating domain (TAD，拓扑关联结构域)**：内部 DNA 相互作用频繁，而与相邻结构域相互作用较少的区域。
- **CTCF** 是重要的 chromatin architectural protein，常位于 TAD boundary，和 cohesin 共同参与 chromatin looping。
- **Hi-C** 结合交联、限制酶消化、连接和高通量测序，绘制全基因组 contact map（接触图谱）；高频接触在矩阵中表现为离对角线较近的强信号。

![TADs and hierarchical chromatin organization](L4-L5Pic/012.png)

## Nucleosome Structure

**Nucleosome（核小体）**

- Core DNA 长约 **147 bp**，围绕 histone octamer 盘绕约 **1.7 turns**，形成约 6-fold DNA compaction。
- 相邻 nucleosome 之间为 **linker DNA**，长约 20–80 bp。
- Histone octamer 含：
  - 一个 H3·H4 tetramer；
  - 两个 H2A·H2B dimers。
- Histones 富含 lysine 和 arginine，带正电，可屏蔽 DNA phosphate backbone 的负电荷。

![Nucleosome core and linker DNA](L4-L5Pic/013.png)

![Histone octamer assembly](L4-L5Pic/014.png)

- H3·H4 结合 DNA 的中部和两端；H2A·H2B 覆盖核小体一侧约 30 bp 的区域。
- Histone–DNA interface 在 DNA minor groove 附近形成大量氢键，驱动 DNA bending。
- 这种结合主要是 **non-sequence-specific**（非序列特异性），因此同一 histone octamer 可包装不同序列的 DNA。

![Histone–DNA contacts in the nucleosome](L4-L5Pic/015.png)

**Negative superhelicity**

- DNA 围绕 histone core 的左手方向盘绕，形成负超螺旋，相当于储存了负超螺旋自由能。
- 原核生物没有 histones，主要由 **DNA gyrase**（一种 type II topoisomerase）利用 ATP 在复制或转录后重新引入负超螺旋。

![Nucleosome wrapping stores negative superhelicity](L4-L5Pic/016.png)

**Euchromatin and heterochromatin**

- **Euchromatin（常染色质）**：较松散、染色较浅，通常具有较高的 transcriptional activity。
- **Heterochromatin（异染色质）**：更凝缩、染色较深，通常 transcriptionally silenced；常见于 centromeric and telomeric regions。
- 组成型异染色质常富集 **H3K9me3** 和较高密度的 nucleosomes。

**Linker histone H1 and 30-nm fibers**

- **Histone H1** 结合 nucleosome 外侧和 linker DNA，促进更高等级的 chromatin compaction。
- 约 10-nm 的 beads-on-a-string fiber 可进一步折叠为 **30-nm fiber**。
- 30-nm fiber 的精确体内结构仍有争议，可能存在规则螺旋或更不规则的折叠状态。

![H1 promotes higher-order chromatin folding](L4-L5Pic/017.png)

**Histone variants**

- **CENP-A** 是 H3 variant，定位在 centromeric DNA，参与 centromere identity 和 kinetochore formation。
- **H2A.X** 是 H2A variant，在 DNA double-strand break 附近被磷酸化为 $\gamma$-H2A.X，作为 DNA 损伤标记。

## Nucleosome Dynamics and Histone Modification

**Nucleosome dynamics**

- **Sliding（滑移）**：nucleosome 沿 DNA 移动，改变 DNA 的暴露程度。
- **Ejection（驱逐）**：nucleosome 从 DNA 上完全移除。
- **Exchange（交换）**：原有 histone 被 histone variant 替换。
- **ATP-dependent chromatin remodeling complexes** 利用 ATP 水解产生的能量改变 histone–DNA 接触，实现滑移、移除或交换。

![Nucleosome sliding, ejection and exchange](L4-L5Pic/018.png)

**Nucleosome positioning**

- Nucleosome 偏好弯曲性较好的 DNA 序列，并避开需要持续结合转录因子的 **nucleosome-free region (NFR)**。
- **Micrococcal nuclease (MNase)** 可切割 linker DNA；受 nucleosome 保护的 DNA 较长且稳定。
- **MNase-seq** 对全基因组受保护片段测序，可定位 nucleosome 以及 NFR。

![MNase-seq for nucleosome positioning](L4-L5Pic/019.png)

**Histone code: writers, erasers and readers**

- Histone N-terminal tails 从 nucleosome 表面伸出，可被多种 enzyme 修饰。
- **Writers**：写入修饰，例如 HAT（histone acetyltransferase）添加 acetyl group，HMT（histone methyltransferase）添加 methyl group。
- **Erasers**：移除修饰，例如 HDAC（histone deacetylase）和 histone demethylase。
- **Readers**：识别特定 histone mark，并招募其他 chromatin regulators。
- 常见修饰包括 acetylation、methylation、phosphorylation、ubiquitination 和 SUMOylation。

![Histone tails carry multiple modifications](L4-L5Pic/020.png)

**Histone acetylation and chromatin accessibility**

- HAT 将 lysine 侧链的 $-\mathrm{NH_3^+}$ 乙酰化，消除其正电荷并削弱 histone 与带负电 DNA 的静电吸引。
- Histone acetylation 通常与较开放的 chromatin 和 active transcription 相关。
- Remodeling complex 与 histone modification 可协同作用：HAT 使 chromatin fiber 松动，remodeler 再滑动或移除 nucleosome，形成 NFR。

![HAT and chromatin remodeling increase accessibility](L4-L5Pic/021.png)

**Genome-wide mapping of histone marks**

- 用针对特定 histone modification 的 antibody 进行 ChIP-seq。
- 例如 H3K9me3 ChIP-seq 可定位异染色质区域，并与 RNA-seq 结果比较以判断其与转录抑制的关系。

## Nucleosome Inheritance and Assembly

- DNA replication 后，旧 histone 并非随机完全打散：**H3·H4 tetramers** 倾向于整体保留在两条 daughter DNA 之一，而 **H2A·H2B dimers** 更常释放到局部 pool。
- 旧 H3·H4 tetramers 携带原有 histone modifications，可帮助 daughter cells 继承 parental chromatin states。
- 新 nucleosome 的组装依赖 **histone chaperones**，如 CAF-I 和 NAP-1；PCNA 作为 sliding clamp 参与复制偶联的 chromatin assembly。
- 这种 inheritance 机制使 DNA 序列之外的表观遗传状态也能在细胞分裂后部分保留。

![Inheritance of parental histones after replication](L4-L5Pic/022.png)
