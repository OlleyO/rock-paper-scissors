import LogoutUser from "@/features/logout-user/ui";

import styles from "./styles.module.scss";

import { NextPage } from "next";

import { PlayerCard } from "@/entities/player";

import Button from "@/widgets/button";

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
        <Button variant="primary">Get All Users</Button>
      </main>
    </div>
  );
};

export default Home;
