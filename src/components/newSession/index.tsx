import styles from './index.less';
import Issue from './issue.component';
import Answer from './answer.component';

interface INewSessionProps {
  questionValue: string;
  answerValue: string;
}

const NewSession = (props: INewSessionProps) => {

  const { questionValue, answerValue } = props;

  return (
    <div className={styles.newSession}>
      <Issue 
        questionValue={questionValue}
      />
      <Answer 
        answerValue={answerValue} 
        loading
      />
    </div>
  );
}

export default NewSession;