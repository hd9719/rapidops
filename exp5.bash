#!/bin/bash

dir=$1

if [ "$dir" ] ; then

  filename=$(ls -t $dir | head -1)
  
   echo "$filename"
else
   
    echo "please enter directory"

fi
