import { useParams } from 'react-router-dom';

function Display() {
  const { urlx } = useParams();

  return (
    <div>
      <h2>helllllllllllllllo</h2>
      <h1>Name: {urlx}</h1>
      {/* Other content related to the display */}
    </div>
  );
}

export default Display;
