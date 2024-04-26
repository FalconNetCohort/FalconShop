export interface CadetItem {
    createdBy: any;
    timeCreated: number;
    id: string;
    title: string;
    description: string;
    category: string;
    price: string;
    cadetName: string;
    cadetContact: string;
    imageUrl: string;
}


export const isPositiveNumber = (num: number) => {
    return Number.isFinite(num) && num > 0;
}