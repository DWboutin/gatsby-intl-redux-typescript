import { Observable, Subject } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'

import { RootState } from '../models/store'
import { store } from '../store'

const masterStoreObservable = new Subject<RootState>()
store.subscribe(() => masterStoreObservable.next(store.getState()))

const get = (object: any, path: any[]): any => {
  try {
    return path.length === 0 ? object : get(object[path[0]], path.splice(1))
  } catch (error) {
    return undefined
  }
}

export const observe$ = (query: string[]): Observable<any> => {
  return masterStoreObservable.pipe(
    map((rootState: RootState) => get(rootState, query)),
    distinctUntilChanged()
  )
}

export const select$ = <T>(
  selector: (state: RootState) => T
): Observable<T> => {
  return masterStoreObservable.pipe(map(selector), distinctUntilChanged())
}
