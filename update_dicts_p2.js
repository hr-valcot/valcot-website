const fs = require('fs');
const path = require('path');

const dictsDir = path.join(__dirname, 'src', 'lib', 'dictionaries');
const langs = ['th', 'en', 'zh', 'ja', 'ko', 'ru'];

const newData = {
    th: {
        industriesPages: {
            badge: "อุตสาหกรรม",
            commonPainPoints: "ปัญหาที่พบบ่อย",
            howValcotHelps: "วิธีที่ Valcot ช่วยได้",
            challenges: "ความท้าทาย",
            sme: {
                title: "SME & Startups",
                subtitle: "โซลูชัน HR สำหรับ SME และ Startup ที่กำลังเติบโต ให้คุณโฟกัสธุรกิจโดยไม่ต้องกังวลเรื่องงาน HR",
                painPoints: [
                    "ยังไม่มีทีม HR ประจำ แต่พนักงานเริ่มเยอะขึ้น",
                    "ทำ Payroll เอง เสี่ยงผิดพลาดเรื่องภาษีและประกันสังคม",
                    "ไม่แน่ใจว่าสัญญาจ้างและข้อบังคับถูกต้องตามกฎหมายหรือไม่",
                    "ต้องการจ้างพนักงานใหม่ แต่ไม่มีเวลาคัดกรอง"
                ],
                solutions: [
                    "HR Ops Essential — ดูแลงาน HR พื้นฐานอย่างเป็นระบบ",
                    "Payroll — คำนวณเงินเดือน ยื่นภาษี ประกันสังคมให้ครบ",
                    "กฎหมาย — จัดทำสัญญาจ้างและข้อบังคับที่ถูกต้อง",
                    "สรรหาบุคลากร — คัดกรองและส่ง Shortlist ให้พร้อมสัมภาษณ์"
                ]
            },
            representative: {
                title: "Representative Offices",
                subtitle: "โซลูชัน HR และ EOR สำหรับสำนักงานผู้แทนที่ต้องการจ้างพนักงานในประเทศไทย",
                painPoints: [
                    "ต้องจ้างพนักงานในไทยแต่ยังไม่มีนิติบุคคล",
                    "ไม่รู้กฎหมายแรงงานไทยและข้อกำหนดที่เกี่ยวข้อง",
                    "ต้องการ Employer of Record (EOR) ที่น่าเชื่อถือ",
                    "เรื่อง Work Permit / Visa สำหรับพนักงานต่างชาติ"
                ],
                solutions: [
                    "EOR — Valcot เป็นนายจ้างตามกฎหมายแทน ไม่ต้องจดทะเบียนบริษัท",
                    "Payroll & Tax — จ่ายเงินเดือนและยื่นภาษีให้ถูกต้องตามกำหนด",
                    "Work Permit & Visa — ดำเนินการขอและต่ออายุให้ครบวงจร",
                    "Compliance — ดูแลให้สอดคล้องกับกฎหมายแรงงานไทย"
                ]
            },
            multinational: {
                title: "บริษัทข้ามชาติ",
                subtitle: "โซลูชัน HR ที่ขยายได้ตามธุรกิจ สำหรับบริษัทข้ามชาติที่ดำเนินงานในประเทศไทย",
                painPoints: [
                    "ต้องดูแลพนักงานหลายไซต์/หลายกะ พร้อมกัน",
                    "ต้องการรายงาน Payroll แยกตามไซต์",
                    "ต้องการ HR Partner ที่รองรับการขยายธุรกิจได้",
                    "ต้องการ Compliance ที่สอดคล้องกับทั้ง local และ global standards"
                ],
                solutions: [
                    "HR Ops Multi-Site — โครงสร้างจัดการข้อมูลแบบ Site-based",
                    "Enterprise Payroll — Site Payroll Summary + Exception Handling",
                    "Dedicated Account Manager — ผู้ดูแลเฉพาะทางสำหรับบัญชีของคุณ",
                    "Mass Recruitment — จัดหาพนักงานจำนวนมากในเวลาจำกัด"
                ]
            }
        }
    },
    en: {
        industriesPages: {
            badge: "Industries",
            commonPainPoints: "Common Pain Points",
            howValcotHelps: "How Valcot Helps",
            challenges: "Challenges",
            sme: {
                title: "SME & Startups",
                subtitle: "HR solutions for growing SMEs and Startups — focus on your business without worrying about HR operations.",
                painPoints: [
                    "No dedicated HR team, but headcount is growing",
                    "Doing payroll manually with risk of tax/SSO errors",
                    "Unsure if employment contracts and regulations are legally compliant",
                    "Need to hire but no time for screening"
                ],
                solutions: [
                    "HR Ops Essential — structured basic HR operations",
                    "Payroll — salary calculation, tax filing, SSO submissions",
                    "Legal — compliant employment contracts and regulations",
                    "Recruitment — screening and shortlist delivery"
                ]
            },
            representative: {
                title: "Representative Offices",
                subtitle: "HR and EOR solutions for representative offices looking to hire in Thailand.",
                painPoints: [
                    "Need to hire in Thailand without a legal entity",
                    "Unfamiliar with Thai labor law and regulations",
                    "Need a reliable Employer of Record (EOR)",
                    "Work Permit / Visa requirements for foreign staff"
                ],
                solutions: [
                    "EOR — Valcot acts as the legal employer, no entity registration needed",
                    "Payroll & Tax — accurate salary payments and tax filings on schedule",
                    "Work Permit & Visa — end-to-end processing and renewals",
                    "Compliance — full Thai labor law compliance management"
                ]
            },
            multinational: {
                title: "Multinational Companies",
                subtitle: "Scalable HR solutions for multinational companies operating in Thailand.",
                painPoints: [
                    "Managing employees across multiple sites/shifts",
                    "Need site-based payroll reporting",
                    "Need an HR partner that scales with business growth",
                    "Compliance with both local and global standards"
                ],
                solutions: [
                    "HR Ops Multi-Site — site-based data management structure",
                    "Enterprise Payroll — Site Payroll Summary + Exception Handling",
                    "Dedicated Account Manager — specialized manager for your account",
                    "Mass Recruitment — high-volume hiring in limited timeframes"
                ]
            }
        }
    },
    zh: {
        industriesPages: {
            badge: "行业领域",
            commonPainPoints: "常见痛点",
            howValcotHelps: "Valcot的解决方案",
            challenges: "面临的挑战",
            sme: {
                title: "中小型企业与初创公司",
                subtitle: "专为成长中企业打造的HR解决方案——让您专注核心业务，无忧人事运营。",
                painPoints: [
                    "没有专职HR团队，但员工数逐日增加",
                    "人工处理薪资，面临漏缴税或社保的风险",
                    "不确定雇佣合同及规章制度是否完全符合当地法律",
                    "急需招聘但没有时间层层筛选候选人"
                ],
                solutions: [
                    "基础HR运营 —— 建立结构化且系统化的人事管理体系",
                    "薪酬管理 —— 精准计算薪资、按时报税及缴纳社保",
                    "法律合规 —— 起草合规的劳务合同与合法的公司规章",
                    "人才招聘 —— 我们负责筛选，直接向您发送合格的候选人名单"
                ]
            },
            representative: {
                title: "外国驻泰代表处",
                subtitle: "为想在泰国招募员工的外国代表处提供的全方位名义雇主(EOR)与HR解决方案。",
                painPoints: [
                    "想在泰国招聘团队，但尚未注册本地公司",
                    "对泰国复杂的劳动法及不断更新的法规不熟悉",
                    "急需一个值得信赖的 Employer of Record (EOR) 合作伙伴",
                    "不知如何办理外籍员工的工作许可(Work Permit)和签证"
                ],
                solutions: [
                    "EOR名义雇主 —— Valcot作为合法雇主代为雇佣，您无需注册泰国实体",
                    "薪资与税务 —— 按时发放工资清单、精准依法申报个人所得税",
                    "工作许可与签证 —— 一站式的外籍员工工作签办理和续签服务",
                    "合规保障 —— 充分保障所有操作符合泰国最新劳动法规定"
                ]
            },
            multinational: {
                title: "跨国企业集团",
                subtitle: "为在泰国运营的跨国企业提供可无缝扩展的HR解决方案。",
                painPoints: [
                    "跨地区、多站点及多轮班制的员工统筹管理难题",
                    "由于组织复杂，需要高度定制化的分站点薪资报告",
                    "亟需一个能伴随业务高速扩张而同步扩展的HR外包伙伴",
                    "不仅要遵守泰国本地法律，还必须符合集团全球合法的统一标准"
                ],
                solutions: [
                    "多站点HR运营 —— 跨区域、基于门店/部门的考勤与数据管理结构",
                    "企业级薪酬体系 —— 站点级别的网状薪资汇总 + 特殊工时/奖金独立处理",
                    "专属项目经理 —— 为您的集团配备一位对接一切事务的高阶账户经理",
                    "大批量招聘服务 —— 能够在有限的时间内达成高规模用人指标"
                ]
            }
        }
    },
    ja: {
        industriesPages: {
            badge: "対応業界",
            commonPainPoints: "よくある課題",
            howValcotHelps: "Valcotの解決策",
            challenges: "企業が直面する課題",
            sme: {
                title: "SMEおよびスタートアップ",
                subtitle: "成長する中小・スタートアップ企業向けHRソリューション—人事業務を気にせずビジネスに集中できます。",
                painPoints: [
                    "専任のHRチームがないが、従業員数が増えている",
                    "手作業の給与計算で、税制や社会保険(SSO)のミスが心配",
                    "雇用契約や就業規則が法的に準拠しているか不確実",
                    "採用したいが履歴書をスクリーニングする時間がない"
                ],
                solutions: [
                    "基礎HR業務 — 体系化された基本的な人事オペレーション",
                    "給与計算 — 給与計算、正確な税務申告、SSO提出の代行",
                    "法務 — タイの労働法に100％準拠した雇用契約および規則の作成",
                    "採用支援 — 候補者をスクリーニングし、ショートリストをお届け"
                ]
            },
            representative: {
                title: "駐在員事務所（代表処）",
                subtitle: "タイで従業員を雇用したい駐在員事務所向けのHRおよびEORソリューション。",
                painPoints: [
                    "タイ国内に法人を持たずに現地スタッフを雇用したい",
                    "タイの労働法や規制についてよくわからない",
                    "信頼できる記録上の雇用主（EOR）を必要としている",
                    "外国人労働者のためのワークパーミットおよびビザが必要"
                ],
                solutions: [
                    "EOR — Valcotが法的な雇用主として機能し、法人設立は不要",
                    "給与と税務 — スケジュール通りの正確な給与支払いと毎月の税務申告",
                    "ワークパーミットとビザ — 取得から更新までのエンドツーエンド処理",
                    "コンプライアンス維持 — タイ労働法順守の完全マネジメント"
                ]
            },
            multinational: {
                title: "多国籍企業",
                subtitle: "タイで事業を展開する多国籍企業向けのスケーラブルなHRソリューション。",
                painPoints: [
                    "複数の拠点・工場・シフトにまたがる大規模な従業員管理",
                    "拠点ベースまたは部門ベースの給与報告書が必要",
                    "ビジネスの成長に合わせて柔軟に規模を拡大できるHRパートナーが必要",
                    "ローカル基準とグローバル基準の両方に準拠したコンプライアンス管理"
                ],
                solutions: [
                    "マルチサイトHR業務 — 拠点ごとの勤怠・データ管理構造",
                    "エンタープライズ給与計算 — 拠点別の給与サマリー + 例外処理",
                    "専任アカウントマネージャー — 御社専用のスペシャリストマネージャー",
                    "大量採用 — 限られた期間内での大規模な人材採用(マスリクルーティング)"
                ]
            }
        }
    },
    ko: {
        industriesPages: {
            badge: "적용 산업",
            commonPainPoints: "가장 흔한 문제점",
            howValcotHelps: "Valcot의 해결책",
            challenges: "도전 과제",
            sme: {
                title: "중소기업(SME) 및 스타트업",
                subtitle: "성장하는 SME 및 스타트업을 위한 맞춤형 솔루션입니다 — 복잡한 인사에 신경 쓰지 말고 오직 비즈니스에만 전념하세요.",
                painPoints: [
                    "전담할 HR 부서/팀이 부족하지만 직원은 꾸준히 증가함",
                    "수기로 급여를 처리하여 세금 및 사회보장기금(SSO) 오류 위험 존재",
                    "현재 사용 중인 고용 계약서가 법적으로 안전한지 확신 부족",
                    "인재를 긴급히 채용해야 하나 이력서를 검토할 시간이 없음"
                ],
                solutions: [
                    "HR 필수 운영 — 체계적인 문서화 및 기본 HR 파이프라인 정립",
                    "급여 매니지먼트 — 정확한 급여 계산, 개인 세금 신고 및 SSO 제출",
                    "법무 지원 — 태국 노동법을 완벽하게 준수하는 근로 계약 및 사내 규정",
                    "리크루팅 — 엄격한 사전 스크리닝을 거친 맞춤형 후보자 명단 제공"
                ]
            },
            representative: {
                title: "대표 사무소 및 연락 사무소",
                subtitle: "이제 막 태국에 진출하여 인력을 고용하고자 하는 대표 사무소를 위한 HR & EOR 솔루션.",
                painPoints: [
                    "태국 대사관 또는 법인을 정식 설립하지 않고 현지 직원을 우선 고용하고 싶음",
                    "복잡한 태국 노동법 및 외국인 투자 규정에 대한 이해도 부족",
                    "가장 신뢰할 수 있고 안전한 EOR(Employer of Record) 파트너가 필요함",
                    "외국인 주재원에 대한 합법적인 워크퍼밋(Work Permit) 및 비자 발급 문제"
                ],
                solutions: [
                    "EOR 서비스 — Valcot이 법적 고용주 역할을 대행하므로 법인 설립이 불필요함",
                    "급여 및 세무 — 기한에 맞춘 정확하고 안정적인 급여 지급 및 매월 세금 신고",
                    "워크퍼밋 및 비자 — 외국인을 위한 발급부터 갱신 만료까지 엔드투엔드 처리",
                    "100% 컴플라이언스 — 골치 아픈 태국 노동법 규제에 완벽하게 대응"
                ]
            },
            multinational: {
                title: "다국적 기업 계열사",
                subtitle: "태국 내에서 대규모로 비즈니스를 운영하는 다국적 기업을 위한 확장 가능한 최고급 HR 솔루션.",
                painPoints: [
                    "다양한 공장 현장, 여러 지점, 복잡한 교대 근무의 직원 통합 관리",
                    "조직이 크고 방대하여 지점(Site)별로 세분화된 맞춤형 급여 보고서가 필수적임",
                    "폭발적인 비즈니스 성장에 발맞춰 시스템 확장이 가능한 파트너사 요구",
                    "태국의 현지 법규(Local)는 물론, 본사의 글로벌 기준(Global)까지 함께 충족 필요"
                ],
                solutions: [
                    "다중 사이트(Multi-Site) HR 운영 — 현장 규모 기반의 근태/데이터 관리 인프라",
                    "엔터프라이즈 급여 체계 — 사이트별 급여 요약망 + 수당 및 초과 근무 예외 처리",
                    "전담 어카운트 매니저 — 귀사만을 위해 배정된 전담 스페셜리스트의 즉각적인 응대",
                    "대규모 대량 채용 — 촉박하고 제한된 기한 동안 다수의 퀄리티 높은 인력 집단 모집"
                ]
            }
        }
    },
    ru: {
        industriesPages: {
            badge: "Отрасли",
            commonPainPoints: "Частые проблемы",
            howValcotHelps: "Как помогает Valcot",
            challenges: "Основные вызовы",
            sme: {
                title: "Малый бизнес (СМБ) и Стартапы",
                subtitle: "HR-решения для растущих малых предприятий и стартапов — сосредоточьтесь на бизнесе, не беспокоясь об административных задачах.",
                painPoints: [
                    "Отсутствие выделенной HR-команды на фоне стремительного роста штата",
                    "Расчет зарплаты вручную и высокие риски ошибок с налогами/SSO",
                    "Неуверенность в юридической актуальности трудовых договоров",
                    "Острая необходимость в найме, но полное отсутствие времени на скрининг резюме"
                ],
                solutions: [
                    "HR Основы — внедрение выстроенной структуры кадрового администрирования",
                    "Зарплата (Payroll) — точный расчет сумм, оплата налогов и социальных взносов (SSO)",
                    "Юриспруденция — полностью легальные трудовые договора и внутренние правила",
                    "Подбор персонала — профессиональный отбор и предоставление списка лучших кандидатов"
                ]
            },
            representative: {
                title: "Представительства иностранных компаний",
                subtitle: "Легальные решения для найма (EOR) и HR-поддержка для иностранных представительств в Таиланде.",
                painPoints: [
                    "Желание нанять сотрудников в Таиланде без регистрации местного юрлица",
                    "Незнание тайского трудового права, культуры и бюрократических регламентов",
                    "Потребность в надежном Номинальном Работодателе (Employer of Record)",
                    "Сложности с оформлением Рабочих Разрешений (Work Permit) и Виз для экспатов"
                ],
                solutions: [
                    "EOR — Valcot выступает легальным работодателем; создание собственной компании не требуется",
                    "Зарплата и налоги — своевременные выплаты без задержек и строгая отчетность в налоговую",
                    "Разрешения и визы — полный цикл работы от сбора документов до ежегодного продления",
                    "Комплаенс-контроль — управление соответствием тайским законам «под ключ»"
                ]
            },
            multinational: {
                title: "Транснациональные Корпорации",
                subtitle: "Масштабируемые премиум-решения для крупных международных холдингов, работающих в Таиланде.",
                painPoints: [
                    "Управление тысячами сотрудников на разных заводах, филиалах и в разные смены",
                    "Потребность в сложной сегментированной зарплатной аналитике по каждому филиалу",
                    "Нужен надежный HR-партнер, способный неограниченно масштабироваться вместе с вами",
                    "Соблюдение жестких глобальных (Corporate) и локальных (Thai Local) стандартов"
                ],
                solutions: [
                    "Мульти-филиальный HR — архитектура управления данными, привязанная к географии офисов",
                    "Корпоративный (Enterprise) Payroll — комплексные расчеты и обработка исключений (переработки)",
                    "Выделенный менеджер аккаунта (AM) — персональный куратор, доступный для вашей корпорации",
                    "Массовый рекрутинг — найм огромного объема качественного персонала в сжатые сроки"
                ]
            }
        }
    }
};

langs.forEach(lang => {
    const filePath = path.join(dictsDir, `${lang}.json`);
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        let dict = JSON.parse(fileContent);
        
        dict.industriesPages = newData[lang].industriesPages;
        
        fs.writeFileSync(filePath, JSON.stringify(dict, null, 4));
        console.log(`Updated ${lang}.json with industriesPages`);
    } else {
        console.error(`File not found: ${filePath}`);
    }
});
