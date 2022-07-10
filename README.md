# gwide  App
## Nx, NestJS(Fastify), GraphQL(Mercurius), Prisma, NestJS, 


### How to run:
- Install docker and nx globally
- `npm i`
- Create `.local.env` from `.env`
- `npm start:dev` 
- Go to GQL Playground. Create User :
```
mutation {
  signUp(signUpInput:{
    email: "youtube-test@test.com", 
    password:"testtest"
  }){
    id
  }
}
```
