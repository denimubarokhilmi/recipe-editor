function TopForm({ ingredient, measure }) {
  const total = Object.keys(ingredient);

  return (
    <section className="top-form bg-white position-relative z-2">
      <div className="content-form-top bg-white p-3 position-relative 100 z-1 d-flex flex-wrap justify-content-between">
        {total.length > 0 ? (
          <>
            <div className="left-box flex-grow-1 flex-shrink-1  pe-4">
              <ol className="list-group list-group-numbered">
                {Object.entries(ingredient).map(([key, val]) => (
                  <li key={key} className="list-group-item border-0 border">
                    {val}
                  </li>
                ))}
              </ol>
            </div>
            <div className="right-box flex-grow-1 flex-shrink-1 ">
              {Object.entries(measure).map(([key, val]) => (
                <input
                  type="text"
                  key={key}
                  className=" form-control"
                  value={val ? val : ""}
                  readOnly
                />
              ))}
            </div>
          </>
        ) : (
          <div className=" flex-grow-1 flex-shrink-1 text-center ps-5 pe-5">
            <h6>no ingredient selected </h6>
          </div>
        )}
      </div>
      {total.length > 0 && (
        <>
          <div className="total-ingredient text-end pe-4">
            <h5>Total Ingredient : {total.length} </h5>
          </div>
        </>
      )}
    </section>
  );
}

export default TopForm;
