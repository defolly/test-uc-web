(window['webpackJsonp_test-uc-web'] =
  window['webpackJsonp_test-uc-web'] || []).push([
  [4],
  {
    i1J9: function (e, a, t) {
      'use strict';
      t.r(a);
      var i = t('k1fw'),
        s = t('iRfZ'),
        l = t('S7uY'),
        r = t('UHph'),
        d = t('xO9F'),
        n = t('rOeD'),
        o = t('JoPA'),
        m = t('CJaZ'),
        c = t('N+i0');
      class u extends c['a'] {
        constructor() {
          super(...arguments),
            (this.api = {
              load: '/uc-api/sysUser/page',
              add: '/uc-api/sysUser/batch',
              edit: '/uc-api/sysUser',
              delete: '/uc-api/sysUser/batch',
            });
        }
      }
      var h = t('nKUr'),
        p = n['a'].rangeToSearch,
        b = n['a'].yesnoList,
        x = n['a'].statusList,
        g = {
          '-1': '-1\u2192\u4e34\u65f6',
          1: '1\u2192\u8bd5\u7528',
          2: '2\u2192\u6b63\u5f0f',
          4: '4\u2192\u79bb\u804c',
          5: '5\u2192\u79bb\u804c\u5728\u9014',
          6: '6\u2192\u9000\u4f11',
          8: '8\u2192\u5b9e\u4e60',
        },
        w = {
          valueField: 'parentIds',
          textField: 'orgParentShortNames',
          clearable: !0,
          url: '/uc-api/sysOrganization',
          columns: [
            {
              dataIndex: 'orgId',
              width: 150,
              ellipsis: !0,
              title: '\u7ec4\u7ec7ID',
            },
            {
              dataIndex: 'orgCode',
              width: 150,
              ellipsis: !0,
              title: '\u7ec4\u7ec7\u7f16\u7801',
            },
            {
              dataIndex: 'orgParentShortNames',
              searchField: 'a__orgParentShortNames_like',
              ellipsis: !0,
              title: '\u7ec4\u7ec7\u540d\u79f0',
            },
          ],
        },
        I = [
          {
            title: '\u7528\u6237ID',
            dataIndex: 'id',
            ellipsis: !0,
            hideInSearch: !0,
            width: 120,
          },
          {
            title: '\u7528\u6237\u5e10\u53f7',
            dataIndex: 'loginName',
            searchField: 'loginName_like',
            ellipsis: !0,
            width: 80,
          },
          {
            title: '\u7528\u6237\u540d\u79f0',
            dataIndex: 'userName',
            searchField: 'userName_like',
            ellipsis: !0,
            width: 80,
          },
          {
            title: '\u624b\u673a\u53f7\u7801',
            dataIndex: 'phoneNumber',
            ellipsis: !0,
            width: 110,
          },
          {
            title: '\u90ae\u7bb1',
            dataIndex: 'email',
            hideInSearch: !0,
            ellipsis: !0,
            width: 130,
          },
          {
            title: '\u72b6\u6001',
            dataIndex: 'status',
            valueType: 'select',
            width: 70,
            fieldProps: { options: x },
          },
          {
            title: '\u662f\u5426\u7ba1\u7406\u5458',
            dataIndex: 'ifAdmin',
            valueType: 'select',
            search: !1,
            width: 100,
            fieldProps: { options: b },
          },
          {
            title: '\u7ec4\u7ec7\u540d\u79f0',
            dataIndex: 'orgName',
            ellipsis: !0,
            width: 280,
          },
          {
            title: '\u5458\u5de5\u5c5e\u6027',
            dataIndex: 'employeeAttr',
            ellipsis: !0,
            width: 90,
            valueType: 'select',
            valueEnum: g,
          },
          {
            title: '\u5907\u6ce8',
            dataIndex: 'remarks',
            ellipsis: !0,
            search: !1,
            width: 120,
          },
          {
            title: '\u521b\u5efa\u4eba',
            dataIndex: 'creator',
            search: !1,
            width: 100,
          },
          {
            title: '\u521b\u5efa\u65f6\u95f4',
            dataIndex: 'createTime',
            hideInSetting: !0,
            hideInTable: !0,
            valueType: 'dateRange',
            fieldProps: { allowEmpty: [!0, !0] },
            search: {
              transform: (e) =>
                p(e, 'createTime_gte', 'createTime_lte', ' 23:59:59'),
            },
          },
          {
            title: '\u521b\u5efa\u65f6\u95f4',
            dataIndex: 'createTime',
            hideInSearch: !0,
            width: 160,
          },
          {
            title: '\u66f4\u6539\u4eba',
            dataIndex: 'modifier',
            hideInSearch: !0,
            width: 100,
          },
          {
            title: '\u66f4\u6539\u65f6\u95f4',
            dataIndex: 'modifyTime',
            valueType: 'dateRange',
            hideInSetting: !0,
            hideInTable: !0,
            search: {
              transform: (e) =>
                p(e, 'modifyTime_gte', 'modifyTime_lte', ' 23:59:59'),
            },
          },
          {
            title: '\u66f4\u6539\u65f6\u95f4',
            dataIndex: 'modifyTime',
            search: !1,
            width: 160,
          },
        ],
        j = { status: 1 },
        f = { add: !0, edit: !0, remove: !0, export: !0, import: !0 },
        y = new u();
      a['default'] = () => {
        var e = Object(o['a'])({ service: y, toolConfig: f, initItem: j }),
          a = e.tableRef,
          t = e.tableTools,
          n = e.showEdit,
          c = e.editItem,
          u = (e.selectedRows, e.setShowEdit),
          p = e.onLoad,
          O = e.onSave,
          N = e.setSelectedRows,
          T = e.onExport;
        return Object(h['jsxs'])(h['Fragment'], {
          children: [
            Object(h['jsx'])(s['a'], {
              columns: I,
              request: p,
              rowKey: 'id',
              actionRef: a,
              height: 'full',
              importConfig: {
                colNames:
                  'loginName,userName,orgId,phoneNumber,email,idCard,password,status,remarks,employeeAttr',
                mustArray:
                  'true,true,true,false,false,false,true,true,false,true',
                bizApi: '/uc-api/sysUser/importData',
                filePath:
                  './excel/\u7528\u6237\u7ba1\u7406\u5bfc\u5165\u6a21\u677f.xlsx',
              },
              exportConfig: { bizApi: '/uc-api/sysUser/page', onExport: T },
              rowSelection: {
                alwaysShowAlert: !0,
                onChange: (e, a) => {
                  N(a);
                },
              },
              toolBarRender: () => [...t],
            }),
            Object(h['jsxs'])(l['a'], {
              title: c.id
                ? '\u7f16\u8f91\u7528\u6237'
                : '\u65b0\u5efa\u7528\u6237',
              visible: n,
              labelWidth: 100,
              onFinish: O,
              onVisibleChange: u,
              initialValues: Object(i['a'])({}, c),
              itemCol: 12,
              children: [
                Object(h['jsx'])(r['a'], {
                  name: 'loginName',
                  label: '\u7528\u6237\u5e10\u53f7',
                  rules: [
                    { required: !0, message: '\u6b64\u9879\u5fc5\u586b' },
                  ],
                }),
                Object(h['jsx'])(r['a'], {
                  name: 'userName',
                  label: '\u7528\u6237\u540d\u79f0',
                  rules: [
                    { required: !0, message: '\u6b64\u9879\u5fc5\u586b' },
                  ],
                }),
                Object(h['jsx'])(r['a'], {
                  name: 'idCard',
                  label: '\u8eab\u4efd\u8bc1',
                }),
                Object(h['jsx'])(r['a'], {
                  name: 'phoneNumber',
                  label: '\u624b\u673a\u53f7',
                  rules: [
                    { required: !0, message: '\u6b64\u9879\u5fc5\u586b' },
                  ],
                }),
                Object(h['jsx'])(r['a'], {
                  name: 'email',
                  label: '\u90ae\u7bb1',
                }),
                Object(h['jsx'])(d['a'], {
                  name: 'status',
                  label: '\u72b6\u6001',
                  options: x,
                  rules: [
                    { required: !0, message: '\u6b64\u9879\u5fc5\u586b' },
                  ],
                }),
                Object(h['jsx'])(d['a'], {
                  name: 'ifAdmin',
                  label: '\u662f\u5426\u7ba1\u7406\u5458',
                  options: b,
                }),
                Object(h['jsx'])(d['a'], {
                  name: 'employeeAttr',
                  label: '\u5458\u5de5\u5c5e\u6027',
                  valueEnum: g,
                  rules: [
                    { required: !0, message: '\u6b64\u9879\u5fc5\u586b' },
                  ],
                }),
                Object(h['jsx'])(
                  m['a'],
                  Object(i['a'])(
                    Object(i['a'])(
                      {
                        name: 'orgId',
                        textName: 'orgName',
                        label: '\u7ec4\u7ec7\u540d\u79f0',
                        rules: [
                          { required: !0, message: '\u6b64\u9879\u5fc5\u586b' },
                        ],
                      },
                      w,
                    ),
                    {},
                    { valueField: 'orgId' },
                  ),
                ),
                Object(h['jsx'])(r['a'], {
                  name: 'remarks',
                  fieldProps: { maxLength: 255 },
                  label: '\u5907\u6ce8',
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
