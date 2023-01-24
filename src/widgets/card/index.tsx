import cn from "classnames";

import styles from "./styles.module.scss";

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
