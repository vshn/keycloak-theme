FROM docker.io/library/busybox

COPY theme /theme

RUN \
  chmod -R ugo+r /theme

USER 1001:0
