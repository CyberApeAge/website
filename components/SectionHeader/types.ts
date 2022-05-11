export interface SectionHeaderProps {
  isBigTitle?: boolean;
  title?: string;
  description?: string;
  append?: any;
  ltr?: boolean;
}

export interface SpecialWordsMap {
  [key: string]: { link: string };
}

export interface TitleProps {
  isBigTitle?: boolean;
  ltr?: boolean;
}
