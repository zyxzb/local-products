export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
  textStyles?: string;
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
