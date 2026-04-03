import React, { useState, createContext, useContext } from "react";

// Create a context to share state between Accordion items
const AccordionContext = createContext();

// Wrapper
export const Accordion = ({ children, type = "single", collapsible = true }) => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (value) => {
    if (openItem === value) {
      if (collapsible) setOpenItem(null);
    } else {
      setOpenItem(value);
    }
  };

  return (
    <AccordionContext.Provider value={{ openItem, handleToggle, type }}>
      <div className="space-y-3">{children}</div>
    </AccordionContext.Provider>
  );
};

// Item
export const AccordionItem = ({ children, value }) => {
  const { openItem } = useContext(AccordionContext);
  const isOpen = openItem === value;

  return (
    <div className="border rounded-lg overflow-hidden">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isOpen, itemValue: value });
        }
        return child;
      })}
    </div>
  );
};

// Trigger
export const AccordionTrigger = ({ children, onClick, isOpen, itemValue }) => {
  const { handleToggle } = useContext(AccordionContext);

  const handleClick = () => {
    handleToggle(itemValue);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="w-full text-left px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200 transition flex justify-between items-center"
    >
      {children}
      <span className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
        ▼
      </span>
    </button>
  );
};

// Content
export const AccordionContent = ({ children, isOpen }) => {
  return (
    <div
      className={`px-4 overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 py-3" : "max-h-0"
      }`}
    >
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
};