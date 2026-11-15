---
title: Molecular Biology — L6–L7 Notes
date: 2026-11-10 12:00:00 +0800
categories: [Notes, Biology]
tags: []
media_subpath: /assets/img/posts/Molecular_Biology_L6-L7/
math: true
---

# Molecular Biology — L6–L7 Notes

## Lecture 6. The Replication of DNA

### Overview and DNA Synthesis Chemistry

DNA replication 与 PCR 都沿 **5′→3′** 方向合成 DNA，但二者目的和环境不同：

| Feature | DNA replication | PCR |
|---|---|---|
| Template | 整条染色体 | 选定的目标序列 |
| Primer | Primase 合成的 RNA primer | 人工 DNA primer |
| Unwinding | DNA helicase | Heat denaturation |
| Main polymerase | Replicative DNA polymerase | Thermostable DNA polymerase |
| Error rate | 约 $10^{-3}\rightarrow10^{-10}$，经校对及修复继续降低 | 通常约 $10^{-4}$–$10^{-5}$ |

- DNA synthesis 需要四种 **dNTP**（deoxynucleoside triphosphates）以及一个 **primer:template junction**。
- Primer 的 **3′–OH** 必须暴露并位于 junction 处；DNA polymerase 不能从头开始复制，只能延长已有链。
- 模板决定下一个掺入的 dNTP。

![dNTPs and the primer:template junction](L6-L7Pic/001.png)

**DNA synthesis mechanism**

- Primer 的 3′–OH 对 incoming dNTP 的 α-phosphate 做 nucleophilic attack（亲核攻击）。
- 新 dNTP 与模板形成 Watson–Crick 配对后，DNA polymerase 连接该 dNTP 与前一个核苷酸。
- 反应释放 **pyrophosphate（PPi）**；PPi 随后水解为两个 phosphate，提供反应的 free energy，使 DNA 合成趋于不可逆。
- DNA polymerase 共用同一 catalytic site 处理四种 dNTP，但通过检查 incoming nucleotide 与模板的碱基配对位置来区分正确和错误底物。
- 正确配对使底物处于适合催化的最佳位置；错误配对的反应速率可低至约万分之一，这种机制称为 **kinetic proofreading（动力学校对）**。
- dNTP 比 rNTP 少一个 2′–OH；DNA polymerase 的 steric constraints（空间限制）通常排除 rNTP，保证复制得到 DNA 而非 RNA。

### DNA Polymerase Mechanism

**The polymerase “hand”**

- 许多 DNA polymerases 具有类似右手的结构：
  - **palm**：包含催化中心；
  - **fingers**：识别并定位正确的 incoming dNTP；
  - **thumb**：帮助抓住 DNA 和 primer:template junction。
- Correct base-pairing 会引起酶的 conformational change，使手掌、手指和拇指进一步闭合。

![DNA polymerase grips the primer:template junction](L6-L7Pic/002.png)

**Two-metal-ion catalysis**

- Palm domain 结合两个二价金属离子，通常为 $\mathrm{Mg^{2+}}$ 或 $\mathrm{Zn^{2+}}$，并由保守的 aspartate（Asp）残基固定。
- 一个金属离子降低 primer 3′–OH 对氢的亲和力，使其更易形成亲核状态。
- 另一个金属离子中和 dNTP 的 β-和 γ-phosphate 负电荷，并稳定 pyrophosphate leaving group。
- 模板的 first template base 位于活性中心；骨架向后弯折约 90°，使后续模板碱基不能错误地进入催化位点。

**Processivity**

- **Processivity（持续合成能力）**：DNA polymerase 在未从模板上释放前，平均连续掺入的核苷酸数。
- DNA polymerase 沿模板滑动而非每次重新结合，因此即使初始 primer–template binding 较慢，也可连续合成许多碱基。
- 高持续合成能力依赖 sliding clamp 等 accessory proteins。

**Proofreading**

