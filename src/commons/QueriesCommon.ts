import { ObjectId } from "mongodb";
import Connection from "../db/Connection";

class QueriesCommon {
  private connection: Connection;
  private entity: string;
  constructor(entity: string) {
    this.entity = entity;
    this.connection = new Connection();
  }

  protected async getAll() {
    try {
      await this.connection.connect();
      const collection = this.connection.getDatabase().collection(this.entity);
      return await collection.find().toArray();
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    } finally {
      this.connection.close();
    }
  }

  protected async getOneById(id: string) {
    try {
      await this.connection.connect();
      const collection = this.connection.getDatabase().collection(this.entity);
      return await collection.findOne({ _id: new ObjectId(id) });
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    } finally {
      this.connection.close();
    }
  }

  protected async insert(doc: any): Promise<string> {
    try {
      await this.connection.connect();
      const collection = this.connection.getDatabase().collection(this.entity);
      await collection.insertOne(doc);
      return "Insertado correctamente";
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    } finally {
      this.connection.close();
    }
  }

  protected async update(id: string, doc: any): Promise<string> {
    try {
      await this.connection.connect();
      const collection = this.connection.getDatabase().collection(this.entity);
      await collection.updateOne({ _id: new ObjectId(id) }, { $set: doc });
      return "Actualizado correctamente";
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    } finally {
      this.connection.close();
    }
  }

  protected async delete(id: string): Promise<string> {
    try {
      await this.connection.connect();
      const collection = this.connection.getDatabase().collection(this.entity);
      await collection.deleteOne({ _id: new ObjectId(id) });
      return "Eliminado correctamente";
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    } finally {
      this.connection.close();
    }
  }
}

export default QueriesCommon;
