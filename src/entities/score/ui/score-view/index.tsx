import { useEffect } from "react";
import { selectors } from "../../model";
import styles from "./styles.module.scss";

const ScoreView = () => {
  const score = selectors.useScore();

  return <div>{score}</div>;
};

export default ScoreView;
