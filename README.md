# Typescript environment setup

### Install dependencies

```bash
npm init -y
npm typescript tsx nodemon -D
```

### Generate typecript config file

1. Generate config file

```bash
npx tsc --init
```

2. Edit config file

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./build"
  }
}
```

### Development environment with nodemon

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

### Build and Run

#### Build

1. Add script in package.json

```json
// package.json
"scripts": {
  "build": "tsc" // edit path name here
}
```

```bash
npm run build
```

#### Run

2. Add script in package.json

```json
// package.json
"scripts": {
  "start": "node build/index.js" // edit path name here
}
```

```bash
npm start
```
