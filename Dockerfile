FROM node:alpine
ADD app.js /app.js
EXPOSE 7070
CMD ["node", "/app.js"]