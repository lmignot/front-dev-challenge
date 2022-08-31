import { ReactNode } from 'react';
import './header.css';

interface HeaderProps {
  pageTitle: string;
  children?: ReactNode;
}

function Header(props: HeaderProps) {
  const { pageTitle, children } = props;

  return (
    <section className="header">
      <div className="page-title">
        <h1>{pageTitle}</h1>
      </div>
      <div className="header-content">
        {children}
      </div>
    </section>
  )
}

export default Header;