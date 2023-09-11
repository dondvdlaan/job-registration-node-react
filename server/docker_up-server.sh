# Filename: docker_up-server.sh
# This file should be sourced

#! usr/bin/bash
echo "Docker up server"

chmod u+x docker_up-server.sh

#cd idea-IU-231.8109.175/bin

# Build image
docker build -t server .
# Run image
docker run -it -p 8000:8000 server

docker ps -a


pwd
echo $$

#cd


