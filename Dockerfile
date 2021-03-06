FROM node:12.16.3-alpine as builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install 
COPY . .
RUN npm run build --prod
FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist/Marketpricestats/ /usr/share/nginx/html