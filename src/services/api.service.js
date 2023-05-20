export const URL = 'https://api.npoint.io/97d89162575a9d816661'

export async function callAPI() {
  const response = await fetch(URL)
  const data = await response.json()

  return data
}

export async function getAccounts() {
  const data = await callAPI()
  return data.cuentas
}
