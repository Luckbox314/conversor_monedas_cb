# Development
FROM node:16-alpine AS development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install --only=development

CMD ["npm", "run", "dev"]

# Production
FROM node:16-alpine AS production

WORKDIR /app

COPY --from=development /app/dist ./dist
COPY --from=development /app/node_modules ./node_modules
COPY --from=development /app/package.json ./package.json

EXPOSE 5000

CMD ["node", "dist/index.js"]
