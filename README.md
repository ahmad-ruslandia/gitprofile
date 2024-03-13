<br/>

<p align="center">
  <img src="https://user-images.githubusercontent.com/45073703/177566625-9b84e793-4559-4475-ba54-8d3d5f4123d4.png" width="35%">

  <h4 align="center">Easy to use automatic portfolio builder for every GitHub user!</h4>

  <p align="center">
    <a href="https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio/issues">
      <img src="https://img.shields.io/github/issues/ahmad-ruslandia/ahmadruslandia-portfolio"/>
    </a>
    <a href="https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio/stargazers">
      <img src="https://img.shields.io/github/stars/ahmad-ruslandia/ahmadruslandia-portfolio"/>
    </a>
    <a href="https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio/network/members">
      <img src="https://img.shields.io/github/forks/ahmad-ruslandia/ahmadruslandia-portfolio"/>
    </a>
    <a href="https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio/commits/main">
      <img src="https://img.shields.io/github/last-commit/ahmad-ruslandia/ahmadruslandia-portfolio/main"/>
    </a>
    <a href="https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio/blob/main/CONTRIBUTING.md">
      <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/>
    </a>
    <a href="https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/ahmad-ruslandia/ahmadruslandia-portfolio"/>
    </a>
    <a href="https://twitter.com/intent/tweet?text=Check%20out%20the%20portfolio%20builder.%20Create%20an%20automatic%20portfolio%20based%20on%20GitHub%20profile.&url=https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio&hashtags=javascript,opensource,js,webdev,developers">
      <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fahmad-ruslandia%2Fahmadruslandia-portfolio"/>
    </a>
  </p>

  <p align="center">
    <a href="https://ahmadruslandia-portfolio.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio/discussions">Request Feature</a>
  </p>
</p>

**GitProfile** is a powerful portfolio builder that allows you to create a stunning and personalized portfolio site in minutes, even if you have no coding experience. Simply provide your GitHub username, and GitProfile will automatically generate a portfolio. Best of all, you can easily deploy your portfolio to GitHub Pages with just a few clicks, making it accessible to the world in no time.

**Features:**

