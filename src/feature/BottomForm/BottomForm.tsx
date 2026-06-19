import SearchInput from "../../shared/components/SearchInput";
import SearchButton from "../../shared/components/SearchButton";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { fetchCocktailThunk } from "../../shared/redux/action";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import IngredientField from "../../shared/components/IngredientField";
import MeasureField from "../../shared/components/MeasureField";
import { Box } from "@mui/material";

function BottomForm() {
  const dispatch = useDispatch<any>();
  const data = useSelector((state: any) => state.cocktail);

  const [selected, setSelect] = useState("");
  const [errorField, setErrorField] = useState("");

  const onChange = useCallback((select: string) => {
    return setSelect(select);
  }, []);

  const handleClicks = useCallback(() => {
    if (!selected) return setErrorField("input is required");
    dispatch(fetchCocktailThunk(selected));
    setErrorField("");
    return;
  }, [dispatch, selected]);

  return (
    <section className="bottom-form p-2">
      <div className="container mt-5 bg-white p-4 position-relative z-1 d-flex flex-column rounded-5 shadow-sm">
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "500px",
              md: "600px",
            },
          }}
        >
          <div className="row justify-content-between align-items-center ">
            <div className="col-sm-5 mb-2">
              <h6 className="form-label fw-bold mb-2">CockTail :</h6>
              <SearchInput onChange={onChange}></SearchInput>
              {errorField && (
                <p className="text-danger small mt-1 mb-0">{errorField}</p>
              )}
            </div>

            <div className="col-sm-5">
              <br />
              <SearchButton
                onClicks={handleClicks}
                disabled={false}
              ></SearchButton>
            </div>
          </div>
        </Box>

        {/* loading spinner */}
        {data?.loading && (
          <div>
            <LoadingSpinner label="searching cocktail..."></LoadingSpinner>
          </div>
        )}

        {/* error handling */}
        {data?.error && (
          <h6 className="text-center mt-4 text-danger fw-bold">
            {data?.error}
          </h6>
        )}

        {data?.ingredient && (
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "500px",
                md: "600px",
              },
            }}
          >
            <div className="row mt-4 pt-3 g-3">
              <div className="col-6">
                <h6 className="fw-bold  mb-3">Ingredient :</h6>
                {Object.entries(data?.ingredient).map(([key, val]) => (
                  <IngredientField
                    key={key}
                    fieldKey={key}
                    value={val as string}
                  ></IngredientField>
                ))}
              </div>

              <div className="col-6">
                <h6 className="fw-bold  mb-3">Qty :</h6>
                {Object.entries(data?.measure).map(([key, val]) => (
                  <MeasureField
                    key={key}
                    fieldKey={key}
                    value={val as string}
                  ></MeasureField>
                ))}
              </div>
            </div>
          </Box>
        )}
        {!data?.ingredient && (
          <>
            <h6 className=" text-center mt-2">please look for a cocktail!</h6>
          </>
        )}
      </div>
    </section>
  );
}

export default BottomForm;
