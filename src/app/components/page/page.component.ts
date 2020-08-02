import { Component, ViewEncapsulation, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';

interface ContentSlots {
  left: string;
  right: string;
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.pug',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent implements OnInit {
  contentPath: any;
  contentSlot: ContentSlots;

  @ViewChild('leftContent') elLeft: ElementRef;
  @ViewChild('rightContent') elRight: ElementRef;

  constructor(private contentService: ContentService, private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    // Gets path to fetch content
    this.route.data.subscribe((r) => {
      this.contentPath = r?.content;
      const bodyElement = document.querySelector('body');
      bodyElement.setAttribute('location', this.contentPath);
    });

    // Content Fetched and placed on left and right slots on page template
    const [leftSlot, rightSlot] = await this.contentService.getContent(this.contentPath);
    this.contentSlot = {
      left: leftSlot,
      right: rightSlot,
    };
    this.elLeft.nativeElement.innerHTML = leftSlot;
    this.elRight.nativeElement.innerHTML = rightSlot;
  }
}
