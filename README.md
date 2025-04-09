# Welcome to Nina´s Beer API Project

### Instruction:
- create a Website with the Beer API :
[Beer API Herokuapp](https://ih-beers-api2.herokuapp.com/beers)

- make it look like this:
![Figma Overview Project BeerAPI](Figma_Overview_BeerAPI.png)


______________________________________________
## How it went

### 👾🍀KICKOFF
![Xmind Overview Kickoff](Xmind_Kickoff.png)

### Final
![Xmind Final](Xmind_Final.png)

### Project Deployed
![FinalPage](FinalPage.png)

💁🏽‍♀️ [Ninas Beer API](https://ninas-beer-api.vercel.app/beers)

### Tech Stack
insert logos
vite
react
js
ts
github
vercel
xmind
gimp

_______________________________________________


______________________________________________
# Standard Initial Vite Reacte Readme Filling: 💁🏽‍♀️
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# Project_BeerAPI
