import React from 'react';

export interface ITabProps {
  onSelect: () => void,
  isSelected: boolean;
  children: React.ReactNode;
}