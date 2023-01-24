import { ButtonHTMLAttributes } from "react";

import Button from "@/widgets/button";

import styles from "./styles.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Rock: React.FC<Props> = () => {
  return <Button variant="game-choice">Rock</Button>;
};

export const Paper: React.FC<Props> = () => {
  return <Button variant="game-choice">Paper</Button>;
};

export const Scissors: React.FC<Props> = () => {
  return <Button variant="game-choice">Scissors</Button>;
};
