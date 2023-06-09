-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "hashedPass" VARCHAR(255),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
