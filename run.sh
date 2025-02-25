#!/bin/bash
docker login

cd ./17.0

docker-compose up -d

docker ps