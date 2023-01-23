import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

const Button: React.FC<Props> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
