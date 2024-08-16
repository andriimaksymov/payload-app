import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_hero_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_archive_relation_to" AS ENUM('products');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_archive_relation_to" AS ENUM('products');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_sizes" AS ENUM('XL', 'L', 'M', 'S', 'XS');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_blocks_archive_relation_to" AS ENUM('products');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_products_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_version_sizes" AS ENUM('XL', 'L', 'M', 'S', 'XS');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_blocks_archive_relation_to" AS ENUM('products');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__products_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_users_roles" AS ENUM('admin', 'customer');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_redirects_to_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_footer_nav_items_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "pages_hero_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_pages_hero_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_pages_hero_links_link_appearance"
);

CREATE TABLE IF NOT EXISTS "pages_blocks_cta_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_pages_blocks_cta_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_pages_blocks_cta_links_link_appearance"
);

CREATE TABLE IF NOT EXISTS "pages_blocks_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"rich_text" jsonb,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"size" "enum_pages_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum_pages_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_pages_blocks_content_columns_link_appearance"
);

CREATE TABLE IF NOT EXISTS "pages_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum_pages_blocks_media_block_position",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum_pages_blocks_archive_populate_by",
	"relationTo" "enum_pages_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"published_on" timestamp(3) with time zone,
	"hero_type" "enum_pages_hero_type",
	"hero_rich_text" jsonb,
	"slug" varchar,
	"meta_title" varchar,
	"meta_description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_pages_status"
);

CREATE TABLE IF NOT EXISTS "pages_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer,
	"media_id" integer,
	"categories_id" integer,
	"products_id" integer
);

CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link_type" "enum__pages_v_version_hero_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__pages_v_version_hero_links_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link_type" "enum__pages_v_blocks_cta_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__pages_v_blocks_cta_links_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"rich_text" jsonb,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"size" "enum__pages_v_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum__pages_v_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__pages_v_blocks_content_columns_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum__pages_v_blocks_media_block_position",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum__pages_v_blocks_archive_populate_by",
	"relationTo" "enum__pages_v_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_title" varchar,
	"version_published_on" timestamp(3) with time zone,
	"version_hero_type" "enum__pages_v_version_hero_type",
	"version_hero_rich_text" jsonb,
	"version_slug" varchar,
	"version_meta_title" varchar,
	"version_meta_description" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__pages_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer,
	"media_id" integer,
	"categories_id" integer,
	"products_id" integer
);

CREATE TABLE IF NOT EXISTS "products_sizes" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_products_sizes",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "products_blocks_cta_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_products_blocks_cta_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_products_blocks_cta_links_link_appearance"
);

CREATE TABLE IF NOT EXISTS "products_blocks_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"rich_text" jsonb,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "products_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"size" "enum_products_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum_products_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_products_blocks_content_columns_link_appearance"
);

CREATE TABLE IF NOT EXISTS "products_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "products_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum_products_blocks_media_block_position",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "products_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum_products_blocks_archive_populate_by",
	"relationTo" "enum_products_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"published_on" timestamp(3) with time zone,
	"stripe_product_i_d" varchar,
	"price_j_s_o_n" varchar,
	"enable_paywall" boolean,
	"slug" varchar,
	"skip_sync" boolean,
	"meta_title" varchar,
	"meta_description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_products_status"
);

CREATE TABLE IF NOT EXISTS "products_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer,
	"media_id" integer,
	"categories_id" integer,
	"products_id" integer
);

CREATE TABLE IF NOT EXISTS "_products_v_version_sizes" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__products_v_version_sizes",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_products_v_blocks_cta_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link_type" "enum__products_v_blocks_cta_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__products_v_blocks_cta_links_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_products_v_blocks_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"rich_text" jsonb,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_products_v_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"size" "enum__products_v_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum__products_v_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__products_v_blocks_content_columns_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_products_v_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_products_v_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum__products_v_blocks_media_block_position",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_products_v_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum__products_v_blocks_archive_populate_by",
	"relationTo" "enum__products_v_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_products_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_title" varchar,
	"version_description" varchar,
	"version_published_on" timestamp(3) with time zone,
	"version_stripe_product_i_d" varchar,
	"version_price_j_s_o_n" varchar,
	"version_enable_paywall" boolean,
	"version_slug" varchar,
	"version_skip_sync" boolean,
	"version_meta_title" varchar,
	"version_meta_description" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__products_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_products_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"products_id" integer,
	"pages_id" integer,
	"media_id" integer,
	"categories_id" integer
);

CREATE TABLE IF NOT EXISTS "orders_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"price" numeric,
	"quantity" numeric
);

CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"stripe_payment_intent_i_d" varchar,
	"total" numeric NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "orders_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer,
	"products_id" integer
);

CREATE TABLE IF NOT EXISTS "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"alt" varchar NOT NULL,
	"caption" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "categories_breadcrumbs" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"url" varchar,
	"label" varchar
);

CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "categories_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"categories_id" integer
);

CREATE TABLE IF NOT EXISTS "users_roles" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_users_roles",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "users_cart_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"quantity" numeric
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"stripe_customer_i_d" varchar,
	"skip_sync" boolean,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"email" varchar NOT NULL,
	"reset_password_token" varchar,
	"reset_password_expiration" timestamp(3) with time zone,
	"salt" varchar,
	"hash" varchar,
	"login_attempts" numeric,
	"lock_until" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "users_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"products_id" integer
);

CREATE TABLE IF NOT EXISTS "redirects" (
	"id" serial PRIMARY KEY NOT NULL,
	"from" varchar NOT NULL,
	"to_type" "enum_redirects_to_type",
	"to_url" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "redirects_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer,
	"products_id" integer
);

CREATE TABLE IF NOT EXISTS "payload_preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar,
	"value" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer
);

CREATE TABLE IF NOT EXISTS "payload_migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"batch" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "settings_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer
);

CREATE TABLE IF NOT EXISTS "header_nav_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_header_nav_items_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "header" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "header_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer
);

CREATE TABLE IF NOT EXISTS "footer_nav_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_footer_nav_items_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "footer" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "footer_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer
);

