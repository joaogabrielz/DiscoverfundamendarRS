## Criar Package.json(config do Projeto)

  - > git init
  - > git init -y (yes for all)

## instalar modulos de terceiros

  - > npm install = npm i
      npm install cfonts

  - Dependencia de desenvolvimento:
  (Só usa em desenvolvimento, qnd forem usar nao precisa instalar)
    npm i -D < dependencia >

    - Varios
      npm i < depd1 > < depd2 > < depd2 > 

## Ao editar o 'packege.json' manual

  - > npm update (atualiza, rempaeia)

## node_modules:

 - 1 modulo chama o outro, que dependencia
    mesmo nao tendo instalado, as dependencias 
    tambem tem package.json e dependencias/devDependencies
    - Pode ser deleteda( npm i (reinstall) )

  - >  .gitignore > node_modules/

## package-lock.json

 - Não mexe nele, ele mapeia suas dependencias
  - Não delete

## instalar modulos maneira global
 - não vem com node_modules
 - > npm i < Dependencie > -g
    - > npm i opn -git

     Vizualizar:
    - > npm root -g

     Remover
    - > npm uninstall opn -g

## Mudar versões de Pacotes Instalados

  - Geralmente nao manipulamos o package.json frequentemente

   - npm i moment
   "dependencies": {
   > "moment": "^2.29.1"
   }

  - > major.minor.patch
    (^): sempre q atualizar atualiza o 'minor' e 'patch'
    (2): versao do proj. pode quebrar dependendo
    (1): resolvendo bug
    (29): alterações mas nao quebra o proj
    (~): Vai atualizar so o 'patch'
    sem (^) e (~): sempre vai manter a versão nunca
    vai mudar 
    (*): Vai mudar todas as versões

- >  ### Mudar de versao:

  - > ### Instalar versão Especifica:
    - >  npm i moment@1.5.1

  - > ### Verificar versões:  
    - > npm outdated

  - >  ### Atualiza versao Mais nova / Ultima versao:
      - >  npm upgrade

      - > npm i moment@latest

## Desinstalar pacotes:

 - > npm uninstall moment

