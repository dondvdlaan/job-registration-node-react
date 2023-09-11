# Filename: docker_down.sh
# This file should be sourced

#! usr/bin/bash
echo "Docker down"

chmod u+x docker_down.sh

#cd idea-IU-231.8109.175/bin
# Back-up database to local disc with sleep precaution
sleep 10
docker exec mysql usr/bin/mysqldump -proot job > sqldb/backup_job.sql
docker compose down
docker rm -f $(docker ps -aq)
docker ps -a

pwd
echo $$

#cd


