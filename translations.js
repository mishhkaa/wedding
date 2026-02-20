// Translations object
const translations = {
    ua: {
        // Navigation
        navAbout: "ПРО ЗАСНОВНИЦЮ",
        navServices: "ПОСЛУГИ",
        navPortfolio: "ПОРТФОЛІО",
        navContacts: "КОНТАКТИ",
        navHome: "ГОЛОВНА",
        
        // Buttons
        contactBtn: "ЗВ'ЯЗАТИСЯ З НАМИ",
        viewMore: "ПЕРЕГЛЯНУТИ",
        learnMore: "ДІЗНАТИСЯ БІЛЬШЕ ПРО ЮЛІЮ",
        bookMeeting: "ЗАБРОНЮВАТИ ЗУСТРІЧ З ЮЛІЄЮ",
        planConsultation: "ЗАПЛАНУВАТИ КОНСУЛЬТАЦІЮ",
        moreServices: "БІЛЬШЕ ПРО НАШІ ПОСЛУГИ",
        
        // Sections
        introTitle: "BESPOKE WEDDING AND EVENT PLANNING, WHERE EVERY DETAIL IS DESIGNED WITH PURPOSE",
        introText: "Створюємо індивідуальні авторські події, де кожен елемент має сенс. Ідея, простір, естетика та сценарій формують цілісну історію, що відображає характер, атмосферу локації та унікальність моменту.",
        
        featureTitle: "МІЖНАРОДНИЙ ФОРМАТ МИСЛЕННЯ",
        featureDescription: "Робота в різних країнах і культурних контекстах із дотриманням міжнародних стандартів сервісу та протоколу. Формат, масштаб і локація узгоджуються в межах єдиної концепції, зберігаючи цілісність проєкту та стабільний рівень реалізації незалежно від географії.",
        
        gridTitle1: "ВИСОКИЙ РІВЕНЬ ЕСТЕТИЧНОЇ КУЛЬТУРИ",
        gridDescription1: "Створюємо індивідуальні авторські події, де кожен елемент має сенс. Ідея, простір, естетика та сценарій формують цілісну історію, що відображає характер, атмосферу локації та унікальність моменту.",
        
        gridTitle2: "АВТОРСЬКА РОЗРОБКА",
        gridDescription2: "Проєкти без повторюваних рішень і шаблонних сценаріїв. Робота вибудовується з урахуванням контексту клієнта, специфіки події, стратегічних цілей та масштабу відповідальності. Зміст, структура й архітектура реалізації формують індивідуальну ідентичність проєкту та професійний рівень виконання.",
        
        aboutName: "ЮЛІЯ КОВІНЬКО.",
        aboutRole1: "EVENT PLANNER TA",
        aboutRole2: "PRODUCER ПОДІЙ",
        aboutRole3: "ВИСОКОГО РІВНЯ",
        aboutDescription: "Юлія працює з подіями як із продюсерськими проєктами, у яких стратегія, простір і сценарій формують єдину систему. Її підхід базується на чіткому управлінні процесами, високих естетичних стандартах і здатності реалізовувати складні формати подій у різних культурних контекстах. Кожен проєкт вибудовується як індивідуальне рішення — від концепції та просторової логіки до сценарію, команди й фінальної реалізації. Такий підхід дозволяє створювати події, що зберігають цілісність, масштаб і якість незалежно від локації, формату чи рівня складності.",
        bookText1: "Познайомитися з",
        bookText2: "філософією життя Юлії",
        bookText3: "можна у книзі",
        bookTitle: "\"Смакувати життя\"",
        
        testimonial1Names: "MARK & SOFIA, DESTINATION WEDDING",
        testimonial1Text: "Для нас було принципово важливо працювати з людиною, якій можна повністю довірити нашу подію. Юлія вразила нас рівнем професійності, естетичним баченням і здатністю тонко відчути те, що було справді важливим для нас. У день події ми не думали про організацію — ми проживали емоції. Усі деталі були продумані до дрібниць, а атмосфера й візуальні рішення створили відчуття цілісності та абсолютного задоволення.",
        
        testimonial2Names: "OLEG & ANASTASIA, DESTINATION WEDDING",
        testimonial2Text: "Співпраця з Юлією та J.KO Gallery перевершила всі наші очікування. Подія стала справжнім святом, яке ми запам'ятаємо на все життя. Атмосфера, створена Юлією, була наповнена красотою, теплом і глибоким відчуттям нашої історії. Ми безмежно вдячні за ці моменти щастя, які назавжди залишаться з нами.",
        
        locationsTitle: "ЕКСКЛЮЗИВНІ ЛОКАЦІЇ",
        locationText1: "Простір, декор, гастрономія, музика та атмосфера працюють як єдина система, що підсилює вашу історію.",
        locationText2: "Європа, ОАЕ чи Україна, кожна локація обирається стратегічно з урахуванням стилю, логістики та сценарію події.",
        locationText3: "Юлія особисто супроводжує кожен етап підготовки, забезпечує контроль процесу та найвищий рівень комфорту.",
        
        servicesTitle: "ПРИВАТНІ ПОДІЇ ТА БРЕНД-ІВЕНТИ, СТВОРЕНІ З УРАХУВАННЯМ ФОРМАТУ, ХАРАКТЕРУ ТА АТМОСФЕРИ ПОДІЇ",
        servicesDescription: "Від камерних свят до масштабних, виїзних і локальних — кожен формат реалізується індивідуально, а рішення приймаються системно, з фокусом на якість, естетику та контроль кожного етапу реалізації. Кожен проєкт формується на основі вашого бачення та чітко структурованого сценарію.",
        
        ctaSlogan1: "EXPERT-LED EVENTS WHERE",
        ctaSloganScript: "every",
        ctaSlogan2: "DECISION CARRIES MEANING",
        ctaTitle: "З РАДІСТЮ РОЗГЛЯНЕМО ІДЕЮ ВАШОЇ МАЙБУТНЬОЇ ПОДІЇ",
        ctaDescription: "Кожен проєкт перебуває під особистим супроводом Юлії від першого контакту до фінальної реалізації. Особистий супровід, стратегічне планування та увага до деталей формують події, що мають сенс, структуру й унікальний характер.",
        
        consultationTitle: "РОЗПОЧНІМО ВАШУ РОЗКІШНУ ІСТОРІЮ",
        consultationDescription: "Поділіться з нами своєю мрією і ми допоможемо перетворити її на подію, створену саме для вас. Від ідеї до реалізації — кожне рішення формується навколо ваших цінностей, стилю та настрою, щоб подія стала справжнім відображенням вас.",
        
        heroCtaLine1: "GIVE US AN IDEA AND",
        heroCtaScript: "we will",
        heroCtaLine2: "CREATE YOUR UNIQUE STORY",
        
        instagramTitle: "Відвідайте наш інстаграм",
        
        // Footer
        footerAbout: "ПРО НАС",
        footerServices: "ПОСЛУГИ",
        footerPortfolio: "ПОРТФОЛІО",
        footerContacts: "КОНТАКТИ",
        footerSocialTitle: "СОЦІАЛЬНІ МЕРЕЖІ:",
        footerContactsTitle: "КОНТАКТИ:",
        footerCopyright: "© J. KO GALLERY 2026, ALL RIGHTS RESERVED",
        footerPrivacy: "PRIVACY POLICY",
        footerCredits: "SITE CREDITS"
    },
    ru: {
        // Navigation
        navAbout: "О ЗАСНОВАТЕЛЕ",
        navServices: "УСЛУГИ",
        navPortfolio: "ПОРТФОЛИО",
        navContacts: "КОНТАКТЫ",
        navHome: "ГЛАВНАЯ",
        
        // Buttons
        contactBtn: "СВЯЗАТЬСЯ С НАМИ",
        viewMore: "ПОСМОТРЕТЬ",
        learnMore: "УЗНАТЬ БОЛЬШЕ О ЮЛИИ",
        bookMeeting: "ЗАБРОНИРОВАТЬ ВСТРЕЧУ С ЮЛИЕЙ",
        planConsultation: "ЗАПЛАНИРОВАТЬ КОНСУЛЬТАЦИЮ",
        moreServices: "БОЛЬШЕ О НАШИХ УСЛУГАХ",
        
        // Sections
        introTitle: "ИНДИВИДУАЛЬНОЕ ПЛАНИРОВАНИЕ СВАДЕБ И СОБЫТИЙ, ГДЕ КАЖДАЯ ДЕТАЛЬ СОЗДАНА С ЦЕЛЬЮ",
        introText: "Создаем индивидуальные авторские события, где каждый элемент имеет смысл. Идея, пространство, эстетика и сценарий формируют целостную историю, отражающую характер, атмосферу локации и уникальность момента.",
        
        featureTitle: "МЕЖДУНАРОДНЫЙ ФОРМАТ МЫШЛЕНИЯ",
        featureDescription: "Работа в разных странах и культурных контекстах с соблюдением международных стандартов сервиса и протокола. Формат, масштаб и локация согласовываются в рамках единой концепции, сохраняя целостность проекта и стабильный уровень реализации независимо от географии.",
        
        gridTitle1: "ВЫСОКИЙ УРОВЕНЬ ЭСТЕТИЧЕСКОЙ КУЛЬТУРЫ",
        gridDescription1: "Создаем индивидуальные авторские события, где каждый элемент имеет смысл. Идея, пространство, эстетика и сценарий формируют целостную историю, отражающую характер, атмосферу локации и уникальность момента.",
        
        gridTitle2: "АВТОРСКАЯ РАЗРАБОТКА",
        gridDescription2: "Проекты без повторяющихся решений и шаблонных сценариев. Работа выстраивается с учетом контекста клиента, специфики события, стратегических целей и масштаба ответственности. Содержание, структура и архитектура реализации формируют индивидуальную идентичность проекта и профессиональный уровень выполнения.",
        
        aboutName: "ЮЛИЯ КОВИНЬКО.",
        aboutRole1: "EVENT PLANNER И",
        aboutRole2: "ПРОДЮСЕР СОБЫТИЙ",
        aboutRole3: "ВЫСОКОГО УРОВНЯ",
        aboutDescription: "Юлия работает с событиями как с продюсерскими проектами, в которых стратегия, пространство и сценарий формируют единую систему. Ее подход основан на четком управлении процессами, высоких эстетических стандартах и способности реализовывать сложные форматы событий в разных культурных контекстах. Каждый проект выстраивается как индивидуальное решение — от концепции и пространственной логики до сценария, команды и финальной реализации. Такой подход позволяет создавать события, сохраняющие целостность, масштаб и качество независимо от локации, формата или уровня сложности.",
        bookText1: "Познакомиться с",
        bookText2: "философией жизни Юлии",
        bookText3: "можно в книге",
        bookTitle: "\"Вкушать жизнь\"",
        
        testimonial1Names: "MARK & SOFIA, DESTINATION WEDDING",
        testimonial1Text: "Для нас было принципиально важно работать с человеком, которому можно полностью доверить наше событие. Юлия поразила нас уровнем профессионализма, эстетическим видением и способностью тонко почувствовать то, что было действительно важным для нас. В день события мы не думали об организации — мы проживали эмоции. Все детали были продуманы до мелочей, а атмосфера и визуальные решения создали ощущение целостности и абсолютного удовлетворения.",
        
        testimonial2Names: "OLEG & ANASTASIA, DESTINATION WEDDING",
        testimonial2Text: "Сотрудничество с Юлией и J.KO Gallery превзошло все наши ожидания. Событие стало настоящим праздником, который мы запомним на всю жизнь. Атмосфера, созданная Юлией, была наполнена красотой, теплом и глубоким ощущением нашей истории. Мы бесконечно благодарны за эти моменты счастья, которые навсегда останутся с нами.",
        
        locationsTitle: "ЭКСКЛЮЗИВНЫЕ ЛОКАЦИИ",
        locationText1: "Пространство, декор, гастрономия, музыка и атмосфера работают как единая система, усиливающая вашу историю.",
        locationText2: "Европа, ОАЭ или Украина, каждая локация выбирается стратегически с учетом стиля, логистики и сценария события.",
        locationText3: "Юлия лично сопровождает каждый этап подготовки, обеспечивает контроль процесса и высший уровень комфорта.",
        
        servicesTitle: "ЧАСТНЫЕ СОБЫТИЯ И БРЕНД-ИВЕНТЫ, СОЗДАННЫЕ С УЧЕТОМ ФОРМАТА, ХАРАКТЕРА И АТМОСФЕРЫ СОБЫТИЯ",
        servicesDescription: "От камерных праздников до масштабных, выездных и локальных — каждый формат реализуется индивидуально, а решения принимаются системно, с фокусом на качество, эстетику и контроль каждого этапа реализации. Каждый проект формируется на основе вашего видения и четко структурированного сценария.",
        
        ctaSlogan1: "EXPERT-LED EVENTS WHERE",
        ctaSloganScript: "every",
        ctaSlogan2: "DECISION CARRIES MEANING",
        ctaTitle: "С РАДОСТЬЮ РАССМОТРИМ ИДЕЮ ВАШЕГО БУДУЩЕГО СОБЫТИЯ",
        ctaDescription: "Каждый проект находится под личным сопровождением Юлии от первого контакта до финальной реализации. Личное сопровождение, стратегическое планирование и внимание к деталям формируют события, имеющие смысл, структуру и уникальный характер.",
        
        consultationTitle: "НАЧНЕМ ВАШУ РОСКОШНУЮ ИСТОРИЮ",
        consultationDescription: "Поделитесь с нами своей мечтой, и мы поможем превратить ее в событие, созданное именно для вас. От идеи до реализации — каждое решение формируется вокруг ваших ценностей, стиля и настроения, чтобы событие стало настоящим отражением вас.",
        
        heroCtaLine1: "GIVE US AN IDEA AND",
        heroCtaScript: "we will",
        heroCtaLine2: "CREATE YOUR UNIQUE STORY",
        
        instagramTitle: "Посетите наш инстаграм",
        
        // Footer
        footerAbout: "О НАС",
        footerServices: "УСЛУГИ",
        footerPortfolio: "ПОРТФОЛИО",
        footerContacts: "КОНТАКТЫ",
        footerSocialTitle: "СОЦИАЛЬНЫЕ СЕТИ:",
        footerContactsTitle: "КОНТАКТЫ:",
        footerCopyright: "© J. KO GALLERY 2026, ALL RIGHTS RESERVED",
        footerPrivacy: "PRIVACY POLICY",
        footerCredits: "SITE CREDITS"
    },
    en: {
        // Navigation
        navAbout: "ABOUT FOUNDER",
        navServices: "SERVICES",
        navPortfolio: "PORTFOLIO",
        navContacts: "CONTACTS",
        navHome: "HOME",
        
        // Buttons
        contactBtn: "CONTACT US",
        viewMore: "VIEW MORE",
        learnMore: "LEARN MORE ABOUT YULIA",
        bookMeeting: "BOOK A MEETING WITH YULIA",
        planConsultation: "SCHEDULE A CONSULTATION",
        moreServices: "MORE ABOUT OUR SERVICES",
        
        // Sections
        introTitle: "BESPOKE WEDDING AND EVENT PLANNING, WHERE EVERY DETAIL IS DESIGNED WITH PURPOSE",
        introText: "We create individual author events where every element has meaning. The idea, space, aesthetics and scenario form a holistic story that reflects the character, atmosphere of the location and the uniqueness of the moment.",
        
        featureTitle: "INTERNATIONAL THINKING FORMAT",
        featureDescription: "Work in different countries and cultural contexts while maintaining international service and protocol standards. Format, scale and location are coordinated within a single concept, maintaining the integrity of the project and a stable level of implementation regardless of geography.",
        
        gridTitle1: "HIGH LEVEL OF AESTHETIC CULTURE",
        gridDescription1: "We create individual author events where every element has meaning. The idea, space, aesthetics and scenario form a holistic story that reflects the character, atmosphere of the location and the uniqueness of the moment.",
        
        gridTitle2: "AUTHOR'S DEVELOPMENT",
        gridDescription2: "Projects without repetitive solutions and template scenarios. Work is built taking into account the client's context, event specifics, strategic goals and scale of responsibility. Content, structure and implementation architecture form the individual identity of the project and professional level of execution.",
        
        aboutName: "YULIA KOVINKO.",
        aboutRole1: "EVENT PLANNER AND",
        aboutRole2: "PRODUCER OF",
        aboutRole3: "HIGH-LEVEL EVENTS",
        aboutDescription: "Yulia works with events as production projects in which strategy, space and scenario form a unified system. Her approach is based on clear process management, high aesthetic standards and the ability to implement complex event formats in different cultural contexts. Each project is built as an individual solution — from concept and spatial logic to scenario, team and final implementation. This approach allows creating events that maintain integrity, scale and quality regardless of location, format or level of complexity.",
        bookText1: "Get acquainted with",
        bookText2: "Yulia's life philosophy",
        bookText3: "in the book",
        bookTitle: "\"Savor Life\"",
        
        testimonial1Names: "MARK & SOFIA, DESTINATION WEDDING",
        testimonial1Text: "It was fundamentally important for us to work with a person we could completely trust with our event. Yulia impressed us with her level of professionalism, aesthetic vision and ability to subtly feel what was truly important to us. On the day of the event, we didn't think about organization — we lived emotions. Every detail was thought out to the smallest detail, and the atmosphere and visual solutions created a sense of integrity and absolute satisfaction.",
        
        testimonial2Names: "OLEG & ANASTASIA, DESTINATION WEDDING",
        testimonial2Text: "Cooperation with Yulia and J.KO Gallery exceeded all our expectations. The event became a real celebration that we will remember for a lifetime. The atmosphere created by Yulia was filled with beauty, warmth and a deep sense of our story. We are infinitely grateful for these moments of happiness that will forever remain with us.",
        
        locationsTitle: "EXCLUSIVE LOCATIONS",
        locationText1: "Space, decor, gastronomy, music and atmosphere work as a unified system that enhances your story.",
        locationText2: "Europe, UAE or Ukraine, each location is chosen strategically taking into account style, logistics and event scenario.",
        locationText3: "Yulia personally accompanies each stage of preparation, ensures process control and the highest level of comfort.",
        
        servicesTitle: "PRIVATE EVENTS AND BRAND EVENTS, CREATED TAKING INTO ACCOUNT THE FORMAT, CHARACTER AND ATMOSPHERE OF THE EVENT",
        servicesDescription: "From intimate celebrations to large-scale, off-site and local — each format is implemented individually, and decisions are made systematically, with a focus on quality, aesthetics and control of each implementation stage. Each project is formed based on your vision and a clearly structured scenario.",
        
        ctaSlogan1: "EXPERT-LED EVENTS WHERE",
        ctaSloganScript: "every",
        ctaSlogan2: "DECISION CARRIES MEANING",
        ctaTitle: "WE WILL GLADLY CONSIDER THE IDEA OF YOUR FUTURE EVENT",
        ctaDescription: "Each project is under Yulia's personal supervision from first contact to final implementation. Personal supervision, strategic planning and attention to detail create events that have meaning, structure and unique character.",
        
        consultationTitle: "LET'S START YOUR LUXURIOUS STORY",
        consultationDescription: "Share your dream with us and we will help turn it into an event created just for you. From idea to implementation — every decision is formed around your values, style and mood, so that the event becomes a true reflection of you.",
        
        heroCtaLine1: "GIVE US AN IDEA AND",
        heroCtaScript: "we will",
        heroCtaLine2: "CREATE YOUR UNIQUE STORY",
        
        instagramTitle: "Visit our Instagram",
        
        // Footer
        footerAbout: "ABOUT US",
        footerServices: "SERVICES",
        footerPortfolio: "PORTFOLIO",
        footerContacts: "CONTACTS",
        footerSocialTitle: "SOCIAL MEDIA:",
        footerContactsTitle: "CONTACTS:",
        footerCopyright: "© J. KO GALLERY 2026, ALL RIGHTS RESERVED",
        footerPrivacy: "PRIVACY POLICY",
        footerCredits: "SITE CREDITS"
    }
};

