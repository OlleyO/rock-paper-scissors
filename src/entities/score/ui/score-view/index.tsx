import Card from "@/widgets/card";

import { selectors } from "../../model";

import styles from "./styles.module.scss";

const ScoreView: React.FC = () => {
  const score = selectors.useScore();

  return (
    <Card className={styles.scoreView}>
      <h2 className={styles.title}>Result</h2>
      <div className={styles.scores}>
        {score.map(({ username, score }) => (
          <div key={username}>
            <p>Username: {username}</p>
            <p>Score: {score}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ScoreView;
