ARG NEO_VERSION=latest
FROM neo4j:${NEO_VERSION}
# 3.4.0
MAINTAINER ernestoe@gmail.com

ENV APOC_VERSION 3.4.0.1
ENV APOC_URI https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases/download/${APOC_VERSION}/apoc-${APOC_VERSION}-all.jar

RUN mv plugins /plugins && ln -s /plugins \
    && wget -q -O apoc-${APOC_VERSION}-all.jar $APOC_URI && mv apoc-${APOC_VERSION}-all.jar /plugins \
    && sed -i '/^#dbms.*auth_enabled/s/^#//' conf/neo4j.conf

# COPY --chown=neo4j ./auth /data/dbms
