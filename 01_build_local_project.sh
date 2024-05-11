#!/bin/sh

echo "Containeres existentes - excluindo..."
docker compose down
echo "Containeres existentes - feito!"

echo

echo "Volumes - excluindo..."
docker volume rm $(docker volume ls -f dangling=true)
echo "Volumes - feito!"

echo

echo "Imagens - construindo..."
docker rmi javascript_onebitcode-app
docker compose build app
echo "Imagens - feito!"

echo "Node versão instalada"
docker compose run --rm app node --version

echo "NPM versão instalada"
docker compose run --rm app npm --version

# Como executar:
# bash 01_build_local_project.sh