- 许多 replicative DNA polymerases 具有 **3′→5′ exonuclease** 活性。
- 若刚掺入的碱基不能与模板正确配对，polymerase 可将新链末端退回并切掉错误核苷酸，然后重新合成。
- 典型误差率：base selection 约 $10^{-5}$；加入 3′→5′ proofreading 后约 $10^{-7}$；MMR 修复后可达到约 $10^{-10}$。

**Drugs that target DNA replication**

- 5-FU 和 6-MP 是 nucleotide-precursor analogues，抑制 pyrimidine/purine nucleotide synthesis。
- 5-FU 可抑制 **thymidylate synthase**，阻断 thymine nucleotide 的生成。
- Cytosine arabinoside（cytarabine）掺入 DNA 后使引物 3′–OH 无法正确定位，造成 chain termination。
- Cisplatin 和 BCNU 可形成 DNA intrastrand/interstrand cross-links，阻断 replication。
- Camptothecin 和 etoposide 分别抑制 topoisomerase，导致 DNA breakage。
- AZT 抑制 HIV 的 RNA-dependent DNA polymerase（reverse transcriptase）；Acyclovir 则选择性作用于疱疹病毒 DNA polymerase。

### The Replication Fork

- Replication fork 是双链 DNA 被 helicase 打开并同时进行 daughter-strand synthesis 的 Y 形区域。
- 两条新链都由 5′→3′ 合成，但模板方向相反：
  - **Leading strand（前导链）**：沿 replication fork 前进方向连续合成。
  - **Lagging strand（后随链）**：以短片段方式反向合成，这些片段称 **Okazaki fragments**。

![Bidirectional replication and Okazaki fragments](L6-L7Pic/003.png)

**Primer synthesis and removal**

- **DNA helicase** 利用 ATP 水解打开双链 DNA。
- **Single-strand binding proteins (SSBs)** 以非序列特异性、协同性的方式结合并稳定 ssDNA，防止其重新配对或被降解。
- **Primase** 是一种专门合成短 RNA primer（通常 5–10 nt）的 RNA polymerase。
- Helicase 与 primase 相互作用，提高 primase 的活性并限制 primer 只在 replication fork 的 ssDNA 上生成。
- **Topoisomerases** 移除复制叉前方因解旋而积累的 positive supercoils。
- RNA primer 随后由 **RNase H** 去掉大部分 RNA:DNA hybrid 中的 RNA，再由 5′→3′ exonuclease 去除最后一个 ribonucleotide。
- DNA polymerase 填补 gap，DNA ligase 封闭剩余的 nick。

![RNA-primer removal and gap sealing](L6-L7Pic/004.png)

![Topoisomerases remove supercoils ahead of the fork](L6-L7Pic/005.png)

### DNA Polymerase Specialization

**In E. coli**

- **DNA Pol III**：染色体复制的主要 enzyme，highly processive，具有 3′→5′ exonuclease proofreading。
- **DNA Pol I**：以 5′→3′ exonuclease 去除 RNA primer，并填补留下的 gap；本身 processivity 较低。
- 其他 DNA polymerases 主要参与 DNA repair，通常缺乏 proofreading。

**In eukaryotes**

- 真核细胞有超过 15 种 DNA polymerases，其中三种在 replication fork 最重要：
  - **Pol α/primase**：先合成 RNA primer，再合成一小段 DNA。
  - **Pol δ**：主要负责 lagging strand。
  - **Pol ε**：主要负责 leading strand。
- **Polymerase switching（聚合酶切换）**：Pol α/primase 把 primer:template junction 交给高 processivity 的 Pol δ 或 Pol ε。

![Eukaryotic polymerase switching](L6-L7Pic/006.png)

**Sliding clamps**

- Sliding clamp 是一个环状蛋白，围绕 DNA 并被 clamp loader 打开、装载到 junction 上。
- 真核 sliding clamp 通常为 **PCNA trimer**；它结合 DNA polymerase，显著提高 processivity。
- 原核的 **DNA Pol III holoenzyme** 含多个 Pol III core、sliding clamp 和 clamp loader，可同时协调 leading/lagging strand synthesis。

**The trombone model and replisome**

