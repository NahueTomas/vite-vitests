export const URL = 'https://api.npoint.io/97d89162575a9d816661'

export async function callAPI(signal) {
  const response = await fetch(URL, { signal })
  const data = await response.json()

  return data
}

export async function getAccounts(signal) {
  const data = await callAPI(signal)
  return data.cuentas
}
