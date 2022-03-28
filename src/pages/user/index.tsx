import { useState, useMemo } from 'react';

import type { ProColumns } from 'ls-pro-table';
import ProTable from 'ls-pro-table';

import { ProFormText, ProFormSelect, ModalForm } from 'ls-pro-form';
import { ApiResponse, InputTable, utils, useSingle } from 'ls-pro-common';
import type { TableToolbar } from 'ls-pro-common';
import Service from './services';


const { rangeToSearch, yesnoList, statusList } = utils;

type User = {
  id?: string;
  userId?: string;
  userCode?: string;
  loginName?: string;
  phoneNumber?: string;
  email?: string;
  userName?: string;
  orgId?: string;
  orgName?: string;
  orgParentIds?: string;
  employeeAttr?: string;
  status?: number | string;
  companyId?: string;
  ifAdmin?: number | string;
  creator?: string;
  createTime?: string;
  modifier?: string;
  modifyTime?: string;
  remarks?: string;
};

const attrEnum = {
  '-1': '-1→临时',
  '1': '1→试用',
  '2': '2→正式',
  '4': '4→离职',
  '5': '5→离职在途',
  '6': '6→退休',
  '8': '8→实习',
};

const orgConfig = {
  valueField: 'parentIds',
  textField: 'orgParentShortNames',
  clearable: true,
  url: '/uc-api/sysOrganization',
  columns: [
    { dataIndex: 'orgId', width: 150, ellipsis: true, title: '组织ID' },
    { dataIndex: 'orgCode', width: 150, ellipsis: true, title: '组织编码' },
    {
      dataIndex: 'orgParentShortNames',
      searchField: 'a__orgParentShortNames_like',
      ellipsis: true,
      title: '组织名称',
    },
  ],
};

const columns: ProColumns<User>[] = [
  {
    title: '用户ID',
    dataIndex: 'id',
    ellipsis: true,
    hideInSearch: true,
    width: 120,
  },
  {
    title: '用户帐号',
    dataIndex: 'loginName',
    searchField: 'loginName_like',
    ellipsis: true,
    width: 80,
  },
  {
    title: '用户名称',
    dataIndex: 'userName',
    searchField: 'userName_like',
    ellipsis: true,
    width: 80,
  },
  {
    title: '手机号码',
    dataIndex: 'phoneNumber',
    ellipsis: true,
    width: 110,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    hideInSearch: true,
    ellipsis: true,
    width: 130,
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueType: 'select',
    width: 70,
    fieldProps: {
      options: statusList,
    },
  },
  {
    title: '是否管理员',
    dataIndex: 'ifAdmin',
    valueType: 'select',
    search: false,
    width: 100,
    fieldProps: {
      options: yesnoList,
    },
  },
  {
    title: '组织名称',
    dataIndex: 'orgName',
    ellipsis: true,
    width: 280,   
  },
  {
    title: '员工属性',
    dataIndex: 'employeeAttr',
    ellipsis: true,
    width: 90,
    valueType: 'select',
    valueEnum: attrEnum,
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    ellipsis: true,
    search: false,
    width: 120,
  },
  {
    title: '创建人',
    dataIndex: 'creator',
    search: false,
    width: 100,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    hideInSetting: true,
    hideInTable: true,
    valueType: 'dateRange',
    fieldProps: {
      allowEmpty: [true, true],
    },
    search: {
      transform: (value: any) =>
        rangeToSearch(value, 'createTime_gte', 'createTime_lte', ' 23:59:59'),
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    hideInSearch: true,
    width: 160,
  },
  {
    title: '更改人',
    dataIndex: 'modifier',
    hideInSearch: true,
    width: 100,
  },
  {
    title: '更改时间',
    dataIndex: 'modifyTime',
    valueType: 'dateRange',
    hideInSetting: true,
    hideInTable: true,
    search: {
      transform: (value: any) =>
        rangeToSearch(value, 'modifyTime_gte', 'modifyTime_lte', ' 23:59:59'),
    },
  },
  {
    title: '更改时间',
    dataIndex: 'modifyTime',
    search: false,
    width: 160,
  },
];

const initItem: User = {
  status: 1,
};

const toolConfig: TableToolbar = {
  add: true,
  edit: true,
  remove: true,
  export: true,
  import: true,
};

const service = new Service();

export default () => {
  const {
    tableRef,
    tableTools,
    showEdit,
    editItem,
    selectedRows,
    setShowEdit,
    onLoad,
    onSave,
    setSelectedRows,
    onExport,
  } = useSingle({ service, toolConfig, initItem });


  return (
    <>
      <ProTable<User>
        columns={columns}
        request={onLoad}
        rowKey="id"
        actionRef={tableRef}
        height={'full'}
        importConfig={{
          colNames:
            'loginName,userName,orgId,phoneNumber,email,idCard,password,status,remarks,employeeAttr',
          mustArray: 'true,true,true,false,false,false,true,true,false,true',
          bizApi: '/uc-api/sysUser/importData',
          filePath: './excel/用户管理导入模板.xlsx',
        }}
        exportConfig={{
          bizApi: '/uc-api/sysUser/page',
          onExport: onExport,
        }}
        rowSelection={{
          alwaysShowAlert: true,
          onChange: (keys, rows) => {
            setSelectedRows(rows);
          },
        }}
        toolBarRender={() => [
          ...tableTools,
          // <Button
          //   key="reset"
          //   disabled={selectedRows.length === 0}
          //   onClick={onResetPassword}
          // >
          //   重置密码
          // </Button>,
          // <Dropdown
          //   key="copy"
          //   overlay={copyMenu}
          //   disabled={selectedRows.length === 0}
          // >
          //   <Button>
          //     权限克隆
          //     <DownOutlined />
          //   </Button>
          // </Dropdown>,
          // <Dropdown
          //   key="allot"
          //   overlay={allotMenu}
          //   disabled={selectedRows.length !== 1}
          // >
          //   <Button>
          //     权限分配
          //     <DownOutlined />
          //   </Button>
          // </Dropdown>         
        ]}
      ></ProTable>

      <ModalForm<User>
        title={editItem.id ? '编辑用户' : '新建用户'}
        visible={showEdit}
        labelWidth={100}
        onFinish={onSave}
        onVisibleChange={setShowEdit}
        initialValues={{ ...editItem }}
        itemCol={12}
      >
        <ProFormText
          name="loginName"
          label="用户帐号"
          rules={[{ required: true, message: '此项必填' }]}
        />

        <ProFormText
          name="userName"
          label="用户名称"
          rules={[{ required: true, message: '此项必填' }]}
        />

        <ProFormText name="idCard" label="身份证" />

        <ProFormText
          name="phoneNumber"
          label="手机号"
          rules={[{ required: true, message: '此项必填' }]}
        />

        <ProFormText name="email" label="邮箱" />

        <ProFormSelect
          name="status"
          label="状态"
          options={statusList}
          rules={[{ required: true, message: '此项必填' }]}
        />

        <ProFormSelect name="ifAdmin" label="是否管理员" options={yesnoList} />

        <ProFormSelect
          name="employeeAttr"
          label="员工属性"
          valueEnum={attrEnum}
          rules={[{ required: true, message: '此项必填' }]}
        />

        <InputTable
          name="orgId"
          textName="orgName"
          label="组织名称"
          rules={[{ required: true, message: '此项必填' }]}
          {...orgConfig}
          valueField="orgId"
        ></InputTable>

        <ProFormText
          name="remarks"
          fieldProps={{ maxLength: 255 }}
          label="备注"
        />
      </ModalForm>

    </>
  );
};