- Lagging-strand DNA 在复制叉处形成 loop；随着 Okazaki fragment 完成，loop 被释放，像长号的伸缩管一样，称为 **trombone model**。
- **Replisome（复制体）** 是所有在 replication fork 协同工作的蛋白质组合。
- Helicase 与 Pol III holoenzyme 的相互作用防止 helicase 把 polymerase 甩在后面；helicase 与 primase 的弱相互作用则调节 Okazaki fragment 长度。

![Trombone model and replisome coordination](L6-L7Pic/007.png)

### Initiation of Replication

**The replicon model**

- **Replicator（复制起点 DNA 元件）**：cis-acting DNA sequence，决定复制从哪里开始。
- **Initiator（起始蛋白）**：specifically recognizes the replicator 并激活 initiation；它是复制系统中少数 sequence-specific DNA-binding proteins。
- 典型 origin 含：
  - initiator-binding sites；
  - AT-rich region，较易解链；
  - 初始 DNA synthesis 的起始位点。

![Replicator organization in different organisms](L6-L7Pic/008.png)

**Initiation in E. coli**

- **DnaA** 是 initiator，既能结合 dsDNA，也能结合 ssDNA。
- 多个 DnaA–ATP 结合到 oriC 的 9-mer repeats。
- DnaA 促进 13-mer AT-rich repeats 解链，形成 open complex。
- Helicase loader **DnaC** 打开 DnaB helicase ring，把 helicase 装载到 ssDNA 上。
- DnaB 招募 primase，合成 RNA primer；随后装载 DNA Pol III holoenzyme 并启动 replication。

**Once-per-cell-cycle control in eukaryotes**

- 真核染色体含多个 origins，并非所有 origin 每轮都必须启动；只要全部 DNA 被完成复制即可。
- **Licensing（复制许可）** 发生在 G1：**ORC** 识别 origin，招募 Cdc6、Cdt1，并装载两套 **Mcm2-7** helicase。
- S phase 中 **CDK 和 DDK** 磷酸化相关蛋白，形成 active **CMG complex** 并激活 Mcm2-7。
- CDK 同时抑制新的 helicase loading；已复制 origin 的 licensing 被关闭，从而保证每个 origin 只启动一次。

![Eukaryotic helicase loading and activation](L6-L7Pic/009.png)

### Finishing Replication and Telomeres

- Circular chromosome replication 可能生成相互套连（catenated）的 daughter DNA。**Type II topoisomerase** 切开一条 dsDNA、让另一条穿过，再重新连接，从而完成 decatenation。

**The end-replication problem**

- Lagging-strand synthesis 需要一个 upstream RNA primer。
- 在线性染色体最末端，去除最后一个 primer 后，没有上游 3′–OH 供 DNA polymerase 填补，因此新合成链会变短。
- **Telomerase** 是特殊的 reverse transcriptase，以自身 RNA component **TER** 为模板延长染色体 3′ end。
- TER 含约 1.5 copies 的 telomere repeat sequence；每延长一段后，telomerase 可重新定位并继续。
- Telomerase 只延长一条链，额外产生的 ssDNA 可作为 lagging strand 的模板，随后由 ordinary replication machinery 补齐。

![Telomerase extends the telomere 3′ end](L6-L7Pic/010.png)

- Telomere-binding proteins 保护染色体末端，避免其被误认为 DSB；3′ ssDNA 可侵入 telomeric dsDNA 形成 **t-loop**。
- Telomerase activity 通常在 somatic cells 中很低，在 germ cells、immortalized cells 和 tumor cells 中较高。

### Lecture 6：课程小结

- DNA replication 由 3′–OH 引发，沿 5′→3′ 延伸，并通过正确配对选择、构象校和 exonuclease proofreading 提高准确性。
- Replication fork 通过 helicase、SSB、primase、polymerases、topoisomerase 和 ligase 的协同完成 leading/lagging strand synthesis。
- Origin licensing/activation 的时序控制保证每个 origin 在每个细胞周期只启动一次。
- Telomerase 利用 RNA template 解决线性染色体 end-replication problem，并参与干细胞、衰老与癌症。

