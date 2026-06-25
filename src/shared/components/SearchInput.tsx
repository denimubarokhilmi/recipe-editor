import { memo } from "react";
import { Autocomplete, TextField } from "@mui/material";
import type { AutocompleteRenderInputParams } from "@mui/material";
import { SyntheticEvent } from "react";
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
    onInputChange={(_e: SyntheticEvent, newVal: string) =>
      onChange(newVal ?? "")
    }
    renderInput={(params: AutocompleteRenderInputParams) => (
      <TextField placeholder="search cocktail" {...params} label="coctail" />
    )}
  />
));

export default SearchInput;
