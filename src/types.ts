export interface Category {
    id: string;
    name: string;
}

export interface Tag {
    id: string;
    name: string;
}

export interface Pet {
    id: string;
    category: Category;
    name: string;
    photoUrls: string[];
    tags: Tag[];
    status: string;
}