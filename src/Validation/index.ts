import { z } from 'zod';

export const fileSchema = z.object({
  file: z.instanceof(File).optional()
});

export type UploadForm = z.infer<typeof fileSchema>;