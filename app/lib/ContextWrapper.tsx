'use client'
import { createContext } from "react";
import React from "react";
import { DB } from "./DataWrapper";

export const DataContext = createContext({});

const ContextWrapper = ({ children, data }: { children: React.ReactNode, data: DB }) => {
  return (
    <DataContext.Provider value={data}>
      <div className="div-center h-screen">
        {children}
      </div>
    </DataContext.Provider>
  )
}

export default ContextWrapper