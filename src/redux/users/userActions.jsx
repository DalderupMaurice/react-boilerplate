// import * as types from "../actionTypes";
// import Web3Service from "../../services/Web3Service";
// import * as loadActions from "../ApiStatus/apiStatusActions";

// export const setRiskProfileSuccess = payload => ({
//   type: types.SET_RISK_PROFLE_SUCCESS,
//   ...payload
// });

// export const getRiskProfileSuccess = payload => ({
//   type: types.GET_RISK_PROFLE_SUCCESS,
//   ...payload
// });

// export const registerUserSuccess = payload => ({
//   type: types.CREATE_USER_SUCCESS,
//   ...payload
// });

// export const loadWeb3Success = payload => ({
//   type: types.LOAD_WEB3_SUCCESS,
//   ...payload
// });

// export const loginUserSuccess = payload => ({
//   type: types.LOGIN_USER_SUCCESS,
//   ...payload
// });

// export const logoutUserSuccess = payload => ({
//   type: types.LOGOUT_USER_SUCCESS,
//   ...payload
// });

// export const init = () => dispatch => {
//   dispatch(loadActions.beginApiCall());
//   // on start --> dispatch beginApiCall in api call
//   // on resolve --> auto stop loading
//   // on reject --> dispatch apiCallError
//   Web3Service.initWeb3()
//     .then(instances => {
//       dispatch(
//         loadWeb3Success({
//           web3: instances.web3,
//           contract: instances.contract,
//           user: instances.user
//         })
//       );
//     })
//     .catch(e => console.log(e)); // eslint-disable-line
// };

// export const setRiskProfile = (
//   contract,
//   userAddr,
//   surveyHash,
//   surveyResult
// ) => async dispatch => {
//   dispatch(loadActions.beginApiCall());

//   const txInfo = await Web3Service.setRiskProfile(
//     contract,
//     userAddr,
//     surveyHash,
//     surveyResult
//   );

//   dispatch(
//     setRiskProfileSuccess({
//       riskProfile: surveyResult,
//       txInfo
//     })
//   );
// };

// export const getRiskProfile = (contract, userAddr) => async dispatch => {
//   dispatch(loadActions.beginApiCall());
//   const riskProfile = await Web3Service.getRiskProfile(contract, userAddr);
//   dispatch(getRiskProfileSuccess({ riskProfile }));
// };

// // export const register = (web3, user) => async dispatch => {
// //   dispatch(loadActions.beginApiCall());

// //   const currentUser = await Web3Service.createUser(web3, user);

// //   localStorage.setItem("user", JSON.stringify(currentUser));
// //   dispatch(
// //     registerUserSuccess({
// //       currentUser
// //     })
// //   );
// // };

// export const login = (web3, user) => async dispatch => {
//   dispatch(loadActions.beginApiCall());

//   const currentUser = await Web3Service.login(web3, user);

//   localStorage.setItem("user", JSON.stringify(currentUser));
//   dispatch(
//     loginUserSuccess({
//       currentUser
//     })
//   );
// };

// export const logout = () => async dispatch => {
//   dispatch(loadActions.beginApiCall());

//   localStorage.clear();
//   dispatch(logoutUserSuccess({}));
// };

/**
 * SAGAS
 */
export const registerUserRequest = user => ({
  type: types.CREATE_USER_REQUEST,
  payload: user
});
