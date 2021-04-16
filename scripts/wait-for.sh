#!/bin/bash
URL=${1?}
CODE=${2:-200}

start=$SECONDS

timeout --foreground 300 bash \
<<-EOD
  until [[ "\$RESP" == "$CODE" ]]; do 
    [[ \$RESP ]] && sleep 1
    RESP=\$(curl -sIL -o /dev/null -w '%{http_code}' $URL | tr -d '\n')
    echo -ne "\$RESP "
    TRIES=\$(( TRIES + 1 )) && [[ \$(( TRIES % 10 )) == 0 ]] && echo
  done
EOD

duration=$(( SECONDS - start ))
RET=$?

echo 

if [[ $RET -eq 0 ]]; then
    echo "$URL returned $CODE in $duration seconds"
else
    echo "$URL timed out after $duration waiting for $CODE"
    exit 1
fi
