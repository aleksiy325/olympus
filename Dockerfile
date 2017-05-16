FROM python:3.6 
ENV PYTHONUNBUFFERED 1  
RUN mkdir /config  
ADD /config/requirements.pip /config/  
RUN pip install -r /config/requirements.pip 
FROM node:boron 
ADD /package.json ./
RUN npm install
RUN mkdir /src;  
WORKDIR /src  