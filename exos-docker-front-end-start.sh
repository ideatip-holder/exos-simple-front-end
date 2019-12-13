#!/bin/bash

# Sincroniza as pastas de desenvolvimento com o ambiente que será executado no servidor
rsync -avzr /home/ggouvea/Documentos/development/estudo/front-end/exos-test-drive/ servidor@192.168.0.181:/home/servidor/exos-front-end/

# Inicia o docker apontando para a pasta do projeto no servidor
ssh servidor@192.168.0.181 'docker start -a exos-front-end'


# Somente na criação de um novo
#ssh servidor@192.168.0.181 'docker run --name exos-front-end -p 8081:80 -v /home/servidor/exos-front-end/:/usr/local/apache2/htdocs/ httpd'

function stopContainer {
    docker stop exos-front-end
    echo "Container foi parado"
}

read -p "Ao final dos trabalhos pressione enter para matar o container"

trap stopContainer EXIT

