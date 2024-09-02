
FROM node:18


WORKDIR /app

COPY package.json package-lock.json ./


RUN npm install


COPY . .


RUN npm run build

# Define a variável de ambiente NODE_ENV como production
ENV NODE_ENV=production


EXPOSE 3000


CMD ["npm", "start"]
