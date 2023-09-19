# Filename: git_update.sh
# This file should be sourced

#! usr/bin/bash
echo "update to git"

chmod u+x git_update.sh

#cd idea-IU-231.8109.175/bin

git add .
git commit -m "Add Favorite Company"
 git push --set-upstream job-registration-node-react master

pwd
echo $$

#cd


