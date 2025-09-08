export interface Product {
  id: number;
  source: string;
  category: string;
  ptitle: string;
  srcprofile: string;
  profilename: string;
  job: string;
  jobspan: string;
  price: string;
  texttitle: string;
  duration: string;
}

export interface limitOption {
  limit?: number;
  page?: number;
}
