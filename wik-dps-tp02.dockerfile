FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install 
RUN npx tsc
RUN adduser -D -H -s /sbin/nologin serv ##IL FAUT INSTALLER ALPINE
USER serv
CMD node /app/build/index.js
