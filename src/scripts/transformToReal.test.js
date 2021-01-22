import { transformToReal } from './transformToReal'

describe('transformToReal', () => {
  it('Should transform a number to pt-br', () => {
    const number = 1200
    const expectedTransformation = "R$ 1.200,00"

    expect(transformToReal(number)).not.toStrictEqual(expectedTransformation)
  })
})
