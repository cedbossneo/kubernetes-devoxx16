# todomvc-redux-rethinkdb

## Run on Docker

docker run -d --name=rethinkdb rethinkdb
docker run -p 80:3000 --link rethinkdb:rethinkdb-driver cedbossneo/todomvc-redux-rethinkdb:rethinkdb

