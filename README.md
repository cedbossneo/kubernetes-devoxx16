# todomvc-redux-rethinkdb

# Run on docker

kubectl run --image=cedbossneo/todomvc-redux-rethinkdb:standalone todo
kubectl expose deployment todo --type=NodePort --port=3000

#  kubectl describe svc [SERVICE NODE PORT]
#  kubectl describe node [NODE ID]
#  kubectl expose deployment todo --type=LoadBalancer --port=80 --target-port=3000
