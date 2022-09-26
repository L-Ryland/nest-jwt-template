import { Injectable } from '@nestjs/common';
import { Knex } from "knex";

@Injectable()
export class KnexService {
  knex: Knex;
  constructor() {
    this.knex = require('knex')({
      client: 'mysql2',
      connection: {
        host : process.env.MYSQL_HOST,
        port : process.env.MYSQL_PORT,
        user : process.env.MYSQL_USERNAME,
        password : process.env.MYSQL_PASSWORD,
        database : process.env.MYSQL_DATABASE,
      }
    });
  }
}

