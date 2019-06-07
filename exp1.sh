#bin/bash
dir=$1
    
  if [ "$dir" ]; then

for file in $(ls $dir)
do
	mv $file $file.new
   
done

 else
   
 echo "enter directory name"

fi
