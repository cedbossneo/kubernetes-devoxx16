# todomvc-redux-rethinkdb

## Run on GCE

gcloud container clusters create cluster-todo --zone=europe-west1-b

kubectl create -f kubernetes/rethinkdb.yaml

Then:

kubectl create -f kubernetes/app.yaml

## Run locally (if you don't want to use GCE)

You must have a rethinkdb installed

npm install

npm run dev

Open http://localhost:3000




