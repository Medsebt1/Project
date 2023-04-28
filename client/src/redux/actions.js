import {
  ADDRECIPE,
  ADDRECIPE_FAIL,
  ADDRECIPE_SUCCESS,
  BLOCKUSER,
  DELETERECIPE,
  DELETEUSER,
  DETAILRECIPE,
  DETAILRECIPE_FAIL,
  DETAILRECIPE_SUCCESS,
  FAVORITE_ADD_ITEM,
  FAVORITE_ADD_ITEM_FAIL,
  FAVORITE_ADD_ITEM_SUCCESS,
  FAVORITE_REMOVE_ITEM,
  GETRECIPES,
  GET_ALLUSERS,
  GET_AMERICAN_RECIPES,
  GET_FRENCH_RECIPES,
  GET_INDIAN_RECIPES,
  GET_ITALIAN_RECIPES,
  GET_KID_FRIENDLY_RECIPES,
  GET_MEXICAN_RECIPES,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_TUNISIAN_RECIPES,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  UPDATERECIPE,
} from "./actionTypes";
import axios from "axios";

export const registerUser = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });

  try {
    const { data } = await axios.post("/user/register", newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    const { data } = await axios.post("/user/login", user);
    localStorage.setItem("token", data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: token },
  };
  dispatch({
    type: GET_PROFILE,
  });
  try {
    const { data } = await axios.get("/user/auth", config);

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const Logout = () => async (dispatch) => {
  dispatch({ type: LOG_OUT, payload: null, user: null, token: null });

  window.location.href = "/";
};
//get all users
export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/user/getAllUser");
    dispatch({
      type: GET_ALLUSERS,
      payload: res.data,
    });
  } catch (error) {
    alert("get all users error");
  }
};
//delete user
export const removeUser = (_id) => async (dispatch) => {
  try {
    const res = axios.delete(`/user/deleteOneUser/${_id}`);
    dispatch({
      type: DELETEUSER,
      payload: res.data,
    });
  } catch (error) {
    alert("delete user error");
  }
};
//edit user
export const editeUser = (user) => async (dispatch) => {
  try {
    const res = await axios.put(`/user/updateUser/${user._id}`, user);
    dispatch({
      type: BLOCKUSER,
      payload: res.data,
    });
  } catch (error) {
    alert("update user error");
  }
};
// action recipe
// add recipe
export const createRecipe = (newRecipe) => async (dispatch) => {
  dispatch({ type: ADDRECIPE });
  try {
    const res = await axios.post("/Recipe/addRecipe", newRecipe);
    dispatch({
      type: ADDRECIPE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADDRECIPE_FAIL,
      payload: error.response.data,
    });
  }
};
//get all recipess
export const getAllRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get("/Recipe/getAllRecipes");
    dispatch({
      type: GETRECIPES,
      payload: res.data,
    });
  } catch (error) {
    alert("get all recipes error");
  }
};
//get one recipe
export const getOneRecipe = (_id) => async (dispatch) => {
  dispatch({
    type: DETAILRECIPE,
  });
  try {
    const res = await axios.get(`/Recipe/getOneRecipe/${_id}`);
    dispatch({
      type: DETAILRECIPE_SUCCESS,
      payload: {
        OneRecipe: res.data._id,
        RecipeName: res.data.RecipeName,
        ingredients: res.data.ingredients,
        type_of_cuisine: res.data.type_of_cuisine,
        photo: res.data.photo,
      },
    });
  } catch (error) {
    dispatch({
      type: DETAILRECIPE_FAIL,
      payload: error.response.data,
    });
  }
};
//edit recipe
export const editeRecipe = (Recipe) => async (dispatch) => {
  try {
    const res = await axios.put(`/Recipe/updateRecipe/${Recipe._id}`, Recipe);
    dispatch({
      type: UPDATERECIPE,
      payload: res.data,
    });
  } catch (error) {
    alert("update Recipe error");
  }
};

//delete recipe
export const removeRecipe = (_id) => async (dispatch) => {
  try {
    const res = axios.delete(`/Recipe/deleteOneRecipe/${_id}`);
    dispatch({
      type: DELETERECIPE,
      payload: res.data,
    });
  } catch (error) {
    alert("delete recipe error");
  }
};
//get french recipes
export const getFrenchRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get("/Recipe/getFrenchRecipes");
    dispatch({
      type: GET_FRENCH_RECIPES,
      payload: res.data,
    });
  } catch (error) {
    alert("get recipe error");
  }
};
//get Amerrican reipes
export const getAmericanRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get("/Recipe/getAmericanRecipes");
    dispatch({
      type: GET_AMERICAN_RECIPES,
      payload: res.data,
    });
  } catch (error) {
    alert("get recipe error");
  }
}; //get italian recipes
export const getItalianRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get("/Recipe/getItalianRecipes");
    dispatch({
      type: GET_ITALIAN_RECIPES,
      payload: res.data,
    });
  } catch (error) {
    alert("get recipe error");
  }
}; //get mexican recipes
export const getMexicanRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get("/Recipe/getMexicanRecipes");
    dispatch({
      type: GET_MEXICAN_RECIPES,
      payload: res.data,
    });
  } catch (error) {
    alert("get recipe error");
  }
}; //get kid friendly recipes
export const getKidFriendlyRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get("/Recipe/getKidFriendlyRecipes");
    dispatch({
      type: GET_KID_FRIENDLY_RECIPES,
      payload: res.data,
    });
  } catch (error) {
    alert("get recipe error");
  }
}; //get tunisian
export const getTunisianRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get("/Recipe/getTunisianRecipes");
    dispatch({
      type: GET_TUNISIAN_RECIPES,
      payload: res.data,
    });
  } catch (error) {
    alert("get recipe error");
  }
};
//get indian recipes
export const getIndianRecipes = () => async (dispatch) => {
  try {
    const res = await axios.get("/Recipe/getIndianRecipes");
    dispatch({
      type: GET_INDIAN_RECIPES,
      payload: res.data,
    });
  } catch (error) {
    alert("get recipe error");
  }
};
// add to favorite
export const addToFavorite = (_id) => async (dispatch) => {
  dispatch({ type: FAVORITE_ADD_ITEM });
  try {
    const { data } = await axios.get(`/Recipe/getOneRecipe/${_id}`);
    dispatch({
      type: FAVORITE_ADD_ITEM_SUCCESS,
      payload: {
        id: data._id,
        RecipeName: data.RecipeName,
        ingredients: data.ingredients,
        photo: data.photo,
        type_of_cuisine: data.type_of_cuisine,
      },
    });
  } catch (error) {
    dispatch({
      type: FAVORITE_ADD_ITEM_FAIL,
      payload: error.data,
    });
  }
};

// delete item from cart
export const removeFromFavorite = (id) => (dispatch) => {
  dispatch({
    type: FAVORITE_REMOVE_ITEM,
    payload: id,
  });
};
