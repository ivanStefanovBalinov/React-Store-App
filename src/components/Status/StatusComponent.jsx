import React, { useEffect } from "react";
import "./StatusComponent.scss";
import { useGetStatus } from "../../store/features/products-hooks";

const StatusComponent = () => {
  const status = useGetStatus();

  return (
    <div className="status-wrapper">
      <p>{status.status}</p>
      <p className="message">{status.message}</p>
    </div>
  );
};

export default StatusComponent;
