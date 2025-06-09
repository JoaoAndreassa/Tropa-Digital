import Sidebar from "../components/Sidebar/Sidebar";
import "../styles/EventPage.scss";
import { useNavigate } from "react-router-dom";

export default function EventsPage() {
	const navigate = useNavigate();
	const events: unknown[] = [];

	return (
		<div className="events-page">
			<Sidebar />

			<div className="events-page__main">
				<header className="events-page__header">
					<button onClick={() => navigate(-1)} className="events-page__back">
						←
					</button>
					<h2>Eventos</h2>
				</header>

				<p className="events-page__welcome">
					Bem vindo de volta, <strong>Romário</strong>
				</p>

				{events.length > 0 && (
					<div className="events-page__content">
						{/* conteúdo da tabela ou lista de eventos */}
					</div>
				)}
				{events.length === 0 && (
					<p className="events-page__empty">Nenhum evento encontrado.</p>
				)}
			</div>
		</div>
	);
}
