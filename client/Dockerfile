# Multi-step
# 1) node image for building frontend assets
# 2) nginx step to serve frontend assets

# builder
FROM node:15.8.0-alpine3.10 AS builder
# set working directory
WORKDIR /app
# copy all files from current directory to working dir
COPY . .
# install node modules and build assets
RUN npm install
RUN npm run build

# nginx 
FROM nginx:1.19.6-alpine
# copy nginx config file
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
# default folder from which nginx serve file
WORKDIR /usr/share/nginx/html
# copy static assets from builder step
COPY --from=builder /app/build .
# copy .env file and shell script to container
COPY ./env.sh .
COPY .env .
# add bash
RUN apk add --no-cache bash
# make our shell script executable
RUN chmod +x env.sh
# start nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
