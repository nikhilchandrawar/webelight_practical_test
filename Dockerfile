from node:14

#setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app


#inastall App Dependencies
#A wildcard is used to ensure both packages.json and package-lock.json are copied
#where available (npm@5+)
COPY package*.json ./

RUN npm install
# if you are building your code for production
#RUN npm ci --only=production

#Bundle app sorce
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
