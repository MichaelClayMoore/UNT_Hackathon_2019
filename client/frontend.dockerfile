FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /client

# copy both 'package.json' and 'package-lock.json' (if available)
COPY ./client/package*.json ./

# install project dependencies
RUN npm install --prefix /var/task

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist", "-a" ]
