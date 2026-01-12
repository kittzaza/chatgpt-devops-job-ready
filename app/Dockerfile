
# FROM node:20-alpine
# WORKDIR /app
# COPY src ./src
# CMD [ "node","src/main.js" ]
# EXPOSE 3000

#---------Builder---------
FROM node:20-alpine As builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY src ./src
#---------Runtime---------
FROM node:20-alpine 
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]
