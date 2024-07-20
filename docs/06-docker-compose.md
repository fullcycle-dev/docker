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

### 03 - Criando banco de dados MySQL

```sh
$ docker-compose up -d
[+] Running 2/2
 ✔ Network 01-docker_node-network  Created                                                                                                                          0.0s
 ✔ Container db_mysql_fullcycle    Started
```

### 04 - Configurando app node com docker-compose

```sh
$ docker-compose up -d --build
```

### 05 - Node vs Mysql

```sh
$ docker-compose up -d --build
```

### 06 - Dependência entre containers

```sh
$ docker-compose up -d --build
```

### 07 - Opções - Dependência entre containers

#### Opções - Dependência entre containers

wait-for-it

Na gravação do curso o Wesley utilizou o dockerize para realizar a sincronização entre serviços de containers Docker.

Atualmente o dockerize funciona perfeitamente em ambientes Linux e Windows, mas no MacBook M1 recebemos relatos de problemas de compatibilidade, por isso estamos disponibilizando uma alternativa que supre 100% o uso em comparação ao dockerize e funciona em todas as arquiteturas citadas, além disto é bem mais leve que ele.

Abaixo o repositório com informações sobre a configuração e pontos importantes sobre o wait-for-it.

https://github.com/codeedu/docker-wait-for-it

docker - healthcheck

Uma outro opção nativa do Docker é o healthcheck, com ele podemos verificar a integridade de um determinado container x e, caso ele esteja com o status = healthy, um container y pode se conectar à ele.

No repositório abaixo temos mais informações sobre a utilização desta opção.

https://github.com/devfullcycle/docker-healthcheck

[voltar](../README.md)
