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

export interface MergedLocationsProps {
  id: number;
  name: string;
  unique_name: string;
  county_id: number;
  voivodeship_id: number;
  latitude: string;
  longitude: string;
  name_locative: string;
  wojewodztwo: string;
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
  // location: string;
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
  images: [{ fileUrl: String; fileKey: String }] | [];
  coord: [number, number];
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

export interface AccountProps {
  params: {
    email: string;
  };
}

export interface SingleAdProps {
  params: {
    id: string;
  };
}

export interface createAdContextProps {
  location: string;
  images: Images[];
  coord: [number, number];
  setLocation: (location: string) => void;
  setImages: (setImages: any) => void;
  setCoord: (setCoord: [number, number]) => void;
}

export interface BreadcrumbsProps {
  pageName: string;
  adTitle?: string;
}

export interface addToFavoritesContextProps {
  favoritesAds: CardProps[] | [];
  setFavoritesAds: (newFavoritesAds: CardProps[]) => void;
}

export interface searchContextProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  dateIsDesc: boolean;
  setDateIsDesc: (dateIsDesc: boolean) => void;
  name: string;
  setName: (name: string) => void;
  location: string;
  setLocation: (location: string) => void;
  data: any;
  error: any;
  isLoading: boolean;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handlePageChange: (page: number) => void;
  handleSort: () => void;
}

export interface SearchButtonProps {
  onClick: () => void;
}

export interface AdsSearchParams {
  page?: number;
  limit?: number;
  dateDesc?: string;
  name?: string;
  location?: string;
}

export interface AllAdsServerProps {
  items: CardProps[];
  totalCount: number;
  totalPages: number;
}

export interface PaginationProps {
  totalPages: number;
}
