const fs = require('fs');
const path = require('path');

const dictsDir = path.join(__dirname, 'src', 'lib', 'dictionaries');
const langs = ['th', 'en', 'zh', 'ja', 'ko', 'ru'];

const newData = {
    th: {
        servicesPages: {
            global: {
                enterpriseSolutions: "โซลูชันเพื่อธุรกิจ",
                subtitle: "ยกระดับการจัดการองค์กรของคุณด้วยบริการระดับเวิลด์คลาสที่ครอบคลุมทุกมิติ",
                optionalAddons: "บริการเสริม (Add-ons)",
                disclaimer: "บริการของ Valcot ดำเนินการตามขอบเขตงาน (scope) ที่ตกลงร่วมกัน เพื่อคุมคุณภาพและความถูกต้อง หากมีงานนอก scope จะประเมินและเสนอแนวทางก่อนดำเนินการทุกครั้ง",
                addons: [
                    { title: "Social Security / Statutory Filings", desc: "สนับสนุนการยื่นเอกสาร" },
                    { title: "HR Policy & Template Pack", desc: "แบบฟอร์มมาตรฐาน + checklist" },
                    { title: "Compliance Calendar", desc: "ปฏิทินและแจ้งเตือนรายเดือน" },
                    { title: "HR System / Portal", desc: "Coming Soon" }
                ]
            },
            hrOutsourcing: {
                badge: "บริการดูแล HR ครบวงจร",
                heroTitle1: "ดูแลครอบคลุมทุกมิติ",
                heroTitle2: "ตั้งแต่รับเข้า ถึง ออกจากงาน",
                heroSubtitle: "มุ่งเน้นกับการขยายธุรกิจ ปล่อยให้เราดูแลทรัพยากรบุคคลของคุณ บริการ Employer of Record และ HR Outsourcing ที่ได้มาตรฐานสากล",
                getConsultation: "ขอรับคำปรึกษาฟรี",
                complianceStatus: "สถานะการปฏิบัติ",
                complianceDesc: "พนักงานทั้งหมดปฏิบัติตามกฎหมาย",
                highlights: [
                    { value: "100%", label: "ถูกต้องตามกฎหมายแรงงาน" },
                    { value: "ไร้รอยต่อ", label: "จากรับเข้าสู่เกษียณ" },
                    { value: "EOR", label: "จ้างงานโดยไม่ต้องตั้งบริษัท" }
                ],
                targetAudienceTitle: "บริการนี้เหมาะกับใคร?",
                targetAudiences: [
                    { title: "บริษัทข้ามชาติ (MNCs)", desc: "ต้องการตั้งตัวแทนในไทย หรือใช้ Employer of Record (EOR) เพื่อทดลองตลาด" },
                    { title: "SME & Startups", desc: "ไม่มีแผนก HR ภายใน ต้องการผู้เชี่ยวชาญช่วยดูแลระบบพนักงานทั้งหมด" },
                    { title: "บริษัทที่มีอัตราการขยายตัวสูง", desc: "ต้องการขยายทีมรวดเร็ว โดยไม่เพิ่มภาระงานเอกสารให้ทีมหลัก" }
                ],
                coverageTitle: "สิ่งที่เราดูแลแทนคุณ",
                coverageItems: [
                    "สรรหาและคัดเลือกพนักงาน",
                    "จัดการสัญญาจ้างแรงงาน",
                    "บริหารสวัสดิการและประกันกลุ่ม",
                    "ดูแลประวัติและการขาดลามาสาย",
                    "ปฏิบัติตามกฎหมายแรงงานไทย",
                    "พนักงานสัมพันธ์ (Employee Relations)"
                ],
                coverageDesc: "จัดการด้วยระบบมืออาชีพ พร้อมรายงานผลที่ตรวจสอบได้เพื่อให้คุณวางใจในทุกขั้นตอน",
                ctaTitle: "พร้อมเปลี่ยนการบริหารคนให้เป็นเรื่องง่ายหรือยัง?",
                ctaSubtitle: "ปรึกษาฟรี ไม่มีข้อผูกมัด เล่าปัญหาของคุณให้เราฟัง แล้วเราจะออกแบบทางออกให้",
                ctaButton: "ติดต่อเราวันนี้",
                check1: "ครอบคลุมทุกเรื่อง HR",
                check2: "ลดความเสี่ยงด้านกฎหมาย"
            },
            payroll: {
                badge: "บริการเงินเดือน",
                heroTitle1: "แม่นยำ ตรงเวลา",
                heroTitle2: "หมดห่วงเรื่องเงินเดือน",
                heroSubtitle: "หมดปัญหาเรื่องการคำนวณพลาด ทีมของเราดูแลให้ทุกคนได้รับเงินถูกต้อง ภาษียื่นครบ และปฏิบัติตามกฎหมายอย่างเคร่งครัด",
                getConsultation: "ขอใบเสนอราคา",
                highlights: [
                    { value: "100%", label: "คำนวณแม่นยำ" },
                    { value: "ปลอดภัย", label: "รักษาความลับของข้อมูลสูงสุด" },
                    { value: "ตรงเวลา", label: "จ่ายเงินตรงรอบ ยื่นภาษีตรงเป้า" }
                ],
                coverageTitle: "การจัดการเงินเดือนแบบสมบูรณ์",
                coverageSubtitle: "ดูแลทุกขั้นตอนอย่างรัดกุมด้วยมาตรฐานความปลอดภัยระดับสูง",
                coverageItems: [
                    "คำนวณเงินเดือน ล่วงเวลา และหักขาดลามาสาย",
                    "ยื่นภาษีเงินได้บุคคลธรรมดา (ภ.ง.ด. 1, ภ.ง.ด. 1ก)",
                    "จัดการกองทุนประกันสังคม (สปส. 1-10)",
                    "จัดการกองทุนสำรองเลี้ยงชีพ",
                    "จัดทำเอกสาร Pay Slip ออนไลน์",
                    "บริหารสรุปรายงานประจำปี และส่งประเมินผล"
                ],
                coverageDesc: "ดำเนินการโดยมืออาชีพ ลดความผิดพลาดและประหยัดเวลา เพื่อให้องค์กรเดินหน้าได้ไม่สะดุด",
                ctaTitle: "ให้เราดูแลเรื่องซับซ้อน เพื่อให้คุณดูแลธุรกิจ",
                ctaSubtitle: "บริการเงินเดือนที่เชื่อถือได้ ปลอดภัย และถูกต้อง 100% เริ่มต้นใช้งานระบบเงินเดือนกับเราได้ทันที",
                ctaButton: "รับข้อเสนออัตราบริการ",
                check1: "เก็บข้อมูลความลับสุดยอด",
                check2: "รายงานชัดเจนตรวจสอบได้"
            }
        }
    },
    en: {
        servicesPages: {
            global: {
                enterpriseSolutions: "Enterprise Solutions",
                subtitle: "Elevate your organization's management with our comprehensive world-class services.",
                optionalAddons: "Optional Add-ons",
                disclaimer: "Valcot services are delivered based on an agreed scope to ensure quality and accuracy. Any out-of-scope or additional complexity will be assessed and proposed before execution.",
                addons: [
                    { title: "Social Security / Statutory Filings", desc: "Filing support (scope-based)" },
                    { title: "HR Policy & Template Pack", desc: "Standard forms & checklists" },
                    { title: "Compliance Calendar", desc: "Monthly reminders" },
                    { title: "HR System / Portal", desc: "Coming Soon" }
                ]
            },
            hrOutsourcing: {
                badge: "Comprehensive HR Services",
                heroTitle1: "Full-Spectrum",
                heroTitle2: "HR & EOR Solutions",
                heroSubtitle: "Focus on growing your business while we manage your people. World-class Employer of Record (EOR) and HR Outsourcing services.",
                getConsultation: "Get Free Consultation",
                complianceStatus: "Compliance Status",
                complianceDesc: "All employees locally compliant",
                highlights: [
                    { value: "100%", label: "Labor Law Compliant" },
                    { value: "Seamless", label: "Hire to Retire Management" },
                    { value: "EOR", label: "Hire Without Local Entity" }
                ],
                targetAudienceTitle: "Who is this for?",
                targetAudiences: [
                    { title: "Multinational Companies (MNCs)", desc: "Need local representation or Employer of Record (EOR) to test the market." },
                    { title: "SMEs & Startups", desc: "No internal HR department; need experts to manage the entire employee lifecycle." },
                    { title: "High-Growth Companies", desc: "Scaling rapidly and need to onboard teams without administrative burden." }
                ],
                coverageTitle: "What We Cover For You",
                coverageItems: [
                    "Recruitment & Onboarding",
                    "Employment Contract Setup",
                    "Benefits & Group Insurance Admin",
                    "Time, Attendance & Leave Management",
                    "Thai Labor Law Compliance",
                    "Employee Relations (ER)"
                ],
                coverageDesc: "Professionally managed with verifiable reporting, giving you peace of mind at every step.",
                ctaTitle: "Ready to simplify your people management?",
                ctaSubtitle: "Free consultation, no obligations. Tell us your HR challenges, and we'll design the solution.",
                ctaButton: "Contact Us Today",
                check1: "Full HR Coverage",
                check2: "Reduce Legal Risks"
            },
            payroll: {
                badge: "Payroll Services",
                heroTitle1: "Accurate & Punctual",
                heroTitle2: "Worry-Free Payroll",
                heroSubtitle: "No more calculation errors. Our team ensures everyone is paid correctly, taxes are fully filed, and all labor laws are strictly followed.",
                getConsultation: "Request a Quote",
                highlights: [
                    { value: "100%", label: "Accurate Calculations" },
                    { value: "Secure", label: "Data Confidentiality Guaranteed" },
                    { value: "On-Time", label: "On-Time Payments & Filings" }
                ],
                coverageTitle: "Complete Payroll Management",
                coverageSubtitle: "Meticulously managed every step of the way with high-security standards.",
                coverageItems: [
                    "Salary, OT, and Deduction Calculations",
                    "Personal Income Tax Filings (PND.1, PND.1K)",
                    "Social Security Fund Admin",
                    "Provident Fund Administration",
                    "Online Pay Slip Generation",
                    "Annual Reports & Assessments Execution"
                ],
                coverageDesc: "Operated by professionals, reducing errors and saving time so your organization runs smoothly.",
                ctaTitle: "Let us handle the complexity so you can handle business.",
                ctaSubtitle: "Reliable, secure, and 100% accurate payroll services. Start your payroll transition with us today.",
                ctaButton: "Get Service Rates",
                check1: "Strict Confidentiality",
                check2: "Audit-Ready Reports"
            }
        }
    },
    zh: {
        servicesPages: {
            global: {
                enterpriseSolutions: "企业级解决方案",
                subtitle: "通过我们全面的世界级服务，提升贵组织的管理水平。",
                optionalAddons: "增值附加服务",
                disclaimer: "Valcot 的服务均基于双方同意的工作范围(Scope)提供，以确保服务质量和准确性。任何超出范围或额外复杂的工作都将在执行前进行评估并提出方案。",
                addons: [
                    { title: "社保及法定申报", desc: "申报协助(依据项目范围)" },
                    { title: "HR政策与模板包", desc: "标准化表格与复核清单" },
                    { title: "合规日历", desc: "每月关键日期提醒" },
                    { title: "HR 管理系统/门户", desc: "即将推出" }
                ]
            },
            hrOutsourcing: {
                badge: "全方位人力资源外包",
                heroTitle1: "全面覆盖的",
                heroTitle2: "HR与EOR名义雇主解决方案",
                heroSubtitle: "您只需专注于拓展业务，把人员管理交给我们。我们提供符合国际标准的名义雇主(EOR)和人力资源外包服务。",
                getConsultation: "免费获取咨询",
                complianceStatus: "合规状态",
                complianceDesc: "所有员工均符合当地法律要求",
                highlights: [
                    { value: "100%", label: "完全符合劳动法" },
                    { value: "无缝衔接", label: "从入职到离职的全生命周期管理" },
                    { value: "EOR", label: "无需设立泰国公司即可合法雇佣" }
                ],
                targetAudienceTitle: "此服务适合哪些企业？",
                targetAudiences: [
                    { title: "跨国公司 (MNCs)", desc: "需要在泰国本地设立代表，或使用名义雇主(EOR)模式来测试泰国市场。" },
                    { title: "中小型企业与初创公司", desc: "内部没有专职的HR部门；需要专家协助管理整个员工生命周期。" },
                    { title: "高增长型企业", desc: "业务快速扩张，需要在不增加行政负担的情况下迅速组建团队。" }
                ],
                coverageTitle: "我们为您涵盖的服务内容",
                coverageItems: [
                    "人才招聘与入职培训",
                    "起草并设立雇佣合同",
                    "员工福利与团体保险管理",
                    "考勤、工时及假期管理",
                    "泰国劳动法合规保障",
                    "员工关系管理(ER)"
                ],
                coverageDesc: "由专业团队管理系统，提供可核实的透明报告，让您在每个环节都安心无忧。",
                ctaTitle: "准备好让人员管理变得更简单了吗？",
                ctaSubtitle: "免费咨询，无任何附加条件。告诉我们您面临的HR挑战，我们将为您量身定制解决方案。",
                ctaButton: "立即联系我们",
                check1: "全面覆盖所有HR事务",
                check2: "大幅降低法律风险"
            },
            payroll: {
                badge: "薪酬管理服务",
                heroTitle1: "精准无误、按时发放",
                heroTitle2: "让您无忧的薪资系统",
                heroSubtitle: "告别计算错误。我们的专业团队确保所有员工薪资精准发放，按时报税，并严格遵循所有劳动法规定。",
                getConsultation: "索取报价",
                highlights: [
                    { value: "100%", label: "毫厘不差的精准计算" },
                    { value: "极高安全性", label: "严密的数据保密承诺" },
                    { value: "准时守信", label: "按时发薪与及时税务申报" }
                ],
                coverageTitle: "完整的薪酬体系管理",
                coverageSubtitle: "在极高的安全标准下，为您精心管理薪资闭环的每一个步骤。",
                coverageItems: [
                    "基本薪资、加班费(OT)及各类扣款计算",
                    "个人所得税申报 (PND.1, PND.1K)",
                    "社会保险基金管理及申报",
                    "公积金管理与对接",
                    "在线生成电子工资单 (E-Pay Slip)",
                    "薪酬年度总结报告与绩效评估支持"
                ],
                coverageDesc: "由资深财务及HR专家操作，大幅降低错误率并节省时间，让您的机构运转更加流畅。",
                ctaTitle: "让我们处理复杂的规则，让您专心处理业务。",
                ctaSubtitle: "可靠、安全、100%准确的薪资外包服务。今天就开始与我们完成薪酬系统的平滑过渡吧。",
                ctaButton: "获取服务费率方案",
                check1: "严格的数据防泄漏保密",
                check2: "满足随时审计的清晰报告"
            }
        }
    },
    ja: {
        servicesPages: {
            global: {
                enterpriseSolutions: "企業向けソリューション",
                subtitle: "あらゆる側面を網羅する世界クラスのサービスで、組織の管理を強化します。",
                optionalAddons: "オプション / アドオン",
                disclaimer: "Valcotのサービスは、品質と正確性を確保するため、合意された作業範囲（スコープ）に基づいて提供されます。スコープ外または追加の複雑な作業は、実行前に評価し提案します。",
                addons: [
                    { title: "社会保険 / 法定申告", desc: "申告サポート（範囲ベース）" },
                    { title: "HRポリシー＆テンプレートパック", desc: "標準フォームとチェックリスト" },
                    { title: "コンプライアンスカレンダー", desc: "月次の重要リマインダー" },
                    { title: "HRシステム・ポータル", desc: "近日公開" }
                ]
            },
            hrOutsourcing: {
                badge: "包括的なHRサービス",
                heroTitle1: "あらゆる側面をカバーする",
                heroTitle2: "HRおよびEORソリューション",
                heroSubtitle: "ビジネスの成長に集中し、人事管理は私たちにお任せください。国際標準の記録上の雇用主（EOR）およびHRアウトソーシングサービス。",
                getConsultation: "無料相談を受ける",
                complianceStatus: "コンプライアンス状況",
                complianceDesc: "全従業員が関連法規に準拠",
                highlights: [
                    { value: "100%", label: "労働法完全準拠" },
                    { value: "シームレス", label: "採用から退職までの管理" },
                    { value: "EOR利用", label: "現地法人なしで合法的に雇用" }
                ],
                targetAudienceTitle: "どのような企業向けですか？",
                targetAudiences: [
                    { title: "多国籍企業（MNCs）", desc: "タイに代表を置く必要がある、またはEORを利用して市場をテストしたい。" },
                    { title: "中小・スタートアップ企業", desc: "社内にHR部門がなく、従業員のライフサイクル全体を管理する専門家が必要。" },
                    { title: "急成長中の企業", desc: "管理負担を増やさずに、チームを急速に拡大したい。" }
                ],
                coverageTitle: "当社の代行対応範囲",
                coverageItems: [
                    "採用および入社オンボーディング",
                    "雇用契約の設定と法的確認",
                    "福利厚生および団体保険の管理",
                    "勤怠・欠勤・休暇の管理",
                    "タイ労働法のコンプライアンス維持",
                    "従業員関係管理（ER）"
                ],
                coverageDesc: "検証可能なレポートを備えたプロフェッショナルな管理により、すべてのプロセスで安心を提供します。",
                ctaTitle: "人事管理をシンプルにする準備はできましたか？",
                ctaSubtitle: "相談無料、義務はありません。お客様のHRに関する課題をお聞かせいただければ、解決策を設計します。",
                ctaButton: "今すぐお問い合わせ",
                check1: "HRのすべての問題をカバー",
                check2: "法的リスクの低減"
            },
            payroll: {
                badge: "給与計算サービス",
                heroTitle1: "正確で時間通りに",
                heroTitle2: "心配無用の給与計算",
                heroSubtitle: "計算ミスはもうありません。私たちのチームは、全員に正しく給与が支払われ、税金が期限内に申告され、労働法が厳格に従われていることを保証します。",
                getConsultation: "お見積り依頼",
                highlights: [
                    { value: "100%", label: "正確な計算" },
                    { value: "高い安全性", label: "データの機密性を厳重に保証" },
                    { value: "期日厳守", label: "予定通りの支払いと税務申告" }
                ],
                coverageTitle: "完全な給与管理",
                coverageSubtitle: "すべてのステップを高いセキュリティ基準で慎重に管理します。",
                coverageItems: [
                    "基本給、残業代（OT）、控除の計算",
                    "個人所得税の申告（PND.1、PND.1K）",
                    "社会保険基金の管理",
                    "プロビデントファンド（積立基金）の管理",
                    "オンライン給与明細の発行",
                    "年次報告書の要約および評価送信"
                ],
                coverageDesc: "専門家によって運営されているため、エラーが削減され、時間が節約され、組織がスムーズに機能します。",
                ctaTitle: "複雑な作業は私たちに任せて、ビジネスに集中してください。",
                ctaSubtitle: "信頼性が高く、安全で、100％正確な給与計算サービス。今すぐ給与システムの移行を始めましょう。",
                ctaButton: "サービス料金を見る",
                check1: "厳重な機密保持",
                check2: "監査対応可能な明確な報告書"
            }
        }
    },
    ko: {
        servicesPages: {
            global: {
                enterpriseSolutions: "엔터프라이즈 솔루션",
                subtitle: "모든 차원을 포괄하는 세계적 수준의 서비스로 귀하의 조직 관리를 한 단계 격상시킵니다.",
                optionalAddons: "추가 옵션 (Add-ons)",
                disclaimer: "Valcot의 모든 서비스는 품질과 정확성을 철저히 보장하기 위해 상호 합의된 업무 범위(Scope) 내에서 제공됩니다. 그 범위를 벗어나거나 추가로 복잡한 요구 사항이 수반되는 업무는 실행 전 반드시 별도 평가와 제안 프로세스를 거칩니다.",
                addons: [
                    { title: "사회 보장 / 법정 신고 의무", desc: "신고 및 문서 제출 지원 (범위 기반)" },
                    { title: "HR 주요 पॉलिसी 및 통합 템플릿 팩", desc: "표준 서식 폼과 체크리스트" },
                    { title: "컴플라이언스 캘린더", desc: "놓치기 쉬운 주요 일정 월간 알림" },
                    { title: "HR 전용 시스템/포털", desc: "출시 예정" }
                ]
            },
            hrOutsourcing: {
                badge: "통합 HR 아웃소싱 제공",
                heroTitle1: "입사부터 퇴사까지",
                heroTitle2: "모든 차원을 아우르는 HR & EOR 솔루션",
                heroSubtitle: "회사의 성장에만 온전히 집중하십시오. 귀사의 소중한 임직원 관리는 당사가 맡겠습니다. আন্তর্জাতিক стандарта에 맞춘 명의상 고용주(EOR) 및 HR 솔루션입니다.",
                getConsultation: "무료 컨설팅 받기",
                complianceStatus: "컴플라이언스 현황 파악",
                complianceDesc: "모든 직원의 거주 및 노동법 요건 충족",
                highlights: [
                    { value: "100%", label: "태국 노동법 완벽 준수 보장" },
                    { value: "매끄럽게", label: "순조로운 채용부터 퇴직 관리까지" },
                    { value: "EOR 방식", label: "현지 법인 없어도 즉시 합법 고용" }
                ],
                targetAudienceTitle: "어떤 기업에게 적합한가요?",
                targetAudiences: [
                    { title: "다국적 기업 계열사 (MNCs)", desc: "태국에 지사를 설립 중이거나 EOR 방식을 통해 리스크 없이 시장을 미리 테스트하고자 하는 기업." },
                    { title: "중소기업(SME)과 스타트업", desc: "사내에 HR 전담 부서가 없어 전문가의 손길로 전반적인 직원 라이프사이클 관리를 의뢰하고자 하는 기업." },
                    { title: "고속 성장 궤도에 오른 기업", desc: "문서 및 행정 부담 없이 빠르게 다수의 직원을 합류(Onboarding)시켜야 하는 기업." }
                ],
                coverageTitle: "우리가 책임지고 처리해 드리는 업무",
                coverageItems: [
                    "신규 모집 및 채용 온보딩 지원",
                    "적법한 근로 계약서 검토 및 작성",
                    "사내 복리후생 및 단체 보험 운영 관리",
                    "근태, 연차, 및 지각/조퇴 기록 관리",
                    "까다로운 태국 현지 노동법의 무결점 준수",
                    "노사 관계(ER) 분쟁 예방 및 조율"
                ],
                coverageDesc: "모든 단계에서 철저히 투명하게 상시 검증할 수 있는 리포팅과 전문적이고 책임감 있는 관리를 통해 완벽한 평온함을 제공합니다.",
                ctaTitle: "인력 관리를 간단하게 만들 준비가 되셨습니까?",
                ctaSubtitle: "의무나 조건 없는 무료 컨설팅입니다. 현재 겪고 계신 HR상의 모든 어려움을 말씀해 주시면, 저희가 최적의 해결책을 직접 설계해 드리겠습니다.",
                ctaButton: "지금 바로 문의하기",
                check1: "모든 HR 이슈 포괄 케어",
                check2: "치명적인 법률 리스크 감소"
            },
            payroll: {
                badge: "급여 매니지먼트 서비스",
                heroTitle1: "신속 정확하게",
                heroTitle2: "스트레스 제로 급여 관리",
                heroSubtitle: "단 1바트의 계산 오류도 없습니다. 우리 전문가 팀은 모든 구성원이 급여를 정확히 지급받고, 세금이 깔끔하게 신고되며, 모든 노동법이 엄격히 지켜지도록 보장합니다.",
                getConsultation: "무료 견적 요청하기",
                highlights: [
                    { value: "100%", label: "빈틈없이 정확한 계산 결과" },
                    { value: "보안 보장", label: "철통같은 임직원 데이터 기밀 유지" },
                    { value: "시간 엄수", label: "단 한 번의 지연 없는 지급 및 세금 신고" }
                ],
                coverageTitle: "완벽한 급여 매니지먼트 시스템",
                coverageSubtitle: "최고 수준의 철저한 보안 표준 하에 급여 프로세스의 모든 단계를 세심하게 컨트롤합니다.",
                coverageItems: [
                    "기본 급여, 초과 근무 대수(OT) 차액, 각종 공제 계산",
                    "개인 소득세(PND.1, PND.1K) 공제 및 국가 신고",
                    "의무 사회 보장 기금 대행 관리",
                    "퇴직 연금(Provident Fund) 납부 관리",
                    "온라인 모바일 급여 명세서(E-Payslip) 발급 및 배포",
                    "연말정산 연례 요약 보고서 및 평가 내역 제출"
                ],
                coverageDesc: "오로지 검증된 전문가에 의해 운영되므로, 불필요한 오류가 차단되고 소중한 시간이 절약되어 기업이 마찰 없이 순항할 수 있게 합니다.",
                ctaTitle: "복잡하고 머리 아픈 일은 우리에게, 귀하는 비즈니스에만 전념하십시오.",
                ctaSubtitle: "안정적이고 강력한 보안성을 갖춘 100% 무결점 급여 아웃소싱 서비스. 오늘부터 저희와 함께 급여 패러다임을 혁신해 보십시오.",
                ctaButton: "서비스 이용 요금 확인하기",
                check1: "엄격한 기밀성 절대 보장 체계",
                check2: "언제든 외부 감사를 받을 수 있는 명확한 리포트"
            }
        }
    },
    ru: {
        servicesPages: {
            global: {
                enterpriseSolutions: "Корпоративные (Enterprise) Решения",
                subtitle: "Повысьте уровень управления вашей организацией с помощью наших комплексных услуг мирового класса.",
                optionalAddons: "Опциональные Дополнения",
                disclaimer: "Решения Valcot предоставляются в жестких рамках заранее согласованного технического задания (scope), что гарантирует высочайшее качество и безукоризненную точность. Любые запросы вне базового охвата будут индивидуально оценены перед их реализацией.",
                addons: [
                    { title: "Соцстрах и государственные отчеты", desc: "Помощь с подачей (в зависимости от scope)" },
                    { title: "Пакет политик и шаблонов HR", desc: "Стандартизированные формы и чек-листы" },
                    { title: "Календарь комплаенса", desc: "Ежемесячные напоминания о дедлайнах" },
                    { title: "Внутренний HR Портал / Система", desc: "Скоро в разработке" }
                ]
            },
            hrOutsourcing: {
                badge: "Комплексные HR Услуги",
                heroTitle1: "Полный Спектр",
                heroTitle2: "HR и EOR Решений",
                heroSubtitle: "Сфокусируйтесь на росте бизнеса, пока мы управляем вашими людьми. Услуги Номинального Работодателя (EOR) и HR аутсорсинга по международным стандартам.",
                getConsultation: "Получить бесплатную консультацию",
                complianceStatus: "Статус Комплаенса",
                complianceDesc: "Все сотрудники в рамках закона",
                highlights: [
                    { value: "100%", label: "Полное соблюдение трудового права" },
                    { value: "Бесшовно", label: "Управление жизненным циклом сотрудника" },
                    { value: "EOR", label: "Найм без создания юрлица" }
                ],
                targetAudienceTitle: "Для кого эта услуга?",
                targetAudiences: [
                    { title: "Многонациональные компании (MNCs)", desc: "Нуждается в представительстве на территории страны или использует EOR для тестирования рынка Таиланда." },
                    { title: "СМБ и Стартапы", desc: "Отсутствует внутренний HR-отдел; требуются эксперты для управления полным циклом работы с сотрудниками." },
                    { title: "Быстрорастущие компании", desc: "Бизнес стремительно масштабируется, требуется массовый найм и онбординг без жесткого давления на администрацию." }
                ],
                coverageTitle: "Что мы берем на себя",
                coverageItems: [
                    "Точный подбор (рекрутинг) и онбординг персонала",
                    "Разработка и аудит трудовых договоров",
                    "Администрирование льгот и коллективного страхования",
                    "Учет рабочего времени, отпусков и отсутствий",
                    "Гарантия 100% соблюдения трудового законодательства Таиланда",
                    "Конструктивное управление отношениями с сотрудниками (ER)"
                ],
                coverageDesc: "Выверенное профессиональное управление с возможностью аудита каждого нашего шага. Абсолютное спокойствие на всех этапах работы.",
                ctaTitle: "Готовы упростить управление персоналом?",
                ctaSubtitle: "Полноценная бесплатная консультация безо всяких формальных обязательств. Поведайте нам о своих кадровых проблемах, и мы спроектируем их решение.",
                ctaButton: "Свяжитесь с нами сегодня",
                check1: "Полный охват всех возможных HR-вопросов",
                check2: "Снижение юридических рисков бизнеса"
            },
            payroll: {
                badge: "Услуги расчета заработной платы (Payroll)",
                heroTitle1: "Точно и всегда вовремя",
                heroTitle2: "Зарплата без забот",
                heroSubtitle: "Больше никаких ошибок в расчетах. Наша команда гарантирует, что каждый получит зарплату вовремя, налоги будут уплачены, а трудовое законодательство – соблюдено.",
                getConsultation: "Запросить Коммерческое предложение",
                highlights: [
                    { value: "100%", label: "Безошибочные Расчеты" },
                    { value: "Максимум Безопасности", label: "Строгая конфиденциальность данных гарантирована" },
                    { value: "Всегда В Срок", label: "Своевременные Выплаты и Налоговые подати" }
                ],
                coverageTitle: "Идеальное Управление Расчетами (Payroll)",
                coverageSubtitle: "Тщательно контролируемый каждый шаг с высочайшими международными стандартами безопасности.",
                coverageItems: [
                    "Филигранный расчет оклада, переработок (OT) и удержаний",
                    "Разумная подача деклараций по НДФЛ (PND.1, PND.1K)",
                    "Бескомпромиссное администрирование Фонда Социального Страхования",
                    "Управление Резервными фондами сотрудников",
                    "Своевременная онлайн-генерация расчетных листов (Payslips)",
                    "Безошибочное создание Годовых отчетов и итоговых сводок"
                ],
                coverageDesc: "Выполняется профессионалами узкого профиля: сокращает ошибки, экономит драгоценное время и позволяет вашей организации работать без перебоев.",
                ctaTitle: "Позвольте нам разобраться со сложностями, чтобы вы могли управлять бизнесом.",
                ctaSubtitle: "Надежный, сверхбезопасный и на 100% точный аутсорсинг расчета заработной платы. Начните оптимизацию Payroll-системы вместе с нами уже сегодня.",
                ctaButton: "Узнать Тарифы на Услуги",
                check1: "Неприступная конфиденциальность данных",
                check2: "Прозрачные Отчеты, готовые к строжайшему Аудиту"
            }
        }
    }
};

langs.forEach(lang => {
    const filePath = path.join(dictsDir, `${lang}.json`);
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        let dict = JSON.parse(fileContent);
        
        dict.servicesPages = newData[lang].servicesPages;
        
        fs.writeFileSync(filePath, JSON.stringify(dict, null, 4));
        console.log(`Updated ${lang}.json with servicesPages part 1`);
    } else {
        console.error(`File not found: ${filePath}`);
    }
});
