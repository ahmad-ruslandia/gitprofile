// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ahmad-ruslandia', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/ahmad-ruslandia/ahmad-ruslandia.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/ahmad-ruslandia/ahmad-ruslandia-portfolio, then set base to '/ahmad-ruslandia-portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['ahmad-ruslandia/my-project1', 'ahmad-ruslandia/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ahmad-ruslandia/gitprofile', 'ahmad-ruslandia/pandora'], // List of repository names to display. example: ['ahmad-ruslandia/my-project1', 'ahmad-ruslandia/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Sandvik-Asset-CI',
          description:
            'This is the final project during an internship at Sandvik, this project is useful for managing assets at the company.',

          link: 'https://github.com/ahmad-ruslandia/Sandvik-Asset-CI',
        },
        {
          title: 'Tutorial',
          description:
            'This is an independent project, this project contains basic programming tutorials.',
          link: 'https://github.com/ahmad-ruslandia/Tutorial',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ahmad-ruslandia-papua',
    twitter: '',
    mastodon: '',
    facebook: 'ahmadruslandiapapua',
    instagram: 'ahmadruslandia',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'linktr.ee/ahmadruslandia',
    phone: '',
    email: 'ruslandiaamin@gmail.com',
  },
  resume: {
    fileUrl:
      'https://ahmadruslandia-resume.vercel.app', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Git',
    'Visual Studio Code',
    'Visual Studio',
    '.Net MAUI',
    '.Net',
    'Flutter',
    'Laravel',
    'Bootstrap',
    'CodeIgniter',
    'Node JS',
    'Angular JS',
    'React JS',
    'Vue JS',
    'Blazor',
    'My SQL',
    'SQLite',
    'SQL Server',
  ],
  experiences: [
    {
      company: 'Sandvik',
      position: 'IT Support',
      from: 'June 2023',
      to: 'August 2023',
    },
    {
      company: 'ABP Incubator',
      position: 'Apprenticeship',
      from: 'November 2018',
      to: 'January 2019',
    },
  ],
  certifications: [
    {
      name: 'Achievement',
      body: 'All Certificates are available on the Drive, Click to review the Certificates',
      year: 'Present',
      link: 'https://drive.google.com/drive/folders/1K3B1mKANgJALvuwSSmAYTlb8XP1fPRZ0?usp=sharing',
    },
  ],
  educations: [
    {
      institution: 'Universitas Muslim Indonesia',
      degree: 'Bachelor degree',
      from: '2020',
      to: '2024',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'ahmadruslandia', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/ahmad-ruslandia/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
