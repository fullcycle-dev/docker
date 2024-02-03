## Comandos

[voltar](../README.md)   

### 01 - Hello World

- Executando um container 

    ```sh
    $ docker run hello-world
    ```
- Listando containers ativos

    ```sh
    $ docker ps
    ```  
- Listando containers ativos e inativos

    ```sh
    $ docker ps -a
    ```
### 02 - Executando Ubuntu

- Executando o bash(terminal) do container no modo interativo (-i) atachado no modo tty(-t) para rodar os comandos

    ```sh
    $ docker run -it ubuntu bash
    ```
- Executando um container e logo ápos sair o container é removido.

    ```sh
    $ docker run -it -rm ubuntu bash
    ```
### 03 - Publicando portas com nginx

- Execuntando um servidor web com redirecionamento de porta 

    ```sh
    $ docker run -p 8080:80 nginx 
    ```    
- Execuntando um servidor web com redirecionamento de porta liberando o terminal em modo detached (-d)

    ```sh
    $ docker run -d -p 80:80 nginx 
    ```
### 04 - Removendo containers  

- Removendo o container modo normal

    ```sh
    $ docker stop <id ou nome do container>
    $ docker rm <id ou nome do container>
    ```
- Removendo o container modo forçando

    ```sh
    $ docker rm <id ou nome do container> -f
    ```
### 05 - Acessando e alterando arquivos de um container      
- Execuntando o cotainer com um nome

    ```sh
    $ docker run -d --name <nome_cotainer> -p 80:8080 nginx
    ```                          
- Executando um comando dentro do cotainer

    ```sh
    $ docker exec <nome_cotainer> ls
    ```
- Executando o terminal de um container que está em execução

    ```sh
    $ docker exec -it <nome_container> bash
    ``` 
### 06 - Iniciando com bind mounts         
- Trabalhando com volume, compartilhando arquivo do meu host para dentro do container (bind mounts)
    - Cria a pasta caso não exista
    ```sh
    $ docker run -d --name nginx -p 8080:80 -v ~/envs/projects/full-cycle/full-cycle-2.0/01-docker/html:/usr/share/nginx/html nginx
    ```
    - Não cria a pasta, apresenta um erro
    ```sh
    $ docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)"/html,target=/usr/share/nginx/html nginx
    ```
### 07 - Trabalhando com  volumes    
- Volumes

    - Help
    ```sh
    $ docker volume 
    ```
    - Listando volumes
    ```sh
    $ docker volume ls
    ```
    - Criando volume
    ```sh
    $ docker volume create meu_volume
    ```
    - Inspecionando volume
    ```sh
    $ docker volume inspect meu_volume
    ``` 
    - Compartilhando volume
    ```sh
    $ docker run -d --name nginx1 --mount type=volume,source=meu_volume,target=/app nginx
    ```
    ```sh
    $ docker exec -it nginx1 bash
    ```
    ```sh
    $ touch app/xablau.html
    ```           
    ```sh
    $ docker run -d --name nginx2 --mount type=volume,source=meu_volume,target=/app nginx
    ```
    ```sh
    $ docker exec -it nginx2 bash
    ```
    ```sh
    $ ls app/
    ```
    ```sh
    $ docker run -d --name nginx3 -v meu_volume:/app nginx
    ```
    ```sh
    $ docker exec -it nginx3 bash
    ``` 
    ```sh
    $ ls app/
    ``` 
[voltar](../README.md)                                 