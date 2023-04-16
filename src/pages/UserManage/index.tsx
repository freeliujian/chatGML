import { PlusOutlined } from '@ant-design/icons';
import type { ActionType } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';
import request from 'umi-request';

const columns: any[] = [
  {
    title: '用户',
    dataIndex: 'name',
    ellipsis: true,
  },
  {
    title: '用户账号',
    dataIndex: 'username',
    ellipsis: true,
  },
  {
    title: '角色',
    dataIndex: 'role',
    hideInSearch: true,
    ellipsis: true,
  },
  {
    title: '账号状态',
    dataIndex: 'iaActive',
    hideInSearch: true,
  },
  {
    title: '创建时间',
    dataIndex: 'creationTime',
    hideInSearch: true,
    valueType: 'date',
  },
  {
    title: '备注',
    hideInSearch: true,
    dataIndex: 'creationTime',
    valueType: 'date',
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        重置
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        删除
      </a>,
    ],
  },
];

const UserManage = () => {
  const actionRef = useRef<ActionType>();
  return (
    <PageContainer>
      <ProTable
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}, sort, filter) => {
          const defaultParams = {
            name: '',
            Enabled: false,
            PageSize: 9,
            PageIndex: 1,
          };
          return request<{
            data: any[];
          }>('https://glm-mangement-api.baibaomen.com/User/page', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              __tenant: '3a0a90fe-9a0d-70f4-200d-a80a41fb6195',
            },
            data: defaultParams,
          });
        }}
        rowKey="id"
        pagination={{
          pageSize: 5,
          onChange: (page) => {},
        }}
        options={false}
        dateFormatter="string"
        headerTitle="账号列表"
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            onClick={() => {
              actionRef.current?.reload();
            }}
            type="primary"
          >
            添加账号
          </Button>,
        ]}
      />
    </PageContainer>
  );
};

export default UserManage;
