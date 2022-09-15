<div align="center">

  <img src="public/react.svg" alt="logo" width="50" height="auto" />
  <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg" alt="logo" height="50" />

  <h1>React Template Demo</h1>

  <p>
    A simple demo for React template using Poké API
  </p>

<!-- Badges -->
<p>
  <a href="https://github.com/DuckyMomo20012/react-template-demo/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/DuckyMomo20012/react-template-demo" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/DuckyMomo20012/react-template-demo" alt="last update" />
  </a>
  <a href="https://github.com/DuckyMomo20012/react-template-demo/network/members">
    <img src="https://img.shields.io/github/forks/DuckyMomo20012/react-template-demo" alt="forks" />
  </a>
  <a href="https://github.com/DuckyMomo20012/react-template-demo/stargazers">
    <img src="https://img.shields.io/github/stars/DuckyMomo20012/react-template-demo" alt="stars" />
  </a>
  <a href="https://github.com/DuckyMomo20012/react-template-demo/issues/">
    <img src="https://img.shields.io/github/issues/DuckyMomo20012/react-template-demo" alt="open issues" />
  </a>
  <a href="https://github.com/DuckyMomo20012/react-template-demo/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/DuckyMomo20012/react-template-demo.svg" alt="license" />
  </a>
</p>

<h4>
    <a href="https://github.com/DuckyMomo20012/react-template-demo/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/DuckyMomo20012/react-template-demo">Documentation</a>
  <span> · </span>
    <a href="https://github.com/DuckyMomo20012/react-template-demo/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/DuckyMomo20012/react-template-demo/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [Features](#dart-features)
  - [Color Reference](#art-color-reference)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Run Locally](#running-run-locally)
- [Usage](#eyes-usage)
- [Roadmap](#compass-roadmap)
- [Contributing](#wave-contributing)
  - [Code of Conduct](#scroll-code-of-conduct)
- [FAQ](#grey_question-faq)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

<div align="center">
  <p>Light mode</p>
  <img src="https://user-images.githubusercontent.com/64480713/190435038-f3799fbd-4ce8-4d48-b516-7bbfdbecaf35.png" alt="screenshot" />
  <p>Dark mode</p>
  <img src="https://user-images.githubusercontent.com/64480713/190435012-b885a542-1fce-4fca-ae93-1f3f93b152d4.png" alt="screenshot_dark_mode" />
</div>

<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.javascript.com/">Javascript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://reactrouter.com/">React Router</a></li>
    <li><a href="https://redux-toolkit.js.org/">Redux Toolkit</a></li>
    <li><a href="https://tanstack.com/query/v4">TanStack Query</a></li>
    <li><a href="https://react-hook-form.com/">React Hook Form</a></li>
    <li><a href="https://windicss.org/">WindiCSS</a></li>
    <li><a href="https://mantine.dev/">Mantine</a></li>
    <li><a href="https://eslint.org/">ESLint</a></li>
    <li><a href="https://prettier.io/">Prettier</a></li>
    <li><a href="https://vitejs.dev/">Vite</a></li>
    <li><a href="https://iconify.design/">Iconify</a></li>
  </ul>
</details>

<!-- Features -->

### :dart: Features

- Demo `React Router` with routes:

  - `/` - Home page.
  - `/contact` - Contact page.
  - `/auth/login` - Login page.
  - `/auth/register` - Register page.

- Demo `Redux Toolkit` with Pokemon index "counter":

  - `⏫` - Increment index.
  - `⏬` - Decrement index.
  - `🔄` - Reset index.

- Demo `TanStack Query` with [Poké API](https://pokeapi.co/):

  - Prefetch data (10 Pokemon per page).
  - Search Pokemon.

- Demo `React Hook Form` with a fake login form.

- Demo `React` with two custom hooks:

  - `useDebounce` - Debounce user input in search bar.
  - `useImageLoad` - Watch image loading state and detect `src` changes.

- Demo pre-commit hooks with `husky` and `lint-staged`. And lint commit messages
  with `commitlint`.

- Override `Mantine` theme (fonts, colors,...) with `WindiCSS`.
- UI components using `Mantine`.
- Icons using `Iconify`.
- Styling using `WindiCSS`.

<!-- Color Reference -->

### :art: Color Reference

| Color         | Hex                                                              |
| ------------- | ---------------------------------------------------------------- |
| Primary Color | ![#2563EB](https://placehold.jp/2563EB/2563EB/10x10.png) #2563EB |

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

This project uses [Yarn](https://yarnpkg.com/) as package manager:

```bash
npm install --global yarn
```

<!-- Run Locally -->

### :running: Run Locally

Clone the project:

```bash
git clone https://github.com/DuckyMomo20012/react-template-demo.git
```

Go to the project directory:

```bash
cd react-template-demo
```

Install dependencies:

```bash
yarn
```

Start the server:

```bash
yarn dev
```

<!-- Usage -->

## :eyes: Usage

The [Poké API](https://pokeapi.co/) will provide `1154` pokemon.

Using buttons to increment, decrement, and reset the Pokemon index "counter",
start from `0`:

- `⏫` - Increment index.
- `⏬` - Decrement index.
- `🔄` - Reset index.

When searching for a Pokemon, the counter will **skip to the id (NO. )** of the
Pokemon, which may exceed the total number of Pokemon. When exceeding:

- `⏫` - Reset counter (skip to 0).
- `⏬` - Skip to Pokemon with index 1153.

---

Login page:

- You can log in with this fake account:

  - email: `example@gmail.com`.
  - password: `1234`.

- It will just show a message when you log in successfully, and navigate back to
  Home page.

Register page:

- It will do nothing when you submit the form.

---

Folder architecture:

_From my [react-template](https://github.com/DuckyMomo20012/react-template)
Wiki,
[Folder
Architecture](https://github.com/DuckyMomo20012/react-template/wiki/Folder-Architecture)
page_:

```
.
├── components
│   ├── elements
│   ├── layouts
│   └── modules
├── constants
├── context
├── hooks
├── pages
│   └── api
├── routes
├── store
│   └── slice
└── main.jsx
```

- `elements`: Basic building blocks.
- `layouts`: Wrap your pages with the default layout.
- `modules`: Modules are built from multiple `elements`.
- `constants`: Global constants.
- `context`: React Context providers.
- `hooks`: Custom hooks.
- `pages`: Your page routes (adopt from NextJS folder architecture).
- `pages/api`: Your APIs (adopt from NextJS folder architecture).
- `routes`: Global route for react-router.
- `store`: Store your Redux store.
- `store/slice`: Store your Redux slices.

<!-- Roadmap -->

## :compass: Roadmap

- [ ] TypeScript support.
- [ ] Show more Pokemon details.
- [ ] Infinite scroll.

<!-- Contributing -->

## :wave: Contributing

<a href="https://github.com/DuckyMomo20012/react-template-demo/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=DuckyMomo20012/react-template-demo" />
</a>

Contributions are always welcome!

<!-- Code of Conduct -->

### :scroll: Code of Conduct

Please read the [Code of Conduct](https://github.com/DuckyMomo20012/react-template-demo/blob/main/CODE_OF_CONDUCT.md).

<!-- FAQ -->

## :grey_question: FAQ

- Is this project still maintained?

  - Yes, but I will only update UI, docs, or dependencies. New features won't be
    added frequently.

- Is this project fully typed?

  - No, but I will add TypeScript support in the future.

<!-- License -->

## :warning: License

Distributed under MIT license. See
[LICENSE](https://github.com/DuckyMomo20012/react-template-demo/blob/main/LICENSE)
for more information.

<!-- Contact -->

## :handshake: Contact

Duong Vinh - [@duckymomo20012](https://twitter.com/duckymomo20012) -
tienvinh.duong4@gmail.com

Project Link: [https://github.com/DuckyMomo20012/react-template-demo](https://github.com/DuckyMomo20012/react-template-demo).

<!-- Acknowledgments -->

## :gem: Acknowledgements

Here are useful resources and libraries that we have used in our projects:

- [Awesome Readme Template](https://github.com/Louis3797/awesome-readme-template):
  A detailed template to bootstrap your README file quickly.
