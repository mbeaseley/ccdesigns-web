import { Injectable } from '@angular/core';
import { ContentModelService } from '../models/content-model.service';
import { ContentType, CarouselContentType } from '../classes/contentType';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private contentModelService: ContentModelService) {}

  contentTypeMapping(contentSlot: ContentType[]): string[] {
    const carousel = (r: CarouselContentType) => {
      return `{ id: '${r.id}', image: '${r.image}', alt: '${r.alt}' }`;
    };

    return contentSlot.map((c: ContentType) => {
      let attributes = '';
      let innerHtml: string;

      if (c?.attributes) {
        for (const [key, value] of Object.entries(c.attributes)) {
          let abstractData: string;
          if (typeof value !== 'string') {
            const data = [];
            for (const v of value) {
              data.push(carousel(v));
            }
            abstractData = JSON.stringify(data).replace(/"/g, ' ');
          }
          attributes += ` ${key}="${abstractData || String(value)}"`;
          abstractData = '';
        }
      }

      if (c?.innerHtml) {
        innerHtml = String(this.contentTypeMapping(c.innerHtml)).replace(/>,</g, '><');
      }

      return `<ccdesign-${c.contentType}${attributes}>${innerHtml}</ccdesign-${c.contentType}>`;
    });
  }

  convertToHTML(contentSlot: ContentType[]): string {
    console.log(contentSlot);
    const content = this.contentTypeMapping(contentSlot);

    return String(content).replace(/>,</g, '><');
  }

  async getContent(contentName: string): Promise<any> {
    return this.contentModelService.getContent(contentName).then((content) => {
      let leftSlot: any, rightSlot: any;
      leftSlot = this.convertToHTML(content.leftSlot);
      rightSlot = this.convertToHTML(content.rightSlot);

      return [leftSlot, rightSlot];
    });
  }
}
