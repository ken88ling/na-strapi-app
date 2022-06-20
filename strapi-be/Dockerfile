FROM node:16-alpine
# Installing libvips-dev for sharp compatability
# RUN apt-get update && apt-get install libvips-dev
ENV NODE_ENV=${NODE_ENV}

# WORKDIR /opt/
# COPY ./package.json ./yarn.lock ./

# ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY ./ .

RUN yarn install
RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
