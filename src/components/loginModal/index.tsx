import styles from './index.less';
import { Button, Checkbox, Form, Input, Modal, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import logoSvg from '../../assets/logo.svg';
import { useState } from 'react';
import { loginChatGLM } from '@/services/chatGLM/api';
import { useIntl } from 'react-intl';

interface ILoginModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const LoginModal = (props: ILoginModalProps) => {
  const { open, setOpen } = props;
  
  const intl = useIntl();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const reset = () => {
    setOpen(false);
    form.resetFields();
  }; 

  const handleSubmit = async (values: any) => {
    setLoading(true);
    const { username, password, checked } = values;
    try {
      const result = await loginChatGLM({
        name: username,
        password,
      });

      localStorage.setItem('user', JSON.stringify(result || {}));
      console.log('result', result);
      setLoading(false);
      reset();
    } catch(error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      });
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <Modal
      open={open}
      footer={null}
      closable={false}
      width={480}
      wrapClassName={styles.modal}
      bodyStyle={{
        padding: '56px',
        height: '496px',
      }}
      centered
      maskClosable={true}
    >
      <div className={styles.modal_login}>
        <div className={styles.modal_title}>
          <img src={logoSvg} alt="" />
          <p>欢迎来到 CHATGLM</p>
        </div>
        <p className={styles.modal_tip}>账户密码登录</p>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          onValuesChange={(value) => {
            console.log(value);
          }}
          className={styles.modal_form}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入你的账户!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="账户" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入你的密码!' }]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" className={styles.modal_checked}>
            <Checkbox>自动登录</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.modal_button} loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default LoginModal;
