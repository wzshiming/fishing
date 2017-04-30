FROM wzshiming/nginx

RUN mkdir -p /run/nginx
COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 8080
CMD exec nginx -g 'daemon off;'
