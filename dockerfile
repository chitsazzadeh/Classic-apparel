# Use the official Nginx image
FROM nginx:latest

# Copy your website files to the default Nginx directory
COPY app/ /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80
