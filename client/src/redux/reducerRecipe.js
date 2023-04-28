// import {
//   ADDRECIPE,
//   ADDRECIPE_FAIL,
//   ADDRECIPE_SUCCESS,
//   DELETERECIPE,
//   DETAILRECIPE,
//   DETAILRECIPE_FAIL,
//   DETAILRECIPE_SUCCESS,
//   GETRECIPES,
//   GET_AMERICAN_RECIPES,
//   GET_FRENCH_RECIPES,
//   GET_INDIAN_RECIPES,
//   GET_ITALIAN_RECIPES,
//   GET_KID_FRIENDLY_RECIPES,
//   GET_MEXICAN_RECIPES,
//   GET_TUNISIAN_RECIPES,
//   UPDATERECIPE,
// } from "./actionTypes";

// const init = {
//   Recipes: null,
//   oneRecipe: null,
//   error: null,
//   loading: false,
// };

// export const reducerRecipe = (state = init, { type, payload }) => {
//   switch (type) {
//     case ADDRECIPE:
//     case DETAILRECIPE:
//       return {
//         ...state,
//         loading: true,
//       };
//     case ADDRECIPE_SUCCESS:
//       return {
//         ...state,
//         Recipes: [...state.Recipes, payload],
//         loading: false,
//       };
//     case ADDRECIPE_FAIL:
//     case DETAILRECIPE_FAIL:
//       return {
//         ...state,
//         error: payload,
//         loading: false,
//       };
//     case GETRECIPES:
//     case GET_FRENCH_RECIPES:
//     case GET_AMERICAN_RECIPES:
//     case GET_ITALIAN_RECIPES:
//     case GET_INDIAN_RECIPES:
//     case GET_MEXICAN_RECIPES:
//     case GET_KID_FRIENDLY_RECIPES:
//     case GET_TUNISIAN_RECIPES:
//       return {
//         ...state,
//         Recipes: payload,
//       };
//     case UPDATERECIPE:
//       return {
//         ...state,
//         Recipes: state.Recipes.map((el) =>
//           el._id === payload._id ? payload : el
//         ),
//       };
//     case DELETERECIPE:
//       return {
//         ...state,
//         Recipes: state.Recipes.filter((el) => el._id !== payload),
//       };
//     case DETAILRECIPE_SUCCESS:
//       return {
//         ...state,
//         oneRecipe: payload,
//         loading: false,
//       };

//     default:
//       return state;
//   }
// };

// export default reducerRecipe;
