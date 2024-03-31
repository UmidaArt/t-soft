export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: IProductCategory;
}

export interface IProductCategory {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}