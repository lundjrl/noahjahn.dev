#!/bin/bash

export UID
docker-compose pull || exit
docker-compose build || exit
docker-compose up || exit
