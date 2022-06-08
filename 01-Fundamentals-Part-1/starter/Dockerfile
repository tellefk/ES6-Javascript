#DOckerfile,Image,Container
FROM python:3.7

#current container with .

WORKDIR /fastapi-app

COPY requeriments.txt
RUN pip install -r requeriments.txt
COPY ./app ./app

CMD ["Python", "./app/main.py"]

ADD database.py .

#Install requeriments
RUN pip install pandas,sqlite3

CMD ["python","/database.py"]

#docker build -t python-database
#docker run python-database
#docker run -t -i python-database  (i interactivey)

#create a vm_ python 3 -m venv venv
# .venven/binActivate
#pip instal

