import { useRef, useState } from "react";
import "./Sidebar.scss";
import Logo from "../../assets/logo-tropa.png";
import EditIcon from "../../assets/icons/edit.svg";
import LogoutIcon from "../../assets/icons/logout.svg";
import { NavLink, useNavigate } from "react-router-dom";
import avatarDefault from "../../assets/avatar.png";

export default function Sidebar() {
	const navigate = useNavigate();
	const inputRef = useRef<HTMLInputElement>(null);
	const [avatar, setAvatar] = useState<string>(avatarDefault);

	const handleAvatarClick = () => {
		inputRef.current?.click();
	};

	const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setAvatar(imageUrl);
		}
	};

	return (
		<aside className="sidebar">
			<div className="sidebar__top">
				<img src={Logo} alt="Tropa Digital" className="sidebar__logo" />

				<nav className="sidebar__menu">
					<NavLink to="/dashboard" className="sidebar__item">
						🏠 Dashboard
					</NavLink>
					<NavLink to="/events" className="sidebar__item">
						📅 Eventos
					</NavLink>
					<NavLink to="/teams" className="sidebar__item">
						👥 Equipes
					</NavLink>
					<NavLink to="/registrations" className="sidebar__item">
						📝 Inscrições
					</NavLink>
				</nav>
			</div>

			<div className="sidebar__footer">
				<div className="sidebar__profile">
					<img
						src={avatar}
						alt="Avatar"
						className="sidebar__avatar"
						onClick={handleAvatarClick}
					/>
					<input
						type="file"
						accept="image/*"
						ref={inputRef}
						onChange={handleAvatarChange}
						style={{ display: "none" }}
					/>
					<div className="sidebar__user">
						<strong>Romário</strong>
						<span>Administrador</span>
					</div>
				</div>

				<button className="sidebar__link">
					<img src={EditIcon} alt="" />
					Alterar dados
				</button>

				<button className="sidebar__link" onClick={() => navigate("/")}>
					<img src={LogoutIcon} alt="" />
					Sair
				</button>
			</div>
		</aside>
	);
}
