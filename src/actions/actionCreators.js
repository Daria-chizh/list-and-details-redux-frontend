import {
  LOAD_SERVICE_DETAILS_REQUEST, LOAD_SERVICES_REQUEST, LOAD_SERVICE_DETAILS_RESPONSE, LOAD_SERVICES_RESPONSE,
  FETCH_START, FETCH_ERROR, FETCH_DONE,
} from "./actionTypes";

export function loadServicesRequest() {
  return { type: LOAD_SERVICES_REQUEST };
}

export function loadServicesResponse(services) {
  return { type: LOAD_SERVICES_RESPONSE, payload: { services } };
}

export function loadServiceDetailsRequest(id) {
  return { type: LOAD_SERVICE_DETAILS_REQUEST, payload: { id } };
}

export function loadServiceDetailsResponse(serviceDetails) {
  return { type: LOAD_SERVICE_DETAILS_RESPONSE, payload: { serviceDetails } };
}

// actions for fetcher reducer

export function fetchStart() {
  return { type: FETCH_START };
}

export function fetchDone() {
  return { type: FETCH_DONE };
}

export function fetchError(error) {
  return { type: FETCH_ERROR, payload: { error } };
}
