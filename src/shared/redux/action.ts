import {
  FETCH_COCKTAIL_REQUEST,
  FETCH_COCKTAIL_SUCCESS,
  FETCH_COCKTAIL_FAILURE,
  UPDATE_INGREDIENT,
  UPDATE_MEASURE,
} from "./types.ts";

import useFetchAPI from "../hooks/useFetchAPI.ts";

export type CocktailAction =
  | { type: typeof FETCH_COCKTAIL_REQUEST }
  | {
      type: typeof FETCH_COCKTAIL_SUCCESS;
      payload: {
        ingredient: Record<string, string>;
        measure: Record<string, string>;
      };
    }
  | { type: typeof FETCH_COCKTAIL_FAILURE; payload: string }
  | { type: typeof UPDATE_INGREDIENT; payload: { key: string; value: string } }
  | { type: typeof UPDATE_MEASURE; payload: { key: string; value: string } };

export const fetchCocktailRequest = (): CocktailAction => ({
  type: FETCH_COCKTAIL_REQUEST,
});

export const fetchCocktailSuccess = (
  ingredient: Record<string, string>,
  measure: Record<string, string>
): CocktailAction => ({
  type: FETCH_COCKTAIL_SUCCESS,
  payload: { ingredient, measure },
});

export const fetchCocktailFailure = (error: string): CocktailAction => ({
  type: FETCH_COCKTAIL_FAILURE,
  payload: error,
});

export const updateIngredient = (
  key: string,
  value: string
): CocktailAction => ({
  type: UPDATE_INGREDIENT,
  payload: { key, value },
});

export const updateMeasure = (key: string, value: string): CocktailAction => ({
  type: UPDATE_MEASURE,
  payload: { key, value },
});

const delay = (): Promise<void> =>
  new Promise((resolve) => setTimeout(() => resolve(), 1000));

export const fetchCocktailThunk =
  (select: string) =>
  async (dispatch: any): Promise<void> => {
    dispatch(fetchCocktailRequest());

    try {
      await delay();
      const data = await useFetchAPI(select);

      const cocktail = data.drinks[0];

      // Parse ingredients
      const tempIngredient: Record<string, string> = {};
      for (const key in cocktail) {
        if (/strIngredient/i.test(key) && cocktail[key]) {
          tempIngredient[key] = cocktail[key] as string;
        }
      }

      // Parse measures
      const ingredientCount = Object.keys(tempIngredient).length;
      const measureKeys = Object.keys(cocktail).filter((k) =>
        /strMeasure/i.test(k)
      );
      const tempMeasure: Record<string, string> = {};
      measureKeys.slice(0, ingredientCount).forEach((key) => {
        tempMeasure[key] = (cocktail[key] as string | null) ?? "";
      });

      dispatch(fetchCocktailSuccess(tempIngredient, tempMeasure));
    } catch (error) {
      dispatch(fetchCocktailFailure((error as Error).message));
    }
  };
