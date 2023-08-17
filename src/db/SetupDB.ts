import { Db } from "mongodb";
import chalk from "chalk";

class SetupDB {
  private db: Db;

  constructor(database: Db) {
    this.db = database;
  }

  public async setupCollections(entitiesA: Array<any>): Promise<void> {
    try {
      const entities = entitiesA;
      for (const EntityClass of entities) {
        const entity = new EntityClass(this.db);

        const collectionExist = await this.collectionExist(entity.collection);

        if (!collectionExist) {
          await entity.generateCollection();
          await entity.createData();
        } else {
          console.log();
          console.log(
            chalk.bgYellowBright(`Colección ${entity.collection} omitida...`)
          );
        }
      }
      console.log();
      console.log(
        chalk.bgBlueBright(
          chalk.black.bold("Colecciones actualizadas correctamente :D ")
        )
      );
    } catch (error) {
      throw error;
    }
  }

  private async collectionExist(collection: string): Promise<boolean> {
    const collections = await this.db.listCollections().toArray();
    return collections.some((col) => col.name === collection);
  }
}

export default SetupDB;
