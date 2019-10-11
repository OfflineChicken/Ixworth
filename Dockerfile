# Build the deliverable
FROM node:lts-stretch-slim as compile
RUN npm install -g @angular/cli
WORKDIR /app
COPY . .
RUN npm install
RUN ng build --prod

# Make small docker container from built components
FROM nginx:alpine
EXPOSE 80
EXPOSE 443
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html

# ideally we don't need to hardcode ixworth-ui here?
COPY --from=compile /app/dist/ixworth-ui . 