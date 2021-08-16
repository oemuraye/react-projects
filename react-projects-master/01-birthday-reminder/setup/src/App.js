import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [individuals, setIndividuals] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{individuals.length} birthday today</h3>
        <List individuals={individuals} />
        <button onClick={() => setIndividuals([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
