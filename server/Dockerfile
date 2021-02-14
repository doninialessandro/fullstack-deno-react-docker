
# deno
FROM hayd/deno:alpine-1.7.1
# set working directory
WORKDIR /app
# Prefer not to run as root.
USER deno
# copy all files from current directory to working dir
COPY . .
# set env variables
ENV PORT 8000
# These are passed as deno arguments when run with docker:
CMD ["run", "--allow-env", "--allow-net", "--allow-read", "--allow-write", "src/mod.ts"]

EXPOSE 8000