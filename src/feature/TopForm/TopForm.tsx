import { useSelector } from "react-redux";
import IngredientList from "../../shared/components/IngredientList";
import MeasureList from "../../shared/components/MeasureList";

function TopForm() {
  const data = useSelector((state: any) => state.cocktail);

  return (
    <section className="top-form bg-white position-relative z-2">
      <div className="content-form-top bg-white p-3 position-relative 100 z-1 d-flex flex-wrap justify-content-between">
        {data?.ingredient?.strIngredient1 ? (
          <>
            <div className="left-box flex-grow-1 flex-shrink-1  pe-4">
              <IngredientList ingredient={data?.ingredient}></IngredientList>
            </div>
            <div className="right-box flex-grow-1 flex-shrink-1 ">
              <MeasureList measure={data?.measure}></MeasureList>
            </div>
          </>
        ) : (
          <div className=" flex-grow-1 flex-shrink-1 text-center ps-5 pe-5">
            <h6>no ingredient selected </h6>
          </div>
        )}
      </div>
      {data?.ingredient?.strIngredient1 && (
        <>
          <div className="total-ingredient text-end pe-4">
            <h5>Total Ingredient : {Object.keys(data?.ingredient).length} </h5>
          </div>
        </>
      )}
    </section>
  );
}

export default TopForm;
