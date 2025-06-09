import { useState, useRef, useEffect } from 'react';
import './TableMenu.scss'; 

export default function TableMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="table-menu" ref={menuRef}>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>⋮</button>
      
      {isOpen && (
        <div className="submenu">
          <button className="submenu__item"><span>👁</span> Visualizar</button>
          <button className="submenu__item"><span>✏️</span> Editar</button>
          <button className="submenu__item submenu__item--danger"><span>🗑️</span> Remover</button>
        </div>
      )}
    </div>
  );
}
