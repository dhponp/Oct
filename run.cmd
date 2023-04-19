@ECHO OFF
:: This CMD script run the excersice.

TITLE Hello Apples

START /B /WAIT cmd /c "docker-compose down"

START /B /WAIT cmd /c "docker-compose up -d"

ECHO Please wait..

curl http://localhost:8080

PAUSE