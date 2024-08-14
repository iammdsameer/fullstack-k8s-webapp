# Stage 1: Build
FROM node:20.15 AS build
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
ENV VITE_API_URL=http://localhost:9000/api
ENV VITE_PERSON_NAME=Sameer
RUN npm run build

# Stage 2: Deploy
FROM nginx:stable-alpine as server
COPY --from=build /src/dist /usr/share/nginx/html/
COPY ./nginx.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
