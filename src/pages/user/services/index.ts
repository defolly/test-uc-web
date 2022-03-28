import { BaseService, } from 'ls-pro-common';

export default class UserService extends BaseService {
  // 定义api
  api = {
    load: '/uc-api/sysUser/page',
    add: '/uc-api/sysUser/batch',
    edit: '/uc-api/sysUser',
    delete: '/uc-api/sysUser/batch',
  };


}