## Lecture 7. The Mutability and Repair of DNA

### DNA Damage Response and Sensors

DNA damage 可来自：

- replication errors；
- hydrolysis and deamination；
- ionizing radiation、UV；
- chemical mutagens、alkylating agents、oxidative stress；
- transposons、CRISPR/genome-editing tools。

细胞通过 **DNA damage response (DDR)** 感知损伤，并协调 cell-cycle arrest、DNA repair、transcription 改变和 apoptosis。

**ATM and ATR**

- **ATM（Ataxia Telangiectasia Mutated）**：主要响应 **double-strand breaks (DSBs)**。MRN complex 识别断裂，ATM 激活后磷酸化 H2A.X（形成 $\gamma$-H2A.X）、MDC1、53BP1/BRCA1、CHK2 和 p53。
- **ATR（ATM and Rad3-related）**：主要响应 replication stress 和暴露的 ssDNA。RPA 结合 ssDNA，ATR–ATRIP 在 TOPBP1 或 ETAA1 辅助下激活，并磷酸化 CHK1。
- ATM 通路常导致 G1/S arrest、DNA repair 或 apoptosis；ATR 通路帮助稳定 stalled replication fork、延长 S phase 并在损伤修复后恢复复制。
- **$\gamma$-H2A.X** 是 DSB 附近广泛扩散的 histone mark，可作为 DNA damage 的 sensitive marker。

![ATM/ATR DNA-damage response network](L6-L7Pic/011.png)

### Mutations and Mismatch Repair

- **Mutation**：DNA 序列的永久性改变。
- **Transition（转换）**：pyrimidine→pyrimidine 或 purine→purine。
- **Transversion（颠换）**：pyrimidine↔purine。
- **Point mutation**：只改变一个 nucleotide。
- **Indel（insertion/deletion）**：插入或缺失一个或几个 nucleotide。
- 更大规模变化包括 extensive insertion/deletion 和 chromosome rearrangement。
- DNA microsatellites（短重复序列）尤其容易发生 length mutation。

**Mismatch repair (MMR)**

- DNA polymerase 的 3′→5′ exonuclease 可把 replication accuracy 提高约 100 倍；若错误仍逃过 proofreading，就需要 MMR。
- 若 mismatch 未修复，经过第二轮 replication 后就会固定为 permanent mutation。
- MMR 的两个核心挑战：快速扫描全基因组找到 mismatch，并准确识别哪条链是 newly synthesized strand。

**E. coli MMR pathway**

1. **MutS** 扫描 DNA，识别碱基错配造成的 backbone distortion，并以 ATP-dependent conformational change 包住 mismatch。
2. MutS 招募 **MutL**；MutL 激活 **MutH** endonuclease。
3. MutH 在新链的 hemimethylated GATC 位点切开一个 nick。
4. **UvrD helicase** 从 nick 向 mismatch 方向解开 DNA，exonuclease 切除单链片段。
5. DNA Pol III 填补 gap，DNA ligase 封闭 nick。

- Dam methylase 给 5′-GATC-3′ 的 A 添加 methyl group。复制后短时间 DNA 处于 hemimethylated state：parental strand 已甲基化，新链尚未甲基化。
- MutH 选择性切开未甲基化 strand；methylation 因此充当 parental-strand memory。
- 真核细胞没有 MutH 和这种 hemimethylation 机制，而利用 Okazaki-fragment nicks、PCNA 的方向性和复制时间窗口识别新链；对应蛋白为 MutS homologs **MSH** 和 MutL homologs **MLH/PMS**。

![MutS mismatch recognition and MMR](L6-L7Pic/012.png)

### Sources and Chemistry of DNA Damage

**Spontaneous damage**

- **Deamination**：C→U、A→hypoxanthine、G→xanthine。
- **Depurination**：N-glycosyl linkage 自发水解，产生没有碱基的 **abasic site（AP site）**。
- 5-methylcytosine（5-mC）是 normal modified base，参与 transcriptional silencing；5-mC deamination→T，使 methylated CpG 成为 spontaneous mutation hot spots。

