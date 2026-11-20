import { Request, Response, NextFunction } from "express"
import { prisma } from "../lib/prisma"
import { sendError } from "../lib/response"

export async function touchDeviceSession(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.user?.sessionId) {
    return next()
  }

  try {
    await prisma.deviceSession.update({
      where: { id: req.user.sessionId },
      data: { lastActiveAt: new Date() },
    })
  } catch {
    if (process.env.SKIP_DEVICE_LIMIT !== "false") {
      return next()
    }
    return sendError(res, "SESSION_INVALID", "Session expired. Please login again.", 401)
  }

  next()
}
