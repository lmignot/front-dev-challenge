import { ReactNode } from 'react';
import './page.css';

interface PageProps {
  children?: ReactNode;
}

function Page(props: PageProps) {
  const { children } = props;

  return (
    <div className="page">
        {children}
    </div>
  )
}

export default Page;