
# Step 2: Serve the React app using Nginx (for production)
FROM nginx:alpine

# Copy the build output from the previous step
COPY /build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx to serve the React app
CMD ["nginx", "-g", "daemon off;"]
