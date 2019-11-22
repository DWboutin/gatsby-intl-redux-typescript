export const save = (key: string, payload: any): void => {
  localStorage.setItem(key, JSON.stringify(payload))
}

export const get = (key: string): any => {
  return JSON.parse(localStorage.getItem(key) || '{}')
}
