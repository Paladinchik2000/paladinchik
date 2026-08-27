export const locales = ['en', 'ru'] as const;
export const defaultLocale = 'en';

export type Locale = (typeof locales)[number];

/** A section key that maps 1:1 to a top-level route (`/about`, `/cinema`, ...). */
export const sectionKeys = ['about', 'cinema', 'library', 'places', 'projects', 'cv'] as const;
export type SectionKey = (typeof sectionKeys)[number];

export interface TextSection {
  title: string;
  body: string;
}

export interface SortOptionLabels {
  newest: string;
  oldest: string;
  rating: string;
  title: string;
}

export interface ArchiveFilterLabels {
  search: string;
  searchPlaceholder: string;
  filter: string;
  all: string;
  favorite: string;
  sort: string;
  empty: string;
  sortOptions: SortOptionLabels;
}

export interface CollectionCopy {
  eyebrow: string;
  title: string;
  description: string;
  ariaLabel: string;
}

/**
 * The full copy contract for one locale.
 *
 * Every locale must satisfy this interface, so a missing or renamed
 * translation is a build error rather than a page that silently falls back
 * to English (or to a raw key) in production.
 */
export interface Translations {
  nav: Record<
    'home' | 'about' | 'cinema' | 'library' | 'places' | 'projects' | 'cv' | 'now' | 'stats',
    string
  >;
  pages: Record<SectionKey | 'now' | 'stats', string>;
  common: {
    siteName: string;
    personalArchive: string;
    index: string;
    favorite: string;
    open: string;
    readNote: string;
    noCover: string;
    openProject: string;
    liveSite: string;
    github: string;
    builtWithAstro: string;
    footerArchive: string;
    breadcrumbHome: string;
    menu: string;
    skipToContent: string;
    primaryNavLabel: string;
    languageSwitcherLabel: string;
    homeLinkLabel: string;
    /** `{title}` is replaced with the entry title. */
    noteFallback: Record<'movie' | 'book' | 'place' | 'project', string>;
    back: Record<'cinema' | 'library' | 'places' | 'projects', string>;
  };
  footer: {
    navLabel: string;
    socialLabel: string;
  };
  home: {
    title: string;
    description: string;
    enterArchive: string;
    viewCv: string;
    sectionsTitle: string;
    sectionsDescription: string;
    sections: Record<SectionKey, { eyebrow: string; description: string }>;
  };
  about: {
    metaDescription: string;
    eyebrow: string;
    headline: string;
    intro: string;
    ariaLabel: string;
    viewCv: string;
    viewProjects: string;
    languagesTitle: string;
    /** `note` says where the language is actually used, so the list is checkable. */
    languages: { name: string; note: string }[];
    toolsTitle: string;
    tools: string[];
    workTitle: string;
    workNote: string;
    practicesTitle: string;
    practices: TextSection[];
    contactTitle: string;
    /** `{email}` is replaced with a mailto link. */
    contactBody: string;
    asideTitle: string;
    asideBody: string;
  };
  now: {
    metaDescription: string;
    eyebrow: string;
    intro: string;
    ariaLabel: string;
    sections: TextSection[];
  };
  cv: {
    metaDescription: string;
    eyebrow: string;
    tagline: string;
    downloadCv: string;
    viewProjects: string;
    ariaLabel: string;
    profileTitle: string;
    profileBody: string;
    focusTitle: string;
    focusItems: string[];
    skillsTitle: string;
    skills: string[];
    selectedProjectsTitle: string;
    timelineTitle: string;
    timeline: { year: string; body: string }[];
    contactTitle: string;
    /** `{email}` is replaced with a mailto link. */
    contactBody: string;
  };
  stats: {
    metaDescription: string;
    eyebrow: string;
    intro: string;
    ariaLabel: string;
    overviewTitle: string;
    decadesTitle: string;
    ratingsTitle: string;
    genresTitle: string;
    countriesTitle: string;
    highestRatedTitle: string;
    entries: string;
    films: string;
    /** `{decade}` is replaced with the starting year, e.g. 1990. */
    decadeLabel: string;
  };
  cinema: CollectionCopy & {
    filters: ArchiveFilterLabels;
    genresHeading: string;
    /** `{genre}` is replaced with the genre label. */
    genrePageTitle: string;
    genrePageDescription: string;
  };
  library: CollectionCopy & { filters: ArchiveFilterLabels };
  places: CollectionCopy & {
    photosEyebrow: string;
    galleryTitle: string;
    galleryEmpty: string;
    /** `{title}` and `{index}` are replaced. */
    galleryImageAlt: string;
    mapAriaLabel: string;
    mapEmpty: string;
    openPlace: string;
  };
  projects: CollectionCopy & {
    featuredEyebrow: string;
    featuredTitle: string;
    archiveEyebrow: string;
    allProjectsTitle: string;
    defaultStatus: string;
    stackTitle: string;
    highlightsTitle: string;
    noHighlights: string;
  };
}

