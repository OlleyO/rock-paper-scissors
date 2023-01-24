import { UserChoice } from "@/shared/api";

import ElementButton from "../element-button";

const elements = new Set<UserChoice>(["paper", "rock", "scissors"]);

import styles from "./styles.module.scss";

const ElementButtonsList: React.FC = () => {
  return (
    <div className={styles.buttonList}>
      {Array.from(elements).map((element) => (
        <ElementButton key={element} element={element} />
      ))}
    </div>
  );
};

export default ElementButtonsList;
