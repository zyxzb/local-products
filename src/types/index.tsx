import React, { SetStateAction } from 'react';

export interface CustomButtonProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
  extraStyles?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

export interface SearchInputProps {
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

export interface ContactFormProps {
  name: string;
  email: string;
  message?: string;
  password?: string;
}

export interface LoginFormProps {
  email: string;
  password: string;
}

export interface InputFieldProps {
  name: string;
  placeholder: string;
  extraStyles?: string;
  isMessage?: boolean;
  type?: string;
}

export interface DzielniceProps {
  id: string;
  city_id: string;
  text: string;
  text_district: string;
  unique_name: string;
  lon: string;
  lat: string;
}

export interface CustomLinkProps {
  link: string;
  text: string;
  extraStyles?: string;
  icon?: JSX.Element;
}

export interface HomeDataProps {
  header: string;
  content: string;
}

export interface GoogleCredentials {
  clientId: string;
  clientSecret: string;
}

export interface PopupProps {
  text1: string;
  text2?: string;
  onClick: () => void;
}

export interface CreateAdProps {
  title: string;
  desc: string;
  location: string;
  content: string;
}

export interface CardProps {
  _id: string;
  title: string;
  desc: string;
  location: string;
  content: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  imagesUrl: [string | null, string | null];
  __v: number;
}

export interface Images {
  fileUrl: string;
  fileKey: string;
}

export interface ImageUploaderProps {
  handleImageUpload: (value: SetStateAction<Images[]>) => void;
  images: Images[];
}

export interface AddProducerLabelWrapperProps {
  children: React.ReactNode;
  text: string;
}
