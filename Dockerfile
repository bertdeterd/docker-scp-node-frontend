FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./

RUN npm install
#RUN npm install -g @vue/cli@latest
COPY . .
RUN npm run build

ENV PORT 80
EXPOSE 80
CMD [ "npm", "start" ]
