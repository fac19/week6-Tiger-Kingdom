# Get the node:12.16.3 docker image from dockerhub.com
FROM node:12.16.3

# create the images directory to work from
WORKDIR /tigerkingdom

# copy package.json from our project to the docker image
COPY package.json ./

# copy package-lock.json from our project to the docker image
COPY package-lock.json ./

# run npm install in the docker image, adding our node module to the docker image
RUN npm install

# run the tests
RUN npm test

# tell docker that the server is listening on PORT 3000
EXPOSE 3000

# run these commands within the docker container
CMD ["npm", "start"]

# copy the rest pf the app files into the docker image
COPY . .