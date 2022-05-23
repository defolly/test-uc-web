import { useEffect } from 'react';
export default () => {
  useEffect(() => {
    console.log('异常出现了，变量没有定义', lsApps);
  }, []);

  return (
    <a href="./excel/用户管理导入模板.xlsx" style={{ padding: '50px' }}>
      下载用户导入模板{' '}
    </a>
  );
};
