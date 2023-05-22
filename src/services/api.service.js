export const API_URL = 'https://api.npoint.io/97d89162575a9d816661'

export async function callAPI(signal) {
  const response = await fetch(API_URL, { signal })
  if (!response.ok) throw new Error('Hubo un error con la request')
  const data = await response.json()
  return data
}

export async function getAccounts(signal) {
  const data = await callAPI(signal)
  return data.cuentas
}
