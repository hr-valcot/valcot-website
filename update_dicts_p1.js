const fs = require('fs');
const path = require('path');

const dictsDir = path.join(__dirname, 'src', 'lib', 'dictionaries');
const langs = ['th', 'en', 'zh', 'ja', 'ko', 'ru'];

const newData = {
    th: {
        blogPage: {
            heroTitle: "บทความ",
            heroSubtitle: "บทความ HR, คู่มือกฎหมายแรงงาน, และอัพเดตข่าวสารจาก Valcot Partners",
            readMore: "อ่านเพิ่มเติม →",
            articles: [
                { title: "5 สิ่งที่ SME ต้องรู้ก่อนทำ Payroll เอง", category: "Payroll", excerpt: "หลายธุรกิจ SME เลือกทำ Payroll เอง แต่มีข้อผิดพลาดที่พบบ่อยที่อาจนำไปสู่ปัญหาทางกฎหมายและภาษี" },
                { title: "EOR คืออะไร? ทำไมบริษัทต่างชาติถึงต้องการ", category: "HR", excerpt: "Employer of Record (EOR) เป็นทางออกสำหรับบริษัทที่ต้องการจ้างพนักงานในไทยโดยไม่ต้องจดทะเบียนนิติบุคคล" },
                { title: "PDPA สำหรับ HR: สิ่งที่ต้องเตรียมพร้อม", category: "กฎหมาย", excerpt: "พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล (PDPA) มีผลกระทบต่อการจัดการข้อมูลพนักงานอย่างไร และ HR ต้องเตรียมตัวอะไรบ้าง" },
                { title: "Work Permit & Visa: คู่มือฉบับสมบูรณ์", category: "กฎหมาย", excerpt: "ขั้นตอนการขอ Work Permit และ Visa สำหรับพนักงานต่างชาติในประเทศไทย ตั้งแต่เอกสารที่ต้องใช้ไปจนถึงระยะเวลาดำเนินการ" }
            ]
        },
        aboutPage: {
            badge: "เกี่ยวกับเรา",
            heroTitle: "เกี่ยวกับ Valcot Partners",
            heroSubtitle: "เติบโตจากประสบการณ์จริง ขับเคลื่อนด้วยความสำเร็จของลูกค้า — พาร์ทเนอร์ HR ที่ธุรกิจในไทยไว้วางใจ",
            stats: [
                { label: "ปีประสบการณ์" },
                { label: "ลูกค้าที่ไว้วางใจ" },
                { label: "พนักงานที่ดูแล" },
                { label: "อัตราความพึงพอใจ" }
            ],
            storyTitle: "เรื่องราวบริษัท",
            storyP1: "Valcot Partners ก่อตั้งขึ้นด้วยพันธกิจที่ชัดเจน: ให้บริการ HR ระดับสากลแก่ธุรกิจที่เข้ามาทำตลาดในไทย เรารู้ดีว่าการบริหารคนในต่างแดนไม่ง่าย ทั้งเรื่องกฎหมาย วัฒนธรรม และระบบที่แตกต่าง",
            storyP2: "ปัจจุบัน Valcot Partners ให้บริการลูกค้าหลากหลาย ตั้งแต่ Startup ไปจนถึงบริษัทข้ามชาติ บริการของเราครอบคลุมทั้ง HR, Payroll, สรรหาคน และกฎหมาย ออกแบบมาเพื่อให้คุณมีจุดติดต่อเดียวสำหรับทุกเรื่อง HR",
            missionTitle: "พันธกิจ",
            missionText: "เสริมพลังธุรกิจในประเทศไทยด้วยบริการ HR ที่น่าเชื่อถือ ปฏิบัติตามกฎหมาย และขยายตัวได้ เพื่อให้ลูกค้ามุ่งเน้นกับธุรกิจหลัก เราดูแลทรัพยากรที่มีค่าที่สุดของคุณ — คนของคุณ",
            coreValuesTitle: "ค่านิยมหลัก",
            values: [
                { title: "ซื่อสัตย์", desc: "ทำงานด้วยความโปร่งใสและจริงใจ ความไว้วางใจจากลูกค้าคือสิ่งที่เราเห็นว่ามีค่าที่สุด" },
                { title: "ความเป็นเลิศ", desc: "พัฒนาคุณภาพบริการอย่างต่อเนื่อง ไม่หยุดอยู่กับที่" },
                { title: "ลูกค้าคือศูนย์กลาง", desc: "เราสำเร็จเมื่อลูกค้าสำเร็จ ทุกบริการจึงออกแบบให้เหมาะกับธุรกิจของคุณจริงๆ" },
                { title: "ปฏิบัติตามกฎหมาย", desc: "ทุกการทำงานแทนคุณปฏิบัติตามกฎหมายไทยและมาตรฐานสากล" }
            ],
            ctaTitle: "พร้อมให้เราเป็นพาร์ทเนอร์ HR ของคุณหรือยัง?",
            ctaSubtitle: "ปรึกษาฟรี ไม่มีข้อผูกมัด",
            ctaButton: "ปรึกษาฟรี"
        }
    },
    en: {
        blogPage: {
            heroTitle: "Blog",
            heroSubtitle: "HR articles, labor law guides, and news updates from Valcot Partners",
            readMore: "Read more →",
            articles: [
                { title: "5 Things SMEs Should Know Before DIY Payroll", category: "Payroll", excerpt: "Many SMEs choose to handle payroll themselves, but common mistakes can lead to legal and tax issues." },
                { title: "What is EOR? Why Foreign Companies Need It", category: "HR", excerpt: "Employer of Record (EOR) is the solution for companies wanting to hire in Thailand without setting up a legal entity." },
                { title: "PDPA for HR: What You Need to Prepare", category: "Legal", excerpt: "How the Personal Data Protection Act impacts employee data management and what HR needs to prepare." },
                { title: "Work Permit & Visa: Complete Guide", category: "Legal", excerpt: "Step-by-step guide to Work Permit and Visa applications for foreign employees in Thailand." }
            ]
        },
        aboutPage: {
            badge: "About Us",
            heroTitle: "About Valcot Partners",
            heroSubtitle: "Built on real experience, driven by our clients' success — the HR partner Thai businesses trust.",
            stats: [
                { label: "Years Experience" },
                { label: "Trusted Clients" },
                { label: "Employees Managed" },
                { label: "Satisfaction Rate" }
            ],
            storyTitle: "Our Story",
            storyP1: "Valcot Partners was founded with a clear mission: to deliver world-class HR services to businesses entering the Thai market. We understand that managing people abroad is never easy — from navigating local laws to cultural nuances and unfamiliar systems.",
            storyP2: "Today, Valcot Partners serves a diverse range of clients — from startups to multinational corporations. Our services span HR, Payroll, Recruitment, and Legal, designed to give you one single point of contact for all things HR.",
            missionTitle: "Mission",
            missionText: "Empowering businesses in Thailand with reliable, compliant, and scalable HR services — so our clients can focus on their core business while we take care of their most valuable resource: their people.",
            coreValuesTitle: "Core Values",
            values: [
                { title: "Integrity", desc: "We work with transparency and sincerity. Client trust is what we value most." },
                { title: "Excellence", desc: "Continuously improving service quality — never standing still." },
                { title: "Client-Centric", desc: "We succeed when our clients succeed. Every service is tailored to your business." },
                { title: "Compliance", desc: "Everything we do on your behalf complies with Thai law and international standards." }
            ],
            ctaTitle: "Ready to make us your HR partner?",
            ctaSubtitle: "Free consultation, no commitment.",
            ctaButton: "Free Consultation"
        }
    },
    zh: {
        blogPage: {
            heroTitle: "博客文章",
            heroSubtitle: "来自 Valcot Partners 的人力资源文章、劳动法指南和新闻更新",
            readMore: "阅读更多 →",
            articles: [
                { title: "中小企业自助薪资处理前必须知道的5件事", category: "薪酬处理", excerpt: "许多中小企业选择自行处理薪资计算，但常见的错误可能导致严重的法律和税务问题。" },
                { title: "EOR是什么？外国公司为何需要它", category: "人力资源", excerpt: "名义雇主 (EOR) 是一套无需设立本地法人实体即可在泰国合法招聘员工的解决方案。" },
                { title: "HR必看：如何做好PDPA（个人数据保护法）准备", category: "法律顾问", excerpt: "个人资料保护法对员工数据管理有何影响，HR应该做好哪些准备工作。" },
                { title: "工作许可与签证：完整申请指南", category: "法律顾问", excerpt: "外籍员工在泰国申请工作许可（Work Permit）和签证（Visa）的步骤指南。" }
            ]
        },
        aboutPage: {
            badge: "关于我们",
            heroTitle: "关于 Valcot Partners",
            heroSubtitle: "基于实际业务经验，由客户的成功驱动——泰国企业最值得信赖的HR合作伙伴。",
            stats: [
                { label: "年行业经验" },
                { label: "家信任客户" },
                { label: "名管理员工" },
                { label: "的客户满意度" }
            ],
            storyTitle: "企业故事",
            storyP1: "Valcot Partners 的成立有着明确的使命：为进入泰国市场的企业提供世界级的HR服务。我们深知在海外管理团队绝非易事——其中涉及到驾驭当地复杂法律、文化差异和陌生系统等挑战。",
            storyP2: "今天，Valcot Partners 为各种类型的客户提供服务——从初创企业到跨国公司。我们的服务涵盖HR行政、薪酬管理、人才招聘及法律咨询，旨在为您解决所有人事行政外包需求。",
            missionTitle: "企业使命",
            missionText: "在泰国为企业注入可靠、合规且可扩展的HR服务力量——让我们的客户可以专注于其核心业务，而我们将妥善照顾您最宝贵的资产：您的员工。",
            coreValuesTitle: "核心价值观",
            values: [
                { title: "诚信与正直", desc: "我们以绝对的透明和真诚开展合作，客户的信任是我们最珍视的资产。" },
                { title: "追求卓越", desc: "持续改进并提升服务质量——不断突破界限。" },
                { title: "以客户为中心", desc: "客户的成功就是我们的成功。每一项服务都是为您的业务量身打造。" },
                { title: "法律合规", desc: "我们为您代理的一切操作不仅遵循泰国法律，更符合国际标准。" }
            ],
            ctaTitle: "准备好让我们成为您的HR合作伙伴了吗？",
            ctaSubtitle: "免费咨询，无任何附加条件或隐形成本。",
            ctaButton: "免费咨询"
        }
    },
    ja: {
        blogPage: {
            heroTitle: "ブログ",
            heroSubtitle: "Valcot Partnersからの、人事に関する記事、労働法ガイド、ニュースアップデート",
            readMore: "続きを読む →",
            articles: [
                { title: "SMEがDIYで給与計算をする前に知っておくべき5つのこと", category: "給与計算", excerpt: "多くの中小企業が給与計算を自社で処理することを選択していますが、よくある間違いが法的および税務上の問題を引き起こす可能性があります。" },
                { title: "EORとは？外資系企業がそれを必要とする理由", category: "HRサポート", excerpt: "記録上の雇用主（EOR）は、タイに法人を設立することなく従業員を雇用したい企業にとってのソリューションです。" },
                { title: "HRのためのPDPA：準備すべきこと", category: "法務", excerpt: "個人情報保護法が従業員のデータ管理にどのように影響するか、およびHRが何を準備する必要があるか。" },
                { title: "ワークパーミットとビザ：完全ガイド", category: "法務", excerpt: "タイにおける外国人労働者のためのワークパーミットおよびビザ申請のステップバイステップガイド。" }
            ]
        },
        aboutPage: {
            badge: "私たちについて",
            heroTitle: "Valcot Partnersについて",
            heroSubtitle: "実際の経験に基づいて構築され、クライアントの成功によって推進される — タイの企業が信頼するHRパートナー。",
            stats: [
                { label: "年以上の経験" },
                { label: "社以上の信頼されるクライアント" },
                { label: "名以上の従業員を管理" },
                { label: "の満足度達成" }
            ],
            storyTitle: "私たちのストーリー",
            storyP1: "Valcot Partnersは明確な使命のもとに設立されました：タイ市場に参入する企業に世界クラスのHRサービスを提供すること。私たちは、現地の法律のナビゲートから文化的な微妙な違い、不慣れなシステムまで、海外で人を管理することは決して簡単ではないことを理解しています。",
            storyP2: "現在、Valcot Partnersはスタートアップから多国籍企業まで、多様なクライアントにサービスを提供しています。私たちのサービスは人事、給与計算、採用、および法務にわたり、人事に関するすべての単一の窓口（ワンストップ）を提供できるよう設計されています。",
            missionTitle: "ミッション",
            missionText: "タイの企業に信頼性が高く、コンプライアンスを遵守し、拡張可能なHRサービスを提供することで、クライアントが企業のコアビジネスに集中できるようにします。私たちは皆さまの最も価値あるリソースである「人」の大切なケアを担います。",
            coreValuesTitle: "コアバリュー",
            values: [
                { title: "誠実さ", desc: "私たちは透明性と誠実さをもって仕事に取り組みます。クライアントの信頼は私たちが最も大切にしているものです。" },
                { title: "卓越性", desc: "サービスの質を絶え間なく向上させます— 決して現状に満足することなく。" },
                { title: "顧客第一", desc: "クライアントの成功が私たちの成功です。すべてのサービスは各ビジネスに合わせて調整されています。" },
                { title: "コンプライアンス遵守", desc: "お客様の代行として行われるすべての業務は、タイの法律と国際基準に完全に準拠しています。" }
            ],
            ctaTitle: "私たちをあなたのHRパートナーにする準備はできましたか？",
            ctaSubtitle: "相談無料、お気軽にお問い合わせください。",
            ctaButton: "無料相談"
        }
    },
    ko: {
        blogPage: {
            heroTitle: "블로그",
            heroSubtitle: "Valcot Partners가 제공하는 HR 아티클, 노동법 가이드 및 최신 뉴스 업데이트",
            readMore: "자세히 보기 →",
            articles: [
                { title: "중소기업이 자체 급여 처리를 하기 전 알아야 할 5가지 기초 상식", category: "급여", excerpt: "직접 급여 관리를 선택하는 중소기업이 많지만, 사소한 실수가 심각한 법적, 세무적 문제로 이어질 수 있습니다." },
                { title: "EOR이란 무엇이며 파견과 어떻게 다른가? 외국계 기업의 수요가 높은 이유", category: "HR 지원", excerpt: "EOR(Employer of Record)은 태국 내 현지 법인을 설립하지 않고도 직원을 합법적으로 고용할 수 있게 해주는 혁신적인 솔루션입니다." },
                { title: "HR 체제 및 담당자를 위한 PDPA(개인정보보호법) 가이드: 필수 준비 사항", category: "법무", excerpt: "개인정보보호법 강화가 직원 데이터 관리에 미치는 영향과, 기업 HR 부서에서 즉각적으로 준비해야 할 보안 지침들을 다룹니다." },
                { title: "워크퍼밋(Work Permit) 및 비자(Visa) 신청 완벽 가이드", category: "법무", excerpt: "태국 내 외국인 근로자를 위한 합법적인 워크퍼밋 및 비자 신청 절차에 대한 단계별 안내서입니다." }
            ]
        },
        aboutPage: {
            badge: "회사 소개",
            heroTitle: "Valcot Partners에 대하여",
            heroSubtitle: "실전 경험을 바탕으로 구축되었으며 고객의 비즈니스 성공이 원동력입니다 — 태국 현지 기업들이 가장 신뢰하는 HR 파트너.",
            stats: [
                { label: "년 이상의 경력 축적" },
                { label: "곳의 기업에게 신뢰받음" },
                { label: "인 이상의 급여/행정 관리" },
                { label: "의 높은 누적 만족도 기록" }
            ],
            storyTitle: "우리의 발자취",
            storyP1: "Valcot Partners는 명확한 미션 하에 설립되었습니다: 바로 태국 시장에 진출하거나 운영 중인 회사에 세계적인 수준의 HR 서비스를 제공하는 것입니다. 저희는 낯선 현지 법령부터 문화적 차이, 그리고 복잡한 행정 시스템에 이르기까지, 타국에서 인력을 관리하는 것이 결코 쉽지 않음을 누구보다 잘 이해하고 있습니다.",
            storyP2: "오늘날 Valcot Partners는 초기 스타트업부터 대형 다국적 기업에 이르기까지 매우 다양한 고객층을 지원하고 있습니다. 저희의 제공 범위는 HR 업무 일반, 급여 처리 관리, 직원 채용, 법무 자문을 폭넓게 포괄하며, 단 하나의 통합된 채널로 귀사의 모든 HR 니즈를 해결할 수 있도록 전문적으로 설계되었습니다.",
            missionTitle: "미션 및 비전",
            missionText: "신뢰할 수 있고 컴플라이언스를 완벽히 준수하며 비즈니스 확장에 맞춰 유연하게 적용되는 HR 서비스를 제공하여 태국 내 기업들의 역량을 강화합니다. 고객이 비즈니스 핵심 성장 과제에만 집중하는 동안, 저희는 고객의 가장 소중한 자산인 '사람(인적 자원)'을 체계적이고 안정적으로 관리합니다.",
            coreValuesTitle: "핵심 가치",
            values: [
                { title: "정직과 투명성", desc: "투명하고 진정성 있게 업무에 임합니다. 고객과의 신뢰 확보를 최우선 가치로 평가합니다." },
                { title: "최상의 우수성", desc: "안주하지 않고 끊임없이 프로세스를 혁신하며 최상의 결과를 전달하기 위해 서비스 품질을 지속 발전시킵니다." },
                { title: "고객 중심 운영", desc: "고객의 성공이 곧 우리의 성공입니다. 모든 패키지와 서비스는 귀사의 비즈니스 상황에 정확히 맞춰 설계됩니다." },
                { title: "엄격한 법규 준수", desc: "고객의 대리자로서 수행하는 모든 행정 운영 및 문서는 태국 현행 국가 법률과 국제 윤리 기준을 100% 철저하게 충족합니다." }
            ],
            ctaTitle: "귀사의 전문 HR 파트너가 될 준비가 되었습니다.",
            ctaSubtitle: "비용 부담 없이 귀사의 상황을 설명하고 무료 상담을 신청하세요.",
            ctaButton: "지금 무료로 상담하기"
        }
    },
    ru: {
        blogPage: {
            heroTitle: "Блог",
            heroSubtitle: "Статьи по HR, руководства по трудовому праву и актуальные новости от Valcot Partners",
            readMore: "Читать далее →",
            articles: [
                { title: "5 вещей, которые необходимо знать малому бизнесу, прежде чем начать считать зарплату самостоятельно", category: "Зарплата", excerpt: "Многие малые предприятия решают самостоятельно заниматься начислением заработной платы, но типичные ошибки могут привести к юридическим и налоговым проблемам." },
                { title: "Что такое EOR? Зачем это иностранным компаниям", category: "HR Поддержка", excerpt: "Employer of Record (EOR) или номинальный работодатель — это решение для компаний, желающих нанимать сотрудников в Таиланде без регистрации юридического лица." },
                { title: "PDPA для HR: к чему нужно быть готовым", category: "Юридические", excerpt: "Как Закон о защите персональных данных (PDPA) влияет на управление данными сотрудников и к чему нужно быть готовым HR-отделам." },
                { title: "Разрешение на работу (Work Permit) и Рабочая Виза: Полное Руководство", category: "Юридические", excerpt: "Пошаговое руководство по оформлению разрешения на работу и рабочей визы для иностранных сотрудников в Таиланде." }
            ]
        },
        aboutPage: {
            badge: "О Нас",
            heroTitle: "О компании Valcot Partners",
            heroSubtitle: "Построено на реальном опыте, движимо успехом наших клиентов — HR-партнер, которому доверяют компании в Таиланде.",
            stats: [
                { label: "Лет Опыта" },
                { label: "Довольных Клиентов" },
                { label: "Сотрудников в управлении" },
                { label: "Уровень лояльности клиентов" }
            ],
            storyTitle: "Наша История Биографии",
            storyP1: "Valcot Partners была основана с четкой миссией: предоставлять HR-услуги мирового класса компаниям, выходящим на тайский рынок бизнеса. Мы прекрасно понимаем, что управление персоналом за рубежом никогда не бывает простым — от соблюдения сложных местных законов до понимания культурных нюансов и незнакомых систем отклика.",
            storyP2: "Сегодня Valcot Partners обслуживает самый разнообразный круг клиентов — от стартапов до транснациональных корпораций. Наш всеохватывающий спектр услуг базируется на кадровом администрировании, расчетах заработной платы, подборе персонала и правовой регламентации, и предназначен для того, чтобы дать вам единую точку опоры для всех вопросов, связанных с HR.",
            missionTitle: "Наша Миссия",
            missionText: "Расширять возможности компаний и бизнеса в Таиланде, предоставляя надежные, полностью соответствующие закону и масштабируемые HR-решения; чтобы наши клиенты могли беспрепятственно сконцентрироваться на своем основном бизнесе, в то время как мы заботимся об их самом главном ресурсе: людях.",
            coreValuesTitle: "Ключевые Ценности",
            values: [
                { title: "Честность на всех уровнях", desc: "Мы работаем абсолютно прозрачно и искренне. Доверие клиентов — ценнейший актив, которым мы дорожим." },
                { title: "Превосходство и Рост", desc: "Непрерывное развитие качества оказываемых услуг — мы никогда не стоим на месте." },
                { title: "Абсолютная ориентация на клиента", desc: "Мы добиваемся успеха только вместе с вами. Каждая базовая бизнес-услуга тонко адаптируется под специфику конкретно вашей работы." },
                { title: "Комплаенс", desc: "Всё, что мы делаем от вашего лица, нерушимо соответствует таиландскому законодательству, а также международным правовым стандартам." }
            ],
            ctaTitle: "Готовы ли вы сделать нас своим HR-партнером?",
            ctaSubtitle: "Бесплатная ни к чему не обязывающая вводная консультация.",
            ctaButton: "Бесплатная Консультация"
        }
    }
};

langs.forEach(lang => {
    const filePath = path.join(dictsDir, `${lang}.json`);
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        let dict = JSON.parse(fileContent);
        
        dict.blogPage = newData[lang].blogPage;
        dict.aboutPage = newData[lang].aboutPage;
        
        fs.writeFileSync(filePath, JSON.stringify(dict, null, 4));
        console.log(`Updated ${lang}.json with blog & about`);
    } else {
        console.error(`File not found: ${filePath}`);
    }
});
