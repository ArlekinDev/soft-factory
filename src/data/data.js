
import telegram from "../assets/images/telegramm.svg";
import ui from "../assets/videos/ui.gif";

// IMAGES
import ARLE from "../assets/images/ARLE.png";
import BUILD from "../assets/images/BUILD.png";
import CAR from "../assets/images/CAR.jpg";
import GRANIT from "../assets/images/GRANIT.png";
import MIC from "../assets/images/MIC.jpg";
import NEXT from "../assets/images/NEXT.png";

export const navLinks = [
  {
    id: Math.random().toString().substr(2, 6),
    title: "QA",
    anchor: "qa",
    delayTime: "450ms",
  },
  {
    id: Math.random().toString().substr(2, 6),
    title: "Проекты",
    anchor: "projects",
    delayTime: "550ms",
  },
  {
    id: Math.random().toString().substr(2, 6),
    title: "Технологии",
    anchor: "stacks",
    delayTime: "650ms",
  },
];

export const footerLogos = [
  {
    id: Math.random().toString().substr(2, 6),
    src: telegram,
    href: "https://t.me/eepqettpr",
  },
];

export const questions = [
  {
    id: Math.random().toString().substr(2, 6),
    title: "ДИЗАЙН ИНТЕРФЕЙСОВ",
    par: "Анализируем поведение аудитории, проектируем структуру сайта и путь клиента, а затем создаем дизайн-концепцию проекта.",
    opened: true,
  },
  {
    id: Math.random().toString().substr(2, 6),
    title: "ВЕРСТКА И ПРОГРАММИРОВАНИЕ",
    par: "Разрабатываем высоконагруженные порталы и интернет-магазины, регулярно делаем code review и следим за целостностью архитектуры.",
    opened: false,
  },
  {
    id: Math.random().toString().substr(2, 6),
    title: "МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ",
    par: "Разрабатываем и поддерживаем мобильные приложения под IOS и Android, размещаем приложения на площадках AppStore и Google Play. Читать подробнее",
    opened: false,
  },
  {
    id: Math.random().toString().substr(2, 6),
    title: "ИНТЕГРАЦИИ ПО API",
    par: "Создаем собственные API для мобильных приложений и веб-порталов. Интегрируемся с внешними сервисами по API.",
    opened: false,
  },
];

export const stacksArr = [
  {
    id: Math.random().toString().substr(2, 6),
    title: "Дизайн",
    desc: "UI/UX, Figma, Sketch, PS",
  },
  {
    id: Math.random().toString().substr(2, 6),
    title: "Frontend & Framework",
    desc: "TML5, CSS3, JavaScript, TypeScript. Frameworks: React/Redux, Vue/Vuex, Node.js",
  },
  {
    id: Math.random().toString().substr(2, 6),
    title: "Backend & DevOps",
    desc: `RESTfull API, PHP (Laravel, Bitrix, Yii2), Python (Django, Flask), Websocket API.
    Базы данных: MySQL, PostgreSQL, Redis. Микросервисы: Docker/Docker Compose`,
  },
  {
    id: Math.random().toString().substr(2, 6),
    title: "Прочее",
    desc: "Git, Swagger, Postman, Apiary, Miro",
  },
];

export const projectsArr = [
  {
    id: Math.random().toString().substr(2, 6),
    title: 'Сервис "Restroy"',
    desc: `Строительство и ремонт коттеджей и квартив качественно в Москве и Московской области под ключ с гарантией`,
    src: BUILD,
    video: ui,
    stacks: [
      {
        id: Math.random().toString().substr(2, 6),
        title: "Тех.Поддержка",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Дизайн",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Верстка",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "API",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Программирование",
      },
    ],
    link: "https://restroy.moscow/",
  },

  {
    id: Math.random().toString().substr(2, 6),
    title: 'Сервис "Dream Car Trading"',
    desc: `Сайт с огромным выбором автомобилей, иномарок в Корее.`,
    src: CAR,
    video: ui,
    stacks: [
      {
        id: Math.random().toString().substr(2, 6),
        title: "Тех.Поддержка",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Проектирование",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Дизайн",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "API",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "QA",
      },
    ],
    link: "https://dreamcartrading.com/",
  },

  {
    id: Math.random().toString().substr(2, 6),
    title: 'Сайт аналитики "ArleDev"',
    desc: `Сайт с обширным функционалом, статистикой, списками и многое другое.`,
    src: ARLE,
    video: ui,
    stacks: [
      {
        id: Math.random().toString().substr(2, 6),
        title: "DevOps",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Верстка",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "API",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Проектирование",
      },
    ],
    link: "https://arlekin-dashboard-dev.vercel.app/",
  },

  {
    id: Math.random().toString().substr(2, 6),
    title: "Tiancheng Stone - Компания по продаже гранитов",
    desc: `Изготовление гранита в Узбекистане.`,
    src: GRANIT,
    video: ui,
    stacks: [
      {
        id: Math.random().toString().substr(2, 6),
        title: "DevOps",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Верстка",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "API",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Проектирование",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Тех.Поддержка",
      },
    ],
    link: "https://granitglobal.netlify.app/",
  },

  {
    id: Math.random().toString().substr(2, 6),
    title: "Maximum International College (MIC) - Колледж",
    desc: `Официальный сайт колледжа MIC.`,
    src: MIC,
    video: ui,
    stacks: [
      {
        id: Math.random().toString().substr(2, 6),
        title: "DevOps",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Верстка",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "API",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Проектирование",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Тех.Поддержка",
      },
    ],
    link: "https://maxic.uz/",
  },

  {
    id: Math.random().toString().substr(2, 6),
    title: "Next Landing Page",
    desc: `целевая страница для стартапов.`,
    src: NEXT,
    video: ui,
    stacks: [
      {
        id: Math.random().toString().substr(2, 6),
        title: "DevOps",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Верстка",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "API",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Проектирование",
      },
      {
        id: Math.random().toString().substr(2, 6),
        title: "Тех.Поддержка",
      },
    ],
    link: "https://next-landing-page-with-svgs.vercel.app/",
  },
];

export const footerLinks = [
  {
    id: Math.random().toString().substr(2, 6),
    title: "Телефон:",
    desc: [
      {
        id: Math.random().toString().substr(2, 6),
        descText: "+998 33 013 55 04",
        href: "tel: +998330135504",
      },
    ],
  },

  {
    id: Math.random().toString().substr(2, 6),
    title: "Адрес:",
    desc: [
      {
        id: Math.random().toString().substr(2, 6),
        descText: `Узбекистан г.Самарканд`,
        href: "#",
      },
    ],
  },

  {
    id: Math.random().toString().substr(2, 6),
    title: "E-mail:",
    desc: [
      {
        id: Math.random().toString().substr(2, 6),
        descText: "info@itfactory.su",
        href: "mailto:softfactory.uz@gmail.com",
      },
    ],
  },
];
