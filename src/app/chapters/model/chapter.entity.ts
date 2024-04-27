export class Chapter {
  id: number;
  bookId: number;
  order: number;
  title: string;
  content: string;
  constructor() {
    this.id = 0;
    this.bookId = 0;
    this.order = 0;
    this.title = '';
    this.content = '';
  }
}
