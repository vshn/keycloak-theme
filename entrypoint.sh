#!/usr/bin/env bash

/opt/keycloak/bin/kc.sh import --file /opt/keycloak/data/import/master.json
/opt/keycloak/bin/kc.sh start-dev --debug --spi-theme-static-max-age=-1 --spi-theme-cache-themes=false --spi-theme-cache-templates=false
