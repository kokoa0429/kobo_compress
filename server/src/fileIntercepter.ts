import { Logger } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import axios from 'axios';
import { StorageEngine } from 'multer';
import { extname } from 'path';

const logger: Logger = new Logger('ImageFileInteceptor');

export const ImageFileInteceptor = (options: {
  fieldName: string;
  maxFileSize: number;
  fileCount: number;
  allowedFileTypes?: string[];
}) => {
  const storage: StorageEngine = {
    _handleFile: async (_req, file, callback) => {
      const filename = `${Date.now()}-${Math.floor(
        Math.random() * 65535,
      )}-${extname(file.originalname)}`;
    },
    _removeFile: async () => {
      logger.warn('ConoHaStorage: removeFile is not supported');
    },
  };
  return FileInterceptor(options.fieldName, {
    limits: {
      fileSize: options.maxFileSize,
      files: options.fileCount,
    },
    fileFilter: (req, file, callback) => {
      logger.debug('fileFilter');
      const { mimetype } = file;
      const { allowedFileTypes } = options;

      const valid =
        !allowedFileTypes ||
        allowedFileTypes.reduce((found, m) => found || m === mimetype, false);
      if (!valid) {
        logger.debug(`fileFilter: Bad file type ${mimetype}`);
      }
      return callback(null, valid);
    },
    storage,
  });
};
