// Storage service for browser localStorage and sessionStorage
import { isObject, isString } from '@/utils/typeChecks'
import { StorageKeys } from '@/constants/storage'
import { Maybe } from '@/interfaces/types'

class StorageService {
  private storage: Storage
  private envKey: Maybe<string>

  constructor(storage: Storage, envKey?: string) {
    this.storage = storage
    this.envKey = envKey
  }

  private getKey(itemName: StorageKeys): string {
    const key = isString(itemName) ? itemName : itemName.toString()
    return this.envKey ? `${this.envKey}_${key}` : key
  }

  get(itemName: StorageKeys): ReturnType<typeof JSON.parse> {
    const key = this.getKey(itemName)
    let item
    try {
      item = this.storage.getItem(key)
    } catch (error) {
      console.error(`getItem from storage error: ${error}`)
    }

    if (item) {
      try {
        return JSON.parse(item)
      } catch (e) {
        return item
      }
    }
    return null
  }

  set(itemName: StorageKeys, item: any): void {
    try {
      const key = this.getKey(itemName)
      if (isObject(item) || Array.isArray(item)) {
        this.storage.setItem(key, JSON.stringify(item))
      } else {
        this.storage.setItem(key, item)
      }
    } catch (error) {
      console.error(`setItem to storage error: ${error}`)
    }
  }

  remove(itemName: StorageKeys): void {
    const key = this.getKey(itemName)
    this.storage.removeItem(key)
  }
}

// Safe window check for SSR
const isBrowser = typeof window !== 'undefined'

export const localStorageService = isBrowser 
  ? new StorageService(localStorage) 
  : null

export const sessionStorageService = isBrowser 
  ? new StorageService(sessionStorage) 
  : null

export default StorageService
