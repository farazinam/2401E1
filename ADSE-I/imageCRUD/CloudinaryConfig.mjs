import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import express from 'express';
import multer from 'multer';
 
const app = express();

cloudinary.config({ 
  cloud_name: 'dsbolwypq', 
  api_key: '769974968127515', 
  api_secret: 'xvGYY3oYv_J9PKCVBY4JgkILEAk'
});
 
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'some-folder-name',
    format: async (req, file) => 'png', // supports promises as well
    public_id: (req, file) => 'computed-filename-using-request',
  },
});
 
export const parser = multer({ storage: storage });