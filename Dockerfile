FROM node:10.16.1

ENV API_PORT 8090
ENV DB_HOST=localhost
ENV DB_PORT=5432
ENV DB_USERNAME=postgres
ENV DB_PASSWORD=postgres
ENV DB_DATABASE=teste
ENV MEMORY 2048

COPY src/dist/. src/
WORKDIR /src
CMD node --max-old-space-size=$MEMORY --optimize-for-size --inspect ./index.js

