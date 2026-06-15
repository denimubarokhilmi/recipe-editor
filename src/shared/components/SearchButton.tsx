import { memo } from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 0.625rem 1.5rem;
  color: black;
  border: none;
  background-color: white;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  border: 1px solid blue;
  border-radius: 10px;
  transition:
    background 0.2s,
    transform 0.1s;
  white-space: nowrap;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  i {
    margin-right: 0.4rem;
  }
`;

interface SearchButtonProps {
  onClicks: () => void;
  disabled: boolean;
}

const SearchButton = memo(({ onClicks, disabled }: SearchButtonProps) => (
  <Btn type="button" onClick={onClicks} disabled={disabled}>
    <i className="bi bi-globe text-primary me-2"></i>
    Cari
  </Btn>
));

export default SearchButton;
