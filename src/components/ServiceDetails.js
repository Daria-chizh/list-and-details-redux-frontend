import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadServiceDetailsRequest } from '../actions/actionCreators'

const ServiceDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, error, service } = useSelector((state) => ({
    ...state.fetcher,
    service: state.serviceList.serviceDetails,
  }));

  useEffect(() => dispatch(loadServiceDetailsRequest(id)), [id]);

  if (!service || loading) {
    return <div> Loading...</div>;
  }

  if (error) {
    const handleRetryClick = () => dispatch(loadServiceDetailsRequest(id));
    return (
      <>
        <div>Error: {error}</div>
        <div onClick={handleRetryClick}>Retry</div>
      </>
    );
  }

  const { name, price, content } = service;

  return (
    <>
      <span style={{ display:'inline', width: 100, marginRight: 20 }}>{name}</span>
      <span style={{ display:'inline', width: 100, marginRight: 20 }}>{price}</span>
      <span style={{ display:'inline', width: 100, marginRight: 20 }}>{content}</span>
    </>
  );
};

export default ServiceDetails;
