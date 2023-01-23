import { userChoiceModel } from "@/entities/user-choice";
import { UserChoice } from "@/shared/api";
import Button from "@/widgets/button";

import { makeChoiceModel } from "../..";

import styles from "./styles.module.scss";

interface Props {
  element: UserChoice;
}

const ElementButton: React.FC<Props> = ({ element }) => {
  return (
    <Button
      onClick={() => {
        userChoiceModel.events.choiceMade(element);
        makeChoiceModel.events.makeChoice();
      }}
      className={styles.elementButton}
      variant="primary"
    >
      {element}
    </Button>
  );
};

export default ElementButton;
