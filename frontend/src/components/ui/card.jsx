import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};