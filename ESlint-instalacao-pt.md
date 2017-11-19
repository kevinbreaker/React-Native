# Configurando um Lint para React-native

#### Como configurar o ESLint :

1. Se seu editor de texto é o **vs Code** precione `ctrl + shift + x` ou `comd + shift + x` Para MacOS . Cole isso no campo de busca `ESLint dirk baeumer` E instale a primeira opção.

2. Copie este código e rode ele no terminal dentro da pasta do projeto:
`npm i --save-dev eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react-native eslint-plugin-import babel-eslint eslint-plugin-react`

3. Crie um arquivo na raiz do projeto com o nome de  **.eslintrc** 
4. Adicione o código abaixo ao **.eslintrc** e salve-o
```
{
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "jest": true
    },
    "plugins": [
        "react-native",
        "jsx-a11y",
        "import"
    ],
    "extends": [
        "airbnb",
        "plugin:react-native/all"
    ],
    "rules": {
        "react/jsx-filename-extension": ["error", {"extensions": [".js", ".jsx"] }],
        "global-require": "off",
        "no-console": "off",
        "import/prefer-default-export": "off"
    },
    "globals": {
        "__DEV__": true
    }
}
```
Seu *Package.json* deve ficar semelhante a isto **MAS** não necessáriamente na mesma versão :
```
"devDependencies": {
		"babel-eslint": "^8.0.2",
		"babel-jest": "21.2.0",
		"babel-preset-react-native": "4.0.0",
		"eslint": "^4.11.0",
		"eslint-config-airbnb": "^16.1.0",
		"eslint-plugin-import": "^2.8.0",
		"eslint-plugin-jsx-a11y": "^6.0.2",
		"eslint-plugin-react": "^7.5.0",
		"eslint-plugin-react-native": "^3.1.0",
		"jest": "21.2.1",
		"react-test-renderer": "16.0.0"
	},
  ```
  
