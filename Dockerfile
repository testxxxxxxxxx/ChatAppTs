FROM ubuntu:latest

RUN apt-get update && curl -sSfL https://deb.nodesource.com/setup_18.x | bash -E -

RUN apt-get install git nodejs -y

RUN mkdir /root/project

ADD ./ /root/project/