import cn from "classnames";
import { playerModel } from "../..";

import styles from "./styles.module.scss";

interface Props {}

export const PlayerCard: React.FC<Props> = () => {
  const player = playerModel.selectors.usePlayer();

  return (
    <div className={styles.playerCard}>
      <h1>User info:</h1>
      <div className={styles.row}>
        <h2>Username: {player[0].username}</h2>
        <div className={cn(styles.connectionStatus, styles[player[1]])} />
      </div>
    </div>
  );
};
