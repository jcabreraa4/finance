import { integer, text, pgTable } from 'drizzle-orm/pg-core';

export const accounts = pgTable('accounts', {
    id: integer('id').primaryKey(),
    plaidId: text('plaid_id').notNull(),
    name: text('name').notNull(),
    userId: text('user_id').notNull()
});
