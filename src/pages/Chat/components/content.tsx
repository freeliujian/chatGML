import { Row, Col, Grid } from 'antd';
import type { FC } from 'react';
import styles from './content.less';
import ProductionCard from './productionCard';

const { useBreakpoint } = Grid;

interface ChatFirstContentProps {
  onChange?: (text: string) => void;
}

const ChatFirstContent: FC<ChatFirstContentProps> = (props) => {
  const { onChange } = props;
  const screen = useBreakpoint();
  const isMobile = screen.xs;
  const cardList = [
    {
      title: '市场营销',
      content:
        '请为我编写一个杨过大战钢铁侠的额电影脚本，要足够精彩，细节丰富，好像好莱坞大片，有场景有对话，叨叨剧本要求',
      onclick: (text: string) => {
        onChange && onChange(text);
      },
    },
    {
      title: '技术文档',
      content: '请为我们的新款智能手表撰写一份产品说明书，包括功能，使用方法和注意事项',
      onclick: (text: string) => {
        onChange && onChange(text);
      },
    },
    {
      title: '灵感提示',
      content: '请为我们的新款智能手表一份产品说明书，包括功能，使用方法和注意事项',
      onclick: (text: string) => {
        onChange && onChange(text);
      },
    },
    {
      content: '请为我们的新款智能手表一份产品说明书，包括功能，使用方法和注意事项',
      onclick: (text: string) => {
        onChange && onChange(text);
      },
    },
    {
      content: '请为我们的新款智能手表一份产品说明书，包括功能，使用方法和注意事项',
      onclick: (text: string) => {
        onChange && onChange(text);
      },
    },
    {
      content: '请为我们的新款智能手表一份产品说明书，包括功能，使用方法和注意事项',
      onclick: (text: string) => {
        onChange && onChange(text);
      },
    },
    {
      content: '请为我们的新款智能手表一份产品说明书，包括功能，使用方法和注意事项',
      onclick: (text: string) => {
        onChange && onChange(text);
      },
    },
    {
      content: '请为我们的新款智能手表一份产品说明书，包括功能，使用方法和注意事项',
      onclick: (text: string) => {
        onChange && onChange(text);
      },
    },
    {
      content: '请为我们的新款智能手表一份产品说明书，包括功能，使用方法和注意事项',
      onclick: (text: string) => {
        onChange && onChange(text);
      },
    },
  ];

  return (
    <div className={styles.CardContent}>
      <Row gutter={1}>
        {cardList.map((item, index) => {
          return (
            <Col lg={8} md={12} span={8} xs={24} sm={16} key={`${item.title}-card-${index}`}>
              <Row justify={isMobile && 'center'} className={styles.cardPadding}>
                <ProductionCard title={item.title} content={item.content} onChange={item.onclick} />
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ChatFirstContent;
