import jwt from 'jsonwebtoken';

const SECRET =  process.env.JWT_SECRET ?? "adsfafad"
export default {
  signPayload: (payload: Record<string, unknown>) => {
    return jwt.sign(payload, SECRET, {
      expiresIn: process.env.JWT_EXP ?? '24h',
    });
  },
  verifyToken: (token: string) => {
    return jwt.verify(token, SECRET);
  },
};