#!/bin/bash

echo "]"
for f in *; do
    if [[ -d $f ]]; then
        for entry in $f/*; do
            echo "{"
            arr=$(echo $entry | tr "/" ".")
            title=$(awk 'NR==2' $entry)
            convertedPath=${arr[0]}
            convertedPath=${convertedPath%?????}
            echo "\"file\":\"$convertedPath\","
            echo "\"title\":\"$title\""
            echo "},"
        done
    fi
done
echo "]"
