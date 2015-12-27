#!/bin/bash

filename=$1
echo "<div id=\"title\">" >> $filename
echo "</div>" >> $filename
echo "<div id=\"writedate\">" >> $filename
echo "$(date +'%Y-%m-%d %H:%M')" >> $filename
echo "</div>" >> $filename
echo "<div id=\"description\">" >> $filename
echo "</div>" >> $filename
