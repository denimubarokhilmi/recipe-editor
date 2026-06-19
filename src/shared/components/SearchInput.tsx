import { memo } from "react";
import { Autocomplete, TextField } from "@mui/material";

const SUGGESTIONS = [
  "screwdriver",
  "cuba libre",
  "gin fizz",
  "mojito",
  "margarita",
];

interface SearchInputProps {
  onChange: (value: string) => void;
}

const SearchInput = memo(({ onChange }: SearchInputProps) => (
  <Autocomplete
    freeSolo={true}
    disablePortal={true}
    options={SUGGESTIONS}
    onInputChange={(_e, newVal) => onChange(newVal ?? "")}
    renderInput={(params) => (
      <TextField placeholder="search cocktail" {...params} label="coctail" />
    )}
  />
));

export default SearchInput;
