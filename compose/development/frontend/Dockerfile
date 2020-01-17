FROM node:alpine3.10

LABEL maintainer="luisito666 <luispenagos91@gmail.com>"

WORKDIR /app

RUN npm install -g @angular/cli

COPY ./compose/development/frontend/entrypoint /
RUN chmod +x /entrypoint

COPY ./compose/development/frontend/start /
RUN chmod +x /start

ENTRYPOINT [ "/entrypoint" ]

CMD ["/start"]
