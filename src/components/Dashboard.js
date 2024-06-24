import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';

const Dashboard = () => {
  const data = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
    datasets: [
      {
        label: 'Sales',
        data: [10, 20, 3, 40, 100, 60, 70],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Salary',
        data: [15, 25, 35, 45, 55, 65, 75],
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      },
      {
        label: 'Customers',
        data: [20, 30, 90, 50, 10, 70, 80],
        borderColor: 'rgba(255, 159, 64, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="content">
      <div className="dashboard-content">
        <div className='Dash'><h2>Dashboard</h2></div>
        <div className="stats-cards">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sales | Today</h5>
              <h2 className="card-text">145</h2>
              <p className="card-text text-success">12% increase</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Revenue | This Month</h5>
              <h2 className="card-text">$3,264</h2>
              <p className="card-text text-success">8% increase</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Customers | This Year</h5>
              <h2 className="card-text">1244</h2>
              <p className="card-text text-danger">12% decrease</p>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="chart-container">
            <h3>Reports | Today</h3>
            <Line data={data} />
          </div>
          <div className="activity-container">
            <h3>Recent Activity | Today</h3>
            <ul className="activity-list">
              <li>32 min <span>Quia quae rerum explicabo officiis beatae</span></li>
              <li>56 min <span>Voluptatem blanditiis blanditiis eveniet</span></li>
              <li>2 hrs <span>Voluptates corrupti molestias voluptatem</span></li>
              <li>1 day <span>Tempore autem saepe occaecati voluptatem tempore</span></li>
              <li>2 days <span>Est sit eum reiciendis exercitationem</span></li>
              <li>4 weeks <span>Dicta dolorem harum nulla eius. Ut quidem quidem sit quas</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;