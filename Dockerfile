FROM nginx:latest

ENV VITE_BASE_URL=

RUN rm /etc/nginx/conf.d/default.conf

COPY build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/
