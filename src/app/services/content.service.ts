import { Injectable } from '@angular/core';
import { ContentModelService } from '../models/content-model.service';
import { ContentType, CarouselContentType } from '../classes/contentType';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private contentModelService: ContentModelService) {}

  convertToHTML(contentSlot: ContentType[]): string {
    const carousel = (r: CarouselContentType) => {
      return `{ id: '${r.id}', image: '${r.image}', alt: '${r.alt}' }`;
    };

    const content = contentSlot.map((c: ContentType) => {
      let attributes = '';
      if (c?.attributes) {
        for (const [key, value] of Object.entries(c.attributes)) {
          let abstractData: string;
          if (typeof value !== 'string') {
            abstractData = `[ ${carousel(value[0])}, ${carousel(value[1])}, ${carousel(
              value[2],
            )} ]`;
          }
          attributes += ` ${key}="${abstractData || String(value)}"`;
          abstractData = '';
        }
      }
      return `<ccdesign-${c.contentType}${attributes}></ccdesign-${c.contentType}>`;
    });

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
