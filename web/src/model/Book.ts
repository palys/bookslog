import Author from "./Author";

export default interface Book {
    id: string;
    title: string;
    numberOfPages: number;
    authors: Author[];
}
