import LogoutUser from "@/features/logout-user/ui";

import styles from "./styles.module.scss";

import { NextPage } from "next";

import { PlayerCard } from "@/entities/player";

import Button from "@/widgets/button";
import { getPlayers } from "@/shared/api/io-socket/players";
import ElementButtonsList from "@/features/make-choice/ui/element-buttons-list";
import ScoreView from "@/entities/score/ui/score-view";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Rock Paper Scissors</h1>
        <LogoutUser />
      </header>
      <main>
        <h2>Opponent</h2>
        <PlayerCard />
        <Button
          variant="primary"
          onClick={(e) => {
            getPlayers();
          }}
        >
          Get All Users
        </Button>
        <ElementButtonsList />
        <ScoreView />
      </main>
    </div>
  );
};

export default Home;
