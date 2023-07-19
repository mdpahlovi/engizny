export interface IProduct {
    name: string;
    description: string;
    price: number;
    images: string[];
    category: string[];
    colors: string[];
    sizes: string[];
}

export interface IReview {
    username: string;
    rating: number;
    comment: string;
}

export interface IProductData {
    id: number;
    product: IProduct;
    reviews: IReview[];
}
