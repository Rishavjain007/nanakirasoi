import React, { useState } from "react";

// Wrapper
export const Accordion = ({ children }) => {
  return <div className="space-y-3">{children}</div>;
};

// Item
export const AccordionItem = ({ children }) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

// Trigger
export const AccordionTrigger = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200 transition flex justify-between items-center"
    >
      {children}
    </button>
  );
};

// Content
export const AccordionContent = ({ children, isOpen }) => {
  return (
    <div
      className={`px-4 overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-40 py-3" : "max-h-0"
      }`}
    >
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
};