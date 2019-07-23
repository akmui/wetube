
  /*
  ,
  "scripts": {
    "dev:server": "nodemon --exec babel-node init.js --delay 2 --ignore 'scss' --ignore 'static' ",
    "dev:assets": "WEBPACK_ENV=development webpack -w",
    "build:assets": "WEBPACK_ENV=production webpack",
    "tunnel": "lt --port 4000"
  }
  */
  
  /*
    "scripts": {
    "dev:server": "nodemon --exec babel-node init.js --delay 2 --ignore 'scss' --ignore 'static' ",
    "dev:assets": "cd src && WEBPACK_ENV=development webpack -w",
    "build:assets": "cd src && WEBPACK_ENV=production webpack",
    "build:server": "babel-node src --out-dir build --ignore 'src/assets', 'src/static', 'src/webpack.config.js'",
    "copyAll": "cp -R src/static build && cp -R src/views build",
    "build": "npm run build:server && npm run build:assets && npm run copyAll",
    "prebuild": "rm -rf build",
    "tunnel": "lt --port 4000",
    "start": "node build/init.js"
  }
  
  */ 