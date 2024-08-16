import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_products_virtual_leash" AS ENUM('value1');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_version_virtual_leash" AS ENUM('value1');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "products_virtual_leash" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_products_virtual_leash",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_products_v_version_virtual_leash" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__products_v_version_virtual_leash",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE INDEX IF NOT EXISTS "products_virtual_leash_order_idx" ON "products_virtual_leash" ("order");
CREATE INDEX IF NOT EXISTS "products_virtual_leash_parent_idx" ON "products_virtual_leash" ("parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_version_virtual_leash_order_idx" ON "_products_v_version_virtual_leash" ("order");
CREATE INDEX IF NOT EXISTS "_products_v_version_virtual_leash_parent_idx" ON "_products_v_version_virtual_leash" ("parent_id");
DO $$ BEGIN
 ALTER TABLE "products_virtual_leash" ADD CONSTRAINT "products_virtual_leash_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_version_virtual_leash" ADD CONSTRAINT "_products_v_version_virtual_leash_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`

DROP TABLE "products_virtual_leash";
DROP TABLE "_products_v_version_virtual_leash";`)
}
