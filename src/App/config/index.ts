import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
 
  port: process.env.port,
  database_url: process.env.MONGO_URI,
  jwt_secret: process.env.JWT_SECRET,
  jwt_expiration: process.env.JWT_EXPIRATION,
  NODE_ENV: process.env.NODE_ENV,
  
};