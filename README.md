Details:

There are another ways to handle the exercise, I choose to use docker-compose to provision the containers.
There are 2 containers as requested for the web server and for the mongoDB.

The server written in NodeJs is waiting for http request on port 8080and return "hello world: X apples"

The cmd script is remove the previous dockers (docker-compose down) and running a new instances
Also run curl to trigger the server response, but it better to run it from browser.
