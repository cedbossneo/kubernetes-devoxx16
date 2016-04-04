FROM node:5

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json .
RUN PHANTOMJS_PLATFORM=linux PHANTOMJS_ARCH=x64 npm install
ADD .babelrc .
ADD bin bin
ADD build build
ADD config config
ADD dist dist
ADD constants constants
ADD migrations migrations
ADD server server

ENV NODE_ENV production

ENTRYPOINT [ "npm", "start" ]

EXPOSE 3000
