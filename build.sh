#!/usr/bin/env bash
set -e
npm run lint
npm run flow:check
NODE_ENV=production npm run deploy
docker build -t cedbossneo/todomvc-redux-rethinkdb .
docker push cedbossneo/todomvc-redux-rethinkdb
