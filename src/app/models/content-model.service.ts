import { Injectable } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Content } from '../classes/content';
import { ContentType, ContentTypeAttributes, CarouselContentType } from '../classes/contentType';

@Injectable({
  providedIn: 'root',
})
export class ContentModelService {
  constructor(private backendService: BackendService) {}

  static fromPayload(res: any): any {
    const contentResponse = new Content();
    contentResponse.name = res.name;
    contentResponse.leftSlot = res.left_slot_content.map((r: any) => {
      return this.contentTypeMapping(r);
    });
    contentResponse.rightSlot = res.right_slot_content.map((r: any) => {
      return this.contentTypeMapping(r);
    });

    return contentResponse;
  }

  static contentTypeMapping(content: any): any {
    let contentValue: any;
    const contentType = new ContentType();
    contentType.contentType = content.content_type;

    if (Object.keys(content?.attributes).length > 0) {
      contentType.attributes = new ContentTypeAttributes();

      for (const [key, value] of Object.entries(content?.attributes)) {
        if (key === 'data') {
          contentValue = (value as []).map((v: any) => {
            const carousel = new CarouselContentType();
            carousel.id = v.id;
            carousel.image = v.image;
            carousel.alt = v.alt;
            return carousel;
          });
        }

        contentType.attributes[key] = contentValue || value;
        contentValue = undefined; // reset contentValue for next mapping
      }
    }

    if (content['inner_html']) {
      contentType.innerHtml = content.inner_html.map((r: any) => {
        return this.contentTypeMapping(r);
      });
    }

    return contentType;
  }

  async getContent(contentName: string): Promise<Content> {
    const res = await this.backendService.get(`assets/content/${contentName}.json`);
    return ContentModelService.fromPayload(res);
  }
}
