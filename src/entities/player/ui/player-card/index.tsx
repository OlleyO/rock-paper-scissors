import cn from "classnames";

import Card from "@/widgets/card";

import { playerModel } from "../..";

import styles from "./styles.module.scss";

export const PlayerCard: React.FC = () => {
  const player = playerModel.selectors.usePlayer();

  return (
    <Card className={styles.playerCard}>
      <h2>Opponent</h2>
      <div className={styles.row}>
        <p>Username: {player[0].username}</p>
      </div>
      <div className={styles.row}>
        <p>Status: </p>
        <div className={cn(styles.connectionStatus, styles[player[1]])} />
      </div>
    </Card>
  );
};
