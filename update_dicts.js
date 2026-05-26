const fs = require('fs');
const path = require('path');

const dictsDir = path.join(__dirname, 'src', 'lib', 'dictionaries');
const langs = ['th', 'en', 'zh', 'ja', 'ko', 'ru'];

// The new data to merge into each dictionary
const newData = {
    th: {
        contactPage: {
            responseBadge: "ตอบกลับภายใน 24 ชม.",
            heroTitle: "ติดต่อเรา",
            heroSubtitle: "มีคำถาม อยากขอใบเสนอราคา หรือแค่อยากคุยเรื่อง HR — ทักมาได้เลย ทีมงานตอบกลับภายใน 24 ชั่วโมง",
            formTitle: "ส่งข้อความถึงเรา",
            name: "ชื่อ-นามสกุล",
            email: "อีเมล",
            phone: "เบอร์โทรศัพท์",
            company: "ชื่อบริษัท",
            service: "บริการที่สนใจ",
            selectPlaceholder: "— เลือกบริการ —",
            message: "ข้อความ",
            messagePlaceholder: "บอกเราเกี่ยวกับความต้องการของคุณ...",
            submit: "ส่งข้อความ",
            officeAddress: "ที่อยู่สำนักงาน",
            businessHoursLabel: "เวลาทำการ",
            businessHoursText: "จันทร์ – ศุกร์, 9:00 – 18:00 น.",
            services: {
                recruitment: "สรรหาบุคลากร",
                legal: "กฎหมาย",
                accounting: "บัญชี",
                other: "อื่นๆ"
            }
        },
        whyValcotPage: {
            heroTitle: "ทำไมต้อง Valcot Partners",
            heroSubtitle: "เหตุผลที่ธุรกิจกว่า 100+ องค์กร ไว้วางใจให้เราดูแลงาน HR และ Back-Office Operations",
            reasons: [
                { title: "ประสบการณ์กว่า 10 ปี", description: "ทีมงานที่มีประสบการณ์เชี่ยวชาญด้าน HR, Payroll และ Compliance มากว่า 10 ปี ผ่านการดูแลธุรกิจหลากหลายอุตสาหกรรม" },
                { title: "ทีมงานมืออาชีพ", description: "ผู้เชี่ยวชาญเฉพาะทางในทุกด้าน ตั้งแต่ HR Admin, Payroll Specialist, กฎหมายแรงงาน ไปจนถึงที่ปรึกษาด้านบัญชี" },
                { title: "บริการครบวงจร", description: "ดูแลตั้งแต่ HR Outsourcing, Payroll, สรรหาบุคลากร, กฎหมายแรงงาน ไปจนถึงบัญชีและภาษี ในที่เดียว" },
                { title: "บริการเชิงรุก", description: "ไม่ใช่แค่ทำตามคำสั่ง แต่เราเป็นพาร์ทเนอร์ที่คอยแนะนำและป้องกันปัญหาล่วงหน้า" },
                { title: "ราคายุติธรรม", description: "ค่าบริการที่สมเหตุสมผล โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง พร้อมให้คำปรึกษาเบื้องต้นฟรี" },
                { title: "Compliance 100%", description: "ดำเนินงานทุกอย่างตามกฎหมายแรงงาน กฎหมายภาษี และข้อกำหนดที่เกี่ยวข้องอย่างถูกต้อง" }
            ],
            valuesTitle: "ค่านิยมหลัก",
            values: [
                { title: "ความซื่อสัตย์", description: "ตรงไปตรงมา โปร่งใส ในทุกการดำเนินงาน" },
                { title: "ความเป็นเลิศ", description: "มุ่งมั่นส่งมอบงานคุณภาพสูงสุดทุกครั้ง" },
                { title: "ลูกค้าเป็นศูนย์กลาง", description: "เข้าใจความต้องการ ปรับให้เหมาะกับแต่ละธุรกิจ" },
                { title: "การปฏิบัติตามกฎหมาย", description: "ดำเนินงานถูกต้องตามกฎหมายเสมอ" }
            ]
        }
    },
    en: {
        contactPage: {
            responseBadge: "Response within 24 hrs",
            heroTitle: "Contact Us",
            heroSubtitle: "Have questions, need a quote, or just want to talk HR? Reach out — our team responds within 24 hours.",
            formTitle: "Send Us a Message",
            name: "Full Name",
            email: "Email",
            phone: "Phone Number",
            company: "Company Name",
            service: "Service of Interest",
            selectPlaceholder: "— Select a service —",
            message: "Message",
            messagePlaceholder: "Tell us about your needs...",
            submit: "Send Message",
            officeAddress: "Office Address",
            businessHoursLabel: "Business Hours",
            businessHoursText: "Mon – Fri, 9:00 – 18:00",
            services: {
                recruitment: "Recruitment",
                legal: "Legal",
                accounting: "Accounting",
                other: "Other"
            }
        },
        whyValcotPage: {
            heroTitle: "Why Valcot Partners",
            heroSubtitle: "Why 100+ businesses trust us with their HR and Back-Office Operations",
            reasons: [
                { title: "10+ Years Experience", description: "Our team has over 10 years of expertise in HR, Payroll, and Compliance, serving businesses across diverse industries." },
                { title: "Professional Team", description: "Specialists in every area from HR Admin, Payroll Specialists, Labor Law to Accounting Advisors." },
                { title: "End-to-End Solutions", description: "From HR Outsourcing, Payroll, Recruitment, Labor Law to Accounting & Tax — all under one roof." },
                { title: "Proactive Service", description: "We don't just follow orders — we act as your proactive partner, advising and preventing issues before they arise." },
                { title: "Fair Pricing", description: "Reasonable, transparent pricing with no hidden costs. Free initial consultation included." },
                { title: "100% Compliance", description: "Every operation fully complies with labor law, tax regulations, and all related statutory requirements." }
            ],
            valuesTitle: "Core Values",
            values: [
                { title: "Integrity", description: "Straightforward and transparent in all operations." },
                { title: "Excellence", description: "Committed to delivering the highest quality every time." },
                { title: "Client-Centric", description: "Understanding needs and adapting to each business." },
                { title: "Compliance", description: "Always operating in full legal compliance." }
            ]
        }
    },
    zh: {
        contactPage: {
            responseBadge: "24小时内回复",
            heroTitle: "联系我们",
            heroSubtitle: "有问题、需要报价或想了解HR服务？请联系我们，团队将在24小时内回复。",
            formTitle: "发送留言",
            name: "全名",
            email: "电子邮件",
            phone: "电话号码",
            company: "公司名称",
            service: "感兴趣的服务",
            selectPlaceholder: "— 选择一项服务 —",
            message: "留言内容",
            messagePlaceholder: "请描述您的需求...",
            submit: "发送消息",
            officeAddress: "办公地址",
            businessHoursLabel: "营业时间",
            businessHoursText: "周一至周五，9:00 – 18:00",
            services: {
                recruitment: "人才招聘",
                legal: "法律顾问",
                accounting: "会计服务",
                other: "其他"
            }
        },
        whyValcotPage: {
            heroTitle: "为什么选择 Valcot Partners",
            heroSubtitle: "100多家企业信任我们将HR和后台运营交予我们的原因",
            reasons: [
                { title: "10年以上经验", description: "团队在人力资源、薪酬和合规领域拥有超过10年的专业经验，服务遍及各个行业。" },
                { title: "专业团队", description: "从人事行政、薪酬专员、劳动法专家到会计顾问的各领域专家。" },
                { title: "端到端解决方案", description: "从人力资源外包、薪酬、招聘、法律到财务和税务——全部集中管理。" },
                { title: "主动服务", description: "我们不仅仅听从指令，更是您的主动合作伙伴，在问题发生前提供建议并防患于未然。" },
                { title: "公平定价", description: "价格合理透明，无隐藏费用。提供首次免费咨询。" },
                { title: "100%合规", description: "各项操作均严格符合劳动法、税务规定和所有相关的法定要求。" }
            ],
            valuesTitle: "核心价值观",
            values: [
                { title: "诚信", description: "所有操作始终保持直截了当和透明。" },
                { title: "卓越", description: "致力于每次都交付最高质量的成果。" },
                { title: "以客户为中心", description: "深入理解需求，为每家企业量身定制。" },
                { title: "合规", description: "始终保持全面的法律合规运作。" }
            ]
        }
    },
    ja: {
        contactPage: {
            responseBadge: "24時間以内にご返答します",
            heroTitle: "お問い合わせ",
            heroSubtitle: "ご質問、お見積もりのご依頼、人事に関するご相談など、お気軽にお問い合わせください。専門チームが24時間以内に対応いたします。",
            formTitle: "メッセージを送信",
            name: "お名前",
            email: "メールアドレス",
            phone: "電話番号",
            company: "会社名",
            service: "ご希望のサービス",
            selectPlaceholder: "— サービスを選択してください —",
            message: "メッセージ内容",
            messagePlaceholder: "ご要望についてお知らせください...",
            submit: "送信する",
            officeAddress: "オフィス所在地",
            businessHoursLabel: "営業時間",
            businessHoursText: "月曜日 – 金曜日, 9:00 – 18:00",
            services: {
                recruitment: "人材採用",
                legal: "法務",
                accounting: "会計",
                other: "その他"
            }
        },
        whyValcotPage: {
            heroTitle: "Valcot Partnersが選ばれる理由",
            heroSubtitle: "100社以上の企業が当社に人事とバックオフィス業務を委託している理由",
            reasons: [
                { title: "10年以上の経験", description: "私たちのチームは、人事、給与計算、コンプライアンスにおいて10年以上の専門知識を持ち、多様な業界に向けてサービスを提供しています。" },
                { title: "プロフェッショナルチーム", description: "人事管理、給与計算の専門家、労働法規制から会計顧問まで、各領域のエキスパートが対応します。" },
                { title: "エンドツーエンドのソリューション", description: "人事アウトソーシング、給与計算、採用、労働法から会計・税務まで、すべてをワンストップで提供します。" },
                { title: "プロアクティブなサービス", description: "単に指示に従うだけでなく、問題が発生する前にアドバイスを行い防止する、前向きなパートナーとして機能します。" },
                { title: "適正な価格設定", description: "隠れた費用のない、合理的で透明性の高い適正価格。初回相談は無料です。" },
                { title: "100%のコンプライアンス", description: "すべてのオペレーションは、労働法、税務要件、および関連するすべての法定要件を完全に遵守しています。" }
            ],
            valuesTitle: "コアバリュー",
            values: [
                { title: "誠実さ", description: "すべての業務において、誠実かつ透明性を持ちます。" },
                { title: "卓越性", description: "常に最高品質の成果を提供することにコミットします。" },
                { title: "顧客第一", description: "ニーズを深く理解し、各ビジネスに合わせて柔軟に対応します。" },
                { title: "コンプライアンス", description: "常に完全な法令遵守の上で事業を運営します。" }
            ]
        }
    },
    ko: {
        contactPage: {
            responseBadge: "24시간 이내 응답 보장",
            heroTitle: "문의하기",
            heroSubtitle: "궁금한 점이 있으시거나 견적이 필요하신가요? 언제든 연락주세요. 저희 팀이 24시간 내로 답변해 드립니다.",
            formTitle: "메시지 보내기",
            name: "성함",
            email: "이메일",
            phone: "전화번호",
            company: "회사명",
            service: "관심 서비스",
            selectPlaceholder: "— 서비스를 선택해 주세요 —",
            message: "문의 내용",
            messagePlaceholder: "필요하신 서비스에 대해 자세히 알려주세요...",
            submit: "메시지 전송",
            officeAddress: "사무실 주소",
            businessHoursLabel: "영업 시간",
            businessHoursText: "월요일 – 금요일, 9:00 – 18:00",
            services: {
                recruitment: "채용 서비스",
                legal: "법무",
                accounting: "회계",
                other: "기타"
            }
        },
        whyValcotPage: {
            heroTitle: "Valcot Partners를 선택하는 이유",
            heroSubtitle: "100개 이상의 기업들이 HR 및 백오피스 운영을 당사에 믿고 맡기는 이유",
            reasons: [
                { title: "10년 이상의 전문성", description: "저희 팀은 HR, 급여 관리 및 컴플라이언스 분야에서 10년 이상의 경험을 보유하고 있으며, 다양한 산업군에 맞춤화된 서비스를 제공해 왔습니다." },
                { title: "전문가 팀", description: "인사 관리(HR Admin), 급여 전문가, 노동법 및 회계 컨설턴트 등 전 영역의 특화된 전문가들로 구성되어 있습니다." },
                { title: "엔드투엔드(End-to-End) 솔루션", description: "HR 아웃소싱, 급여, 채용, 노동법 자문부터 회계 및 세무까지 하나의 파트너사를 통해 모두 해결할 수 있습니다." },
                { title: "주도적인 선제적 서비스", description: "단순히 지시를 따르는 것을 넘어, 문제가 발생하기 전에 먼저 예방하고 조언하는 파트너로 기능합니다." },
                { title: "투명하고 공정한 가격", description: "숨겨진 비용 없이 합리적이고 투명한 요금 체계를 갖추고 있습니다. 첫 번째 초기 상담은 무료입니다." },
                { title: "100% 컴플라이언스", description: "모든 운영 체계는 현행 노동법, 세법 및 관련 법적 의무 사항을 완벽하게 준수합니다." }
            ],
            valuesTitle: "핵심 가치",
            values: [
                { title: "정직과 투명성", description: "모든 운영 과정에서 솔직하고 투명하게 임합니다." },
                { title: "최상의 우수성", description: "매 순간 최고의 품질과 결과를 제공하기 위해 헌신합니다." },
                { title: "고객 중심", description: "고객의 니즈를 명확히 이해하고 각 비즈니스 환경에 맞춰 유연하게 대응합니다." },
                { title: "컴플라이언스", description: "언제나 완전한 적법성에 기반해 모든 업무를 투명하고 완벽하게 처리합니다." }
            ]
        }
    },
    ru: {
        contactPage: {
            responseBadge: "Отвечаем в течение 24 часов",
            heroTitle: "Свяжитесь с нами",
            heroSubtitle: "У вас есть вопросы, нужен расчет стоимости или консультация по HR? Напишите нам, команда отвечает в течение 24 часов.",
            formTitle: "Отправить сообщение",
            name: "Ваше имя",
            email: "Email",
            phone: "Номер телефона",
            company: "Название компании",
            service: "Интересующая услуга",
            selectPlaceholder: "— Выберите услугу —",
            message: "Сообщение",
            messagePlaceholder: "Расскажите нам о ваших потребностях...",
            submit: "Отправить сообщение",
            officeAddress: "Адрес офиса",
            businessHoursLabel: "Часы работы",
            businessHoursText: "Пн – Пт, 9:00 – 18:00",
            services: {
                recruitment: "Рекрутинг",
                legal: "Юриспруденция",
                accounting: "Бухгалтерия",
                other: "Другое"
            }
        },
        whyValcotPage: {
            heroTitle: "Почему выбирают Valcot Partners",
            heroSubtitle: "Более 100 компаний доверяют нам свой HR и административные процессы. И вот почему:",
            reasons: [
                { title: "Более 10 лет опыта", description: "Наша команда обладает более чем 10-летним опытом в сфере кадрового администрирования, расчета зарплаты и комплаенс, обслуживая бизнесы из самых разных отраслей." },
                { title: "Профессиональная команда", description: "Специалисты в каждом кластере: от HR-администраторов и экспертов по расчету зарплаты до консультантов по трудовому праву и налогообложению." },
                { title: "Комплексные (End-to-End) решения", description: "Всё под одной крышей — от HR-аутсорсинга, расчета заработной платы, подбора персонала до юриспруденции и налогов." },
                { title: "Проактивный сервис", description: "Мы не просто исполняем поручения. Мы выступаем вашим надежным партнером, предупреждающим проблемы до их возникновения." },
                { title: "Честное ценообразование", description: "Разумные, прозрачные цены без скрытых комиссий и сборов. Первичная консультация предоставляется абсолютно бесплатно." },
                { title: "100% Соблюдение Закона", description: "Каждая операция строго следует Трудовому кодексу, Налоговому законодательству и прочим нормативно-правовым актам." }
            ],
            valuesTitle: "Наши Ключевые Ценности",
            values: [
                { title: "Честность", description: "Прямолинейность и исключительная прозрачность во всех операциях." },
                { title: "Превосходство", description: "Приверженность к предоставлению высочайшего качества на каждом этапе нашего сотрудничества." },
                { title: "Ориентированность на клиента", description: "Глубокое понимание ваших потребностей и адаптация под уникальные нужды каждого бизнеса." },
                { title: "Комплаенс", description: "Бескомпромиссное следование всем законам и нормативным регламентам." }
            ]
        }
    }
};

langs.forEach(lang => {
    const filePath = path.join(dictsDir, `${lang}.json`);
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        let dict = JSON.parse(fileContent);
        
        // Update contactPage
        dict.contactPage = newData[lang].contactPage;
        // Update whyValcotPage
        dict.whyValcotPage = newData[lang].whyValcotPage;
        
        fs.writeFileSync(filePath, JSON.stringify(dict, null, 4));
        console.log(`Updated ${lang}.json`);
    } else {
        console.error(`File not found: ${filePath}`);
    }
});
