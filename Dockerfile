FROM node:22-alpine
WORKDIR /app
COPY server.js .
EXPOSE 2222
# no HEALTHCHECK. don't ask it how it's doing.
CMD ["node", "server.js"]
