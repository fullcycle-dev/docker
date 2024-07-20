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
$ docker build -t rafaelbarros/laravel:prod laravel -f laravel/Dockerfile.prod
```
