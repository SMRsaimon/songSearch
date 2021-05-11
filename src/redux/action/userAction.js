export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";


export const requestApiData = (payload) => ({
    payload,
  type: REQUEST_API_DATA,
}
);
  export const receiveApiData = payload => ({
    payload,
    type: RECEIVE_API_DATA
  });

