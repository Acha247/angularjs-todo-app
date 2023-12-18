# Stage 1: Build the application
FROM node:21-alpine AS build
WORKDIR /app
RUN git clone https://github.com/Acha247/angularjs-todo-app.git
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: serve app with nginx server
FROM nginx:alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 3000 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
