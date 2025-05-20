FROM node:16

#create app directory
WORKDIR /usr/src/app

# Install app dependencies
#This command coppies the package.json file and package-lock.json and put them inside /usr/src/app folder inside the docker image file system
COPY package*.json ./ 

RUN npm install 

#Bundle app source
#This means copy all the folders inside the docker image file system and ignore the onces in the dockerignore file
COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]