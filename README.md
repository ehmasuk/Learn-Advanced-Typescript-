# Typescript environment setup

## Install dependencies
```bash
npm init -y
npm typescript tsx nodemon -D
```

## Generate typecript config file

```bash
npx tss --init
```

## Development environment with nodemon

1. Add a nodemon.json file

```json
// nodemon.json
{
  "watch": ["src"],
  "ignore": ["src/**/*.spec.ts"],
  "ext": "ts,json,js,yaml,html,css,ejs,cjs",
  "exec": "tsx ./src/index.ts" // edit path name here
}
```

2. Add nodemon script in package.json

```json
// package.json
"scripts": {
  "dev": "nodemon"
}
```
