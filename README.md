# Create React App, Redux

## 環境建置

Setup ESLint + Prettier + AirBnB Style with Create React App [參考文件](https://www.andrewmin.info/blog/react-setup/)

Create a React App

```linux
npx create-react-app my-app
cd my-app
```

### ESLint + AirBnB

因ESLint版本問題，可手動降至 ^7.5.0 至 ^6.6.0

```linux
npx eslint --init
```

### Prettier

```linux
npm install prettier eslint-plugin-prettier eslint-config-prettier --save-dev
```

如安裝完執行有出現錯誤請在 ./.eslintrc.json

- plugins新增prettier
- extends 新增 prettier, prettier/react
- prettier/prettier": "error"

eslint 規則設定請參考 .eslintrc.json
