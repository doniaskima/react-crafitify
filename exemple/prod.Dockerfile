 # Stage 1: Build Stage
FROM node:lts-alpine as builder

WORKDIR /app
COPY package.json .

RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production Stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]