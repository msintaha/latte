<p align="center">
  <img width="100" src="https://raw.githubusercontent.com/msintaha/latte/master/src/assets/images/latte.png">
</p>

# Latte
A React boilerplate pluggable to any backend

### Setup
- Node version ~11
- Install yarn using `npm i -g yarn`
- Install packages using `yarn install`
- Run the app using `yarn start`

### Manual Deploying
- In webpack.prod.js, replace the `<YOUR_FRONTEND_CLIENT>` with the actual domain path
- Run `yarn build`
- Run `yarn production` to serve the app in your domain

## Docker
### Run dev-app locally
- `docker-compose up`
### Run tests locally
- `docker ps` to get container id
- `docker exec -it <container_id> yarn test`
### Run build folder locally
- `docker build .`
- `docker run -it -p 8080:80 <container_id>`
- Visit localhost:8080


### Project Structure

```
.
├── Dockerfile
├── Dockerfile.dev
├── LICENSE.md
├── README.md
├── docker-compose.yml
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.jsx
│   ├── app.scss
│   ├── assets
│   │   └── images
│   │       └── latte.png
│   ├── components
│   │   └── Header
│   │       └── index.jsx
│   ├── config.js
│   ├── index.jsx
│   ├── pages
│   │   ├── Home
│   │   │   ├── Home.spec.js
│   │   │   ├── _index.scss
│   │   │   └── index.jsx
│   │   └── _index.scss
│   ├── services
│   │   └── Service.js
│   ├── test
│   │   ├── dom.js
│   │   └── helper.js
│   └── utils
│       └── http.js
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
└── yarn.lock
```

# License
This project is licensed under the MIT license.

If you have any questions or comments, please create an issue.
