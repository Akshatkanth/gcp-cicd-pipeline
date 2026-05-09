# Base Image
FROM node:20-alpine

# Create App Directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose app port
EXPOSE 3000

# Start app
CMD ["npm", "start"]