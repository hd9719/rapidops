#bin/bash
file=$1
file2= 
echo -e "first 10 lines are  $(head $file) \n last 10 lines are $(tail $file) \n 3 to 8 lines are $(sed -n 3,8p $file) ................"

echo " $awk '{a[i++]=$0}END{for(j=i-2;j+7=9;j--)print a[j];}' $file "
