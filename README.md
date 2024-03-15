3. Hur formateras JSON-svaren om man hämtar ut alla resurser av en typ? Hur ser urlen ut då?

4. Titta på hur JSON-svaret formateras om man hämtar ut alla filmer och jämför med om man hämtar ut alla planeter. Finns det ngn skillnad på helheten av svaret?

5. Dokumentationen pratar om JSON Schema här. Vad är det och vad är det bra för?

6. Om vi vill ta fram info om planeten Kashyyyk så finns det (minst) två vägar att gå med APIet. Vilka? Beskriv dem.

7. Titta på denna url: https://swapi.py4e.com/api/planets/1/?format=json Vad gör frågetecknet? Vad kallar vi sådana ord som "format" i urlen?

8. Om vi hämtar data om Tatooine, vad kan du berätta om planeten?

9. Hur många droider finns det i APIet? Hur tog du reda på det? Beskriv arbetsgången.

10. Hur många personer i APIet flyger X-wing? Vilka? Hur tog du reda på det? Beskriv arbetsgången.

11. Alla känner till det ikoniska SW-fordonet "AT-AT" (vilket står för All-Terrain Attack Transport). Vad för info kan du hitta om detta fordon i APIet?

12. Hur många planeter finns det i APIet?

13. Använd ngn tjänst som https://quicktype.io/ och ta fram en Type Alias för planeterna i APIet. 

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
