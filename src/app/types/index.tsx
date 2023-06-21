import React from 'react';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
  textStyles?: string;
  icon?: JSX.Element;
}

export interface SearchInputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  icon?: JSX.Element;
}

export interface MiastaProps {
  id: number;
  name: string;
  unique_name: string;
  county_id: number;
  voivodeship_id: number;
  latitude: string;
  longitude: string;
  name_locative: string;
}

export interface WojewodztwaProps {
  id: number;
  name: string;
  unique_name: string;
  name_locative: string;
}
