# Multi-step
# 1) node image for building frontend assets
# 2) nginx stage to serve frontend assets

# bulilder
FROM node:14 AS builder
# set working directory
WORKDIR /app
# copy all files from current directory to working dir
COPY . .
# install node modules and build assets
RUN npm install
RUN npm run build

# nginx 
FROM nginx:1.17
# default folder from which nginx serve file
WORKDIR /usr/share/nginx/html
# copy static assets from builder step
COPY --from=builder /app/build .
