# Stage 1: Build the React app
FROM node:14 as build

WORKDIR /app

COPY package*.json ./

# Ensure you have a clean installation of dependencies
RUN npm install

COPY . .

# Ensure the build directory is created during the build process
RUN npm run build

# Stage 2: Create the final image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the built artifacts from the build stage to the Nginx HTML directory
COPY --from=build /app/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
