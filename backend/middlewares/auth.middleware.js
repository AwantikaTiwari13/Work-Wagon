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
    req.id = decoded.id;
    next();
  } catch (error) {
    console.log("Error in isAuth middleware:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default isAuth;
