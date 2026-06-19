import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
// import styled from "styled-components";
import { updateIngredient } from "../redux/action.ts";
import { TextField } from "@mui/material";

// const StyledInput = styled.input`
//   padding: 0.45rem 0.75rem;
//   font-size: 0.875rem;
//   border: 1px solid grey;
//   transition:
//     border-color 0.2s,
//     box-shadow 0.2s;
// `;

interface IngredientFieldProps {
  fieldKey: string;
  value: string;
}

const IngredientField = memo(({ fieldKey, value }: IngredientFieldProps) => {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(updateIngredient(fieldKey, e.target.value)),
    [dispatch, fieldKey]
  );

  return (
    <TextField
      className="rounded  mb-2 form-control"
      type="text"
      value={value}
      size="small"
      onChange={handleChange}
    />
  );
});

export default IngredientField;
