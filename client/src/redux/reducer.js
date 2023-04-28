import {
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  ADDRECIPE,
  ADDRECIPE_FAIL,
  ADDRECIPE_SUCCESS,
  DELETERECIPE,
  DETAILRECIPE,
  DETAILRECIPE_FAIL,
  DETAILRECIPE_SUCCESS,
  GETRECIPES,
  GET_AMERICAN_RECIPES,
  GET_FRENCH_RECIPES,
  GET_INDIAN_RECIPES,
  GET_ITALIAN_RECIPES,
  GET_KID_FRIENDLY_RECIPES,
  GET_MEXICAN_RECIPES,
  GET_TUNISIAN_RECIPES,
  UPDATERECIPE,
  GET_ALLUSERS,
  DELETEUSER,
  BLOCKUSER,
  FAVORITE_REMOVE_ITEM,
  FAVORITE_ADD_ITEM_FAIL,
  FAVORITE_ADD_ITEM,
  FAVORITE_ADD_ITEM_SUCCESS,
} from "./actionTypes";

const init = {
  loading: false,
  errors: null,
  users: null,
  token: null,
  isAuth: false,
  Recipes: null,
  oneRecipe: null,
  error: null,
  favoriteItems: [],
};
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case LOGIN:
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        errors: null,
        token: payload.token,
        users: payload.users,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        loading: false,
        errors: null,
        token: null,
        users: null,
      };
    }
    case GET_PROFILE_SUCCESS:
      return {
        loading: false,
        users: payload,
        isAuth: true,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case GET_ALLUSERS:
      return {
        ...state,
        users: payload,
        loading: false,
        errors: null,
      };
    case DELETEUSER:
      return {
        ...state,
        users: state.users.filter((el) => el._id !== payload),
      };
    case BLOCKUSER:
      return {
        ...state,
        users: state.users.map((el) => (el._id === payload._id ? payload : el)),
      };
    case ADDRECIPE:
    case DETAILRECIPE:
      return {
        ...state,
        loading: true,
      };
    case ADDRECIPE_SUCCESS:
      return {
        ...state,
        Recipes: [...state.Recipes, payload],
        loading: false,
      };
    case ADDRECIPE_FAIL:
    case DETAILRECIPE_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GETRECIPES:
    case GET_FRENCH_RECIPES:
    case GET_AMERICAN_RECIPES:
    case GET_ITALIAN_RECIPES:
    case GET_INDIAN_RECIPES:
    case GET_MEXICAN_RECIPES:
    case GET_KID_FRIENDLY_RECIPES:
    case GET_TUNISIAN_RECIPES:
      return {
        ...state,
        Recipes: payload,
      };
    case UPDATERECIPE:
      return {
        ...state,
        Recipes: state.Recipes.map((el) =>
          el._id === payload._id ? payload : el
        ),
      };
    case DELETERECIPE:
      return {
        ...state,
        Recipes: state.Recipes.filter((el) => el._id !== payload),
      };
    case DETAILRECIPE_SUCCESS:
      return {
        ...state,
        oneRecipe: payload,
        loading: false,
      };
    case FAVORITE_ADD_ITEM:
      return {
        ...state,
        loading: true,
      };
    case FAVORITE_ADD_ITEM_SUCCESS:
      const item = payload;
      const existItem = state.favoriteItems.find(
        (el) => el.Recipes === item.Recipes
      );

      if (existItem) {
        return {
          ...state,
          favoriteItems: state.favoriteItems.map((el) =>
            el.Recipes === existItem.Recipes ? item : el
          ),
        };
      } else {
        return {
          ...state,
          favoriteItems: [...state.favoriteItems, item],
        };
      }
    case FAVORITE_ADD_ITEM_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case FAVORITE_REMOVE_ITEM:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (el) => el.Recipes !== payload
        ),
      };

    default:
      return state;
  }
};
export default reducer;
