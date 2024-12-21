# Stage 1: Use Node.js for building the app
FROM node:20.9.0-alpine AS builder

# Set the working directory inside the container to /app
WORKDIR /app

# Copy only the package.json file to the working directory
COPY package*.json .

# Install npm dependencies based on the package.json
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the production app
CMD ["npm","run","build"]


# Stage 2: Use a lightweight Node.js image for serving
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules  
COPY --from=builder /app/package.json ./

# Install npm dependencies based on the package.json (too slow!)
# RUN npm install --omit=dev

# Expose port 8000 to allow external access
EXPOSE 8000

# Specify the command to run the application when the container starts
CMD ["npm", "run", "start", "--", "--port", "8000"]

