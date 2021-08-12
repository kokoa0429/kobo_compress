import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPost(): any {
    return {
      posts: [
        {
          title: 'hogehoge',
          img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABlSURBVEhL7c1RDoAwCANQjsH9L6pk1MSogQ3ZX9/XumkrNaqKE1HJcUHugtbBo9838FKDPDxikfca5JvPywXea5BfgqdcXG3SDyIzP+9tN78GcArVByZxIMWBFAdSHEhtH6A2IicT+YbCK6P1hAAAAABJRU5ErkJggg==',
        },
      ],
    };
  }
}
