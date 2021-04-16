#!/bin/bash
ACTION=${1?} # "reference" or "test"

npm run build-storybook && http-server -p 8085 ./storybook-static
./scripts/wait-for.sh localhost:8085

# # Download and parse the sitemap into an array of urls
# curl -s http://localhost:1313/sitemap.xml \
#     | npx sitemap --parse \
#     | jq --slurp '. | map(.url) | sort' > devops/backstopjs/urls.json

# ADD_HOST_FLAG allows the container to make requests out to the hugo serve that is running outside of docker 
HOST_IP="$(ip route | grep -E '(default|docker0)' | grep -Eo '([0-9]+\.){3}[0-9]+' | tail -1)"
ADD_HOST_FLAG="--add-host host.docker.internal:$HOST_IP"
echo $ADD_HOST_FLAG

docker run --rm -v $(pwd):/src $ADD_HOST_FLAG \
    backstopjs/backstopjs $ACTION --config=backstop.config.js

RET=$?
kill %1   # Stop hugo serve
exit $RET # Preserve the error code from the docker run

