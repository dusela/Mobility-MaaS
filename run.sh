#!/bin/bash

IP_ADDRESS=$(cat .env | grep ip_addres | sed 's/ip_address=//g' | sed 's/"//g')
echo "Reading IP Address: $IP_ADDRESS"

echo "Stopping all running containers"
docker stop $(docker ps -aq)
docker rm -f $(docker ps -aq)
docker volume rm $(docker volume ls -q)

echo "Starting Indy Network"
./von-network/manage build
./von-network/manage up $IP_ADDRESS

sleep 10

echo "Starting MSP Components + routing-webapp"
# docker-compose -f docker-compose_MSPs.yml up -d --build
# node MSP_server.js --ip $IP_ADDRESS --port 8000 --name MSP1_server --agentUrl http://$IP_ADDRESS:7080
# node MSP_server.js --ip $IP_ADDRESS --port 11000 --name MSP2_server --agentUrl http://$IP_ADDRESS:10080

# sleep 10

# echo "Starting routing-web App"
docker-compose -f docker-compose.yml up -d --build
docker logs routing-webapp -f