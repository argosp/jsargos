./run-in-docker.sh mvn package
wget 127.0.0.1:8080/v2/api-docs?group=thingsboardvv
sudo docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate     -i /local/thingsboard.json      -l python     -o /local/thingsboard/python 

