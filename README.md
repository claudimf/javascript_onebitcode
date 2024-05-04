# Curso de JAVASCRIPT da OneBitCode

## Instrutor: Isaac Pontes

### Referências
- [Perfil no GitHub](https://github.com/isaacpontes)
- [Perfil no LinkedIn](https://www.linkedin.com/in/isaac-pontes/)

Neste curso o que temos a aprender:  

1° JAVASCRIPT  
2° Configuração do Docker  

# Notas das Aulas
<details>
    <summary>Aulas</summary>
    <ul>
        <li><a href="https://www.youtube.com/watch?v=AYiwwzvh3ec">Aula 01 - O que é JavaScript?</a>
        </li>
    </ul>
</details>

```sh
docker compose run --rm app bash
```

# Guia do desenvolvedor

## 🐳 Desenvolvendo utilizando Docker

### Permissões dos arquivos:
Se você criar um arquivo dentro de um container para que se tenha acesso localmente, você precisa alterar as permissões:

```sh
sudo chown -R $USER:$USER .
```
### Construindo o projeto localmente:
No pasta raíz há um arquivo chamado '01_build_local_project.sh' para construir o projeto localment, para tal execute:

```sh
bash 01_build_local_project.sh
```

### Acessar o bash:
```sh
docker compose run --rm app bash
```

### Caso não tenha o package.json:
No momento em que construir o projeto através do "docker compose build app" e você não tiver o arquivo package.json você pode simplesmente comentar a linha "COPY package.json ." do arquivo do Dockerfile e rodar o build novamente:

```sh
docker compose build app
docker compose run --rm app bash
npm init --yes
```


### Rodando o Node localmente:
```sh
docker compose run --rm app node

# Exemplo:
console.log("Ola, fulano")
```
## Referências utilizadas
[1° Curso de JAVASCRIPT: Aula 01 - O que é JavaScript?](https://www.youtube.com/watch?v=AYiwwzvh3ec)  

[2° OneBitCode playlist JAVASCRIPT](https://www.youtube.com/playlist?list=PLdDT8if5attGxApLC1HQk4BEwFjyuLHAD)  

[3° Using Docker Compose for NodeJS Development](https://www.cloudbees.com/blog/using-docker-compose-for-nodejs-development)  

[4° Node LTS](https://nodejs.org/en) 

[5° Codepen IO](https://codepen.io/pen) 