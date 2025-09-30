const { getRequest } = require("../../src/helpers/request")

describe('Get All Products', () => {
    it('Get All Products should return an array', async() => {
        const products = await getRequest('/products')
        expect(Array.isArray(products)).toBe(true)
    });

    it.only('Get Product should return an object', async() => {
        const products = await getRequest('/products')
        const productId = products[0].id
        const product = await getRequest('/products/' + productId)
        expect(product).toEqual(expect.any(Object))
    });
})

