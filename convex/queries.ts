import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

//create
export const createBooks = mutation({
    args: {
        title: v.string(),
        author: v.string(),
    },
    handler: async (ctx, { title, author }) => {
        const newBookId = await ctx.db.insert('books', { title, author, isCompleted: false });
        return newBookId;
    }
});

// read
export const getBooks = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('books').collect();
    }
});

// update
export const updateStatus = mutation({
    args: {
        id: v.id("books"),
        isCompleted: v.boolean(),
    },
    handler: async (ctx, { id, isCompleted }) => {
        await ctx.db.patch(id, { isCompleted });
        return "Updated";
    }
});

//delete
export const deleteBook = mutation({
    args: {
        id: v.id("books"),
    },
    handler: async (ctx, { id }) => {
        await ctx.db.delete(id);
        return "Deleted";
    }
});