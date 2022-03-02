FROM node:14-alpine as react-build

WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# server environment
FROM bitnami/nginx

COPY --from=react-build /app/dist /app

ENV PORT 8080
EXPOSE 8080
# COPY nginx.conf /opt/bitnami/nginx/conf/server_blocks/my_server_block.conf
COPY nginx.conf /opt/bitnami/nginx/conf/bitnami/location.conf
CMD ["nginx", "-g", "daemon off;"]