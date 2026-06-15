import SearchInput from "../../shared/components/SearchInput";
import SearchButton from "../../shared/components/SearchButton";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { fetchCocktailThunk } from "../../shared/redux/action";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import IngredientField from "../../shared/components/IngredientField";
import MeasureField from "../../shared/components/MeasureField";

function BottomForm() {
  const dispatch = useDispatch<any>();
  const data = useSelector((state: any) => state.cocktail);

  const [selected, setSelect] = useState("");
  const [errorField, setErrorField] = useState("");

  const onChange = useCallback((select: string) => {
    return setSelect(select);
  }, []);

  const handleClicks = useCallback(() => {
    if (selected.trim().length == 0) return setErrorField("*input is required");
    dispatch(fetchCocktailThunk(selected));
    setErrorField("");
    return;
  }, [dispatch, selected]);

  return (
    <section className="bottom-form">
      <div className="mt-5 content-form-top bg-white p-4 position-relative 100 z-1 d-flex flex-column justify-content-between flex-wrap rounded-5">
        <h6>CockTail : </h6>

        <div className="d-flex flex-wrap gap-4">
          <div className="flex-lg-shrink-1 flex-grow-1">
            <SearchInput onChange={onChange}></SearchInput>
            {errorField && <p className=" text-danger">{errorField}</p>}
          </div>

          <div className="flex-lg-shrink-1 flex-grow-1">
            <SearchButton
              onClicks={handleClicks}
              disabled={false}
            ></SearchButton>
          </div>
        </div>

        {data?.loading && (
          <LoadingSpinner label="seacrh cocktail"></LoadingSpinner>
        )}

        {/* error handling  */}
        {data?.error && (
          <>
            <h6 className=" text-center mt-3 text-danger">{data?.error}</h6>
          </>
        )}

        {data?.ingredient?.strIngredient1 && (
          <>
            <div className="row">
              <div className="col-6 col-md-4 col-sm-6 col-xxl">
                <h6 className="mt-3">Ingredient : </h6>
                {Object.entries(data?.ingredient).map(([key, val]) => (
                  <IngredientField
                    key={key}
                    fieldKey={key}
                    value={val as string}
                  ></IngredientField>
                ))}
              </div>

              <div className="col-6 col-md-4 col-sm-6 col-xxl">
                <h6 className="mt-3">Qty : </h6>
                {Object.entries(data?.measure).map(([key, val]) => (
                  <MeasureField
                    key={key}
                    fieldKey={key}
                    value={val as string}
                  ></MeasureField>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default BottomForm;
