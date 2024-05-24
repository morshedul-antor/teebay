FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Make port 8000 available for the app
EXPOSE 8000

# Make necessary migraton and start the server
CMD npx prisma migrate deploy && npx prisma generate && npm start
