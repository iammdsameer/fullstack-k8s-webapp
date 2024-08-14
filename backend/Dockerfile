FROM node:20.15-alpine AS build
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Deploy
FROM node:20.15-alpine as server
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=build /src/dist /app/
EXPOSE 9000
CMD ["node", "app.js"]
