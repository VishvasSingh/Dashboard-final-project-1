# # Stage 1: Compile and build angular codebase
# FROM node:latest as build

# # Set the working directory
# WORKDIR /usr/local/app

# # Add the source code to the app
# COPY ./ /usr/local/app/

# # Install all the dependencies
# RUN npm install --force

# # Generate the build of the application
# RUN npm run build


# # Stage 2: Serve app with nginx server
# FROM nginx:latest

# # Copy the build output to replace the default nginx contents
# COPY --from=build /usr/local/app/dist/dashboard-final-project /usr/share/nginx/html

# # Copy nginx configuration file with URL routing
# COPY nginx.conf /etc/nginx/nginx.conf

# # Expose port 80
# EXPOSE 80


# (working, just modify default.conf file, in container, for refresh issue)

FROM node:20.10.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --force
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build

FROM nginx:stable
COPY --from=build /app/dist/dashboard-final-project/ /usr/share/nginx/html
EXPOSE 80


