# todomvc-redux-rethinkdb

## Run on GCE

gcloud container clusters create cluster-todo --zone=europe-west1-b

kubectl create -f kubernetes/rethinkdb.yaml

When the rethinkdb replication-controller is ready:

kubectl scale rc rethinkdb-rc --replicas=4

Then:

kubectl create -f kubernetes/app.yaml

When the app is ready:

kubectl scale rc todo-rc --replicas=3

## Run locally (if you don't want to use GCE)

You must have a rethinkdb installed

npm install

npm run dev

Open http://localhost:3000




