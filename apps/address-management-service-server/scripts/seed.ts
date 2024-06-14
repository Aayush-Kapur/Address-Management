import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import { Salt, parseSalt } from "../src/auth/password.service";

if (require.main === module) {
  dotenv.config();

  // seed(salt).catch((error) => {
  //   console.error(error);
  //   process.exit(1);
  // });
  const salt = parseSalt(process.env.BCRYPT_SALT);

  seed(salt).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

async function seed(bcryptSalt: Salt) {
  console.info("Seeding database...");

  const client = new PrismaClient();

  const data1 = {
    password: "admin",
    roles: ["user"],
    username: "admin",
  };

  await client.user.upsert({
    where: {
      username: data1.username,
    },

    update: {},
    create: data1,
  });

  const data = {
    password: "admin",
    roles: ["user"],
    username: "admin",
  };
  await client.user.upsert({
    where: {
      username: data.username,
    },
    update: {},
    create: data,
  });
  void client.$disconnect();

  console.info("Seeding database with custom seed...");
}
