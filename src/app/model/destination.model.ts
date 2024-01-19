//DestinationModel that contains all necessary data for the display of a destination
export interface destination {
  id: number;
  nomlieu: string;
  pays: string;
  continent: string;
  region: string;
  prix: number;
  afficheUrl: string;
  like: number;
  note?: number;
  galerie:string [];
}

