# Setting Eslint for React-Native

How to configure a Lint for React-native ?

1. Copy and run this code inside the folder of your project
`npm i --save-dev eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react-native eslint-plugin-import babel-eslint eslint-plugin-react`
2. Create a file with name  **.eslintrc**.
3. add this code to the file **.eslintrc** and save it
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
4. If your source code editor is **VS Code**  Press `ctrl + shift + x (or comd + shift + x for mac)`. paste it `ESLint dirk baeumer` and install the first option
