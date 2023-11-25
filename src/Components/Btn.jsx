import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/raul.css'

function Btn(where, name) {
    let navigate = useNavigate();
    const route = () => {
    let path = where;
    navigate(path);
  };

  return (
    <button className='check-in' onClick={route}>
        {name}
    </button>   
  );
}

export default Btn;
