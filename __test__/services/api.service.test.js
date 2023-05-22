import { describe, it, expect } from 'vitest'
import { API_URL, callAPI, getAccounts } from '../../src/services/api.service'

import { server } from '../../__mocks__/server'
import { errorHandlers } from '../../__mocks__/errorHandlers'

describe('api.service tests', () => {
  it('Should be a valid URL', () => {
    const urlRegex =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/

    expect(API_URL.match(urlRegex)).not.toBe(null)
  })

  it('Should callAPI return an object', async () => {
    const response = await callAPI()
    expect(response.cuentas).not.toBe(undefined)
    expect(response.cuestas).not.toBe(undefined)
  })

  it('Should return the accounts from the enpoint', async () => {
    const cuentas = await getAccounts()

    // Should be an array
    expect(typeof cuentas).not.toBe('string')
    expect(typeof cuentas.length).toBe('number')
  })

  it('Should throw an error', async () => {
    server.use(...errorHandlers)
    let error

    try {
      const cuentas = await getAccounts()
      return cuentas
    } catch (err) {
      error = err
    }

    expect(error.message).toBe('Hubo un error con la request')
  })
})
