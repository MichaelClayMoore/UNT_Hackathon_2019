FROM node:lts-alpine

# make the 'app' folder the current working directory
RUN mkdir /app
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY ./client/package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY ./client .

# build app for production with minification
RUN npm run build

# start client Server
CMD npm run dev