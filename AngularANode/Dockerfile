FROM node:14 as node
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

RUN npm run build --prod


FROM nginx:latest
COPY --from=node /app/dist/practica-coche /usr/share/nginx/html

EXPOSE 80