// Language switching function
function switchLanguage(lang) {
    const currentLang = translations[lang];
    if (!currentLang) return;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-translate attribute
    // Process from deepest to shallowest to preserve nested structure
    const allTranslatable = Array.from(document.querySelectorAll('[data-translate]'));
    // Sort by depth (deepest first) - elements with no nested translatable elements come first
    allTranslatable.sort((a, b) => {
        const hasNestedA = a.querySelector('[data-translate]') !== null;
        const hasNestedB = b.querySelector('[data-translate]') !== null;
        if (hasNestedA && !hasNestedB) return 1; // a comes after b
        if (!hasNestedA && hasNestedB) return -1; // a comes before b
        return 0; // same depth
    });
    
    allTranslatable.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (currentLang[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = currentLang[key];
            } else {
                // Check if element has nested elements with data-translate
                const nestedTranslatable = element.querySelector('[data-translate]');
                if (nestedTranslatable) {
                    // If there are nested translatable elements, preserve their structure
                    // Store nested elements info before we modify the parent
                    const nestedElements = [];
                    element.querySelectorAll('[data-translate]').forEach(nested => {
                        const nestedKey = nested.getAttribute('data-translate');
                        const nestedClasses = nested.className;
                        const nestedTag = nested.tagName.toLowerCase();
                        nestedElements.push({
                            key: nestedKey,
                            classes: nestedClasses,
                            tag: nestedTag,
                            text: nested.textContent.trim()
                        });
                    });
                    
                    // Replace text content, preserving nested elements
                    let translatedText = currentLang[key];
                    nestedElements.forEach(nested => {
                        if (currentLang[nested.key]) {
                            const nestedTranslated = currentLang[nested.key];
                            // Replace old nested text with new nested element structure
                            const nestedHtml = `<${nested.tag} class="${nested.classes}" data-translate="${nested.key}">${nestedTranslated}</${nested.tag}>`;
                            
                            // Try to find and replace the nested text
                            // First, try exact match with old text
                            if (translatedText.includes(nested.text)) {
                                translatedText = translatedText.replace(nested.text, nestedHtml);
                            } else if (translatedText.includes(nestedTranslated)) {
                                // If old text not found, try with translated text
                                translatedText = translatedText.replace(nestedTranslated, nestedHtml);
                            } else {
                                // For specific cases like ctaSlogan1, insert after "WHERE"
                                if (key === 'ctaSlogan1' && nested.key === 'ctaSloganScript') {
                                    translatedText = translatedText.replace(' WHERE', ` WHERE ${nestedHtml}`);
                                }
                                // For heroCtaLine1, insert "we will" after "AND"
                                else if (key === 'heroCtaLine1' && nested.key === 'heroCtaScript') {
                                    translatedText = translatedText.replace(' AND', ` AND ${nestedHtml}`);
                                }
                            }
                        }
                    });
                    
                    // Set innerHTML to preserve structure
                    element.innerHTML = translatedText;
                } else {
                    // No nested translatable elements, safe to replace textContent
                    element.textContent = currentLang[key];
                }
            }
        }
    });
    
    // Update elements with data-translate-html for HTML content
    document.querySelectorAll('[data-translate-html]').forEach(element => {
        const key = element.getAttribute('data-translate-html');
        if (currentLang[key]) {
            element.innerHTML = currentLang[key].replace(/\n/g, '<br>');
        }
    });
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update active language indicator
    document.querySelectorAll('.lang').forEach(langEl => {
        langEl.classList.remove('active');
        const langAttr = langEl.getAttribute('data-lang');
        if (langAttr === lang) {
            langEl.classList.add('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Get saved language or default to Ukrainian
    const savedLang = localStorage.getItem('preferredLanguage') || 'ua';
    switchLanguage(savedLang);
    
    // Add click handlers to language switchers
    document.querySelectorAll('.lang').forEach(langEl => {
        langEl.addEventListener('click', function() {
            const langAttr = this.getAttribute('data-lang');
            const langText = this.textContent.trim().toLowerCase();
            let langCode = 'ua';
            
            if (langAttr) {
                langCode = langAttr;
            } else if (langText === 'ru') {
                langCode = 'ru';
            } else if (langText === 'en') {
                langCode = 'en';
            }
            
            switchLanguage(langCode);
        });
    });
});
