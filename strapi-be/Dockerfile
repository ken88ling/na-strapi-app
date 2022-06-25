FROM node:16-alpine as build-stage

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app
COPY ./package.json ./yarn.lock ./

ENV PATH /opt/app/node_modules/.bin:$PATH

RUN yarn install

COPY ./ .

RUN yarn build

EXPOSE 1337

RUN chmod a+x /opt/app/run.sh

CMD ["/opt/app/run.sh"]
#CMD ["yarn", "start"]
