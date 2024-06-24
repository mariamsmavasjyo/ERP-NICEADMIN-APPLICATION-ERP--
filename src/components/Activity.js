import React from 'react';
import './Dashboard.css';

const Activity = () => {
  return (
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
  );
};

export default Activity;
