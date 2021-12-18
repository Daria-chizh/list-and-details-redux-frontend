import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Service from "./Service";
import { loadServicesRequest } from '../actions/actionCreators'

export default function ServiceList() {
  const dispatch = useDispatch();

  const { loading, error, services } = useSelector((state) => ({
    ...state.fetcher,
    services: state.serviceList.services,
  }));

  useEffect(() => dispatch(loadServicesRequest()), []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    const handleRetryClick = () => dispatch(loadServicesRequest());
    return (
      <>
        <div>Error: {error}</div>
        <div onClick={handleRetryClick}>Retry</div>
      </>
    );
  }

  return (
    <ul style={{ listStyleType: 'none' }}>
      {
        services.map((service) => <Service service={service} key={service.id} />)
      }
    </ul>
  );
}
