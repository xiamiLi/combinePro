export const session = {
  set(key: string, val: any): void {
    window.sessionStorage.setItem(key, JSON.stringify(val))
  },
  get(key: string) {
    const json: any = window.sessionStorage.getItem(key)
    return JSON.parse(json)
  },
  remove(key: string): void {
    window.sessionStorage.removeItem(key)
  },
  clear(): void {
    window.sessionStorage.clear()
  }
}
export const localStorageFormat = {
  set(key: string, val: any): void {
    localStorage.setItem(key, JSON.stringify(val))
  },
  get(key: string) {
    const json: any = localStorage.getItem(key)
    return JSON.parse(json)
  },
  remove(key: string): void {
    localStorage.removeItem(key)
  },
  clear(): void {
    localStorage.clear()
  }
}
