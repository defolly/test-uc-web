import { useEffect } from 'react';
export default () => {
  useEffect(() => {
    // try {
    console.log('异常出现了，变量没有定义', lsApps);
    // } catch {
    //   console.log('模块异常')
    // }
  }, []);

  return (
    <div style={{ padding: '50px', marginTop: '80px' }}>
      <a href="./excel/用户管理导入模板.xlsx">下载用户导入模板 </a>
    </div>
  );
};
