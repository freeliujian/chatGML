import { Layout } from 'antd';
import React from 'react';
import { FormattedMessage, useIntl } from 'umi';

const { Content } = Layout;

const Welcome: React.FC = () => {
  const intl = useIntl();

  return (
    <Layout>
      <Content>欢迎进入后台管理页面</Content>
    </Layout>
  );
};

export default Welcome;
