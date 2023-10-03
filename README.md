## Tareas para hacer en Linux y comandos para Docker

Este repositorio contiene instrucciones y comandos para configurar un entorno de desarrollo basado en Docker para un proyecto relacionado con Star Wars.

### Pasos a seguir:

1. En la carpeta `gateway`, ejecuta los siguientes comandos para construir y ejecutar el servicio de puerta de enlace (gateway):

```shell
docker build -t characters .
docker run -p 8001:8001 characters
```

2. En la carpeta `characters`, ejecuta los siguientes comandos para construir y ejecutar el servicio de personajes (characters):
```shell
docker build -t characters .
docker run -p 8001:8001 characters
```

3. En la carpeta principal, ejecuta el siguiente comando para crear una red de Docker llamada "starwars":
```shell
docker network create starwars
```

4. En la carpeta `gateway`, ejecuta el siguiente comando para ejecutar el servicio de puerta de enlace y conectarlo a la red "starwars":
```shell
docker run --network=starwars --name=gateway -p 8000:8000 gateway
```

5. En la carpeta `characters`, ejecuta el siguiente comando para ejecutar el servicio de personajes y conectarlo a la red "starwars":
```shell
docker run --network=starwars --name=characters -p 8001:8001 characters
```


6. Repite los pasos 4 y 5 para los servicios de películas (films) y planetas (planets) siguiendo el mismo patrón.

¡Listo! Ahora tienes un entorno Docker configurado para trabajar en tu proyecto relacionado con Star Wars.
