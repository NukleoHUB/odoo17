#!/bin/bash
docker ps && \
docker-compose down && \
docker-compose up -d && \
docker ps