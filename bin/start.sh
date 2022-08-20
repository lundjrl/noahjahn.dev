#!/bin/bash

export UID
docker-compose pull || exit
docker-compose build || exit
docker-compose run --rm node npm install
docker-compose up -d || exit
docker-compose logs -f || { docker-compose down; exit; }
