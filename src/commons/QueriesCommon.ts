import { Collection, ObjectId } from "mongodb";

class QueriesCommon {
  protected collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  protected async getAll() {
    try {
      return await this.collection.find().toArray();
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    }
  }

  protected async getOneById(id: string){
    try {
      return await this.collection.findOne({ _id: new ObjectId(id) });
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    }
  }

  protected async insert(doc:any): Promise<string> {
    try {
        await this.collection.insertOne(doc);
        return "Insertado correctamente";
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    }
  }

  protected async update(id: string, doc: any): Promise<string> {
    try {
        await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: doc });
        return "Actualizado correctamente";
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    }
  }

  protected async delete(id: string): Promise<void> {
    try {
      await this.collection.deleteOne({ _id: new ObjectId(id) });
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    }
  }
}

export default QueriesCommon;