import userSvg from '../../assets/user.svg';
import styles from './index.less';

interface IIssueProps {
  questionValue: string;
}

const Issue = (props: IIssueProps) => {

  const { questionValue } = props;

  return (
    <div className={styles.question} style={{ marginBottom: '40px' }}>
      <img src={userSvg} alt="" />
      <span>{questionValue}</span>
    </div> 
  );
}

export default Issue;