import logoSvg from '../../assets/logo.svg';
import copySvg from '../../assets/copy.svg';
import { Button } from 'antd';
import styles from './index.less';

interface IAnswerProps {
  answerValue: string;
  loading: boolean
  isShowRetry?: boolean;
}

const Answer = (props: IAnswerProps) => {

  const { answerValue, loading, isShowRetry } = props

  return (
    <div>
      <p className={styles.question}>
        <img src={logoSvg} alt="" />
        <span>回答如下:</span>
      </p>
      <div className={styles.chat}>
        <div>
          <p 
            className={styles.copyAnswer}
            onClick={() => {

            }}
          >
            <img src={copySvg} alt="" />
            <span>复制回答</span>
          </p>

          <div className={styles.answer}>
            <p>{loading ? '请耐心等待3-5秒~' : answerValue}</p>
          </div>
        </div>
        {
          isShowRetry && <Button>重试</Button>
        }
      </div>
    </div>
  );
}

export default Answer;