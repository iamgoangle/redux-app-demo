
# docker build -t goangle/reduxapp:1.0 --build-arg CODE_VERSION=8.6.0 --build-arg PROJECT=redux-app-demo --no-cache .

ARG CODE_VERSION

FROM node:${CODE_VERSION} as development

ARG PROJECT

LABEL version="1.0"
LABEL maintainer="Teerapong Singthong"

# Clone project
RUN mkdir -p /app
ADD . /app
WORKDIR /app

# Run linux command on build container
RUN npm config set always-auth true \
    && npm config set email st.teerapong@gmail.com \
    && npm install \
    && npm dedupe -d

EXPOSE 8080

CMD [ "npm", "run", "dev" ]

