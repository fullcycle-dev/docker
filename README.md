# Full Cycle 2.0 - Docker

## Comandos

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
- Executando o bash(terminal) do container no modo interativo (-i) atachado no modo tty(-t) para rodar os comandos

    ```sh
    $ docker run -it ubuntu bash
    ```
- Executando um container e logo ápos sair o container é removido.

    ```sh
    $ docker run -it -rm ubuntu bash
    ```    
- Execuntando um servidor web com redirecionamento de porta 

    ```sh
    $ docker run -p 8080:80 nginx 
    ```    
- Execuntando um servidor web com redirecionamento de porta liberando o terminal em modo detached (-d)

    ```sh
    $ docker run -d -p 80:80 nginx 
    ```
- Removendo containers

    ```sh
    $ docker stop <id ou nome do container>
    $ docker rm <id ou nome do container>
    ```
- Removendo containers o container forçando ele sem parar

    ```sh
    $ docker rm <id ou nome do container> -f
    ```
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
- Trabalhando com volume, compartilhando arquivo do meu host para dentro do container (bind mount)
    - Cria a pasta caso não exista
    ```sh
    $ docker run -d --name nginx -p 8080:80 -v ~/envs/projects/full-cycle/full-cycle-2.0/01-docker/html:/usr/share/nginx/html nginx
    ```
    - Não cria a pasta, apresenta um erro
    ```sh
    $ docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)"/html,target=/usr/share/nginx/html nginx
    ```
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