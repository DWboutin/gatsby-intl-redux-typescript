export const save = <T>(key: string, payload: T): void => {
  localStorage.setItem(key, JSON.stringify(payload))
}

export const get = <T>(key: string): T | null => {
  try {
    return JSON.parse(localStorage.getItem(key) || '{}')
  } catch (error) {
    return null
  }
}
