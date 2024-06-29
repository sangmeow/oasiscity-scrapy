# oasiscity-scrapy

# CREATE TYPESCRIPT PROJECT

```
> npm init -y
> npm i -D typescript ts-node
> npx tsc --init
```
### RUN TS FILE

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "clean": "tsc --build --clean",
    "start:dev": "npx ts-node index.ts",
    "start:prod": "tsc --build --clean && tsc --build && node index.js"
  },
```