const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    cinema: 'Cinema',
    library: 'Library',
    places: 'Places',
    projects: 'Projects',
    cv: 'CV',
    now: 'Now',
    stats: 'Stats',
  },
  pages: {
    about: 'About',
    cinema: 'Cinema',
    library: 'Library',
    places: 'Places',
    projects: 'Projects',
    cv: 'CV',
    now: 'Now',
    stats: 'Stats',
  },
  common: {
    siteName: 'Nikita Paladi',
    personalArchive: 'Personal Archive',
    index: 'Index',
    favorite: 'Favorite',
    open: 'Open',
    readNote: 'Read note',
    noCover: 'No cover',
    openProject: 'Read project',
    liveSite: 'Live Site',
    github: 'GitHub',
    builtWithAstro: 'Built with Astro.',
    footerArchive: 'Personal archive.',
    breadcrumbHome: 'Home',
    menu: 'Menu',
    skipToContent: 'Skip to content',
    primaryNavLabel: 'Primary navigation',
    languageSwitcherLabel: 'Language switcher',
    homeLinkLabel: 'Nikita Paladi home',
    noteFallback: {
      movie: '{title} film note.',
      book: '{title} book note.',
      place: '{title} place note.',
      project: '{title} project note.',
    },
    back: {
      cinema: 'Back to cinema',
      library: 'Back to library',
      places: 'Back to places',
      projects: 'Back to projects',
    },
  },
  footer: {
    navLabel: 'Footer navigation',
    socialLabel: 'Social links',
  },
  home: {
    title: 'Nikita Paladi',
    description: 'A personal archive of films, books, places, projects, and ideas.',
    enterArchive: 'Enter Archive',
    viewCv: 'View CV',
    sectionsTitle: 'Archive sections',
    sectionsDescription: 'Quiet rooms for personal notes, references, reviews, and selected work.',
    sections: {
      about: { eyebrow: 'Profile', description: 'A concise note on background, interests, and current direction.' },
      cinema: { eyebrow: 'Reviews', description: 'Films watched, remembered, questioned, or returned to.' },
      library: { eyebrow: 'Reading', description: 'Books, notes, ideas, and short reflections I want to remember.' },
      places: { eyebrow: 'Travel', description: 'Visited cities and places, collected as an evolving archive.' },
      projects: { eyebrow: 'Making', description: 'Selected work, experiments, and things currently being built.' },
      cv: { eyebrow: 'Work', description: 'A compact overview of experience, projects, and skills.' },
    },
  },
  about: {
    metaDescription:
      'Nikita Paladi — web and Android developer. Languages, tools, and the projects behind them.',
    eyebrow: 'Profile',
    headline: 'I build small, durable products and ship them.',
    intro:
      'I work across the web and native Android: a live business site handling real bookings, an offline-first password manager, and this bilingual archive of around 150 entries. I care about the parts that outlast a launch — structure, accessibility, and pages that stay fast as they grow.',
    ariaLabel: 'Profile',
    viewCv: 'View CV',
    viewProjects: 'See projects',
    languagesTitle: 'Languages',
    languages: [
      { name: 'TypeScript', note: 'This archive — strict types across content, routing, and build tooling.' },
      { name: 'Kotlin', note: 'Obscura — a native Android password manager, Jetpack Compose.' },
      { name: 'JavaScript', note: 'TireBuddy — a React front end with a live booking flow.' },
      { name: 'HTML & CSS', note: 'Hand-written layout systems, no UI framework.' },
      { name: 'GLSL', note: 'The animated background shader on this site.' },
    ],
    toolsTitle: 'Tools & frameworks',
    tools: [
      'Astro',
      'React',
      'Jetpack Compose',
      'Vite',
      'Tailwind CSS',
      'Room + SQLCipher',
      'Leaflet',
      'three.js',
      'Zod',
      'MDX',
      'Git',
      'Gradle',
    ],
    workTitle: 'Selected work',
    workNote: 'Each entry lists its stack, role, and what the work involved.',
    practicesTitle: 'How I work',
    practices: [
      {
        title: 'Bilingual by construction',
        body: 'Every page exists in English and Russian from a single template, with translations enforced by the type system — a missing one fails the build instead of shipping the wrong language.',
      },
      {
        title: 'Built to be found',
        body: 'Structured data, canonical URLs and hreflang pairs, generated sitemaps, and an image pipeline that serves responsive WebP with the right dimensions.',
      },
      {
        title: 'Light and accessible',
        body: 'Keyboard focus, skip links, and reduced-motion support as defaults. Most pages ship under 10KB of JavaScript; heavy libraries load only where they are used.',
      },
    ],
    contactTitle: 'Get in touch',
    contactBody: 'Available for web development and front-end work. Write to {email}.',
    asideTitle: 'Away from the screen',
    asideBody: 'Table tennis, cycling, and mountain hiking. The rest of this archive — films, books, and places — is the non-work half.',
  },
  now: {
    metaDescription: 'A short current-status page for Nikita Paladi and the personal archive.',
    eyebrow: 'Now',
    intro: 'Current focus, active projects, and the ideas shaping this archive.',
    ariaLabel: 'Now sections',
    sections: [
      {
        title: 'Current focus',
        body: 'Building out the personal archive, improving its content structure, and keeping the site calm and durable.',
      },
    ],
  },
  cv: {
    metaDescription: 'Personal archive, creative projects, product experiments, and web development.',
    eyebrow: 'CV',
    tagline: 'Personal archive, creative projects, product experiments, and web development.',
    downloadCv: 'Download CV',
    viewProjects: 'View Projects',
    ariaLabel: 'CV sections',
    profileTitle: 'Profile',
    profileBody:
      'A concise overview of my current direction: web development, AI tools, social media, creative projects, and practical prototype work. I am a beginner programmer, so this CV focuses on what I am building, learning, and documenting honestly.',
    focusTitle: 'Focus Areas',
    focusItems: [
      'Personal knowledge archives and content systems',
      'Web interfaces, AI-assisted workflows, and prototype structure',
      'Creative projects, social media ideas, and personal documentation',
    ],
    skillsTitle: 'Skills',
    skills: ['Astro', 'MDX', 'TypeScript', 'CSS', 'Content modeling', 'Interface design', 'Editing'],
    selectedProjectsTitle: 'Selected Projects',
    timelineTitle: 'Experience / Timeline',
    timeline: [
      { year: '2026', body: 'Building the bilingual personal archive and improving its content structure.' },
      { year: '2025', body: 'Learning through small prototypes, interface ideas, and practical web experiments.' },
    ],
    contactTitle: 'Contact',
    contactBody: 'For contact, write to {email}.',
  },
  stats: {
    metaDescription:
      'How the archive breaks down: films by decade, rating spread, common genres, and places by country.',
    eyebrow: 'Overview',
    intro: 'What the archive currently holds, counted.',
    ariaLabel: 'Archive statistics',
    overviewTitle: 'At a glance',
    decadesTitle: 'Films by decade',
    ratingsTitle: 'Rating spread',
    genresTitle: 'Most common genres',
    countriesTitle: 'Places by country',
    highestRatedTitle: 'Rated 10',
    entries: 'entries',
    films: 'films',
    decadeLabel: '{decade}s',
  },
  cinema: {
    eyebrow: 'Reviews',
    title: 'Cinema',
    description: 'Films that shaped my taste, mood, and way of seeing stories.',
    ariaLabel: 'Cinema entries',
    filters: {
      search: 'Search',
      searchPlaceholder: 'Search films, notes, or genres',
      filter: 'Genre',
      all: 'All genres',
      favorite: 'Favorites only',
      sort: 'Sort',
      empty: 'No entries match your filters.',
      sortOptions: {
        newest: 'Newest first',
        oldest: 'Oldest first',
        rating: 'Highest rated',
        title: 'Title A-Z',
      },
    },
    genresHeading: 'Browse by genre',
    genrePageTitle: '{genre} films',
    genrePageDescription: 'Every film in the archive tagged {genre}.',
  },
  library: {
    eyebrow: 'Reading',
    title: 'Library',
    description: 'Books, notes, ideas, and short reflections I want to remember.',
    ariaLabel: 'Library entries',
    filters: {
      search: 'Search',
      searchPlaceholder: 'Search books, authors, notes, or genres',
      filter: 'Genre',
      all: 'All genres',
      favorite: 'Favorites only',
      sort: 'Sort',
      empty: 'No entries match your filters.',
      sortOptions: {
        newest: 'Newest first',
        oldest: 'Oldest first',
        rating: 'Highest rated',
        title: 'Title A-Z',
      },
    },
  },
  places: {
    eyebrow: 'Travel',
    title: 'Places',
    description:
      'A personal map of cities and places I have visited, with notes, photos, and impressions collected along the way.',
    ariaLabel: 'Places entries',
    photosEyebrow: 'Photos',
    galleryTitle: 'Gallery',
    galleryEmpty: 'This place is currently saved as a text note without a separate gallery.',
    galleryImageAlt: '{title} gallery image {index}',
    mapAriaLabel: 'Places map',
    mapEmpty: 'No mapped places available.',
    openPlace: 'Open place',
  },
  projects: {
    eyebrow: 'Making',
    title: 'Projects',
    description: 'A workspace for things I am building, testing, and learning from.',
    ariaLabel: 'Projects entries',
    featuredEyebrow: 'Featured',
    featuredTitle: 'Featured projects',
    archiveEyebrow: 'Archive',
    allProjectsTitle: 'All projects',
    defaultStatus: 'Project',
    stackTitle: 'Stack',
    highlightsTitle: 'Highlights',
    noHighlights: 'No separate highlights are recorded for this entry.',
  },
};

