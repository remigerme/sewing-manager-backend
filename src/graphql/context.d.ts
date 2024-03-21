import express from "express";
import Database from "../db/database";

interface Context {
  dataSources: {
    db: Database;
  };
  req: express.Request;
  res: express.Response;
}
