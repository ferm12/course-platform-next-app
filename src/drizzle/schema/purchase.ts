import {
    pgTable,
    integer,
    jsonb,
    uuid,
    text,
    timestamp,
} from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { UserTable } from "./user";
import { ProductTable } from "./product";

export const PurchaseTable