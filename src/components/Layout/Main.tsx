import { ReactNode } from 'react';
import './main.css';

interface MainProps {
  children?: ReactNode;
}

function Main(props: MainProps) {
  const { children } = props;

  return (
    <main className="content">
        {children}
    </main>
  )
}

export default Main;