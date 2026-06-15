import { memo } from "react";
import styled from "styled-components";

const SUGGESTIONS = [
  "screwdriver",
  "cuba libre",
  "gin fizz",
  "mojito",
  "margarita",
];

const StyledInput = styled.input`
  width: 100%;
  padding: 0.625rem 1rem;

  font-size: 0.9rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:focus {
    outline: none;
  }
`;

interface SearchInputProps {
  onChange: (value: string) => void;
}

const SearchInput = memo(({ onChange }: SearchInputProps) => (
  <>
    <StyledInput
      list="cocktail-suggestions"
      type="text"
      placeholder="search cocktail..."
      onChange={(e) => onChange(e.target.value)}
    />
    <datalist id="cocktail-suggestions">
      {SUGGESTIONS.map((s) => (
        <option key={s} value={s} />
      ))}
    </datalist>
  </>
));

export default SearchInput;
