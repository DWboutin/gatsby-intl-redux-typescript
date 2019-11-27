import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AnyAction } from 'redux'
import { Epic, ofType } from 'redux-observable'
import { from, Observable, of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'

import { StatusEffect } from '../models/store/request/request'

export const createFetchEpic = (
  requestAction: string,
  successAction: string,
  failureAction: string,
  url: string,
  options?: AxiosRequestConfig,
  transform?: (value: any) => any
): Epic => {
  return (action$: Observable<AnyAction>) =>
    action$.pipe(
      ofType(requestAction),
      switchMap(action =>
        from(axios.get(url, options || undefined)).pipe(
          map((res: AxiosResponse) => res.data),
          map(transform || (x => x)),
          map(data => ({
            type: successAction,
            payload: data,
            data: action.data,
            effect: StatusEffect.LOADED
          })),
          catchError(err =>
            of({
              type: failureAction,
              payload: err,
              data: action.data,
              effect: StatusEffect.FAILED
            })
          )
        )
      )
    )
}
