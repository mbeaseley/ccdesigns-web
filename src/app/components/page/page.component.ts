import { Component, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './page.component.pug',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent implements AfterViewInit {
  contentPath: any;

  @ViewChild('leftContent') elLeft: ElementRef;
  @ViewChild('rightContent') elRight: ElementRef;

  constructor(private contentService: ContentService, private route: ActivatedRoute) {}

  /**
   * After view init
   */
  async ngAfterViewInit(): Promise<void> {
    // Gets path to fetch content
    this.route.data.subscribe((r) => {
      this.contentPath = r?.content;
    });

    // Content Fetched and placed on left and right slots on page template
    return this.contentService.getContent(this.contentPath).then(([leftSlot, rightSlot]) => {
      this.elLeft.nativeElement.innerHTML = leftSlot;
      this.elRight.nativeElement.innerHTML = rightSlot;
    });
  }
}
