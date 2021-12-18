import React from 'react';
import { useNavigate } from 'react-router';

const Service = (props) => {
  const { name, id } = props.service;
  const navigate = useNavigate();

  const handleShowDetails = () => navigate(`${id}/details`);

  return (
    <div onClick={handleShowDetails}>
      <a href=""><div style={{ display:'inline-block', width: 200 }}>{name}:</div></a>
    </div>
  );
};

export default Service;
