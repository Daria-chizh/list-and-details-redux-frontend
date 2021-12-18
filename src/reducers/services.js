import {
  LOAD_SERVICES_RESPONSE, LOAD_SERVICES_REQUEST, LOAD_SERVICE_DETAILS_RESPONSE, LOAD_SERVICE_DETAILS_REQUEST,
} from '../actions/actionTypes';

const initialState = { services: [], serviceDetails: null };

export default function serviceListReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case LOAD_SERVICES_REQUEST:
      return { ...state, services: [] };
    case LOAD_SERVICES_RESPONSE:
      return { ...state, services: payload.services };
    case LOAD_SERVICE_DETAILS_REQUEST:
      return { ...state, serviceDetails: null };
    case LOAD_SERVICE_DETAILS_RESPONSE:
      return { ...state, serviceDetails: payload.serviceDetails };
    default:
      return state;
  }
}