✓ [Easy to Setup](#-installation--setup)  
✓ [33 Themes](#themes)  
✓ [Google Analytics](#google-analytics)  
✓ [Hotjar](#hotjar)  
✓ [SEO](#seo)  
✓ [PWA](#pwa)  
✓ [Avatar and Bio](#avatar-and-bio)  
✓ [Social Links](#social-links)  
✓ [Skill Section](#skills)  
✓ [Experience Section](#experience)  
✓ [Certification Section](#certifications)  
✓ [Education Section](#education)  
✓ [Projects Section](#projects)  
✓ [Blog Posts Section](#blog-posts)

To view a live example, **[click here](https://ahmadruslandia-portfolio.vercel.app/)**.

## 🛠 Installation & Setup

There are three ways to use **GitProfile**. Use any.

- [Forking this repo _(recommended)_](#forking-this-repo)
- [Setting up locally](#setting-up-locally)

### Forking this repo

These instructions will get you a copy of the project and deploy your portfolio online using GitHub Pages!

- **Fork repo:** Click [here](https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio/fork) to fork the repo so you have your own project to customize. A "fork" is a copy of a repository.
- **Rename repo:**
  - If you want to host your portfolio at `https://<USERNAME>.github.io`, rename your forked repository to `username.github.io` in GitHub, where `username` is your GitHub username (or organization name).
  - If you want to host your portfolio at `https://<USERNAME>.github.io/<REPO_NAME>` (e.g. `https://<USERNAME>.github.io/portfolio`), rename your forked repository to `<REPO_NAME>` (e.g. `portfolio`) in GitHub.
- **Enable workflows:** Go to your repo's **Actions** tab and enable workflows.

- **Base Value:** Open `gitprofile.config.ts`, and change `base`'s value.

  - If you are deploying to `https://<USERNAME>.github.io`, set `base` to `'/'`.

  - If you are deploying to `https://<USERNAME>.github.io/<REPO_NAME>` (e.g. `https://<USERNAME>.github.io/ahmadruslandia-portfolio`), then set `base` to `'/<REPO_NAME>/'` (e.g. `'/ahmadruslandia-portfolio/'`).

  ```ts
  // gitprofile.config.ts
  {
    base: '/',
    // ...
  }
  ```

- **Commit the changes:** Now commit to your **main** branch with your changes. Wait a few minutes so that the CI/CD pipeline can publish your website to GitHub Pages. You can check the progress in the [Actions](https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio/actions) tab.

Your portfolio website will be live shortly. Any time you commit a change to the **main** branch, the website will be automatically updated. If you face any issue viewing the website, double-check the `base` value in the `gitprofile.config.ts` file. Also, check if **Source** is set to **GitHub Actions** in **Settings** ➜ **Pages** ➜ **Build and deployment**.

If you wish to add a custom domain, no CNAME file is required. Just add it to your repo's **Settings** ➜ **Pages** ➜ **Custom domain**.

As this is a Vite project, you can also host your website to Netlify, Vercel, Heroku, or other popular services. Please refer to this [doc](https://vitejs.dev/guide/static-deploy.html) for a detailed deployment guide to other services.

### Setting up locally

- Clone the project and change directory.

  ```shell
  git clone https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio.git
  cd ahmadruslandia-portfolio
  ```

- Install dependencies.

  ```shell
  npm install
  ```

- Run dev server.

  ```shell
  npm run dev
  ```

- Finally, visit [`http://localhost:5173/ahmadruslandia-portfolio/`] from your browser.

## 🎨 Customization

All the magic happens in the file `gitprofile.config.ts`. Open it and modify it according to your preference.

```ts
// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ahmad-ruslandia', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/ahmad-ruslandia/ahmad-ruslandia.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio, then set base to '/ahmadruslandia-portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['ahmad-ruslandia/my-project1', 'ahmad-ruslandia/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'ahmad-ruslandia/ahmadruslandia-portfolio',
          'ahmad-ruslandia/pandora',
        ], // List of repository names to display. example: ['ahmad-ruslandia/my-project1', 'ahmad-ruslandia/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          link: 'https://example.com',
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
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: 'https://example.com', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [' ', ' ', ' '],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution name 1',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution name 2',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
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
      class="text-primary" href="https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
```

### Themes

There are 33 themes available that can be selected from the dropdown.

The default theme can be specified.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  themeConfig: {
    defaultTheme: 'business',
    // ...
  },
};
```

You can create your own custom theme by modifying these values. Theme `procyon` will have the custom styles.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  themeConfig: {
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
    // ...
  },
};
```

### Google Analytics

**GitProfile** supports both GA3 and GA4. If you do not want to use Google Analytics, keep the `id` empty.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  googleAnalytics: {
    id: '',
  },
};
```

Besides tracking visitors, it will track `click events` on projects and blog posts, and send them to Google Analytics.

### Hotjar

**GitProfile** supports [hotjar](https://www.hotjar.com) to track visitor interaction and behavior. If you do not want to use Hotjar, keep the `id` empty.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
};
```

### SEO

You can customize the meta tags for SEO in `seo`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  seo: {
    title: 'Portfolio',
    description: '',
    imageURL: '',
  },
};
```

### PWA

GitProfile is PWA enabled. The site can be installed as a Progressive Web App. To turn it off, set `enablePWA` to `false`.

### Avatar and Bio

Your avatar and bio will be fetched from GitHub automatically.

### Social Links

You can link your social media services you're using, including LinkedIn, Twitter, Mastodon, Facebook, Instagram, YouTube, Dribbble, Behance, Medium, dev, Stack Overflow, Skype, Telegram, personal website, phone and email.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
};
```

### Skills

To showcase your skills provide them here.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  skills: ['JavaScript', 'React.js'],
};
```

Empty array will hide the skills section.

### Experience

Provide your job history in `experiences`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
};
```

Empty array will hide the experience section.

### Education

Provide your education history in `educations`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  educations: [
    {
      institution: 'Institution name 1',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution name 2',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
  ],
};
```

Empty array will hide the education section.

### Certifications

Provide your industry certifications in `certifications`.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
};
```

Empty array will hide the certifications section.

### Projects

#### Github Projects

- **Automatic Mode:** Seamlessly showcase your top GitHub projects based on stars or last updated date.
- **Manual Mode:** Choose specific repositories to highlight.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
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
        projects: [
          'ahmad-ruslandia/ahmadruslandia-portfolio',
          'ahmad-ruslandia/pandora',
        ], // List of repository names to display. example: ['ahmad-ruslandia/my-project1', 'ahmad-ruslandia/my-project2']
      },
    },
  },
};
```

#### External Projects

- **Highlight Projects Beyond GitHub:** Feature projects hosted on other platforms or personal websites.
- **Control over Content:** Provide custom titles, descriptions, images, and links for each external project.

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  projects: {
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          link: 'https://example.com',
        },
      ],
    },
  },
};
```

### Blog Posts

If you have [medium](https://medium.com) or [dev](https://dev.to) account, you can show your recent blog posts in here just by providing your medium/dev username. You can limit how many posts to display (Max is `10`).

```ts
// gitprofile.config.ts
const CONFIG = {
  // ...
  blog: {
    source: '',
    username: '',
    limit: 3,
  },
};
```

The posts are fetched by [blog.js](https://github.com/arifszn/blog.js).

## 💖 Support

<p>You can show your support by starring this project. ★</p>
<a href="https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio/stargazers">
  <img src="https://img.shields.io/github/stars/ahmad-ruslandia/ahmadruslandia-portfolio?style=social" alt="Github Star">
</a>

## 💡 Contribute

To contribute, see the [Contributing guide](https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio/blob/main/CONTRIBUTING.md).

## 📄 License

[MIT](https://github.com/ahmad-ruslandia/ahmadruslandia-portfolio/blob/main/LICENSE)
