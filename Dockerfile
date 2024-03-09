FROM node:16-alpine

WORKDIR /app

# Make alpine timezone-aware
RUN apk add tzdata

# Set up dependencies
COPY package*.json ./
RUN npm ci --production
ENV NODE_ENV=production

COPY . .

EXPOSE 3000
CMD [ "sh", "-c", "npm start" ]