const ru: Translations = {
  nav: {
    home: 'Главная',
    about: 'Обо мне',
    cinema: 'Кино',
    library: 'Библиотека',
    places: 'Места',
    projects: 'Проекты',
    cv: 'CV',
    now: 'Сейчас',
    stats: 'Статистика',
  },
  pages: {
    about: 'Обо мне',
    cinema: 'Кино',
    library: 'Библиотека',
    places: 'Места',
    projects: 'Проекты',
    cv: 'CV',
    now: 'Сейчас',
    stats: 'Статистика',
  },
  common: {
    siteName: 'Nikita Paladi',
    personalArchive: 'Личный архив',
    index: 'Индекс',
    favorite: 'Избранное',
    open: 'Открыть',
    readNote: 'Читать заметку',
    noCover: 'Без обложки',
    openProject: 'Открыть проект',
    liveSite: 'Сайт',
    github: 'GitHub',
    builtWithAstro: 'Сделано на Astro.',
    footerArchive: 'Личный архив.',
    breadcrumbHome: 'Главная',
    menu: 'Меню',
    skipToContent: 'Перейти к содержимому',
    primaryNavLabel: 'Основная навигация',
    languageSwitcherLabel: 'Переключатель языка',
    homeLinkLabel: 'Nikita Paladi, на главную',
    noteFallback: {
      movie: '{title}: заметка о фильме.',
      book: '{title}: заметка о книге.',
      place: '{title}: заметка о месте.',
      project: '{title}: заметка о проекте.',
    },
    back: {
      cinema: 'Назад к кино',
      library: 'Назад в библиотеку',
      places: 'Назад к местам',
      projects: 'Назад к проектам',
    },
  },
  footer: {
    navLabel: 'Навигация в подвале',
    socialLabel: 'Ссылки на соцсети',
  },
  home: {
    title: 'Nikita Paladi',
    description: 'Личный архив фильмов, книг, мест, проектов и идей.',
    enterArchive: 'Войти в архив',
    viewCv: 'Смотреть CV',
    sectionsTitle: 'Разделы архива',
    sectionsDescription: 'Спокойные разделы для заметок, ссылок, отзывов и выбранных работ.',
    sections: {
      about: { eyebrow: 'Профиль', description: 'Коротко о моем фоне, интересах и текущем направлении.' },
      cinema: { eyebrow: 'Отзывы', description: 'Фильмы, которые повлияли на вкус, настроение и взгляд на истории.' },
      library: {
        eyebrow: 'Чтение',
        description: 'Книги, заметки, идеи и короткие размышления, которые хочется сохранить.',
      },
      places: { eyebrow: 'Путешествия', description: 'Города и места из поездок, собранные в личную карту.' },
      projects: { eyebrow: 'Работа', description: 'Избранные работы, эксперименты и проекты, которые я развиваю.' },
      cv: { eyebrow: 'CV', description: 'Краткий обзор опыта, проектов, навыков и текущего фокуса.' },
    },
  },
  about: {
    metaDescription:
      'Nikita Paladi — веб- и Android-разработчик. Языки, инструменты и проекты за ними.',
    eyebrow: 'Профиль',
    headline: 'Делаю небольшие продукты и довожу их до запуска.',
    intro:
      'Работаю с вебом и нативным Android: рабочий сайт бизнеса с реальными заявками, офлайн-менеджер паролей и этот двуязычный архив примерно на 150 записей. Мне важно то, что живёт дольше запуска: структура, доступность и страницы, которые остаются быстрыми по мере роста.',
    ariaLabel: 'Профиль',
    viewCv: 'Смотреть CV',
    viewProjects: 'Проекты',
    languagesTitle: 'Языки',
    languages: [
      { name: 'TypeScript', note: 'Этот архив — строгая типизация контента, маршрутов и сборки.' },
      { name: 'Kotlin', note: 'Obscura — нативный менеджер паролей для Android, Jetpack Compose.' },
      { name: 'JavaScript', note: 'TireBuddy — фронтенд на React с рабочей формой записи.' },
      { name: 'HTML и CSS', note: 'Собственные системы вёрстки, без UI-фреймворка.' },
      { name: 'GLSL', note: 'Шейдер анимированного фона на этом сайте.' },
    ],
    toolsTitle: 'Инструменты и фреймворки',
    tools: [
      'Astro',
      'React',
      'Jetpack Compose',
      'Vite',
      'Tailwind CSS',
      'Room + SQLCipher',
      'Leaflet',
      'three.js',
      'Zod',
      'MDX',
      'Git',
      'Gradle',
    ],
    workTitle: 'Избранные работы',
    workNote: 'В каждой записи указаны стек, роль и суть работы.',
    practicesTitle: 'Как я работаю',
    practices: [
      {
        title: 'Двуязычность по устройству',
        body: 'Каждая страница существует на английском и русском из одного шаблона, а переводы проверяет система типов: пропущенный ключ ломает сборку, а не уезжает в продакшн.',
      },
      {
        title: 'Чтобы находили',
        body: 'Микроразметка, канонические адреса и пары hreflang, генерируемые карты сайта и конвейер изображений с адаптивным WebP и корректными размерами.',
      },
      {
        title: 'Легко и доступно',
        body: 'Фокус с клавиатуры, ссылки перехода к содержимому и поддержка reduced-motion по умолчанию. Большинство страниц отдаёт меньше 10 КБ JavaScript, тяжёлые библиотеки грузятся только там, где нужны.',
      },
    ],
    contactTitle: 'Связаться',
    contactBody: 'Открыт к веб-разработке и фронтенд-задачам. Пишите на {email}.',
    asideTitle: 'Вне экрана',
    asideBody: 'Настольный теннис, велосипед и походы в горы. Остальная часть архива — фильмы, книги и места — это нерабочая половина.',
  },
  now: {
    metaDescription: 'Короткая страница текущего фокуса Nikita Paladi и личного архива.',
    eyebrow: 'Сейчас',
    intro: 'Текущий фокус, активные проекты и идеи, которые сейчас формируют архив.',
    ariaLabel: 'Сейчас',
    sections: [
      {
        title: 'Текущий фокус',
        body: 'Развитие личного архива, улучшение структуры контента и спокойная, долговечная форма сайта.',
      },
    ],
  },
  cv: {
    metaDescription: 'Личный архив, творческие проекты, продуктовые эксперименты и веб-разработка.',
    eyebrow: 'CV',
    tagline: 'Личный архив, творческие проекты, продуктовые эксперименты и веб-разработка.',
    downloadCv: 'Скачать CV',
    viewProjects: 'Смотреть проекты',
    ariaLabel: 'CV',
    profileTitle: 'Профиль',
    profileBody:
      'Краткий обзор моего текущего направления: веб-разработка, AI-инструменты, социальные медиа, творческие проекты и практическая работа с прототипами. Я начинающий программист, поэтому CV честно показывает то, что я сейчас строю, изучаю и собираю.',
    focusTitle: 'Фокус',
    focusItems: [
      'Личные архивы знаний и системы контента',
      'Веб-интерфейсы, AI-процессы и структура прототипов',
      'Творческие проекты, идеи для социальных медиа и личная документация',
    ],
    skillsTitle: 'Навыки',
    skills: ['Astro', 'MDX', 'TypeScript', 'CSS', 'Моделирование контента', 'Дизайн интерфейсов', 'Редактура'],
    selectedProjectsTitle: 'Избранные проекты',
    timelineTitle: 'Опыт / Таймлайн',
    timeline: [
      { year: '2026', body: 'Разработка двуязычного личного архива и улучшение структуры контента.' },
      { year: '2025', body: 'Обучение через небольшие прототипы, интерфейсные идеи и практические веб-эксперименты.' },
    ],
    contactTitle: 'Контакты',
    contactBody: 'Для связи: {email}.',
  },
  stats: {
    metaDescription:
      'Из чего состоит архив: фильмы по десятилетиям, разброс оценок, частые жанры и места по странам.',
    eyebrow: 'Обзор',
    intro: 'Что сейчас собрано в архиве, в цифрах.',
    ariaLabel: 'Статистика архива',
    overviewTitle: 'Коротко',
    decadesTitle: 'Фильмы по десятилетиям',
    ratingsTitle: 'Разброс оценок',
    genresTitle: 'Частые жанры',
    countriesTitle: 'Места по странам',
    highestRatedTitle: 'Оценка 10',
    entries: 'записей',
    films: 'фильмов',
    decadeLabel: '{decade}-е',
  },
  cinema: {
    eyebrow: 'Отзывы',
    title: 'Кино',
    description: 'Фильмы, которые повлияли на мой вкус, настроение и взгляд на истории.',
    ariaLabel: 'Записи о кино',
    filters: {
      search: 'Поиск',
      searchPlaceholder: 'Искать фильмы, заметки или жанры',
      filter: 'Жанр',
      all: 'Все жанры',
      favorite: 'Только избранное',
      sort: 'Сортировка',
      empty: 'Нет записей по выбранным фильтрам.',
      sortOptions: {
        newest: 'Сначала новые',
        oldest: 'Сначала старые',
        rating: 'С высокой оценкой',
        title: 'По названию',
      },
    },
    genresHeading: 'По жанрам',
    genrePageTitle: '{genre}: фильмы',
    genrePageDescription: 'Все фильмы архива с жанром «{genre}».',
  },
  library: {
    eyebrow: 'Чтение',
    title: 'Библиотека',
    description: 'Книги, заметки, идеи и короткие размышления, которые хочется сохранить.',
    ariaLabel: 'Записи библиотеки',
    filters: {
      search: 'Поиск',
      searchPlaceholder: 'Искать книги, авторов, заметки или жанры',
      filter: 'Жанр',
      all: 'Все жанры',
      favorite: 'Только избранное',
      sort: 'Сортировка',
      empty: 'Нет записей по выбранным фильтрам.',
      sortOptions: {
        newest: 'Сначала новые',
        oldest: 'Сначала старые',
        rating: 'С высокой оценкой',
        title: 'По названию',
      },
    },
  },
  places: {
    eyebrow: 'Путешествия',
    title: 'Места',
    description: 'Личная карта городов и мест, где я был: заметки, фотографии и впечатления, собранные по пути.',
    ariaLabel: 'Записи о местах',
    photosEyebrow: 'Фото',
    galleryTitle: 'Галерея',
    galleryEmpty: 'Для этого места сохранена текстовая заметка без отдельной галереи.',
    galleryImageAlt: '{title}: изображение {index}',
    mapAriaLabel: 'Карта мест',
    mapEmpty: 'Нет мест с координатами.',
    openPlace: 'Открыть место',
  },
  projects: {
    eyebrow: 'Работа',
    title: 'Проекты',
    description: 'Рабочее пространство для идей, экспериментов и проектов, которые я создаю.',
    ariaLabel: 'Записи о проектах',
    featuredEyebrow: 'Избранное',
    featuredTitle: 'Избранные проекты',
    archiveEyebrow: 'Архив',
    allProjectsTitle: 'Все проекты',
    defaultStatus: 'Проект',
    stackTitle: 'Стек',
    highlightsTitle: 'Ключевые моменты',
    noHighlights: 'Для этой записи ключевые моменты отдельно не выделены.',
  },
};

export const ui: Record<Locale, Translations> = { en, ru };
