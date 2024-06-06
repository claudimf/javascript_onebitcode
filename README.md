# Curso de JAVASCRIPT da OneBitCode

## Instrutor: Isaac Pontes

### Referências
- [Perfil no GitHub](https://github.com/isaacpontes)
- [Perfil no LinkedIn](https://www.linkedin.com/in/isaac-pontes/)

Neste curso o que temos a aprender:  

1. JAVASCRIPT  
2. Configuração do Docker  

## Notas das Aulas
<details open>
    <summary>Ver Aulas</summary>
    <ul>
        <li>
            <a href="https://www.youtube.com/watch?v=AYiwwzvh3ec">Aula 01 - O que é JavaScript?</a>
        </li>
    </ul>
    <ul>
        <li>
            <a href="https://www.youtube.com/watch?v=O8T_wlotoRE">Aula 02 - Tipos de Dados, Strings, Números e Operações Matemáticas</a>
        </li>
    </ul>
    <ul>
        <li>
            <a href="https://www.youtube.com/watch?v=797wp0Et4D8">Aula 03 - Expressões Lógicas e Estruturas de Controle</a>
        </li>
    </ul>
    <ul>
        <li>
            <a href="https://www.youtube.com/watch?v=3vPYpGnH9kQ">Aula 04 - Funções e Módulos</a>
        </li>
    </ul>
    <ul>
        <li>
            <a href="https://www.youtube.com/watch?v=eNv9hUFqCvU">Aula 05 - Objetos e Arrays</a>
        </li>
    </ul>
    <ul>
        <li>
            <a href="https://www.youtube.com/watch?v=-stSStxblQ8">Aula 06 - DOM: Manipulação de Elementos e Eventos</a>
        </li>
    </ul>
    <ul>
        <li>
            <a href="https://www.youtube.com/watch?v=fGtlxGR14cg">Aula 07 - ASSINCRONICIDADE: Domine Promises em JavaScript!</a>
        </li>
    </ul>
</details>

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

[6° Creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file) 

[7° Objetos Globais(tipos primitivos)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects) 

[8° Operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators) 

[9° String](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String) 

[10° Prompt](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/prompt) 

[11° Verificar compatibilidade de módulos com o "Can I Use"](https://caniuse.com/?search=esmodule) 

[12° Zod package](https://www.npmjs.com/package/zod) 

[13° Vite](https://vitejs.dev/) 

[14° Exercícios resolvidos](https://onebitcode.notion.site/Exerc-cios-da-Aula-4-117094074d264b50ba3a29ae237d5d53)  