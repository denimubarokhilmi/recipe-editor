import { memo } from "react";

interface IngredientListProps {
  ingredient: Record<string, string>;
}

const IngredientList = memo(({ ingredient }: IngredientListProps) => (
  <ol className="list-group list-group-numbered">
    {Object.entries(ingredient).map(([key, val]) => (
      <li key={key} className="list-group-item border-0 border">
        {val}
      </li>
    ))}
  </ol>
));

export default IngredientList;
