function BottomForm({
  onSelect,
  handleClick,
  ingredient,
  measure,
  onIngredientChange,
  onMeasureChange,
}) {
  const total = Object.keys(ingredient);

  return (
    <section className="top-form">
      <div className="mt-5 content-form-top bg-white p-4 position-relative 100 z-1 d-flex flex-column justify-content-between flex-wrap rounded-5">
        <h6>CockTail : </h6>
        <div className="d-flex flex-wrap gap-4">
          <div className="flex-lg-shrink-1 flex-grow-1">
            <input
              list="ingredient"
              type="text"
              className="form-control"
              placeholder="Searchh"
              onChange={(e) => onSelect(e.target.value)}
            />
            <datalist id="ingredient">
              <option value="screwdriver"></option>
              <option value="cuba libre"></option>
              <option value="gin fizz"></option>
            </datalist>
          </div>
          <div className="flex-lg-shrink-1 flex-grow-1">
            <button
              type="button"
              className="btn btn-outline-primary ps-4 pe-4"
              onClick={handleClick}
            >
              <i className="bi bi-globe text-primary me-2"></i>
              Serach
            </button>
          </div>
        </div>
        {total.length > 0 ? (
          <>
            <div className="row">
              <div className="col-6 col-md-4 col-sm-6 col-xxl">
                <h6 className="mt-3">Ingredient : </h6>
                {Object.entries(ingredient).map(([key, val]) => (
                  <input
                    key={key}
                    type="text"
                    className="form-control"
                    value={val}
                    onChange={(e) => onIngredientChange(key, e.target.value)}
                  />
                ))}
              </div>
              <div className="col-6 col-md-4 col-sm-6 col-xxl">
                <h6 className="mt-3">Qty : </h6>
                {Object.entries(measure).map(([key, val]) => (
                  <input
                    key={key}
                    type="text"
                    className="form-control"
                    value={val}
                    onChange={(e) => onMeasureChange(key, e.target.value)}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className=" flex-grow-1 flex-shrink-1 text-center ps-5 pe-5">
            <h6 className="mt-3">look for cocktails </h6>
          </div>
        )}
      </div>
    </section>
  );
}

export default BottomForm;
