import type { ReactNode } from 'react';
import styles from './productionCard.less';
import classnames from 'classnames';

interface ProductionCardProps {
  title?: string;
  content: ReactNode;
  onChange: (content: string) => void;
}

const ProductionCard = (props: ProductionCardProps) => {
  const { title, content, onChange } = props;

  const handleClick = () => {
    onChange && onChange(content);
  };

  return (
    <div className={classnames(styles.CardWrapper)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.CardContent}>
        <div className={styles.content}>{content}</div>
        <div className={styles.button} onClick={handleClick}>
          试一下看看
        </div>
      </div>
    </div>
  );
};

export default ProductionCard;
