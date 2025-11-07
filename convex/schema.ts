import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
});

// const todoItem = {
//   id: "123e4567-e89b-12d3-a456-426614174000",
//   title: "Finish project report",
//   description: "Complete the final draft of the quarterly project report",
//   status: "in_progress", // Options: pending, in_progress, completed, archived
//   priority: "high", // Options: low, medium, high, urgent
//   due_date: "2025-11-10T17:00:00Z",
//   created_at: "2025-11-07T14:00:00Z",
//   updated_at: "2025-11-07T15:00:00Z",
//   tags: ["work", "report", "Q4"],
//   subtasks: [
//     {
//       id: "subtask-1",
//       title: "Gather data",
//       status: "completed"
//     },
//     {
//       id: "subtask-2",
//       title: "Write summary",
//       status: "pending"
//     }
//   ],
//   reminder: "2025-11-10T09:00:00Z",
//   completed_at: null,
//   user_id: "user-789",
//   shared_with: ["user-456", "user-321"]
// };
