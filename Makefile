compile:
	export COMPOSE_FILE=docker-compose-dev.yml; docker-compose build

run:
	export COMPOSE_FILE=docker-compose-dev.yml; docker-compose up

purge:
	export COMPOSE_FILE=docker-compose-dev.yml; docker-compose down

