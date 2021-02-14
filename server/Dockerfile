# deno
FROM hayd/deno:alpine-1.7.1
# set working directory
WORKDIR /app
# prefer not to run as root
USER deno
# copy all files from current directory to working dir
COPY . .
# these are passed as deno arguments when run with docker
CMD ["run", "--allow-env", "--allow-net", "--allow-read", "--allow-write", "src/mod.ts"]
# default port exposure
EXPOSE 8000