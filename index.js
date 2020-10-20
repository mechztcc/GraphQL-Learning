const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`


    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int 
        salario: Float
        vip: Boolean
            }

    type Query {
        ola: String
        horaAtual: String
        usuarioLogado: Usuario
    }
`

const resolvers = {

    Query: {
        ola() {
            return 'Olá, Alberto!'
        },

        horaAtual() {
            return `${new Date()}`
        },

        usuarioLogado() {
            return {
                id: 1,
                nome: 'Alberto',
                email: 'alberto@email.com',
                idade: 26,
                salario: 5.600,
                vip: true
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`);
})