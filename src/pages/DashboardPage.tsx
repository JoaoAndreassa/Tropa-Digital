import '../styles/dashboard.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import EventTable from '../components/EventTable/EventeTable';

export const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard__main">
        <Header />
        <h2 className="dashboard__title">Todos eventos</h2>
        <EventTable />
      </div>
    </div>
  );
};