![Deamination of adenine and guanine](L6-L7Pic/013.png)

![Depurination creates an abasic site](L6-L7Pic/014.png)

**Alkylation, oxidation and radiation**

- **Alkylation**：把 methyl/ethyl group 转移到 bases 或 phosphate backbone；nitrosamines、MNNG 等为 alkylating chemicals。
- **Oxidation**：reactive oxygen species（$\mathrm{O_2^{\cdot-}}$、$\mathrm{H_2O_2}$、$\mathrm{OH^\cdot}$）攻击 DNA，形成 8-oxoG 等 lesion，可导致 G:C→T:A transversion。
- **UV (~260 nm)** 可造成相邻 pyrimidines 的 photochemical fusion，形成 **cyclobutane pyrimidine dimer (CPD)**；DNA polymerase 会停滞在这些损伤处。
- **X-rays/$\gamma$-rays** 可造成 DSB，攻击 deoxyribose 并产生 reactive oxygen。

![UV-induced cyclobutane pyrimidine dimer](L6-L7Pic/015.png)

**Base analogs and intercalators**

- Base analog 与正常碱基结构相似，可进入细胞并被掺入 DNA，但 pairing 不准确。
- **5-bromouracil** 类似 thymine，其 bromo group 可稳定 enol tautomer 并使其与 G 错配。
- Intercalating agents（ethidium、proflavin、acridine）插入碱基对之间，可诱导一个或多个碱基对的 insertion/deletion。
- **Ames test** 用 Salmonella 的 histidine-region mutations 检测化学物是否增加 reversion mutation frequency，从而评价 mutagenicity。

### Repair and Tolerance Pathways

DNA damage 可造成两类结果：

- 阻碍 replication/transcription，如 CPD、nick、DSB；
- 改变 DNA sequence，如 deamination、mispairing。

主要修复和耐受途径：

- **Direct reversal**：直接逆转损伤。
- **Base excision repair (BER)**：切除一个 damaged base。
- **Nucleotide excision repair (NER)**：切除含 lesion 的一小段单链。
- **Homologous recombination (HR)**：用完整 homologous sequence 恢复信息。
- **Non-homologous end joining (NHEJ)**：直接连接 DSB 末端。
- **Translesion synthesis (TLS)**：允许 polymerase 越过 lesion，但通常 error-prone，是 tolerance 而非真正修复。

![Major DNA damage repair and tolerance pathways](L6-L7Pic/016.png)

**Direct reversal**

- **Photoreactivation**：DNA photolyase 吸收 light energy，直接打断 pyrimidine dimer 的 cyclobutane ring；存在于细菌、植物等，人体主要依赖 NER。
- **Methyltransferase（MGMT）** 将 O6-methylguanine 的 methyl group 转移到酶自身的 cysteine，从而恢复 normal G。这个酶会因此失活，属于 “suicide enzyme”。

**Base excision repair (BER)**

- DNA glycosylase 是 lesion-specific enzyme，可水解 damaged base 与 deoxyribose 之间的 N-glycosyl bond。
- **Uracil-DNA glycosylase (UDG/UNG)** 去除由 C deamination 产生的 U。
- **OGG1** 去除 oxidized guanine（8-oxoG），其识别 damaged base 时可使 base 从双螺旋中 flipping out 进入 enzyme pocket。
- 去除 base 后，AP endonuclease、repair DNA polymerase 和 ligase 补回正确 nucleotide。
- BER 还有 **fail-safe**：若 8-oxoG 在复制前未被去除，可识别 8-oxoG:A pair 并切除错误掺入的 A；T:G mismatch（来自 5-mC deamination）也可被专门 glycosylase 处理。

![Base excision repair](L6-L7Pic/017.png)

**Nucleotide excision repair (NER)**

- BER 直接识别 lesion；NER 则识别 helix distortion，适用于 CPD、bulky chemical adduct 等。
- NER 切除含损伤的一小段单链，并用未受损 strand 作为 template。
- *E. coli* NER 主要依赖 **UvrA、UvrB、UvrC、UvrD**：
  1. UvrA2B2 complex 扫描 DNA；
  2. UvrA 识别 helix distortion 后离开；
  3. UvrB 在 lesion 周围形成 ssDNA bubble；
  4. UvrC 在 lesion 两侧 incise；
  5. UvrD helicase 移除 damage-containing fragment；
  6. DNA polymerase 和 ligase 完成修复。
