import {Category} from "./category.entity";
import {Tag} from "./tag.entity";
import {Chapter} from "../../chapters/model/chapter.entity";

export class Fanfic {
    id: number;
    title: string;
    author: string;
    summary: string;
    publication_date: string;
    date: Date;
    language_id: number;
    status_id: number;
    saga_id: number;
    views: number;
    favorites: number;
    thumbnail: string;
    chapters: Chapter[];
    categories: Category[];
    tags: Tag[];
    constructor(){
        this.id = 0;
        this.title = '';
        this.author = '';
        this.summary = '';
        this.publication_date = '';
        this.date = new Date();
        this.language_id = 0;
        this.status_id = 0;
        this.saga_id = 0;
        this.views = 0;
        this.favorites = 0;
        this.thumbnail = '';
        this.chapters = [];
        this.categories = [];
        this.tags = [];
    }
}

