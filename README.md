# jsargos

A wrapping code to the REST API of Thingsboard. 

## Generating the wrapper 

The swagger wrapper can be downloaded from the thingsboard sever from the 
address <TB server>/v2/api-docs?group=thingsboard. 
 
Then, the code was generated with [swagger-codegen](https://github.com/swagger-api/swagger-codegen). 
using the bash  
```bash 

./run-in-docker.sh mvn package
wget 127.0.0.1:8080/v2/api-docs?group=thingsboardvv
sudo docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate     -i /local/thingsboard.json      -l javascript     -o /local/swagger 
```

## Notice

Using the code generated for python required removing the  optional parameters (`{...}`) from the URL 
of the different commands. Maybe it is required here as well 

