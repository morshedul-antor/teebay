-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "(rent_price)" DOUBLE PRECISION,
    "(rent_day)" TEXT,
    "user_id" INTEGER NOT NULL,
    "category_ids" INTEGER[],

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
