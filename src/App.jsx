import TopForm from "./components/TopForm";
import BottomForm from "./components/BottomForm";
import { useState, useEffect } from "react";
const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php`;

async function fetchAPI(select) {
  try {
    const res = await fetch(`${endpoint}?s=${select}`, {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();
    if (!data.drinks) throw new Error("cockTail not found");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function App() {
  const [select, setSelect] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [error, setError] = useState("");

  const handleClick = async () => {
    try {
      const data = (await fetchAPI(select)).drinks[0];

      const tempIngredient = {};
      const tempMeasure = {};

      for (const key in data) {
        const pattern = /strIngredient/gi;
        if (pattern.test(key) && data[key]) {
          tempIngredient[key] = data[key];
        }
      }

      const lengthIngredient = Object.keys(tempIngredient);
      const mapMeasure = [];
      Object.keys(data).map((el, i) => {
        const patternSecond = /strMeasure/gi;
        if (patternSecond.test(el)) {
          mapMeasure.push(el);
          return;
        }
      });

      const slicess = mapMeasure.slice(0, lengthIngredient.length);

      for (const element of slicess) {
        tempMeasure[element] = data[element];
      }
      setIngredient(tempIngredient);
      setMeasure(tempMeasure);
      setError("");
      return;
    } catch (error) {
      setError(error.message);
    }
  };

  const handleIngredientChange = (key, newValue) => {
    setIngredient((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  const handleMeasureChange = (key, newValue) => {
    setMeasure((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  return (
    <section className="app-wrapper container-fluid">
      <div className=" container">
        <div className="content position-relative  d-flex flex-column justify-content-center mt-4 align-items-center gap-3">
          <div className="header-title mt-2">
            <h2 className=" position-relative text-white z-2 text-center">
              RECIPE EDITOR
            </h2>
          </div>
          {error ? (
            <div className=" bg-white position-relative z-1 p-3">
              <h6 className=" text-danger">{error}</h6>
            </div>
          ) : (
            <TopForm ingredient={ingredient} measure={measure}></TopForm>
          )}
          <BottomForm
            onSelect={setSelect}
            handleClick={handleClick}
            ingredient={ingredient}
            measure={measure}
            onIngredientChange={handleIngredientChange}
            onMeasureChange={handleMeasureChange}
          ></BottomForm>
        </div>
      </div>
    </section>
  );
}

export default App;
