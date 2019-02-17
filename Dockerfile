FROM node
MAINTAINER Edmund Miller <Edmund.A.Miller@gmail.com>

# Setup zos
COPY . /app
RUN yarn global add truffle && yarn global add ganache-cli
RUN yarn global add zos@2.2.0
RUN cd /app && yarn
