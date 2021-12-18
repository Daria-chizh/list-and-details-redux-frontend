import {
  FETCH_DONE, FETCH_ERROR, FETCH_START,
} from '../actions/actionTypes';

const initialState = { loading: false, error: '' };

export default function fetcherReducer(state = initialState,  action) {
  switch (action.type) {
    case FETCH_DONE:
      return { loading: false, error: '' };
    case FETCH_ERROR:
      return { loading: false, error: String(action.payload.error) };
    case FETCH_START:
      return { loading: true, error: '' };
    default:
      return state;
  }
}
