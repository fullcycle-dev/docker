## Comandos

[voltar](../README.md)   

### 01 - Entendendo tipos de Network

- Tipos de Network
    - bridge (Ponte) Um container se comunicando facilmente com outro.
    - host (Mescla) Mescla a network do docker com o meu host.
    - overlay (Incoum) Vários docker e computadores diferentes redes e fazer com eles se comuniquem entre eles.
    - macvlan (MacAddress) Um container plugado na sua rede.
    - none (Nenhum) Não vai ter nenhuma rede, vai rodar de forma isolada.

### 02 - Trabalhando com bridge

- Network help - Listando comandos de ajuda do network

    ```sh
    $ docker network
    ``` 
- Listando networks

    ```sh
    $ docker network ls
    ```
- Removendo networks que não estão sendo utilizadas no momento

    ```sh
    $ docker network prune
    ```
- Mostrando dentro da minha network

    ```sh
    $ docker run -d -it --name ubuntu1 bash
    ``` 
    ```sh
    $ docker run -d -it --name ubuntu2 bash
    ```
    ```sh
    $ docker network inspect bridge
    ``` 
    ```sh
    $ docker attach ubuntu1
    ```
    ```sh
    $ bash-5.2# ip addr show
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    46: eth0@if47: <BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN> mtu 1500 qdisc noqueue state UP
        link/ether 02:42:ac:11:00:03 brd ff:ff:ff:ff:ff:ff
        inet 172.17.0.3/16 brd 172.17.255.255 scope global eth0
        valid_lft forever preferred_lft forever
    ```
    ```sh
    $ bash-5.2# ping 172.17.0.4
    PING 172.17.0.4 (172.17.0.4): 56 data bytes
    64 bytes from 172.17.0.4: seq=0 ttl=64 time=0.088 ms
    64 bytes from 172.17.0.4: seq=1 ttl=64 time=0.064 ms
    64 bytes from 172.17.0.4: seq=2 ttl=64 time=0.062 ms
    64 bytes from 172.17.0.4: seq=3 ttl=64 time=0.068 ms
    ``` 
- Criando uma network                 

    ```sh
    $ docker network create --driver bridge minharede
    ```
    ```sh
    $ docker run -dit --name ubuntu1 --network minharede bash
    ```
    ```sh
    $ docker run -dit --name ubuntu2 --network minharede bash
    ```
    ```sh
    $ docker exec -it ubuntu1 bash
    ```
    ```sh
    $ bash-5.2# ping ubuntu2
    PING ubuntu2 (172.21.0.3): 56 data bytes
    64 bytes from 172.21.0.3: seq=0 ttl=64 time=0.065 ms
    64 bytes from 172.21.0.3: seq=1 ttl=64 time=0.065 ms
    64 bytes from 172.21.0.3: seq=2 ttl=64 time=0.085 ms
    64 bytes from 172.21.0.3: seq=3 ttl=64 time=0.069 ms
    ```         
    ```sh
    $ docker run -dit --name ubuntu3 bash
    ```
     ```sh
    $ docker exec -it ubuntu3 bash
    ```
     ```sh
    $ bash-5.2# ping ubuntu2
    ping: bad address 'ubuntu2'
    bash-5.2# ping ubuntu1
    ping: bad address 'ubuntu1'
    ```    
- Conectando um container a uma network 

     ```sh
    $ docker network connect minharede ubuntu3
    ```
    ```sh
    $ docker exec -it ubuntu3 bash
    ```
    ```sh
    $ bash-5.2# ping ubuntu2
    PING ubuntu2 (172.21.0.3): 56 data bytes
    64 bytes from 172.21.0.3: seq=0 ttl=64 time=0.070 ms
    64 bytes from 172.21.0.3: seq=1 ttl=64 time=0.066 ms
    64 bytes from 172.21.0.3: seq=2 ttl=64 time=0.063 ms
    64 bytes from 172.21.0.3: seq=3 ttl=64 time=0.082 ms
    ```         

### 03 - Trabalhando com host

- Criando imagem docker

    ```sh
    $ docker run --rm -d --name nginx --network host nginx
    ``` 

### 04 - Container acessando nossa maquina

- Criando container para acessar a maquina

    ```sh
    $ docker run --rm -it --name ubuntu ubuntu bash
    ``` 
    ```sh
    $ root@931bcd25f8cc:/# apt-get update
    ```   
    ```sh
    $ root@931bcd25f8cc:/# apt-get install curl -y
    ``` 
    ```sh
    $ root@931bcd25f8cc:/# curl http://host.docker.internal:8000
    <h1>Full Cycle!!!</h1>
    ``` 
[voltar](../README.md)   