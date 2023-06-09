import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const res = await request.json();
  const { SECRET } = process.env;

  const { username, password }: { username: string; password: string } = res;

  const createToken = (username: string, id: number) => {
    return jwt.sign({ username, id }, SECRET, { expiresIn: "2 days" });
  };

  try {
    let foundUser
    try {
      foundUser = await prisma.user.findFirst({
        where: { username },
      });
      await prisma.$disconnect();
    } catch (err) {
      console.error(err);
    }
    if (foundUser) {
      const isAuthenticated = bcrypt.compareSync(
        password,
        foundUser.hashedPass
      );
      if (isAuthenticated) {
        const token = createToken(foundUser.username, foundUser.id);
        const exp = Date.now() + 1000 * 60 * 60 * 48;
        return NextResponse.json(
          {
            username: foundUser.username,
            id: foundUser.id,
            token,
            exp,
          },
          {
            status: 200,
          }
        );
      } else {
        return NextResponse.json(
          {
            message: "cannot log in",
          },
          {
            status: 400,
          }
        );
      }
    } else {
      return NextResponse.json(
        {
          message: "cannot log in",
        },
        {
          status: 400,
        }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        message: err,
      },
      {
        status: 400,
      }
    );
  }
}
