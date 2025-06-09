import './Header.scss';
import { useUser } from '../../context/UserContext';

export default function Header() {
    const {name} = useUser();
    
  return (
    <header className="header">
      <p>
        Bem-vindo de volta, <strong>{name}</strong>
      </p>
    </header>
  );
}
