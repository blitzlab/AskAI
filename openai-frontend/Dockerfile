# Use the official Node.js image as the base image
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Change ownership of the /usr/src/app directory to node
RUN chown node:node /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Switch to user node
USER node

# Install dependencies
RUN npm install

# Switch back to root to copy other files
USER root

# Bundle app source by copying all files
COPY --chown=node:node . .

# Switch to user node to build
USER node

# Modify permissions
RUN chmod -R 755 node_modules/

# Build the app
RUN npm run build

# Serve the app
CMD ["npx", "serve", "-s", "build", "-l", "3000"]

# Expose the port
EXPOSE 3000
