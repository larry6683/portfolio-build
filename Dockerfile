# Stage 1: Build the React application
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
# Copy the static build files to Nginx's default HTML folder
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80 for the PaaS routing
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]