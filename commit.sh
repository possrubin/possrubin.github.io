#!/bin/bash

read -p "commit : " commit
git add --all
git commit -m "$commit"
git push -u origin master
