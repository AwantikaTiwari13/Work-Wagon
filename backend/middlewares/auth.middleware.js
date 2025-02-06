import jwt from "jsonwebtoken";
const isAuth = async (req, res, next) => {
  try {
    const token =
      req.headers.authorization?.split(" ")[1] || req.cookies?.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    // console.log("decoded token", decoded);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.id = decoded.id;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default isAuth;
