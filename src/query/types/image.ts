export interface ImageType {
  id: string;
  picture: string;
  title: string;
  liked: boolean;
  likesCount: number;
  createdAt: string;
  price: string;
  author?: string;
  alt?: string;
}

export interface ImageEdge {
  node: ImageType;
}

export interface ImagesResponse {
  pages: any;
  data: {
    images: {
      edges: ImageEdge[];
    };
  };
}
