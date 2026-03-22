// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  uz: {
    translation: {
      nav: {
        home: "Bosh sahifa",
        services: "Xizmatlar",
        gallery: "Galereya",
        about: "Biz haqimizda",
        contact: "Aloqa",
      },
      hero: {
        title: "Mohinur Lashes Studio",
        subtitle: "Sizning ko'zlaringiz mukammalligi",
        description:
          "Professional kirpik yapıştırma, eng yuqori sifat va individual yondashuv. Biz sizning tabiiy go'zalligingizni ta'kidlaymiz.",
        cta: "Band qilish",
        learnMore: "Batafsil",
      },
      services: {
        title: "Bizning Xizmatlar",
        subtitle: "Professional kirpik yapıştırma eng yuqori sifatda",
        classic: {
          title: "Klassik Kirpiklar",
          description:
            "Tabiiy va nafis ko'rinish, har bir tabiiy kirpik uchun bitta sun'iy kirpik",
        },
        volume: {
          title: "Volume Kirpiklar",
          description:
            "Hajmli va ifodali ko'rinish, bir nechta yengil sun'iy kirpiklar",
        },
        hybrid: {
          title: "Gibrid Kirpiklar",
          description: "Klassik va volume usullarining kombinatsiyasi",
        },
        mega: {
          title: "Mega Volume",
          description: "Maksimal hajm va dramatik effekt",
        },
      },
      gallery: {
        title: "Galereya",
        subtitle: "Ishlarimizdan namunalar",
      },
      about: {
        title: "Biz Haqimizda",
        description:
          "Mohinur Lash Studio - bu professional kirpik yapıştırma va individual yondashuv. Biz 5 yildan ortiq tajribaga egamiz va minglab mamnun mijozlarga xizmat ko'rsatganmiz. Bizning maqsadimiz - sizning tabiiy go'zalligingizni ta'kidlash va sizga o'zingizni ishonchli his qilish imkoniyatini yaratish.",
        experience: "Yillik Tajriba",
        clients: "Mamnun Mijozlar",
        masters: "Professional Ustalar",
      },
      contact: {
        title: "Biz bilan bog'laning",
        name: "Ism",
        email: "Email",
        message: "Xabar",
        send: "Yuborish",
        address: "Manzil",
        phone: "Telefon",
        hours: "Ish vaqti",
        hoursValue: "Dushanba - Shanba: 10:00 - 20:00",
      },
      auth: {
        login: "Kirish",
        register: "Ro'yxatdan o'tish",
      },
      footer: {
        rights: "Barcha huquqlar himoyalangan",
      },
    },
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        services: "Услуги",
        gallery: "Галерея",
        about: "О нас",
        contact: "Контакты",
      },
      hero: {
        title: "Mohinur Lashes Studio",
        subtitle: "Совершенство ваших глаз",
        description:
          "Профессиональное наращивание ресниц, высочайшее качество и индивидуальный подход. Мы подчеркиваем вашу естественную красоту.",
        cta: "Записаться",
        learnMore: "Узнать больше",
      },
      services: {
        title: "Наши Услуги",
        subtitle: "Профессиональное наращивание ресниц высочайшего качества",
        classic: {
          title: "Классические ресницы",
          description:
            "Естественный и элегантный вид, одна искусственная ресница на каждую натуральную",
        },
        volume: {
          title: "Объемные ресницы",
          description:
            "Объемный и выразительный взгляд, несколько легких искусственных ресниц",
        },
        hybrid: {
          title: "Гибридные ресницы",
          description: "Комбинация классического и объемного методов",
        },
        mega: {
          title: "Мега Объем",
          description: "Максимальный объем и драматический эффект",
        },
      },
      gallery: {
        title: "Галерея",
        subtitle: "Примеры наших работ",
      },
      about: {
        title: "О Нас",
        description:
          "Mohinur Lash Studio - это профессиональное наращивание ресниц и индивидуальный подход. Мы имеем более 5 лет опыта и обслужили тысячи довольных клиентов. Наша цель - подчеркнуть вашу естественную красоту и помочь вам чувствовать себя уверенно.",
        experience: "Лет Опыта",
        clients: "Довольных Клиентов",
        masters: "Профессиональных Мастеров",
      },
      contact: {
        title: "Свяжитесь с нами",
        name: "Имя",
        email: "Email",
        message: "Сообщение",
        send: "Отправить",
        address: "Адрес",
        phone: "Телефон",
        hours: "Часы работы",
        hoursValue: "Понедельник - Суббота: 10:00 - 20:00",
      },
      auth: {
        login: "Вход",
        register: "Регистрация",
      },
      footer: {
        rights: "Все права защищены",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        gallery: "Gallery",
        about: "About",
        contact: "Contact",
      },
      hero: {
        title: "Mohinur Lashes Studio",
        subtitle: "Perfection for Your Eyes",
        description:
          "Professional eyelash extensions, highest quality, and personalized approach. We enhance your natural beauty.",
        cta: "Book Now",
        learnMore: "Learn More",
      },
      services: {
        title: "Our Services",
        subtitle: "Professional eyelash extensions of the highest quality",
        classic: {
          title: "Classic Lashes",
          description:
            "Natural and elegant look, one extension per natural lash",
        },
        volume: {
          title: "Volume Lashes",
          description:
            "Voluminous and expressive look, multiple lightweight extensions",
        },
        hybrid: {
          title: "Hybrid Lashes",
          description: "Combination of classic and volume techniques",
        },
        mega: {
          title: "Mega Volume",
          description: "Maximum volume and dramatic effect",
        },
      },
      gallery: {
        title: "Gallery",
        subtitle: "Examples of our work",
      },
      about: {
        title: "About Us",
        description:
          "Mohinur Lash Studio is professional eyelash extensions with a personalized approach. We have over 5 years of experience and have served thousands of satisfied clients. Our goal is to enhance your natural beauty and help you feel confident.",
        experience: "Years Experience",
        clients: "Happy Clients",
        masters: "Professional Masters",
      },
      contact: {
        title: "Contact Us",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        address: "Address",
        phone: "Phone",
        hours: "Working Hours",
        hoursValue: "Monday - Saturday: 10:00 - 20:00",
      },
      auth: {
        login: "Login",
        register: "Register",
      },
      footer: {
        rights: "All rights reserved",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz", // Устанавливаем узбекский язык по умолчанию
    fallbackLng: "uz", // Если перевода нет, используем узбекский
    detection: {
      // Отключаем автоматическое определение языка браузера
      order: [],
      caches: [],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
