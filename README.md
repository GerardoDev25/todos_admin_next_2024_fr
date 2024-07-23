# Development

steps to follow to run the app in dev mode

1. rename the __.env.template__ file to __.env__ and fill the fields
2. run database ```docker compose up -d```
3. migrate the db ```yarn prisma migrate dev```
4. generate structure in the db ```yarn prisma generate```
5. run app ```yarn dev```
6. eject the [seed url](http://localhost:3000/api/seed) to populate the db with test data

## note
default user:
  - __email__: john@example.com
  - __password__: 123456


prisma commands
```sh
yarn prisma init
yarn prisma migrate dev
yarn prisma generate
```