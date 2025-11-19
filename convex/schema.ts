import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    name: v.string(),
    email: v.optional(v.string()),
  }).index("by_clerkId", ["clerkId"]),

  todos: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
    userId: v.string(),
  }).index("by_userId", ["userId"]),
});
