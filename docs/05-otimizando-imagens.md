## Comandos

[voltar](../README.md)

### 01 - Otimização utilizando Multistage Building

```sh
$ docker build -t rafaelbarros/laravel:prod laravel -f laravel/Dockerfile.prod
```

```sh
$ docker images | grep laravel
rafaelbarros/laravel                        prod            54ac884d2569   About a minute ago   141MB
rafaelbarros/laravel                        latest          233e61544aab   5 months ago         555MB
```

### 02 - Nginx como proxy reverso

```sh
$ docker network create laranet
c1224032b2caccad32dcc85389c4abe50e464257802d372eb2c536fd475a7945
```

```sh
$ docker run -d --network laranet --name laravel rafaelbarros/laravel:prod
c28de8d827f7ffddebfccfef7370f525f5a1e56e13d0c1a10ffb7b372221e8e5
```

```sh
$ docker ps
CONTAINER ID   IMAGE                       COMMAND                  CREATED         STATUS       PORTS                                                                                              NAMES
c28de8d827f7   rafaelbarros/laravel:prod   "docker-php-entrypoi…"   4 seconds ago   Up 3 seconds   9000/tcp
```

```sh
$ docker build -t rafaelbarros/nginx:prod nginx -f nginx/Dockerfile.prod
```

```sh
$ docker run -d --network laranet --name nginx -p 8080:80 rafaelbarros/nginx:prod
```

```sh
docker ps
CONTAINER ID   IMAGE                     COMMAND                  CREATED         STATUS         PORTS                                                                                              NAMES
cd7d93d59a5a   rafaelbarros/nginx:prod   "nginx -g 'daemon of…"   3 seconds ago   Up 2 seconds   0.0.0.0:8080->80/tcp
```

```sh
$ curl http://localhost:8080/
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>...
```

[voltar](../README.md)
