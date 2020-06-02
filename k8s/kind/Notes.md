
```

# Pod
kubectl port-forward pod/$(k get po|grep  node-server|head -n1|awk '{print $1}') 3000:3000



kubectl port-forward svc/node-service 3000:3000

#minikube tunnel
#k expose deployment node-server --type=LoadBalancer --name=node-service



```