CREATE INDEX IF NOT EXISTS "pages_hero_links_order_idx" ON "pages_hero_links" ("_order");
CREATE INDEX IF NOT EXISTS "pages_hero_links_parent_id_idx" ON "pages_hero_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_order_idx" ON "pages_blocks_cta" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_path_idx" ON "pages_blocks_cta" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_order_idx" ON "pages_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_path_idx" ON "pages_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_archive_order_idx" ON "pages_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_archive_path_idx" ON "pages_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" ("slug");
CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" ("created_at");
CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" ("_status");
CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" ("order");
CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" ("path");
CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_order_idx" ON "_pages_v_version_hero_links" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_parent_id_idx" ON "_pages_v_version_hero_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" ("version_slug");
CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" ("latest");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "products_sizes_order_idx" ON "products_sizes" ("order");
CREATE INDEX IF NOT EXISTS "products_sizes_parent_idx" ON "products_sizes" ("parent_id");
CREATE INDEX IF NOT EXISTS "products_blocks_cta_links_order_idx" ON "products_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "products_blocks_cta_links_parent_id_idx" ON "products_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "products_blocks_cta_order_idx" ON "products_blocks_cta" ("_order");
CREATE INDEX IF NOT EXISTS "products_blocks_cta_parent_id_idx" ON "products_blocks_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "products_blocks_cta_path_idx" ON "products_blocks_cta" ("_path");
CREATE INDEX IF NOT EXISTS "products_blocks_content_columns_order_idx" ON "products_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "products_blocks_content_columns_parent_id_idx" ON "products_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "products_blocks_content_order_idx" ON "products_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "products_blocks_content_parent_id_idx" ON "products_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "products_blocks_content_path_idx" ON "products_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "products_blocks_media_block_order_idx" ON "products_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "products_blocks_media_block_parent_id_idx" ON "products_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "products_blocks_media_block_path_idx" ON "products_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "products_blocks_archive_order_idx" ON "products_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "products_blocks_archive_parent_id_idx" ON "products_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "products_blocks_archive_path_idx" ON "products_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "products_slug_idx" ON "products" ("slug");
CREATE INDEX IF NOT EXISTS "products_created_at_idx" ON "products" ("created_at");
CREATE INDEX IF NOT EXISTS "products__status_idx" ON "products" ("_status");
CREATE INDEX IF NOT EXISTS "products_rels_order_idx" ON "products_rels" ("order");
CREATE INDEX IF NOT EXISTS "products_rels_parent_idx" ON "products_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "products_rels_path_idx" ON "products_rels" ("path");
CREATE INDEX IF NOT EXISTS "_products_v_version_sizes_order_idx" ON "_products_v_version_sizes" ("order");
CREATE INDEX IF NOT EXISTS "_products_v_version_sizes_parent_idx" ON "_products_v_version_sizes" ("parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_cta_links_order_idx" ON "_products_v_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_cta_links_parent_id_idx" ON "_products_v_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_cta_order_idx" ON "_products_v_blocks_cta" ("_order");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_cta_parent_id_idx" ON "_products_v_blocks_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_cta_path_idx" ON "_products_v_blocks_cta" ("_path");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_content_columns_order_idx" ON "_products_v_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_content_columns_parent_id_idx" ON "_products_v_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_content_order_idx" ON "_products_v_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_content_parent_id_idx" ON "_products_v_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_content_path_idx" ON "_products_v_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_media_block_order_idx" ON "_products_v_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_media_block_parent_id_idx" ON "_products_v_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_media_block_path_idx" ON "_products_v_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_archive_order_idx" ON "_products_v_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_archive_parent_id_idx" ON "_products_v_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_blocks_archive_path_idx" ON "_products_v_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "_products_v_version_version_slug_idx" ON "_products_v" ("version_slug");
CREATE INDEX IF NOT EXISTS "_products_v_version_version_created_at_idx" ON "_products_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_products_v_version_version__status_idx" ON "_products_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_products_v_created_at_idx" ON "_products_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_products_v_updated_at_idx" ON "_products_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_products_v_latest_idx" ON "_products_v" ("latest");
CREATE INDEX IF NOT EXISTS "_products_v_rels_order_idx" ON "_products_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_products_v_rels_parent_idx" ON "_products_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_products_v_rels_path_idx" ON "_products_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "orders_items_order_idx" ON "orders_items" ("_order");
CREATE INDEX IF NOT EXISTS "orders_items_parent_id_idx" ON "orders_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "orders_created_at_idx" ON "orders" ("created_at");
CREATE INDEX IF NOT EXISTS "orders_rels_order_idx" ON "orders_rels" ("order");
CREATE INDEX IF NOT EXISTS "orders_rels_parent_idx" ON "orders_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "orders_rels_path_idx" ON "orders_rels" ("path");
CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" ("filename");
CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" ("_order");
CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" ("_parent_id");
CREATE INDEX IF NOT EXISTS "categories_created_at_idx" ON "categories" ("created_at");
CREATE INDEX IF NOT EXISTS "categories_rels_order_idx" ON "categories_rels" ("order");
CREATE INDEX IF NOT EXISTS "categories_rels_parent_idx" ON "categories_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "categories_rels_path_idx" ON "categories_rels" ("path");
CREATE INDEX IF NOT EXISTS "users_roles_order_idx" ON "users_roles" ("order");
CREATE INDEX IF NOT EXISTS "users_roles_parent_idx" ON "users_roles" ("parent_id");
CREATE INDEX IF NOT EXISTS "users_cart_items_order_idx" ON "users_cart_items" ("_order");
CREATE INDEX IF NOT EXISTS "users_cart_items_parent_id_idx" ON "users_cart_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "users_rels_order_idx" ON "users_rels" ("order");
CREATE INDEX IF NOT EXISTS "users_rels_parent_idx" ON "users_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "users_rels_path_idx" ON "users_rels" ("path");
CREATE INDEX IF NOT EXISTS "redirects_from_idx" ON "redirects" ("from");
CREATE INDEX IF NOT EXISTS "redirects_created_at_idx" ON "redirects" ("created_at");
CREATE INDEX IF NOT EXISTS "redirects_rels_order_idx" ON "redirects_rels" ("order");
CREATE INDEX IF NOT EXISTS "redirects_rels_parent_idx" ON "redirects_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "redirects_rels_path_idx" ON "redirects_rels" ("path");
CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" ("key");
CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path");
CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" ("created_at");
CREATE INDEX IF NOT EXISTS "settings_rels_order_idx" ON "settings_rels" ("order");
CREATE INDEX IF NOT EXISTS "settings_rels_parent_idx" ON "settings_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "settings_rels_path_idx" ON "settings_rels" ("path");
CREATE INDEX IF NOT EXISTS "header_nav_items_order_idx" ON "header_nav_items" ("_order");
CREATE INDEX IF NOT EXISTS "header_nav_items_parent_id_idx" ON "header_nav_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "header_rels_order_idx" ON "header_rels" ("order");
CREATE INDEX IF NOT EXISTS "header_rels_parent_idx" ON "header_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "header_rels_path_idx" ON "header_rels" ("path");
CREATE INDEX IF NOT EXISTS "footer_nav_items_order_idx" ON "footer_nav_items" ("_order");
CREATE INDEX IF NOT EXISTS "footer_nav_items_parent_id_idx" ON "footer_nav_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "footer_rels_order_idx" ON "footer_rels" ("order");
CREATE INDEX IF NOT EXISTS "footer_rels_parent_idx" ON "footer_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "footer_rels_path_idx" ON "footer_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "pages_hero_links" ADD CONSTRAINT "pages_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_sizes" ADD CONSTRAINT "products_sizes_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_blocks_cta_links" ADD CONSTRAINT "products_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "products_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_blocks_cta" ADD CONSTRAINT "products_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_blocks_content_columns" ADD CONSTRAINT "products_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "products_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_blocks_content" ADD CONSTRAINT "products_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_blocks_media_block" ADD CONSTRAINT "products_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_blocks_archive" ADD CONSTRAINT "products_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_version_sizes" ADD CONSTRAINT "_products_v_version_sizes_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_blocks_cta_links" ADD CONSTRAINT "_products_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_products_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_blocks_cta" ADD CONSTRAINT "_products_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_blocks_content_columns" ADD CONSTRAINT "_products_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_products_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_blocks_content" ADD CONSTRAINT "_products_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_blocks_media_block" ADD CONSTRAINT "_products_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_blocks_archive" ADD CONSTRAINT "_products_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_rels" ADD CONSTRAINT "_products_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_products_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_rels" ADD CONSTRAINT "_products_v_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_rels" ADD CONSTRAINT "_products_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_rels" ADD CONSTRAINT "_products_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_products_v_rels" ADD CONSTRAINT "_products_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "orders_items" ADD CONSTRAINT "orders_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "orders"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "orders_rels" ADD CONSTRAINT "orders_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "orders"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "orders_rels" ADD CONSTRAINT "orders_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "orders_rels" ADD CONSTRAINT "orders_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "categories_rels" ADD CONSTRAINT "categories_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "categories_rels" ADD CONSTRAINT "categories_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "users_roles" ADD CONSTRAINT "users_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "users_cart_items" ADD CONSTRAINT "users_cart_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "users_rels" ADD CONSTRAINT "users_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "users_rels" ADD CONSTRAINT "users_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "redirects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "settings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "header"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "header"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_nav_items" ADD CONSTRAINT "footer_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "footer"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "footer"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`

DROP TABLE "pages_hero_links";
DROP TABLE "pages_blocks_cta_links";
DROP TABLE "pages_blocks_cta";
DROP TABLE "pages_blocks_content_columns";
DROP TABLE "pages_blocks_content";
DROP TABLE "pages_blocks_media_block";
DROP TABLE "pages_blocks_archive";
DROP TABLE "pages";
DROP TABLE "pages_rels";
DROP TABLE "_pages_v_version_hero_links";
DROP TABLE "_pages_v_blocks_cta_links";
DROP TABLE "_pages_v_blocks_cta";
DROP TABLE "_pages_v_blocks_content_columns";
DROP TABLE "_pages_v_blocks_content";
DROP TABLE "_pages_v_blocks_media_block";
DROP TABLE "_pages_v_blocks_archive";
DROP TABLE "_pages_v";
DROP TABLE "_pages_v_rels";
DROP TABLE "products_sizes";
DROP TABLE "products_blocks_cta_links";
DROP TABLE "products_blocks_cta";
DROP TABLE "products_blocks_content_columns";
DROP TABLE "products_blocks_content";
DROP TABLE "products_blocks_media_block";
DROP TABLE "products_blocks_archive";
DROP TABLE "products";
DROP TABLE "products_rels";
DROP TABLE "_products_v_version_sizes";
DROP TABLE "_products_v_blocks_cta_links";
DROP TABLE "_products_v_blocks_cta";
DROP TABLE "_products_v_blocks_content_columns";
DROP TABLE "_products_v_blocks_content";
DROP TABLE "_products_v_blocks_media_block";
DROP TABLE "_products_v_blocks_archive";
DROP TABLE "_products_v";
DROP TABLE "_products_v_rels";
DROP TABLE "orders_items";
DROP TABLE "orders";
DROP TABLE "orders_rels";
DROP TABLE "media";
DROP TABLE "categories_breadcrumbs";
DROP TABLE "categories";
DROP TABLE "categories_rels";
DROP TABLE "users_roles";
DROP TABLE "users_cart_items";
DROP TABLE "users";
DROP TABLE "users_rels";
DROP TABLE "redirects";
DROP TABLE "redirects_rels";
DROP TABLE "payload_preferences";
DROP TABLE "payload_preferences_rels";
DROP TABLE "payload_migrations";
DROP TABLE "settings";
DROP TABLE "settings_rels";
DROP TABLE "header_nav_items";
DROP TABLE "header";
DROP TABLE "header_rels";
DROP TABLE "footer_nav_items";
DROP TABLE "footer";
DROP TABLE "footer_rels";`)
}
