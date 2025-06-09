import TableMenu from '../Table/tableMenu';
import './EventTable.scss';

const mockEvents = [
  {
    id: 1,
    name: 'Clube do Laço Coração Pantaneiro',
    teams: 10,
    status: 'Ativo',
    date: '09 a 11 de Junho',
  },
  {
    id: 2,
    name: 'Clube do Laço Coração Pantaneiro',
    teams: 10,
    status: 'Ativo',
    date: '09 a 11 de Junho',
  },
];

export default function EventTable() {
  return (
    <section className="event-table">
      <div className="event-table__top">
        <input
          type="text"
          placeholder="🔍 Buscar eventos"
          className="event-table__search"
        />
        <button className="event-table__insert">Inserir novo</button>
      </div>

      <table className="event-table__table">
        <thead>
          <tr>
            <th>Nome do evento</th>
            <th>Total de equipes</th>
            <th>Status</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {mockEvents.map(event => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.teams}</td>
              <td>
                <span className="event-table__status-dot" />
                {event.status}
              </td>
              <td>{event.date}</td>
              <td>
                <button className="event-table__menu-button"><TableMenu /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="event-table__pagination">
        <button>Anterior</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>Próxima</button>
      </div>
    </section>
  );
}
