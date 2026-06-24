# Stage 1: Build the React application
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve the optimized build
FROM node:18-alpine
WORKDIR /app
# Install the lightweight 'serve' package
RUN npm install -g serve
# Copy only the built assets from Stage 1
COPY --from=build /app/build ./build

# 'serve' automatically detects the $PORT variable provided by Miget
# The '-s' flag ensures React Router works correctly if you add multiple pages
CMD ["serve", "-s", "build"]