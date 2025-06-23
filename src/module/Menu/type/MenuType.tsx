export type Children = {
  id: number | string;
  name: string;
  href: string;
};

export interface MenuType {
  id: number;
  name: string;
  href?: string;
  children?: Children[];
}
