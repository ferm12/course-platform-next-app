import { relations } from "drizzle-orm";
export { pgTable, text, integer, pgEnum} from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";
import { CourseProductTable } from "./courseProduct";

export const productStatuses = ["public", "private"] as const;
export type ProductStatus = (typeof productStatuses)[number];
export const productStatusEmum = pgEnum("product_status", productStatuses);

export const ProductTable = pgTable("products", {
    id,
    name: text().notNull(),
    description: text().notNull(),
    imageUrl: text().notNull(),
    priceInDollars: text().notNull(),
    status: productStatusEmum.notNull().default("private",),
    createdAt,
    updatedAt,
});

export const ProductRelationships = relations(ProductTable, ({ many }) => ({
    courseProducts: many(CourseProductTable),
}));
