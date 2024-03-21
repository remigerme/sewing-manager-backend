import { SQLDataSource } from "datasource-sql";
import { Context } from "../graphql/context";

class Database extends SQLDataSource<Context> {
  public getKnex() {
    return this.knex;
  }
}

export default Database;
