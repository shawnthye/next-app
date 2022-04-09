import { DataSource } from 'typeorm';

export const PetCat = new DataSource({
  type: 'mariadb',
  host: 'petcat2.zalora.net',
  port: 3306,
  username: 'shawn.thye@zalora.com',
  password: 'AUISxriXAWafDl5yfHUIbUsr',
  database: 'catalog_live_my',
  synchronize: false,
  logging: true,
  entities: [],
  migrations: [],
  subscribers: [],
  ssl: 'Amazon RDS',
});

export default PetCat;
