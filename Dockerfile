FROM node:12.14 as builder
WORKDIR /code 
COPY package.json . 
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
COPY --from=builder /code/dist /usr/share/nginx/html
