/*
  Warnings:

  - A unique constraint covering the columns `[cpfOuCnpj]` on the table `Produtor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Produtor_cpfOuCnpj_key" ON "Produtor"("cpfOuCnpj");
