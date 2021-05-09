import { Fragment } from 'react';
import NavBar from 'components/Navbar';
import Footer from 'components/Footer';
import BarChart from 'components/BarChart/BarChart';
import DataTable from 'components/DataTable';
import DonutsChart from 'components/DonutsChart';

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3"> Dashboard</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary"> Todas as vendas</h5>
            <DonutsChart />
          </div>
          <div className="py-3"> 
            <h2 className="text-primary">Todas as vendas</h2>
          </div>
          <DataTable />
        </div>
      </div>
      <Footer />
    </Fragment>

  );
}

export default App;
