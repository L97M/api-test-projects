const request = require('supertest')

const baseUrl = 'https://www.swapi.tech/api/'

it('GET /people/1 - deve retornar status 200 e dados de Luke Skywalker quando o ID for válido', async() => {
    const response = await request(baseUrl).get('/people/1')
    // console.log(response.status)
    // console.log(response.body)

    expect(response.status).toBe(200)
    expect(response.body.result.properties.name).toBe('Luke Skywalker')
})

it('GET /people/0 - deve retornar status 404 e mensagem "not found" quando o ID não existir', async() => {
    const response = await request(baseUrl).get('/people/0')
    // console.log(response.status)
    // console.log(response.body)

    expect(response.status).toBe(404)
    expect(response.body.message).toBe('not found')
});