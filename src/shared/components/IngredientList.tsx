import { memo } from "react";
import { List, ListItem, ListItemText } from "@mui/material";

interface IngredientListProps {
  ingredient: Record<string, string>;
}

const IngredientList = memo(({ ingredient }: IngredientListProps) => (
  <List component="ol" sx={{ listStyleType: "decimal", pl: 4 }}>
    {Object.entries(ingredient).map(([key, val]) => (
      <ListItem component="li" key={key} sx={{ display: "list-item" }}>
        <ListItemText primary={val}></ListItemText>
      </ListItem>
    ))}
  </List>
  // <ol className="list-group list-group-numbered">
  //   {Object.entries(ingredient).map(([key, val]) => (
  //     <li key={key} className="list-group-item border-0 border">
  //       {val}
  //     </li>
  //   ))}
  // </ol>
));

export default IngredientList;
