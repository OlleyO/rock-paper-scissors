import { selectors } from "../../model";

import styles from "./styles.module.scss";

const ScoreView: React.FC = () => {
  const score = selectors.useScore();

  return (
    <div>
      {score.map((player) => (
        <>
          <div>{player.username}</div>
          <div>{player.score}</div>
        </>
      ))}
    </div>
  );
};

export default ScoreView;
