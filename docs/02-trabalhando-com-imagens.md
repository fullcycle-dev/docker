## Comandos

[voltar](../README.md)   

### 01 - Entendendo imagens e DockerHub

- Baixando imagens

    ```sh
    $ docker pull ubuntu
    ```
    
    ```sh
    $ docker pull php
    ```

    ```sh
    $ docker pull php:rc-alpine
    ```
- Removendo imagens

    ```sh
    $ docker rmi php:latest
    ```
- Listando imagens

    ```sh
    $ docker images
    ```  

### 02 - Criando  primeira imagem com Dockerfile

- Criando Dockerfile

    ```yml
    FROM nginx:latest

    RUN apt-get update
    RUN apt-get install vim -y
    ```
- Criando imagem docker

    ```sh
    $ docker build -t rafaelbarros/nginx-com-vim:latest .
    ``` 
- Executando imagem criada

    ```sh
    $ docker run -it rafaelbarros/nginx-com-vim bash
    ```       
### 03 - Avaçando com Dockerfile

- Criando Dockerfile

    ```yml
    FROM nginx:latest

    WORKDIR /app
    RUN apt-get update && \
        apt-get install vim -y

    COPY html/ /usr/share/nginx/html
    ```
- Criando imagem docker

    ```sh
    $ docker build -t rafaelbarros/nginx-com-vim:latest .
    ``` 
- Executando imagem criada

    ```sh
    $ docker run -it rafaelbarros/nginx-com-vim bash
    ```

### 04 - ENTRYPOINT vs CMD

- Criando Dockerfile comando CMD

    ```yml
    FROM ubuntu:latest

    CMD ["echo" , "Hello World"]
    ```
- Criando imagem docker

    ```sh
    $ docker build -t rafaelbarros/hello .
    ``` 
- Executando imagem criada

    ```sh
    $ docker run -it rafaelbarros/hello:latest
    ```   
- Deletando todos os containers ativos pelos ids

    ```sh
    $ docker rm $(docker ps -a -q) -f
    ``` 
- Substituindo saida do comando echo

    ```sh
    $ docker run --rm rafaelbarros/hello echo "oi"
    ``` 
- Criando Dockerfile comando ENTRYPOINT

    ```yml
    FROM ubuntu:latest

    ENTRYPOINT [ "echo", "Hello " ]
    CMD [ "World" ]
    ```
- Criando imagem docker

    ```sh
    $ docker build -t rafaelbarros/hello .
    ```
- Executando o container

    ```sh
    $ docker run --rm rafaelbarros/hello
    ``` 
    ```sh
    $ docker run --rm rafaelbarros/hello Rafael
    ```                     

### 05 - Docker entrypoint exec

### 06 - Publicando imagem no DockerHub

- Criando Dockerfile

    ```yml
    FROM nginx:latest

    COPY html/ /usr/share/nginx/html

    ENTRYPOINT [ "/docker-entrypoint.sh" ]
    CMD ["nginx", "-g", "daemon off;"]
    ```
- Criando imagem docker

    ```sh
    $ docker build -t rafaelbarros/nginx-fullcycle .
    ``` 
- Executando imagem criada

    ```sh
    $ docker run --rm -d -p 8080:80 rafaelbarros/nginx-fullcycle:latest
    ```

- Subindo a imagem criada no DockerHub
    
    ```sh
    $ docker login
    ```     

    ```sh
    $ docker push rafaelbarros/nginx-fullcycle
    ```        











[voltar](../README.md)   