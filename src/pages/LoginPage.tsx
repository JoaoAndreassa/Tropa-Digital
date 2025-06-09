import "../styles/LoginPage.scss";
import Logo from "../assets/logo-tropa.png";
import EyeIcon from "../assets/icons/Frame.svg";
import { useNavigate } from "react-router-dom";

import Illustration from "../assets/illustration.png";
import { useState } from "react";

export const LoginPage = () => {
	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="login__wrapper">
			<div className="login">
				<div className="login__left">
					<div className="login__content">
						<img src={Logo} alt="Tropa Digital" className="login__logo" />
						<h1 className="login__title">Bem-vindo de volta</h1>
						<p className="login__subtitle">
							Entre com sua conta para acessar o painel.
						</p>

						<form className="login__form">
							<div className="login__field">
								<label htmlFor="email">E-mail</label>
								<input type="email" id="email" placeholder="seunome@seuservidor.com" />
							</div>

							<div className="login__field">
								<label htmlFor="password">Senha</label>
								<div className="login__password">
									<input
										type={showPassword ? "text" : "password"}
										id="password"
										placeholder="Digite aqui"
									/>
									<button
										type="button"
										onClick={() => setShowPassword((prev) => !prev)}
										className="login__toggle"
									>
										<img src={EyeIcon} alt="Mostrar senha" className="login__eye-icon" />
									</button>
								</div>
							</div>

							<button
								type="button"
								className="login__button"
								onClick={() => navigate("/dashboard")}
							>
								Enviar
							</button>
						</form>
					</div>
				</div>

				<div className="login__right">
					<div className="login__illustration-wrapper">
						<img
							src={Illustration}
							alt="Ilustração"
							className="login__illustration"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
