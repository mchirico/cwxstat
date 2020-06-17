
```

# Pod
kubectl port-forward pod/$(k get po|grep  node-server|head -n1|awk '{print $1}') 3000:3000



kubectl port-forward svc/node-service 3000:3000

#minikube tunnel
#k expose deployment node-server --type=LoadBalancer --name=node-service



```

# Trouble shooting tips

Make sure you only have one version on ingress

```
clausewitz:kind_cwxstat rommel$ k get ingress --all-namespaces
NAMESPACE   NAME           CLASS    HOSTS   ADDRESS     PORTS   AGE
cwxstat     node-ingress   <none>   *       localhost   80      5m46s
default     node-ingress   <none>   *       localhost   80      30m
clausewitz:kind_cwxstat rommel$ k delete ingress node-ingress -n default
ingress.extensions "node-ingress" deleted
clausewitz:kind_cwxstat rommel$ k get ingress --all-namespaces
NAMESPACE   NAME           CLASS    HOSTS   ADDRESS     PORTS   AGE
cwxstat     node-ingress   <none>   *       localhost   80      6m31s

```

# Run this in namespace cwxstat

```

kubectl create namespace cwxstat

kubectl --namespace=cwxstat create secret docker-registry gcr-json-key \
          --docker-server=https://gcr.io \
          --docker-username=_json_key \
          --docker-password="$(cat ~/cwxstat/cwxstat-23.json)" \
          --docker-email=mchirico@gmail.com

kubectl --namespace=cwxstat patch serviceaccount default \
          -p '{"imagePullSecrets": [{"name": "gcr-json-key"}]}'

kubectl --namespace=cwxstat get serviceaccount default -o yaml

```
