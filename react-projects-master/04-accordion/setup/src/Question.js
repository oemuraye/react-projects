import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [details, setdetails] = useState(false)
  return (
    <article className='question'>
      <header onClick={() => setdetails(!details)}>
        <h4>{title}</h4>
        <button className='btn'>
          {details ? <AiOutlineMinus /> : <AiOutlinePlus /> }
        </button>
      </header>
      {details && <p>{info}</p>}
    </article>
  );
};

export default Question;
