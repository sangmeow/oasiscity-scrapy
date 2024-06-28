# oasiscity-scrapy

# CREATE TYPESCRIPT PROJECT

```
> npm init -y
> npm i -D typescript ts-node
> npx tsc --init
> npm install playwright
```
### RUN TS FILE

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "clean": "tsc --build --clean",
    "start:dev": "npx ts-node playwright.ts",
    "start:prod": "tsc --build --clean && tsc --build && node playwright.js"
  },
```

# API DOCUMENT

https://playwright.dev/docs/api/class-test