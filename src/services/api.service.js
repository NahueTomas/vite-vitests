export const API_URL = 'https://api.npoint.io/97d89162575a9d816661'

export async function callAPI(signal) {
  let signalToSend = signal

  // Dont send signal on TESTS (because there is an error with "Mock Service Worker")
  // eslint-disable-next-line no-undef
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'test')
    signalToSend = undefined

  const response = await fetch(API_URL, { signal: signalToSend })
  if (!response.ok) throw new Error('Hubo un error con la request')
  const data = await response.json()
  return data
}

export async function getAccounts(signal) {
  const data = await callAPI(signal)
  return data.cuentas
}
