module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/prop-types": "off", // Desactiva la validación de PropTypes
    "react/react-in-jsx-scope": "off", // No es necesario importar React en cada archivo JSX
    "react/display-name": "off", // Permite componentes anónimos
    "react-hooks/rules-of-hooks": "error", // Aplica las reglas de los hooks de React
    "react-hooks/exhaustive-deps": "warn", // Advierte sobre dependencias faltantes en los efectos
    "no-unused-vars": "warn", // Advierte sobre variables no utilizadas (se recomienda, pero puede ajustarse según tus necesidades)
  },
};
