#!/usr/bin/env bash
set -e
export NODE_ENV=production
npm run deploy
docker build -t cedbossneo/todomvc-redux-rethinkdb:rethinkdb-pi .
docker push cedbossneo/todomvc-redux-rethinkdb:rethinkdb-pi
