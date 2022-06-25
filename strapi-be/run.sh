#!/usr/bin/env sh

if [ $NODE_ENV == "production" ]
then
    yarn start
else
    yarn dev
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
