FROM node:18-alpine
WORKDIR /app
COPY app.js package*.json ./
RUN npm init -y && npm install express
EXPOSE 5000
CMD ["node", "app.js"]

