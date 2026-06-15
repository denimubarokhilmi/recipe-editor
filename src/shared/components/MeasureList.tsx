import { memo } from "react";

interface MeasureListProps {
  measure: Record<string, string>;
}

const MeasureList = memo(({ measure }: MeasureListProps) => (
  <>
    {Object.entries(measure).map(([key, val]) => (
      <input
        type="text"
        key={key}
        className=" form-control"
        value={val ? val : ""}
        readOnly
      />
    ))}
  </>
));

export default MeasureList;
