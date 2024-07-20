## Comandos

[voltar](../README.md)

### 01 - Iniciando com docker-compose

```sh
$ docker rm -f nginx laravel
```

```sh
$ docker-compose up
[+] Running 2/2
 ✔ Container nginx    Created                                                                                                                                       0.1s
 ✔ Container laravel  Created                                                                                                                                       0.1s
Attaching to laravel, nginx
laravel  | [20-Jul-2024 05:29:12] NOTICE: fpm is running, pid 1
laravel  | [20-Jul-2024 05:29:12] NOTICE: ready to handle connections
nginx    | 172.29.0.1 - - [20/Jul/2024:05:29:17 +0000] "GET / HTTP/1.1" 200 17622 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36" "-"
laravel  | 172.29.0.3 -  20/Jul/2024:05:29:17 +0000 "GET /index.php" 200
```

### 02 - Buildando images com docker-compose

```sh
$ docker-compose up -d --build
```

[voltar](../README.md)
