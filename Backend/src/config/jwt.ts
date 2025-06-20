import jwt, {JwtPayload} from "jsonwebtoken"

export interface TokenPayload extends JwtPayload{
    id: string;
}
export const generateSign = (id: string): string => {
  const secret = process.env.JWT_SECRET as string;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }
  return jwt.sign({ id }, secret, { expiresIn: "30d" });
};

export const verifyJwt = (token: string): TokenPayload => {
  const secret = process.env.JWT_SECRET as string;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  return jwt.verify(token, secret) as TokenPayload;
};