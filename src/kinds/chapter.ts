import React from 'react';

export type Chapter = {
  number: number,
  content: React.ReactNode,
};

export const Chapter = {
  new: (number: number, content: React.ReactNode): Chapter => ({
    number,
    content,
  }),
};
