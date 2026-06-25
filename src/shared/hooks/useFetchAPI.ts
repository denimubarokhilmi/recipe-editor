const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

export interface CocktailApiItem {
  [key: string]: string | null | undefined;
}

export interface CocktailApiResponse {
  drinks: CocktailApiItem[];
}

const useFetchAPI = async (select: string) => {
  try {
    const res = await fetch(`${endpoint}?s=${select}`, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

    const data: CocktailApiResponse = await res.json();
    if (!data.drinks) throw new Error("Cocktail Not Found");

    return data;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

export default useFetchAPI;
