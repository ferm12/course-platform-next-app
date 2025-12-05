import { pgTable, text, uuid, integer, pgEnum } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { CourseSectionTable } from "./courseSection";
import { UserLessonCompletionTable } from "./userLessonCompletion";

export const lessonStatuses = ["public", "private"] as const;
export type LessonStatus = (typeof lessonStatuses)[number];
export const lessonStatusEnum = pgEnum("lesson_status", lessonStatuses);

export const LessonTable = pgTable("lessons", {
    id,
    name: text().notNull(),
    description: text(),
    youtubeVideoId: text().notNull(),
    oreder: integer().notNull(),
    status: lessonStatusEnum.notNull().default("private"),
    sectionId: uuid()
        .notNull()
        .references(() => CourseSectionTable.id, { onDelete: "cascade" }),
    createdAt,
    updatedAt,
});

export const LessonRelationships = relations( LessonTable, ({ one, many }) => ({
        section: one(CourseSectionTable, {
            fields: [LessonTable.sectionId],
            references: [CourseSectionTable.id],
        }),
        userLessonCompletions: many(UserLessonCompletionTable),
    })
);