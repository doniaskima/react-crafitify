# Use an appropriate base image (e.g., Node.js for building, NGINX for serving)
FROM node:14 as builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code and build the library component
COPY . .
RUN npm run build

# Use NGINX as the serving image
FROM nginx:alpine

# Copy the build output of your React library component to the NGINX web root
COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html

# Expose the default HTTP port of NGINX
EXPOSE 80

# The NGINX image starts serving automatically
