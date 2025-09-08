export interface Product {
  id: number;
  source: string;
  texttitle: string;
  ptitle: string;
  srcprofile: string;
  profilename: string;
  job: string;
  jobspan: string;
  ratingImages?: number;
  price: number;
  className?: string;
  reviewcount?: number;
  duration: string;
  category: string;
  creatorId?: string;
  updatedAt?: Date;
}

export interface limitOption {
  limit?: number;
  page?: number;
}
