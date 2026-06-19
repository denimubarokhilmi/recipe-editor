import { memo } from "react";
import { TextField } from "@mui/material";
interface MeasureListProps {
  measure: Record<string, string>;
}

const MeasureList = memo(({ measure }: MeasureListProps) => (
  <>
    {Object.entries(measure).map(([key, val]) => (
      <TextField
        size="small"
        type="text"
        key={key}
        className=" form-control"
        value={val ? val : ""}
        aria-readonly
      />
    ))}
  </>
));

export default MeasureList;
