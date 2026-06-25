import {
  FETCH_COCKTAIL_REQUEST,
  FETCH_COCKTAIL_SUCCESS,
  FETCH_COCKTAIL_FAILURE,
  UPDATE_INGREDIENT,
  UPDATE_MEASURE,
} from "./types.ts";

import type { CocktailAction } from "./action.ts";

export interface CocktailState {
  ingredient: null | Record<string, string>;
  measure: null | Record<string, string>;
  loading: boolean;
  error: string | null;
}

const initialState: CocktailState = {
  ingredient: null,
  measure: null,
  loading: false,
  error: null,
};

const cocktailReducer = (
  state: CocktailState = initialState,
  action: CocktailAction
): CocktailState => {
  switch (action.type) {
    case FETCH_COCKTAIL_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        ingredient: action.payload.ingredient,
        measure: action.payload.measure,
      };

    case FETCH_COCKTAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        ingredient: null,
        measure: null,
      };

    case UPDATE_INGREDIENT:
      return {
        ...state,
        ingredient: {
          ...(state.ingredient ?? {}),
          [action.payload.key]: action.payload.value,
        },
      };

    case UPDATE_MEASURE:
      return {
        ...state,
        measure: {
          ...(state.measure ?? {}),
          [action.payload.key]: action.payload.value,
        },
      };

    default:
      return state;
  }
};

export default cocktailReducer;
