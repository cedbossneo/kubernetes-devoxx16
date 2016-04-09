# todomvc-redux-rethinkdb

# Run on docker

kubectl run -p 80:3000 --image=cedbossneo/todomvc-redux-rethinkdb:standalone --name=todo
kubectl expose rc todo --type=NodePort



