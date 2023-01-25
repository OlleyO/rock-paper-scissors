import cn from "classnames";
import Image from "next/image";

import { userChoiceModel } from "@/entities/user-choice";
import { selectors } from "@/entities/user-choice/model";
import { UserChoice } from "@/shared/api";
import Button from "@/widgets/button";

import { makeChoiceModel } from "../..";

import styles from "./styles.module.scss";

interface Props {
  element: UserChoice;
}

const ElementButton: React.FC<Props> = ({ element }) => {
  const choice = selectors.useUserChoice();

  return (
    <Button
      onClick={() => {
        userChoiceModel.events.choiceMade(element);
        makeChoiceModel.events.makeChoice();
      }}
      className={cn(styles.elementButton, {
        [styles.active]: choice === element,
      })}
      variant="game-choice"
    >
      <div className={styles.imageWrapper}>
        <Image src={`/${element}.png`} alt={element} fill />
      </div>
    </Button>
  );
};

export default ElementButton;
