#!/usr/bin/env bash
set -e
npm run lint
npm run flow:check
NODE_ENV=production npm run deploy
BRANCH=$1
docker build -t cedbossneo/todomvc-redux-rethinkdb:${BRANCH:=standalone} .
docker push cedbossneo/todomvc-redux-rethinkdb:${BRANCH:=standalone}
