import React from 'react'

import { Link } from 'react-router-dom';

function Blog() {
  const data = [{
    id: 10,
    name: "Jaafar"
  }];
  const lien = data[0].id;  
  return (
    <div>
      the url is: {lien}
      <Link to={`/display/${lien}`}>
        <img
          src="/jaafar.jpg"
          alt="Photo Jaafar Bendahou"
          style={{ width: 300, height: 300, marginTop: 180 }}
        />
      </Link>
    </div>
  );
}

export default Blog




