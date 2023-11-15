FROM node:alpine as bu
WORKDIR /app
COPY package*.json ./
RUN npm install 
# INSTALLER DEPENDANCES AVANT COPIE CODE SRC
COPY . .
RUN npx tsc

FROM bu
COPY --from=bu /app/build /app
RUN adduser -D -H -s /sbin/nologin serv
USER serv
CMD node /app/build/index.js