import { JSONFilePreset } from "lowdb/node";
import ContextWrapper from "./ContextWrapper";
import React from 'react'

export interface DB {
  faults:   Category;
  printers: Category;
  scanners: Category;
  users:    Category;
  olim:     Category;
  software: Category;
}

export interface Category {
  articles:   { [key: string]: Article };
  properties: Properties;
}

export interface Article {
  title:     string;
  body:      string;
  views:     number;
  tags:      string[];
  createdAt: Date;
  changedAt: Date;
}

export interface Properties {
  icon:  string;
  color: string;
}

export const defaultData: DB = {
  faults:   { articles: {}, properties: { icon: '', color: '#000000' } },
  printers: { articles: {}, properties: { icon: '', color: '#000000' } },
  scanners: { articles: {}, properties: { icon: '', color: '#000000' } },
  users:    { articles: {}, properties: { icon: '', color: '#000000' } },
  olim:     { articles: {}, properties: { icon: '', color: '#000000' } },
  software: { articles: {}, properties: { icon: '', color: '#000000' } },
}

export default async function DataWrapper({ children }: { children: React.ReactNode }) {
  const db = await JSONFilePreset<DB>('./DB/db.json', defaultData);
  console.log(db.data);
  
  return (
    <ContextWrapper data={defaultData}>
      {children}
    </ContextWrapper>
  )
}