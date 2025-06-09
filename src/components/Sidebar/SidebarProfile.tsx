// SidebarProfile.tsx
import { useRef, useState } from 'react';
import './SidebarProfile.scss';

export default function SidebarProfile() {
  const [avatar, setAvatar] = useState('/default-avatar.jpg'); // ou avatar real do usuário
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
      // Aqui você pode enviar o avatar pro backend via fetch/axios
    }
  };

  return (
    <div className="sidebar__profile">
      <img
        src={avatar}
        alt="Avatar"
        className="sidebar__avatar"
        onClick={handleAvatarClick}
      />
      <div className="sidebar__user">
        <strong>Romário</strong>
        <span>Administrador</span>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
}
