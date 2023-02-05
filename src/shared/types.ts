export interface IBooks {
    id: number;
    titulo: string;
    estrelas: number;
    preco: string;
    formato: string[];
}

export interface IOptions {
    options: IBooks[];
}
