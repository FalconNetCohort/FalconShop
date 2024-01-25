export interface Item {
    title: string;
    description: string;
    category: string;
    price: number;
    cadetName: string;
    cadetContact: string;
    imageUrl: string | null;
    quantity: number;
    createdBy: string;
}


export const isPositiveNumber = (num: number) => {
    return Number.isFinite(num) && num > 0;
}