FROM python:2.7

RUN mkdir /app
WORKDIR /app

ADD requirements.txt ./

RUN pip install -r requirements.txt

ADD ./ ./

CMD python ./server/AccessMap.py
