/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Form, Button, Col, Row, Input, Typography, Grid } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from './index.less';
import ChatFirstContent from './components/content';
import {
  FieldTimeOutlined,
  MenuOutlined,
  PlusOutlined,
  SettingOutlined,
  UserOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';
import { history } from 'umi';
import LoginModal from '@/components/loginModal';
import NewSession from '@/components/newSession';

const { useBreakpoint } = Grid;
const { Title } = Typography;
const { Item } = Form;

const Chat: React.FC = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;
  const [chat, setChat] = useState('');
  const [showSider, setShowSider] = useState(true);
  const [firstChat, setFirstChat] = useState(false);
  const [form] = Form.useForm();
  const [selectSiderTabs, setSelectSiderTabs] = useState('');

  const [open, setOpen] = useState(false);
  const tabShow = showSider;

  const questionValue = form.getFieldValue('chatInput');

  useEffect(() => {
    if (!isMobile) {
      setShowSider(true);
    }
  }, [isMobile]);

  let token = '';
  useEffect(() => {
    if (localStorage.getItem('user')) {
      token = JSON.parse(localStorage.user)?.token;
    }
    if (token) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, []);

  const onSend = () => {
    form.setFieldValue('chatInput', '');
    setFirstChat(true);
  };

  const setInput = (value: any) => {
    setChat(value?.firstInput);
    form.setFieldValue('chatInput', value?.firstInput);
  };

  const onChange = (value: any) => {
    value?.chatInput && setChat(value?.chatInput);
    value?.firstInput && setInput(value);
  };

  const siderTabsList = [
    {
      icons: <SettingOutlined />,
      text: '后台',
      checked: 'gotoAdmin',
    },
    {
      icons: <WechatOutlined />,
      text: '活动交流群',
      checked: 'wechat',
    },
    {
      icons: <UserOutlined />,
      text: '游客登录',
      checked: 'noMentionLogin',
    },
  ];

  const selectSliderTabsHandleClick = (value: string) => {
    setSelectSiderTabs(value);
    if (value === 'gotoAdmin') {
      history.push('/admin/user');
    }
  };

  const renderMobileHeader = () => {
    return (
      <Row align={'middle'} justify="space-between" gutter={1} className={styles.mobileHeader}>
        <Col push={1}>
          <MenuOutlined
            onClick={() => {
              setShowSider(!showSider);
            }}
          />
        </Col>
        <Col>AI改变世界</Col>
        <Col pull={1}>
          <FieldTimeOutlined />
        </Col>
      </Row>
    );
  };

  return (
    <>
      <LoginModal open={open} setOpen={setOpen} />
      {isMobile && renderMobileHeader()}
      <Row>
        {tabShow && (
          <Col span={4} sm={10} md={7} xs={12} lg={5} className={styles.siderWrapper}>
            <div style={{ top: isMobile && '44px' }} className={styles.sider}>
              <div className={styles.siderChatContent}>
                <Button size="large" block type="primary" icon={<PlusOutlined />}>
                  新建对话
                </Button>
              </div>
              <Row>
                {siderTabsList.map((item) => {
                  return (
                    <Col key={item.text}>
                      <div
                        className={styles.chatSiderChatTabsCard}
                        onClick={() => {
                          selectSliderTabsHandleClick(item.checked);
                        }}
                      >
                        <div
                          className={classNames(
                            styles.chatSiderChatTabsCardIcons,
                            selectSiderTabs === item.checked &&
                              styles.checkedChatSiderChatTabsCardIcons,
                          )}
                        >
                          {item.icons}
                        </div>
                        <div
                          className={classNames(
                            styles.chatSiderChatTabsCardText,
                            selectSiderTabs === item.checked &&
                              styles.checkedChatSiderChatTabsCardText,
                          )}
                        >
                          {item.text}
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        )}
        <Col
          className={styles.chatContent}
          span={20}
          lg={19}
          sm={14}
          md={17}
          xs={isMobile ? 24 : 12}
        >
          {!isMobile && (
            <div className={styles.header}>
              <Row>
                <Col span={24}>
                  <Title level={1}>产品名称</Title>
                </Col>
                <Col span={24}>
                  <Title level={5} className={styles.subTitle}>
                    AI改变世界
                  </Title>
                </Col>
              </Row>
            </div>
          )}
          <Form
            form={form}
            initialValues={{ chatInput: chat }}
            name="chat"
            onValuesChange={onChange}
            onFinish={onSend}
          >
            {firstChat ? (
              <NewSession questionValue={chat} answerValue="" />
            ) : (
              <div className={classNames(isMobile && styles.mobileContent)}>
                <Item name="firstInput">
                  <ChatFirstContent />
                </Item>
              </div>
            )}
            <div className={styles.footer}>
              <Row>
                <Col span={isMobile ? 20 : 16} push={isMobile ? 0 : 4}>
                  <div style={{ paddingLeft: isMobile && 0 }} className={styles.chatWrapper}>
                    <Item name="chatInput">
                      <Input
                        placeholder="在这里输入你想知道的问题，给我几句提示，我来帮你回答"
                        size="large"
                      />
                    </Item>
                  </div>
                </Col>
                <Col span={4} push={isMobile ? 0 : 4}>
                  <div className={styles.outputButtonWrapper}>
                    <Item name="outputButton">
                      <Button htmlType="submit" type="primary" size="large">
                        发送
                      </Button>
                    </Item>
                  </div>
                </Col>
              </Row>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Chat;
