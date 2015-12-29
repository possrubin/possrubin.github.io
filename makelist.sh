#!/bin/bash

rm blogdata.json
echo "[" > blogdata.json
for f in *; do
    if [[ -d $f ]]; then
        for entry in $f/*; do
            echo "{" >> blogdata.json
            arr=$(echo $entry | tr "/" ".")
            title=$(awk 'NR==2' $entry)
            writedate=$(awk 'NR==5' $entry)
            convertedPath=${arr[0]}
            convertedPath=${convertedPath%?????}
            echo "\"file\":\"$convertedPath\"," >> blogdata.json
            echo "\"writedate\":\"$writedate\"," >> blogdata.json
            echo "\"title\":\"$title\"" >> blogdata.json
            echo "}," >> blogdata.json
        done
    fi
done
sed -i '' -e '$ d' blogdata.json
echo "}" >> blogdata.json
echo "]" >> blogdata.json
