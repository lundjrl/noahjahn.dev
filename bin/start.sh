#!/bin/bash

export UID
docker-compose pull || exit
docker-compose build || exit
docker-compose up -d || exit
docker-compose logs -f || { docker-compose down; exit; }
