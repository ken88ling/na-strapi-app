#!/usr/bin/env sh

if [ $NODE_ENV == "development" ]
then
    yarn dev
else
    yarn start
fi


#
#if [ -z "NODE_ENV" == "production" ]; then
#    echo "this is production"
#else
#    echo $NODE_ENV
#fi
#
#
#RUN /bin/bash -c '[[ "${NODE_ENV}" == "production" ]] && npm run build:prod || npm run build:dev'
