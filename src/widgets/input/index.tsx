import { InputHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return <input className={cn(styles.input, className)} {...props} />;
};

export default Input;
