import { Link } from 'umi';
import { ErrorBoundary } from 'ls-pro-utils';

export default function index(props: any) {
  return (
    <>
      <div>
        <Link to="/my/user">用户管理</Link>
        <Link to="/my/role">角色管理</Link>
      </div>
      <div>
        <ErrorBoundary>{props.children}</ErrorBoundary>
      </div>
    </>
  );
}
