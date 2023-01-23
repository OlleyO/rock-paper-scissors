import { UserChoice } from "@/shared/api";
import Button from "@/widgets/button";
import styles from "./styles.module.scss";

import { userChoiceModel } from "@/entities/user-choice";
import { makeChoiceModel } from "../..";

interface Props {
  element: UserChoice;
}

const ElementButton: React.FC<Props> = ({ element }) => {
  return (
    <Button
      onClick={() => {
        userChoiceModel.events.choiceMade(element);
        makeChoiceModel.events.makeChoice()
      }}
      className={styles.elementButton}
      variant="primary"
    >
      {element}
    </Button>
  );
};

export default ElementButton;
