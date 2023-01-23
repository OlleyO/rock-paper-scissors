import { UserChoice } from "@/shared/api";
import ElementButton from "../element-button";

const elements: UserChoice[] = ["paper", "rock", "scissors"];

const ElementButtonsList = () => {
  return (
    <>
      {elements.map((element) => (
        <ElementButton key={element} element={element} />
      ))}
    </>
  );
};

export default ElementButtonsList;
