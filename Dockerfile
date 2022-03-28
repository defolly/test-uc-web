FROM xxx/tools/nginx:1.10.1


MAINTAINER xxx

ENV LANG C.UTF-8

# 修改时区、虚拟终端的TERM类型
ENV TZ "Asia/Shanghai"
ENV TERM linux

ADD nginx.conf /etc/nginx/nginx.conf  
ADD dist   /var/www/nginx/html/dist/


