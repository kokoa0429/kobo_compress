import {
  BadRequestException,
  Controller,
  Get,
  Logger,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ImageFileInteceptor } from './fileIntercepter';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getPost(): string {
    return this.appService.getPost();
  }

  @Post('image')
  @UseInterceptors(
    ImageFileInteceptor({
      fieldName: 'file',
      maxFileSize: 1048576 /* 1 MiB */,
      fileCount: 1,
    }),
  )
  async uploadImage(@UploadedFile() file: { url: string }): Promise<any> {
    this.logger.debug('uploadImage');
    if (!file) {
      this.logger.debug('uploadImage: !file');
      throw new BadRequestException('Bad file type');
    }
    this.logger.debug(`Uploaded ${file}`);
    return file.url;
  }
}
