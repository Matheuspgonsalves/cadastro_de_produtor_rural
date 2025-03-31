-- CreateTable
CREATE TABLE "Produtor" (
    "id" TEXT NOT NULL,
    "cpfOuCnpj" TEXT NOT NULL,
    "nomeProdutor" TEXT NOT NULL,
    "nomeFazenda" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "areaTotalHectares" DOUBLE PRECISION NOT NULL,
    "areaAgricultavel" DOUBLE PRECISION NOT NULL,
    "areaDeVegetacao" DOUBLE PRECISION NOT NULL,
    "culturasPlantadas" TEXT[],

    CONSTRAINT "Produtor_pkey" PRIMARY KEY ("id")
);