- 人类 NER 至少涉及 25 种 proteins。NER 缺陷可造成 **xeroderma pigmentosum（着色性干皮病）**，对 UV 极度敏感并易患皮肤癌。
- **Transcription-coupled repair**：RNA polymerase 在 lesion 处停滞，招募 NER components；RNA polymerase 可能倒退或解离，修复后 transcription 恢复。

![Nucleotide excision repair](L6-L7Pic/018.png)

### Double-Strand-Break Repair

DSB 是最具 cytotoxic 的 DNA damage；若未修复，可导致 chromosome loss 和 cell death。

**Non-homologous end joining (NHEJ)**

- NHEJ directly joins broken ends，不依赖 extensive homology。
- 该过程具有 mutagenicity：断裂端常需 processing，可能造成小 insertion/deletion，因此原始序列未必准确恢复。
- 在高阶真核细胞中，NHEJ 是主要 DSB repair pathway。
- 核心流程：
  - **Ku70–Ku80 heterodimer** 识别 broken DNA ends；
  - 招募 protein kinase **DNA-PKcs**；
  - DNA-PKcs 招募 **Artemis**，其具有 exonuclease/endonuclease activity，用于处理断裂端；
  - **Ligase IV–XRCC4–Cernunnos/XLF** 连接两条 DNA。
- NHEJ 快速、无需 homologous template，因此可在 G1 等时期工作，但 repair junction 常留下 sequence scar。

![NHEJ machinery at a DNA double-strand break](L6-L7Pic/019.png)

### Translesion Synthesis

- Repair systems 并非 100% efficient；如果 replication fork 遇到未修复 lesion，可暂停等待 repair，也可通过 **translesion synthesis (TLS)** 越过损伤。
- TLS 由 specialized Y-family DNA polymerases 催化，可跨过不能正确配对的 lesion。
- **Polymerase switching model**：有高 processivity 的 replicative polymerase 在 lesion 处停滞 → 替换为 TLS polymerase → 越过 lesion → 再换回复制型 polymerase。
- TLS 掺入 nucleotide 的过程可以 template-dependent，却不依赖 lesion 处正常 Watson–Crick pairing，因此通常 error-prone。
- *E. coli* 中 TLS 由 Pol IV/Pol V 负责，并受 SOS response 调控。
- 人类有多种 TLS polymerases。例如 **Pol η** 可相对无错地跨过 UV-induced CPD；**Pol κ** 能跨越多种 bulky adducts，但错误率较高。
- Mammalian cells 中 sliding clamp 的 ubiquitination 可招募 TLS polymerase。
- **Gap-filling model**：replication 可能先越过 lesion 并在后方留下 gap，随后由一种或多种 TLS polymerases 填补。

### Repair Pathways in Cancer Therapy

- **PARP-1（Poly(ADP-ribose) polymerase-1）** 是 DNA damage sensor，识别 single-strand breaks 并参与 repair。
- 肿瘤细胞如果已丧失某种 repair pathway，可能更依赖另一条 backup pathway；抑制该 backup pathway 可以选择性杀伤肿瘤，同时相对保护 normal cells。这一思路是 **synthetic lethality（合成致死）** 和 DNA-repair-targeted therapy 的基础。

### Lecture 7：课程小结

- 复制准确性由 base selection、kinetic proofreading、3′→5′ exonuclease 和 MMR 多层保障。
- DNA 会受 hydrolysis、deamination、alkylation、oxidation、radiation、base analogs 等损伤。
- 直接逆转、BER、NER、HR、NHEJ 分别处理不同类型 lesion；TLS 是 error-prone 的损伤耐受机制。
- DDR 通过 ATM/ATR 和 checkpoint kinases 协调 repair、cell-cycle arrest、senescence 与 apoptosis。
