// import {
//   GET_PROFILE,
//   GET_PROFILE_FAIL,
//   GET_PROFILE_SUCCESS,
//   LOGIN,
//   LOGIN_FAIL,
//   LOGIN_SUCCESS,
//   LOG_OUT,
//   REGISTER,
//   REGISTER_FAIL,
//   REGISTER_SUCCESS,
// } from "./actionTypes";

// const init = {
//   loading: false,
//   errors: null,
//   users: null,
//   token: null,
//   isAuth: false,
// };
// export const reducerUser = (state = init, { type, payload }) => {
//   switch (type) {
//     case REGISTER:
//     case LOGIN:
//     case GET_PROFILE:
//       return {
//         ...state,
//         loading: true,
//       };
//     case REGISTER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         users: payload,
//       };
//     case LOGIN_SUCCESS: {
//       return {
//         ...state,
//         loading: false,
//         errors: null,
//         token: payload.token,
//         users: payload.users,
//       };
//     }
//     case LOG_OUT: {
//       return {
//         ...state,
//         loading: false,
//         errors: null,
//         token: null,
//         users: null,
//       };
//     }
//     case GET_PROFILE_SUCCESS:
//       return {
//         loading: false,
//         users: payload,
//         isAuth: true,
//       };
//     case REGISTER_FAIL:
//     case LOGIN_FAIL:
//     case GET_PROFILE_FAIL:
//       return {
//         ...state,
//         loading: false,
//         errors: payload,
//       };
//     default:
//       return state;
//   }
// };
// export default reducerUser;
