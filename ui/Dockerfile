FROM node
WORKDIR .
COPY package.json . /
COPY package-lock.json ./
RUN npm install
CMD npm start
EXPOSE 4020
