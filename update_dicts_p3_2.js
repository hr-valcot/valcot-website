const fs = require('fs');
const path = require('path');

const dictsDir = path.join(__dirname, 'src', 'lib', 'dictionaries');
const langs = ['th', 'en', 'zh', 'ja', 'ko', 'ru'];

const newData = {
    th: {
        recruitment: {
            badge: "บริการสรรหาบุคลากร",
            heroTitle1: "ค้นหาคนที่ใช่",
            heroTitle2: "เพื่อธุรกิจที่เติบโต",
            heroSubtitle: "เวลาเป็นสิ่งมีค่า ให้ผู้เชี่ยวชาญของเราคัดสรรบุคลากรที่มีศักยภาพและตรงกับวัฒนธรรมองค์กรของคุณมากที่สุด",
            getConsultation: "แจ้งตำแหน่งที่ต้องการ",
            candidateShortlist: "ผู้สมัครที่ผ่านการประเมิน",
            highlights: [
                { value: "95%", label: "อัตราผู้สมัครผ่านโปรฯ" },
                { value: "1M+", label: "ฐานข้อมูลผู้สมัคร" },
                { value: "รับประกัน", label: "หาคนแทนฟรีในเวลาที่กำหนด" }
            ],
            targetAudienceTitle: "โมเดลการสรรหาที่ตอบโจทย์",
            recruitmentModels: [
                { title: "Executive Search", desc: "สรรหาบุคลากรระดับผู้บริหารระดับสูงและผู้เชี่ยวชาญเฉพาะทาง ที่มีผลกระทบตรงต่อทิศทางธุรกิจ" },
                { title: "การสรรหาทั่วไป", desc: "ค้นหาและคัดกรองพนักงานระดับปฏิบัติการถึงระดับจัดการ ฐานข้อมูลผู้สมัครขนาดใหญ่ของเราช่วยลดระยะเวลา" },
                { title: "Mass Recruitment", desc: "บริการสรรหาพนักงานจำนวนมากสำหรับเปิดสาขาใหม่ โรงงาน หรือโปรเจกต์พิเศษในเวลาจำกัด" },
                { title: "บริการพนักงานสัญญาจ้าง", desc: "จัดหาพนักงานชั่วคราวหรือตามสัญญาจ้าง เพื่อความยืดหยุ่นในการบริหารต้นทุน" }
            ],
            coverageTitle: "กระบวนการทำงานของเรา",
            processSteps: [
                { step: "01", title: "วิเคราะห์ความต้องการ", desc: "ทำความเข้าใจบริบทธุรกิจ วัฒนธรรมองค์กร และ JD โดยละเอียด" },
                { step: "02", title: "ค้นหาและคัดกรอง", desc: "เข้าถึงฐานข้อมูล สัมภาษณ์เบื้องต้น และทดสอบทัศนคติ" },
                { step: "03", title: "นำเสนอผู้สมัคร", desc: "ส่งตารางเปรียบเทียบผู้สมัครที่ตรงสเปกที่สุด 3-5 ท่าน" },
                { step: "04", title: "เจรจาต่อรองและเริ่มงาน", desc: "ช่วยเหลือด้านการยื่นข้อเสนอและการเซ็นสัญญา" }
            ],
            ctaTitle: "พร้อมสร้างทีมที่แข็งแกร่งที่สุดหรือยัง?",
            ctaSubtitle: "บอกสเปกคนที่คุณตามหา ทีม Headhunter ของเราจะเริ่มค้นหาจากเครือข่ายระดับคุณภาพทันที ไม่ได้คน ไม่คิดค่าบริการ",
            ctaButton: "ติดต่อฝ่ายสรรหา",
            check1: "รับประกันการจ้างงาน",
            check2: "รักษาความลับ"
        },
        legal: {
            badge: "กฎหมายและการกำกับดูแล",
            heroTitle1: "ปกป้องธุรกิจของคุณด้วย",
            heroTitle2: "รากฐานกฎหมายที่มั่นคง",
            heroSubtitle: "ตั้งแต่ Work Permit ไปจนถึง BOI และ PDPA ทีมกฎหมายของเราดูแลให้ธุรกิจของคุณปฏิบัติตามกฎหมายไทยครบถ้วน ให้คุณโฟกัสกับธุรกิจ ไม่ใช่ระบบราชการ",
            getConsultation: "ปรึกษาทนายความฟรี",
            highlights: [
                { value: "ถูกต้อง", label: "ตามกฎหมายไทย 100%" },
                { value: "รวดเร็ว", label: "ประสานราชการฉับไว" },
                { value: "เบ็ดเสร็จ", label: "ดูแลทุกเอกสารแทนคุณ" }
            ],
            coverageTitle: "บริการครอบคลุมทุกกลุ่มธุรกิจ",
            coverageSubtitle: "จัดการข้อจำกัดทางกฎหมายให้กลายเป็นความได้เปรียบทางธุรกิจ",
            coverageItems: [
                "ใบอนุญาตทำงาน (Work Permit) และวีซ่า (Visa)",
                "จัดตั้งบริษัทและจดทะเบียนธุรกิจ",
                "ขอส่งเสริมการลงทุน (BOI)",
                "ที่ปรึกษากฎหมายแรงงานตาม PDPA",
                "ร่างและตรวจสอบสัญญาทางธุรกิจ",
                "ข้อบังคับเกี่ยวกับการทำงาน (Work Rules)"
            ],
            coverageDesc: "ป้องกันความเสี่ยงและตรวจสอบความถูกต้องของเอกสารทั้งหมด ให้ทุกก้าวของธุรกิจปลอดภัยและราบรื่น",
            ctaTitle: "พร้อมดำเนินธุรกิจในไทยอย่างมั่นคงหรือยัง?",
            ctaSubtitle: "มอบหมายเรื่องกฎหมายและเอกสารราชการที่ยุ่งยากให้กับทีมงานมืออาชีพของเรา ติดต่อเพื่อปรึกษาได้ทันที",
            ctaButton: "ปรึกษาทีมกฎหมาย",
            check1: "ลดความเสี่ยง 100%",
            check2: "โปร่งใส ตรวจสอบได้"
        },
        accounting: {
            badge: "บริการบัญชีและภาษี",
            heroTitle1: "บัญชีเป็นระเบียบ",
            heroTitle2: "ภาษียื่นตรงเวลา",
            heroSubtitle: "บัญชีที่ถูกต้องและภาษีที่ยื่นตรงเวลาคือรากฐานของธุรกิจที่มั่นคง ทีมนักบัญชีมืออาชีพของเราดูแลให้ครบจบทุกเรื่องแบบไร้รอยต่อ",
            getConsultation: "ขอรับคำปรึกษาฟรี",
            highlights: [
                { value: "100%", label: "ยื่นภาษีตรงเวลา ไม่มีค่าปรับ" },
                { value: "ผู้สอบบัญชีรับอนุญาต", label: "รับรองคุณภาพทุกรายงาน" },
                { value: "อัปเดตทุกเดือน", label: "รายงานสรุปสถานะการเงิน" }
            ],
            coverageTitle: "บริการบัญชีครบวงจร",
            coverageSubtitle: "ทุกองค์ประกอบที่จำเป็นในด้านการเงินและภาษี จัดการโดยนักบัญชีระดับมืออาชีพ",
            coverageItems: [
                "ทำบัญชีรายเดือนตามมาตรฐาน",
                "ยื่น VAT และภาษีหัก ณ ที่จ่าย",
                "คำนวณและยื่นภาษีนิติบุคคล",
                "รายงานประกันสังคม",
                "จัดทำงบการเงินประจำปี",
                "เตรียมตัวรับการตรวจสอบจากกรมสรรพากร"
            ],
            coverageDesc: "ดำเนินการด้วยความรวดเร็วและถูกต้องตามระเบียบของกรมสรรพากร เพื่อปกป้องผลประโยชน์ของบริษัทคุณ",
            ctaTitle: "พร้อมยกระดับระบบบัญชีของคุณหรือยัง?",
            ctaSubtitle: "ไม่ต้องปวดหัวกับเอกสารและตัวเลขอีกต่อไป ให้พาร์ทเนอร์ที่คุณไว้วางใจดูแลแทน ปรึกษาเบื้องต้นฟรี ตกลงราคาชัดเจนไม่มีแอบแฝง",
            ctaButton: "ติดต่อเราวันนี้",
            check1: "ตอบกลับไว",
            check2: "ราคาโปร่งใส"
        }
    },
    en: {
        recruitment: {
            badge: "Recruitment Services",
            heroTitle1: "Connect with",
            heroTitle2: "Top Local Talents",
            heroSubtitle: "Time is valuable. Let our experts headhunt the most capable candidates that fit perfectly into your corporate culture.",
            getConsultation: "Submit a Job Request",
            candidateShortlist: "Shortlisted Candidate",
            highlights: [
                { value: "95%", label: "Candidate Probation Pass Rate" },
                { value: "1M+", label: "Candidate Database" },
                { value: "Guaranteed", label: "Free Replacement Period" }
            ],
            targetAudienceTitle: "Recruitment Models",
            recruitmentModels: [
                { title: "Executive Search", desc: "Headhunting top-tier executives and highly specialized talents who drive business direction." },
                { title: "General Recruitment", desc: "Sourcing and screening operational to managerial staff. Our large candidate database reduces time-to-hire." },
                { title: "Mass Recruitment", desc: "Volume hiring for new branch openings, factories, or special high-scale projects under strict deadlines." },
                { title: "Contract/Temporary Staffing", desc: "Providing temporary or contract staff for optimal cost management flexibility." }
            ],
            coverageTitle: "Our Recruitment Process",
            processSteps: [
                { step: "01", title: "Requirement Analysis", desc: "Understanding your business context, culture, and detailed JD." },
                { step: "02", title: "Sourcing & Screening", desc: "Accessing databases, initial interviews, and attitude testing." },
                { step: "03", title: "Candidate Shortlist", desc: "Submitting a shortlist of the top 3-5 candidates for your review." },
                { step: "04", title: "Negotiation & Onboarding", desc: "Assisting with offer negotiation and contract signing." }
            ],
            ctaTitle: "Ready to assemble your strongest team?",
            ctaSubtitle: "Tell us what you're looking for, and our Headhunters will tap into our premium network. No placement, no fee.",
            ctaButton: "Contact Recruitment",
            check1: "Placement Guarantee",
            check2: "Discreet & Confidential"
        },
        legal: {
            badge: "Legal & Compliance",
            heroTitle1: "Securing Your Business",
            heroTitle2: "With Legal Foundations",
            heroSubtitle: "From Work Permits to BOI and PDPA compliance, our legal advisors ensure your business operates smoothly in Thailand. Focus on your business, not bureaucracy.",
            getConsultation: "Consult Legal Team",
            highlights: [
                { value: "Accurate", label: "100% Thai Law Compliant" },
                { value: "Speedy", label: "Swift Govt. Coordination" },
                { value: "One-Stop", label: "We Manage All Paperwork" }
            ],
            coverageTitle: "Comprehensive Legal Coverage",
            coverageSubtitle: "Turn legal hurdles into an operational advantage.",
            coverageItems: [
                "Work Permit & Visa Processing",
                "Company Incorporation & Registration",
                "BOI Application Assistance",
                "Labor Law & PDPA Consulting",
                "Contract Drafting & Review",
                "Company Work Rules & Regulations"
            ],
            coverageDesc: "Prevent risks and verify all documentation to ensure every step of your business is safe and seamless.",
            ctaTitle: "Ready to operate securely in Thailand?",
            ctaSubtitle: "Delegate complex legal processes and government paperwork to our professionals. Contact us today.",
            ctaButton: "Consult Legal Expert",
            check1: "Zero Risk Approach",
            check2: "Fully Transparent"
        },
        accounting: {
            badge: "Accounting & Tax Services",
            heroTitle1: "Organized Books",
            heroTitle2: "Timely Filings",
            heroSubtitle: "Accurate books and timely tax filings are the foundation of a stable business. Our professional accounting team handles everything seamlessly.",
            getConsultation: "Get Free Consultation",
            highlights: [
                { value: "100%", label: "On-time Filings, Zero Penalties" },
                { value: "Certified CPA", label: "Quality Assured on All Reports" },
                { value: "Monthly Updates", label: "Executive Financial Status" }
            ],
            coverageTitle: "Comprehensive Accounting Services",
            coverageSubtitle: "Every essential element of finance and tax, managed by professional accountants.",
            coverageItems: [
                "Standard monthly bookkeeping",
                "VAT and withholding tax filing",
                "Corporate income tax calculation and filing",
                "Social security reporting",
                "Annual financial statements",
                "Revenue Department audit assistance"
            ],
            coverageDesc: "Executed swiftly and accurately in compliance with Revenue Department regulations to protect your company's interests.",
            ctaTitle: "Ready to elevate your accounting system?",
            ctaSubtitle: "No more headaches with paperwork and numbers. Let a trusted partner handle it. Free initial consultation, clear upfront pricing.",
            ctaButton: "Contact Us Today",
            check1: "Fast Response",
            check2: "Transparent Pricing"
        }
    },
    zh: {
        recruitment: {
            badge: "猎头与招聘服务",
            heroTitle1: "链接不可或缺的",
            heroTitle2: "顶级本土精英人才",
            heroSubtitle: "时间极其宝贵。让我们的资深招聘专家替您捕捉到那些才华出众且完美契合您企业文化的杰出候选人。",
            getConsultation: "提交招聘需求",
            candidateShortlist: "评估过关的候选名单",
            highlights: [
                { value: "95%", label: "候选人通过试用期率" },
                { value: "100万+", label: "庞大的优质人才数据库" },
                { value: "保单承诺", label: "免费替代搜寻保障期" }
            ],
            targetAudienceTitle: "全方位招聘模式",
            recruitmentModels: [
                { title: "高管搜寻 (Executive Search)", desc: "为您的组织精准猎聘能够引领业务发展方向的顶层高级管理人员与高度专业的尖端人才。" },
                { title: "常规招聘搜寻", desc: "搜寻筛选从基础运营层至中层管理层人才。我们强大的数据库有效缩短招聘周期。" },
                { title: "大批量基础岗位招聘", desc: "针对新设网点、工厂成立或严格期限下的特殊大型项目，提供迅速且大容量的人员供给。" },
                { title: "雇员外包/短期用工", desc: "提供短期或合同制驻场人员，为企业打造最优配置和零风险的弹利用工弹性管理。" }
            ],
            coverageTitle: "以达成实效为目标的严谨流程",
            processSteps: [
                { step: "01", title: "痛点需求透彻评估", desc: "洞察您的业务环境、隐性文化及岗位描述的绝对核心要求。" },
                { step: "02", title: "库内深挖与初步筛选", desc: "精准利用庞大的私域库触达精英，进行严苛的面试交流和性格背景测试。" },
                { step: "03", title: "呈报精准复试名单", desc: "为您提交3-5位符合严苛条件的优中选优的短名单以供阅览与挑选。" },
                { step: "04", title: "定薪谈判与顺畅入职", desc: "协助Offer双向议价与签署合约，让报到流程完美落地。" }
            ],
            ctaTitle: "准备好组建无懈可击的核心护城河团队了吗？",
            ctaSubtitle: "描述您的急缺用人需求，我们的顶尖猎头将立刻启动网络进行匹配。无成功录用，则无任何前期费用。",
            ctaButton: "立即联系招聘顾问",
            check1: "安心入职保障期",
            check2: "极其谨慎机密的触达方法"
        },
        legal: {
            badge: "合规与法律合规管家",
            heroTitle1: "保障您的商业基盘",
            heroTitle2: "构筑坚不可摧的法务地基",
            heroSubtitle: "无论是工作许可(Work Permit)申请，还是BOI投资促进甚至泰国PDPA合规，我们的法务铁军将为贵司扫清一切泰国运营的政策暗礁。您只管乘风破浪扩展版图，那些耗时的官僚红头文件由我们来全部搞定。",
            getConsultation: "预约法务专家对话",
            highlights: [
                { value: "全面精准", label: "100%完全契合泰国本土新编律法" },
                { value: "迅捷破局", label: "与官方机构搭建了敏捷灵活的绿色协调通道" },
                { value: "终极省心", label: "我们全权接管一切漫长周期的文书归档工作" }
            ],
            coverageTitle: "一站式扫除投资障碍的法律特攻",
            coverageSubtitle: "将复杂的法律盲区，转化为您稳健前行的隐匿优势。",
            coverageItems: [
                "工作许可证与商务/精英签证代办",
                "泰国主体公司注册及法人执照起草申请",
                "BOI投资促进审议项目落地跟踪及申报",
                "泰国PDPA与劳资矛盾法庭辩护指引",
                "涉及跨国利益的严苛商业合同起草翻译复核",
                "完全符合本地用工框架的企业规章制度定制"
            ],
            coverageDesc: "防范潜在重大商业隐患并确保每份流转出境文件丝毫不差。让您生意的每一次跨国跳跃，都踩在坚不可摧的安全边界之内。",
            ctaTitle: "泰国运营稳舵前行，在此刻启动？",
            ctaSubtitle: "将极其棘手且风险未知的合规事宜交付给在本地实战多年的职业团队吧。请即刻联系我们。",
            ctaButton: "致电法务专线",
            check1: "真正的全链路零风险风控",
            check2: "进度高度透明可供随时核对"
        },
        accounting: {
            badge: "财税管理与记账服务",
            heroTitle1: "精准分类每一笔记账",
            heroTitle2: "在合法的轨道内提前避税",
            heroSubtitle: "账目清晰与报税准点，一家卓越企业生存的命脉基石。通过我们执业级专业财会团队之手，将一团乱麻的数据报表完美梳理为您扩张的隐形助力。",
            getConsultation: "获取财税诊断简报",
            highlights: [
                { value: "100%", label: "按时报税结案：拒绝一切滞纳罚金" },
                { value: "CPA背书", label: "具备泰国执业资格：所有最终报告质量权威保证" },
                { value: "按月简报", label: "经营战情室：动态更新管理层最痛点的资金脉络图" }
            ],
            coverageTitle: "不留一处财务死角的审计管家",
            coverageSubtitle: "财务架构与高危税务稽查点的排雷工作，从此刻起交给专业会计师。",
            coverageItems: [
                "严格遵照最新IFRS及TAS准则开展月度账目录入核对",
                "增值税(VAT)进销抵扣与一切预扣税(Withholding Tax)明细上报",
                "年度企业所得基本税额精密规划并履行强制缴纳",
                "政府社保专户动态结余强制通告报备",
                "年度结账损益报表(FS)与资产负债精算",
                "直面泰国税务局严厉突击的强效陪同抗辩和释疑"
            ],
            coverageDesc: "迅如闪电的作业，恪尽职守遵循泰国严苛审计规则——我们的存在，皆为化解贵公司财产侵蚀之忧。",
            ctaTitle: "打算让粗糙的账目重见天日并获得真正的健康了吗？",
            ctaSubtitle: "从此告别那些让大脑短路的凭证复印件海。选择信任且硬核的伙伴介入，首次面谈全部减免收费，服务项全透明不坐地起价。",
            ctaButton: "启动财税焕新计划",
            check1: "火速秒答无拖延",
            check2: "一口价无隐藏陷阱费"
        }
    },
    ja: {
        recruitment: {
            badge: "採用支援サービス",
            heroTitle1: "ビジネス成長に不可欠な",
            heroTitle2: "最適な人材をマッチング",
            heroSubtitle: "時間は有限です。我々の専任エキスパートに、企業のカルチャーに完璧にフィットする最も優秀な候補者のヘッドハンティングをお任せください。",
            getConsultation: "採用要件を送信する",
            candidateShortlist: "選考を通過した候補者",
            highlights: [
                { value: "95%", label: "試用期間突破率（定着率）" },
                { value: "100万+", label: "大規模な独自候補者データベース" },
                { value: "安心保証", label: "無料の代替採用保証期間" }
            ],
            targetAudienceTitle: "ニーズに合わせた採用モデル",
            recruitmentModels: [
                { title: "エグゼクティブサーチ（人材紹介）", desc: "企業の方向性を決定づける経営幹部や、高度な専門スキルを持つトップティア人材のヘッドハンティング。" },
                { title: "一般採用支援", desc: "実務担当者から中間管理職層までのソーシングとスクリーニング。巨大なデータベースにより採用期間を大幅短縮。" },
                { title: "大規模（マス）リクルーティング", desc: "工場の立ち上げや新支店のオープンなど、限られた期間内での大規模な人員配置ニーズに確実に対応。" },
                { title: "契約・テンポラリースタッフ", desc: "コスト管理における最高の柔軟性を実現するため、一時的な契約社員や短期間の臨時スタッフを迅速に派遣。" }
            ],
            coverageTitle: "当社の確実な採用プロセス",
            processSteps: [
                { step: "01", title: "徹底した要件分析", desc: "貴社の事業背景、企業文化、そして詳細な職務記述書（JD）を深く理解。" },
                { step: "02", title: "ソーシングとスクリーニング", desc: "データベース照会、初期面接の実施、適性・態度テストによる絞り込み。" },
                { step: "03", title: "ショートリスト（候補者名簿）提出", desc: "厳格な条件をクリアしたトップ3〜5名の候補者を比較リストとして送付。" },
                { step: "04", title: "交渉・オンボーディング支援", desc: "両者が納得するオファー額の交渉や雇用契約締結、入社初日までのフォロー。" }
            ],
            ctaTitle: "最強の組織・チームを構築する準備はできましたか？",
            ctaSubtitle: "お探しの人物像をお聞かせください。当社のヘッドハンターがプレミアムネットワークを駆使して即座に探し出します。完全成功報酬型。",
            ctaButton: "採用チームに連絡する",
            check1: "確かな入社保証",
            check2: "徹底した機密保持と非公開対応"
        },
        legal: {
            badge: "法務およびコンプライアンス管理",
            heroTitle1: "あなたのビジネスを守る",
            heroTitle2: "揺るぎない法的基盤で",
            heroSubtitle: "ワークパーミットからBOI、そしてPDPA（個人情報保護法）への対応まで。当社の法務アドバイザーがタイでの円滑な事業運営を100%合法的に確保します。官僚的な手続きは当社に任せ、ビジネスに集中してください。",
            getConsultation: "法務専門家に無料相談",
            highlights: [
                { value: "正確無比", label: "タイの関連法規に完全準拠" },
                { value: "迅速手続き", label: "政府機関との素早い調整力" },
                { value: "ワンストップ", label: "すべての書類申請作業を代行" }
            ],
            coverageTitle: "事業のあらゆる側面をカバーするサポート",
            coverageSubtitle: "難解で複雑な法的ハードルを、事業運営におけるアドバンテージに変えます。",
            coverageItems: [
                "ワークパーミット（労働許可証）およびビザの取得処理",
                "現地法人の設立および各種企業の正式登記",
                "タイ投資委員会（BOI）の申請支援サポート",
                "労働法とPDPA（個人情報保護法）順守のためのコンサルティング",
                "複雑なビジネス契約書の起草・レビューおよび翻訳",
                "タイ法に基づいた就業規則および規定の作成（Work Rules）"
            ],
            coverageDesc: "潜在的なリスクを徹底的に防ぎ、出入国手続きやすべての書類を検証することで、貴社のビジネスのすべてのステップが完全かつシームレスであることを保証します。",
            ctaTitle: "タイで安全かつ確実に事業を展開する準備ができましたか？",
            ctaSubtitle: "複雑な法的手続きや煩雑な政府向け提出書類はプロフェッショナルなチームに委任しましょう。まずはご相談ください。",
            ctaButton: "法務エキスパートに相談する",
            check1: "ゼロリスク・アプローチ",
            check2: "完全に透明で検証可能な進行報告"
        },
        accounting: {
            badge: "会計・財務および税務サービス",
            heroTitle1: "整然とした帳簿管理",
            heroTitle2: "期日通りの税務申告",
            heroSubtitle: "正確な帳簿と遅延のない税務申告は、安定した企業経営の根幹です。当社の経験豊富な専門会計チームが、これらすべてをシームレスかつ完璧に処理します。",
            getConsultation: "無料コンサルティングを予約",
            highlights: [
                { value: "100%", label: "期日内申告でペナルティ（罰金）ゼロ" },
                { value: "公認会計士(CPA)", label: "すべての報告書において品質を厳格に保証" },
                { value: "毎月更新", label: "経営幹部向けのクリアな月次財務ステータス報告" }
            ],
            coverageTitle: "包括的な会計・税務サービス",
            coverageSubtitle: "財務および税務に必要なすべての要素を、プロフェッショナルな会計士が手厚く管理します。",
            coverageItems: [
                "タイの会計基準に準拠した標準的な月次記帳（Bookkeeping）",
                "VAT（付加価値税）および源泉徴収税（Withholding Tax）の申告代行",
                "法人所得税の正確な計算と税務署への法定申告",
                "社会保険の月間報告および各種行政への対応",
                "監査可能な年次財務諸表（FS）の作成",
                "タイ歳入局（税務署）からの監査および税務調査に対する確固たる立会支援"
            ],
            coverageDesc: "歳入局の規制に厳格に従いながら、迅速かつ1ミリの狂いもなく業務を遂行し、会社の大切な利益と評判を守り抜きます。",
            ctaTitle: "あなたの会計システムを一段上のレベルへ引き上げる準備はできていますか？",
            ctaSubtitle: "書類の山や終わらない数字の計算で頭を悩ませるのはもう終わりにしましょう。信頼できるパートナーにお任せください。初回相談無料、明確で隠し費用なしの料金システムです。",
            ctaButton: "今すぐお問い合わせ",
            check1: "圧倒的なレスポンスの早さ",
            check2: "不透明な追加費用なし"
        }
    },
    ko: {
        recruitment: {
            badge: "인재 채용 및 헤드헌팅",
            heroTitle1: "적합한 인재와의 완벽한 연결",
            heroTitle2: "탑티어 핵심 인재 소싱",
            heroSubtitle: "시간은 귀중합니다. 당사의 숙련된 전문가들이 귀사의 기업 철학 및 문화에 가장 완벽하게 어우러지는 최고의 후보자를 직접 발굴하여 연결해 드립니다.",
            getConsultation: "채용 요청서 제출",
            candidateShortlist: "검증이 완료된 최종 후보군",
            highlights: [
                { value: "95%", label: "신규 입사자 수습 기간 통과율" },
                { value: "100만 명+", label: "최대 규모의 이력서 방대한 데이터베이스" },
                { value: "완벽 보장", label: "조건을 충족하지 못할 시 무료 대체 채용기간 보장" }
            ],
            targetAudienceTitle: "맞춤형 채용 설계 방식 (Recruitment Models)",
            recruitmentModels: [
                { title: "경영진 및 C-레벨 서치", desc: "단순한 관리를 넘어 비즈니스의 방향성을 쥐고 흔들 수 있는 최고위급 임원(Executive) 및 극소수 최상위 전문 인재 발굴." },
                { title: "일반 인재 채용 부문", desc: "실무를 담당하는 일반 팀원부터 중견급 관리자까지 아우르는 안정적인 Sourcing. 당사의 독점 데이터베이스가 채용 기간을 대폭 축소합니다." },
                { title: "대규모 집단 채용 (Mass Recruitment)", desc: "빠른 시일 내에 새로운 지점/매장 오픈, 공장 설립 또는 급격한 스케일업 등 촉박한 기한 아래서 이루어지는 물량 중심의 채용." },
                { title: "파견 및 계약직 유연 채용", desc: "비용 구조를 최적화하고 단기 프로젝트에 기민하게 반응할 수 있는 임시 또는 계약직 스태프 전격 파견 공급." }
            ],
            coverageTitle: "우리의 단호하고 체계적인 프로세스",
            processSteps: [
                { step: "01", title: "가장 깊은 요구 사항 분석", desc: "귀사의 비즈니스 방향성, 감춰진 근무 환경과 문화를 읽어내고 정밀한 직무 기술서(JD) 확립." },
                { step: "02", title: "심층 발굴 및 엄격한 스크리닝", desc: "국내외 데이터베이스 접근, 실전적인 초기 역량 면접 진행 및 태도/성향 테스트 통과." },
                { step: "03", title: "우수 후보군 (Shortlist) 선정", desc: "모든 기준과 스펙에 최고로 부합하는 3-5명의 극강 후보자 목록 요약 전송 및 검토 요청." },
                { step: "04", title: "연봉 협상 및 최종 온보딩", desc: "민감한 오퍼레이션 조율(Offer Negotiation), 근로 계약서 체결 및 입사 첫날까지의 동행." }
            ],
            ctaTitle: "귀하의 비즈니스를 견인할 가장 강력한 팀을 구성할 준비가 되셨습니까?",
            ctaSubtitle: "현재 어떤 사람이 필요하신지, 어떤 역량이 요구되는지만 말씀하십시오. 귀사가 원하는 인재를 뽑을 때까지 저희 헤드헌터들의 집요한 탐색은 멈추지 않습니다. 착수금이나 불필요한 성사 전 수수료는 단 1원도 없습니다.",
            ctaButton: "채용 전문가와 연결",
            check1: "강력하고 확실한 채용 보증",
            check2: "완벽한 프라이버시 유지 및 철저한 비밀 진행 보장"
        },
        legal: {
            badge: "법무 및 컴플라이언스 솔루션",
            heroTitle1: "단단한 법적 토대 위에서",
            heroTitle2: "비즈니스를 가장 안전하게 방어",
            heroSubtitle: "외국인 취업 준비 과정인 Work Permit부터 신뢰성이 생명인 BOI 혜택, 더불어 가장 처벌이 무거운 PDPA 준수까지. 당사 소속의 법률 파트너들이 복잡하게 뒤엉킨 태국 내 규정을 한 치의 오차도 없이 헤쳐나갑니다. 지루한 관공서 문턱은 저희가 넘겠습니다; 귀하는 오로지 비즈니스에 집중하십시오.",
            getConsultation: "법무팀과 무료 상담",
            highlights: [
                { value: "절대적 정밀함", label: "태국 국내법 및 노동 규제 100% 완전 준수" },
                { value: "신속함의 극대화", label: "정부 관계 부처와의 매끄럽고 기동력 있는 접점 확보" },
                { value: "원스톱 처리", label: "모든 신청 서류 구비 일체 및 관청 제출 대행" }
            ],
            coverageTitle: "리스크를 도려내는 포괄적인 법무 제공 내역",
            coverageSubtitle: "자칫하면 회사에 큰 타격을 입힐 수 있는 법적 장애물. 저희를 만나면 그것은 하나의 절차로 둔갑합니다.",
            coverageItems: [
                "외국인 워크퍼밋(Work Permit) 및 비자 프로세싱 전담",
                "태국 현지 법인 신설, 지분 구조 설계 및 등록 절차",
                "BOI(태국투자청)의 방대한 요구 조건 해석 지원 및 신청",
                "고도로 복잡한 노동법 및 PDPA 위반 소지 원천 차단 컨설팅",
                "이익을 극대화하고 리스크를 잠재우는 상업 비즈니스 계약서 초안 작성",
                "안전한 고용 관계 유지를 위한 회사 취업규칙(Work Rules) 정비"
            ],
            coverageDesc: "사업의 모든 순간이 위협받지 않고 단 한 장의 서류도 누락되지 않도록 철두철미한 관리가 동반됩니다. 안전함을 기반으로 거침없이 전진하십시오.",
            ctaTitle: "태국에서 합법적이고 굳건하게 비즈니스를 전개하실 확고한 뜻이 서셨습니까?",
            ctaSubtitle: "머리를 어지럽히는 세세금금한 절차들과 산더미 같은 법정 서류더미를 우리 전문가들에게 전부 내맡기십시오. 지금 바로 부담 없이 문의주세요.",
            ctaButton: "법률 전문가 연결하기",
            check1: "비즈니스 지체 및 법정 다툼 제로화 전략",
            check2: "모든 과정을 눈으로 확인 가능한 투명성"
        },
        accounting: {
            badge: "회계 기장 및 세무 신고 전문 서비스",
            heroTitle1: "흐트러짐 없는 체계적인 장부",
            heroTitle2: "단 1초의 지각도 없는 세무 신고서",
            heroSubtitle: "어떤 변수에도 흔들리지 않는 정확한 재무 기록과 늦출 수 없는 세무 신고는 영속 가능한 단단한 기업을 세우는 기초 공사입니다. 당사에 소속된 숙련된 회계 전문가 그룹이 하나부터 열까지 완벽에 가까운 심리스(Seamless) 프로세스로 회사를 견인합니다.",
            getConsultation: "회계/세무 진단 받아보기",
            highlights: [
                { value: "100%", label: "철저한 정시 서류 접수, 체납 가산세 완전 제로화" },
                { value: "공인회계사(CPA)", label: "의심할 여지가 없는 최상급 퀄리티의 결과물 제출" },
                { value: "매월 업데이트", label: "핵심 경영진을 위한 시각화된 매월 재무 현황 차트" }
            ],
            coverageTitle: "한 치의 빈틈도 허용하지 않는 포괄적 회계 서비스",
            coverageSubtitle: "귀사가 벌어들이는 자본 및 빠져나가는 세수의 모든 핵심 구성 요소를 오직 검증을 거친 탁월한 회계사들의 통제 아래에 두십시오.",
            coverageItems: [
                "태국 회계 표준에 기반한 월간 정규 기장/장부 작성(Bookkeeping)",
                "절대 놓치지 않는 VAT(부가세) 및 Withholding Tax(원천징수) 납부",
                "복잡하게 얽힌 법인 소득세 완벽 계산 및 실수 없는 정산",
                "지정된 양식에 맞춘 사회 보장 항목 보고 절차 및 공제",
                "엄격한 잣대로 생성된 공신력 있는 연례 재무제표(FS)",
                "가장 까다로운 태국 국세청/세무서의 강도 높은 감사를 방어하는 막강한 지원"
            ],
            coverageDesc: "어떤 상황에서도 태국 국세청의 각종 규제와 정책을 온건하고 합법적으로 활용하며, 귀사에 단 하나의 손해도 가지 않도록 보호합니다. 신속하고 정밀한 실행은 저희의 기본 원칙입니다.",
            ctaTitle: "산산조각 흩어져 있는 회사 회계 시스템, 이제 한 차원 높은 곳으로 완전히 끌어올릴 준비가 되셨습니까?",
            ctaSubtitle: "가독성 떨어지는 문서 덩어리들과 복잡한 계산식 때문에 더 이상 두통을 호소하지 마십시오. 가장 믿을 수 있는 파트너가 해결하겠습니다. 최초 컨설팅 비용 전면 무료. 나중에 결코 숨은 비용이 청구되지 않는 확실한 초기 견적 시스템입니다.",
            ctaButton: "지금 당장 상담하기",
            check1: "비즈니스의 스피드를 살려주는 빠른 응답 시간 보유",
            check2: "더 이상 고민할 필요가 없는 투명하고 명쾌한 수수료 구조"
        }
    },
    ru: {
        recruitment: {
            badge: "Рекрутинг и Охота за Талантами",
            heroTitle1: "Связать вас с",
            heroTitle2: "Топовыми Местными Талантами",
            heroSubtitle: "Время в бизнесе - самый ценный ресурс. Позвольте нашим маститым хедхантерам выследить и переманить самых выдающихся кандидатов, чьи профессиональные навыки и личная энергетика органично сольются с культурой вашей корпорации.",
            getConsultation: "Оставить заявку на подбор",
            candidateShortlist: "Главные кандидаты на должность",
            highlights: [
                { value: "95%", label: "Мощнейший процент прохождения испытательного срока" },
                { value: "1 Млн+", label: "Колоссальная и многоуровневая база резюме" },
                { value: "Железобетонно", label: "Безотказная гарантия бесплатной замены сотрудника" }
            ],
            targetAudienceTitle: "Исключительные Модели Рекрутинга",
            recruitmentModels: [
                { title: "Поиск руководителей (Executive Search)", desc: "Настоящая узкоспециализированная охота за головами: мы приведем к вам элитных топ-менеджеров и редчайших специалистов, задающих бизнес-тренды." },
                { title: "Генеральный (Массовый) поиск", desc: "Скрупулезный сорсинг и скрининг сотрудников: от линейных операторов до менеджеров среднего звена. Интеллектуальные алгоритмы базы сокращают сроки найма до минимума." },
                { title: "Глобальный массовый набор", desc: "Бывалый и безотказный масснабор для мгновенного запуска новых филиалов, массивных фабрик или уникальных крупномасштабных проектов в жесткие сроки." },
                { title: "Аутстаффинг (Контрактный персонал)", desc: "Снабжение временными или контрактными профильными сотрудниками для гибкого, безболезненного контроля за расходами бюджета." }
            ],
            coverageTitle: "Глубоко эшелонированный процесс найма",
            processSteps: [
                { step: "01", title: "Беспощадный анализ требований", desc: "Стирание белых пятен в вашем бизнес-контексте, культурном коде компании и мельчайших требованиях JD (Job Description)." },
                { step: "02", title: "Массивный поиск и жесткий Скрининг", desc: "Допуск к закрытым базам данных, каверзные первичные собеседования через тесты на психотип и поведенческую оценку." },
                { step: "03", title: "Ледяной отбор шорт-листа", desc: "Передача в ваши руки кристально чистого списка из топ 3-5 выдающихся кандидатов для окончательной, фатальной оценки." },
                { step: "04", title: "Молниеносные переговоры и Онбординг", desc: "Дипломатичная помощь в битве за оффер (сумма сделки) и официальное скрепление трудового контракта." }
            ],
            ctaTitle: "Готовы сковать самую сокрушительную команду на рынке?",
            ctaSubtitle: "Просто назовите критерии. И наши хедхантеры в тот же час погрузятся в премиум-сети связей. Мы берем гонорар только за безупречно размещенный результат. Никаких пустых разговоров - никаких авансов за воздух.",
            ctaButton: "Вызвать команду рекрутеров",
            check1: "Тотальная гарантия успешного трудоустройства",
            check2: "Мраморная, непроницаемая конфиденциальность процесса"
        },
        legal: {
            badge: "Правовая Поддержка и Комплаенс",
            heroTitle1: "Абсолютная Защита вашего Дела",
            heroTitle2: "С Помощью Стального Правового Фундамента",
            heroSubtitle: "От безупречного оформления Work Permit и продвижения BOI, до виртуозного соответствия тайскому PDPA — наши юридические тяжеловесы обеспечивают безупречно гладкое плавание вашего бизнеса в мутных водах Таиланда. Мы берем на себя всю удушливую бюрократию. Ваше дело — развивать капитал.",
            getConsultation: "Беседа с адвокатами (бесплатно)",
            highlights: [
                { value: "Паладинская точность", label: "Соблюдение Тайского Законодательства на максимальные 100%" },
                { value: "Ракетная скорость", label: "Проверенные связи и мгновенная координация с Госорганами" },
                { value: "Абсолютный One-Stop", label: "Все бремя бумажной волокиты полностью парализовано нашими руками" }
            ],
            coverageTitle: "Всесторонний купол правовой защиты",
            coverageSubtitle: "Искусство превращать юридические барьеры в мощное операционное преимущество над конкурентами.",
            coverageItems: [
                "Безошибочная обработка Work Permit и визовых разрешений",
                "Регистрация и учреждение компаний (включая консалтинг по долям)",
                "Помощь в сложнейшем процессе подачи заявки на BOI льготы",
                "Консультирование по нюансам трудового права и шипастого закона PDPA",
                "Бескомпромиссная разработка и разгромный аудит контрактов",
                "Локализация и составление Правил Внутреннего Трудового Распорядка (Work Rules)"
            ],
            coverageDesc: "Мы запечатываем любые риски на самой ранней стадии. Скрупулезная верификация всех документов, чтобы каждый вздох и шаг вашей корпорации был юридически пуленепробиваемым.",
            ctaTitle: "Жаждете вести свой бизнес в Таиланде под непробиваемой эгидой?",
            ctaSubtitle: "Сбросьте ядовитые и сложные легальные ребусы и кипы государевых бумаг на армию наших экспертов. Свяжитесь для первого штурма вашей проблемы прямо сейчас.",
            ctaButton: "Привлечь правового эксперта",
            check1: "Подход \"Ноль Рисков, Ноль Ошибок\"",
            check2: "Стеклянная, полная прозрачность всего хода дела"
        },
        accounting: {
            badge: "Бухгалтерия и Налоговые Директивы",
            heroTitle1: "Ювелирно Настроенные Журналы",
            heroTitle2: "Маниакально Своевременные Отчеты",
            heroSubtitle: "Педантично точная бухгалтерия и безотлагательная, до секунды выверенная уплата налогов — гранитная основа стабильного, неумолимо растущего царства коммерции. Наш легион профессиональных аудиторов возьмет эту рутину в ежовые рукавицы.",
            getConsultation: "Получить бесплатный аудит-диалог",
            highlights: [
                { value: "100%", label: "Все декларации в срок. Штрафы просто исключены" },
                { value: "Сертифицированные CPA", label: "Тотальный контроль качества каждой цифры" },
                { value: "Ежемесячный сканер", label: "Безжалостный свод о реальном финансовом пульсе (Executive Status)" }
            ],
            coverageTitle: "Безграничные горизонты Бухгалтерского Обслуживания",
            coverageSubtitle: "Каждая молекула финансов и корпоративных налогов находится под неусыпным оком сертифицированных гуру бухгалтерии.",
            coverageItems: [
                "Классическое ведение учета согласно всем тайским канонам",
                "Жесткий учет НДС (VAT) и удержаний у источника выплаты",
                "Баллистически точный расчет и уплата корпоративного налога",
                "Ежемесячные донесения по отчислениям в ФСС (Социальное Страхование)",
                "Кристально ясная годовая финансовая отчетность (FS)",
                "Сокрушение проверок: полная, непреступная защита от набегов Департамента Доходов (Налоговой)"
            ],
            coverageDesc: "Молниеносное, беспощадно идеальное исполнение всех требований налоговых органов (Revenue Department). Единственная цель — непоколебимая защита имущества и доходов Вашей компании.",
            ctaTitle: "Вознамерились возвести свою бухгалтерию в ранг священного идеала?",
            ctaSubtitle: "Больше никаких мигреней от вороха заплесневелых бумаг и путанных столбцов. Оставьте этот хаос своему доверенному партнеру-уничтожителю проблем. Бесплатная консультация у истоков, стопроцентно прозрачные тарифы без подстав в конце.",
            ctaButton: "Решить вопрос прямо сегодня",
            check1: "Импульсивная, реактивная скорость ответа",
            check2: "Кристально понятное, прозрачное ценообразование услуг"
        }
    }
};

langs.forEach(lang => {
    const filePath = path.join(dictsDir, `${lang}.json`);
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        let dict = JSON.parse(fileContent);
        
        dict.servicesPages.recruitment = newData[lang].recruitment;
        dict.servicesPages.legal = newData[lang].legal;
        dict.servicesPages.accounting = newData[lang].accounting;
        
        fs.writeFileSync(filePath, JSON.stringify(dict, null, 4));
        console.log(`Updated ${lang}.json with servicesPages part 2`);
    } else {
        console.error(`File not found: ${filePath}`);
    }
});
