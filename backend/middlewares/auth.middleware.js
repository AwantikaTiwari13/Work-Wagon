import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      console.log("No token found in cookies");
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    req.user = {
      id: decoded.id,
      role: decoded.role, // Add this in your token when signing
    };
    next();
  } catch (error) {
    console.log("Error in isAuth middleware:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default isAuth;

export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    // Assumes isAuth middleware has already run and attached req.user
    if (!req.user || !req.user.role) {
      // This case should ideally not be hit if isAuth is always used before this.
      return res
        .status(401)
        .json({ message: "Authentication error, user data missing." });
    }

    const userRole = req.user.role;
    if (!allowedRoles.includes(userRole)) {
      // User's role is not permitted.
      return res.status(403).json({
        message: `Forbidden: Role '${userRole}' is not authorized to access this resource.`,
        success: false,
      });
    }
    next();
  };
};
