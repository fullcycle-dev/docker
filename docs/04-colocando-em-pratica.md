## Comandos

[voltar](../README.md)   

### 01 - Instalando framework em um container

```sh
$ docker run -it --name php php:7.4-cli bash
 ``` 
 ```sh
$ apt-get update
cd /var/www
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'edb40769019ccf227279e3bdd1f5b2e9950eb000c3233ee85148944e555d97be3ea4f40c3c2fe73b22f875385f6a5155') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
apt-get install libzip-dev -y
docker-php-ext-install zip
php composer.phar create-project laravel/laravel laravel
 ``` 

### 02 - Ativando entrypoint e command 

- Criando Dockerfile

    ```yml
    FROM php:7.4-cli

    WORKDIR /var/www

    RUN apt-get update && \
        apt-get install libzip-dev -y && \
        docker-php-ext-install zip

    RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
        php composer-setup.php && \
        php -r "unlink('composer-setup.php');"

    RUN php composer.phar create-project laravel/laravel laravel

    ENTRYPOINT [ "php", "laravel/artisan", "serve" ]
    ```

    ```sh
    $ cd laravel
    $ docker build -t rafaelbarros/laravel:latest .
    ```

    ```sh
    $ docker run --rm -d --name laravel -p 8000:8000 rafaelbarros/laravel
    ```
    ```sh
    $ docker run --rm -d --name laravel -p 8000:8000 rafaelbarros/laravel --host=0.0.0.0 --port=8001
    ```
    ```sh
    $ docker push rafaelbarros/laravel
    ```

### 03 - Criando aplicação Node.js sem o Node

```sh
$ docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash
``` 

### 04 - Gerando aplicação Node.js sem o Node

```yml
FROM node:15

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
``` 

```sh
$ docker build -t rafaelbarros/hello-express .
``` 
```sh
$ docker run -d -p 3000:3000 rafaelbarros/hello-express:latest
```   
```sh
$ docker build -t rafaelbarros/hello-express . -f Dockerfile.prod
``` 

[voltar](../README.md)   