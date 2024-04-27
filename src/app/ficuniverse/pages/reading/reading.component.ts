import {Component, Input, OnInit} from '@angular/core';
import { ChapterService } from '../../services/chapter.service';
import {Fanfic} from "../../model/fanfic.entity";
import {Chapter} from "../../../chapters/model/chapter.entity";
import {ActivatedRoute} from "@angular/router";
import {DetailfanficService} from "../../services/detailfanfic.service";

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit{
  fanficId: number = 0;
  chapterId: number = 0;
  fanfic: any;


  chapters: any[] = [];
  selectedChapterId: number = 0;
  selectedChapterTitle: string = '';
  selectedChapterContent: string = '';
  categories: any[] = [];
  constructor(private chapterService: ChapterService, private route: ActivatedRoute, private detailfanficService: DetailfanficService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.fanficId = +params['fanficId'];
      this.chapterId = +params['chapterId'];
      this.loadFanficDetails();
    });
  }


  loadFanficDetails() {
    this.detailfanficService.getFanficById(this.fanficId).subscribe(
      (fanfic) => {
        this.fanfic = fanfic;
      },
      (error) => {
        console.error('Error al cargar los detalles del fanfic', error);
      }
    );
  }



  onChapterChange() {
    console.log('Selected Chapter ID:', this.selectedChapterTitle);
    const selectedChapter = this.fanfic.chapters.find((chapter : {title: String}) => chapter.title === this.selectedChapterTitle);

    if (selectedChapter) {
      this.selectedChapterTitle = selectedChapter.title;
      this.selectedChapterContent = selectedChapter.content;
      console.log('Updated Title:', this.selectedChapterTitle);
      console.log('Updated Content:', this.selectedChapterContent);
    }
  }

}
