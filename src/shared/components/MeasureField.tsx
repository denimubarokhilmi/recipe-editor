import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
// import styled from "styled-components";
import { updateMeasure } from "../redux/action";
import { TextField } from "@mui/material";

// const StyledInput = styled.input`
//   padding: 0.45rem 0.75rem;
//   font-size: 0.875rem;
//   border: 1px solid grey;
//   transition:
//     border-color 0.2s,
//     box-shadow 0.2s;
// `;

interface MeasureFieldProps {
  fieldKey: string;
  value: string;
}

const MeasureField = memo(({ fieldKey, value }: MeasureFieldProps) => {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(updateMeasure(fieldKey, e.target.value)),
    [dispatch, fieldKey]
  );

  return (
    <>
      <TextField
        className=" form-control rounded  mb-2"
        type="text"
        value={value}
        onChange={handleChange}
        size="small"
      />
    </>
  );
});

export default MeasureField;
