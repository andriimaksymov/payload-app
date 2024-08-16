import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_products_features" AS ENUM('IdealForLargePets', 'LargeBatteryCapacity', 'GPS');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_magic" AS ENUM('PersonToPetDialog', 'PetToPetDialog');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_wellbeing" AS ENUM('distressDetection', 'alerts', 'reports');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_out_of_box_experience" AS ENUM('BoxOpenCloseGame');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_go_time" AS ENUM('AlertPetWaitingAtDoor');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_battery_life" AS ENUM('21 days');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_charger" AS ENUM('USB-C');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_version_features" AS ENUM('IdealForLargePets', 'LargeBatteryCapacity', 'GPS');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_version_magic" AS ENUM('PersonToPetDialog', 'PetToPetDialog');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_version_wellbeing" AS ENUM('distressDetection', 'alerts', 'reports');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_version_out_of_box_experience" AS ENUM('BoxOpenCloseGame');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_version_go_time" AS ENUM('AlertPetWaitingAtDoor');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_version_battery_life" AS ENUM('21 days');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_version_charger" AS ENUM('USB-C');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "products_features" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_products_features",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "products_magic" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_products_magic",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "products_wellbeing" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_products_wellbeing",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "products_out_of_box_experience" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_products_out_of_box_experience",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "products_go_time" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_products_go_time",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "products_battery_life" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_products_battery_life",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "products_charger" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_products_charger",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "products_gallery" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_products_v_version_features" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__products_v_version_features",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_products_v_version_magic" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__products_v_version_magic",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_products_v_version_wellbeing" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__products_v_version_wellbeing",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_products_v_version_out_of_box_experience" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__products_v_version_out_of_box_experience",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_products_v_version_go_time" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__products_v_version_go_time",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_products_v_version_battery_life" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__products_v_version_battery_life",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_products_v_version_charger" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__products_v_version_charger",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_products_v_version_gallery" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_uuid" varchar
);

CREATE INDEX IF NOT EXISTS "products_features_order_idx" ON "products_features" ("order");
CREATE INDEX IF NOT EXISTS "products_features_parent_idx" ON "products_features" ("parent_id");
CREATE INDEX IF NOT EXISTS "products_magic_order_idx" ON "products_magic" ("order");
CREATE INDEX IF NOT EXISTS "products_magic_parent_idx" ON "products_magic" ("parent_id");
CREATE INDEX IF NOT EXISTS "products_wellbeing_order_idx" ON "products_wellbeing" ("order");
CREATE INDEX IF NOT EXISTS "products_wellbeing_parent_idx" ON "products_wellbeing" ("parent_id");
CREATE INDEX IF NOT EXISTS "products_out_of_box_experience_order_idx" ON "products_out_of_box_experience" ("order");
CREATE INDEX IF NOT EXISTS "products_out_of_box_experience_parent_idx" ON "products_out_of_box_experience" ("parent_id");
CREATE INDEX IF NOT EXISTS "products_go_time_order_idx" ON "products_go_time" ("order");
CREATE INDEX IF NOT EXISTS "products_go_time_parent_idx" ON "products_go_time" ("parent_id");
CREATE INDEX IF NOT EXISTS "products_battery_life_order_idx" ON "products_battery_life" ("order");
CREATE INDEX IF NOT EXISTS "products_battery_life_parent_idx" ON "products_battery_life" ("parent_id");
CREATE INDEX IF NOT EXISTS "products_charger_order_idx" ON "products_charger" ("order");
CREATE INDEX IF NOT EXISTS "products_charger_parent_idx" ON "products_charger" ("parent_id");
CREATE INDEX IF NOT EXISTS "products_gallery_order_idx" ON "products_gallery" ("_order");
CREATE INDEX IF NOT EXISTS "products_gallery_parent_id_idx" ON "products_gallery" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_version_features_order_idx" ON "_products_v_version_features" ("order");
CREATE INDEX IF NOT EXISTS "_products_v_version_features_parent_idx" ON "_products_v_version_features" ("parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_version_magic_order_idx" ON "_products_v_version_magic" ("order");
CREATE INDEX IF NOT EXISTS "_products_v_version_magic_parent_idx" ON "_products_v_version_magic" ("parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_version_wellbeing_order_idx" ON "_products_v_version_wellbeing" ("order");
CREATE INDEX IF NOT EXISTS "_products_v_version_wellbeing_parent_idx" ON "_products_v_version_wellbeing" ("parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_version_out_of_box_experience_order_idx" ON "_products_v_version_out_of_box_experience" ("order");
CREATE INDEX IF NOT EXISTS "_products_v_version_out_of_box_experience_parent_idx" ON "_products_v_version_out_of_box_experience" ("parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_version_go_time_order_idx" ON "_products_v_version_go_time" ("order");
CREATE INDEX IF NOT EXISTS "_products_v_version_go_time_parent_idx" ON "_products_v_version_go_time" ("parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_version_battery_life_order_idx" ON "_products_v_version_battery_life" ("order");
CREATE INDEX IF NOT EXISTS "_products_v_version_battery_life_parent_idx" ON "_products_v_version_battery_life" ("parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_version_charger_order_idx" ON "_products_v_version_charger" ("order");
CREATE INDEX IF NOT EXISTS "_products_v_version_charger_parent_idx" ON "_products_v_version_charger" ("parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_version_gallery_order_idx" ON "_products_v_version_gallery" ("_order");
CREATE INDEX IF NOT EXISTS "_products_v_version_gallery_parent_id_idx" ON "_products_v_version_gallery" ("_parent_id");
DO $$ BEGIN
 ALTER TABLE "products_features" ADD CONSTRAINT "products_features_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_magic" ADD CONSTRAINT "products_magic_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_wellbeing" ADD CONSTRAINT "products_wellbeing_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_out_of_box_experience" ADD CONSTRAINT "products_out_of_box_experience_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_go_time" ADD CONSTRAINT "products_go_time_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_battery_life" ADD CONSTRAINT "products_battery_life_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_charger" ADD CONSTRAINT "products_charger_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_gallery" ADD CONSTRAINT "products_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_version_features" ADD CONSTRAINT "_products_v_version_features_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_version_magic" ADD CONSTRAINT "_products_v_version_magic_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_version_wellbeing" ADD CONSTRAINT "_products_v_version_wellbeing_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_version_out_of_box_experience" ADD CONSTRAINT "_products_v_version_out_of_box_experience_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_version_go_time" ADD CONSTRAINT "_products_v_version_go_time_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_version_battery_life" ADD CONSTRAINT "_products_v_version_battery_life_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_version_charger" ADD CONSTRAINT "_products_v_version_charger_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_version_gallery" ADD CONSTRAINT "_products_v_version_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`

DROP TABLE "products_features";
DROP TABLE "products_magic";
DROP TABLE "products_wellbeing";
DROP TABLE "products_out_of_box_experience";
DROP TABLE "products_go_time";
DROP TABLE "products_battery_life";
DROP TABLE "products_charger";
DROP TABLE "products_gallery";
DROP TABLE "_products_v_version_features";
DROP TABLE "_products_v_version_magic";
DROP TABLE "_products_v_version_wellbeing";
DROP TABLE "_products_v_version_out_of_box_experience";
DROP TABLE "_products_v_version_go_time";
DROP TABLE "_products_v_version_battery_life";
DROP TABLE "_products_v_version_charger";
DROP TABLE "_products_v_version_gallery";`)
}
