import { ofType } from 'redux-observable';
import { of, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';

import {LOAD_SERVICE_DETAILS_REQUEST, LOAD_SERVICES_REQUEST} from "../actions/actionTypes";

import {
  fetchStart, fetchDone, fetchError,
  loadServicesResponse, loadServiceDetailsResponse,
} from "../actions/actionCreators";

const LOAD_SERVICES_URL = 'http://localhost:7070/api/services';

export const loadServicesEpic = (action$) =>  action$.pipe(
  ofType(LOAD_SERVICES_REQUEST),
  switchMap(() => {
    return concat(
      of(fetchStart()),
      ajax.getJSON(LOAD_SERVICES_URL).pipe(
        mergeMap((services) => [fetchDone(), loadServicesResponse(services)]),
        catchError((err) => of(fetchError(err)))
      )
    )
  }),
);

export const loadServiceDetailsEpic = (action$) => action$.pipe(
  ofType(LOAD_SERVICE_DETAILS_REQUEST),
  map((o) => o.payload.id),
  switchMap((id) =>
    concat(
      of(fetchStart()),
      ajax.getJSON(`${LOAD_SERVICES_URL}/${id}`).pipe(
        mergeMap((details) => [fetchDone(), loadServiceDetailsResponse(details)]),
        catchError((err) => of(fetchError(err)))
      )
    )
  ),
);
