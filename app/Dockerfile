
# FROM node:20-alpine
# WORKDIR /app
# COPY src ./src
# CMD [ "node","src/main.js" ]
# EXPOSE 3000




# #---------Builder---------
# FROM node:20-alpine As builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --only=production
# COPY src ./src
# #---------Runtime---------
# FROM node:20-alpine 
# WORKDIR /app
# COPY --from=builder /app ./
# EXPOSE 3000
# CMD ["npm", "start"]


# Day 3
#---------Builder---------
FROM node:20-alpine As builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY src ./src
#---------Runtime---------
FROM node:20-alpine
WORKDIR /app

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=builder /app ./

# Change ownership of the app directory
RUN chown -R appuser:appgroup /app

USER appuser
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s \
CMD wget -QO- http://localhost:3000/ || exit 1

CMD ["npm", "start"]