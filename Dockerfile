FROM ubuntu:latest

RUN apt-get update && curl -sSfL https://deb.nodesource.com/setup_18.x | bash -E -

RUN apt-get install nodejs

RUN mkdir /root/project

ADD ./ /root/project/