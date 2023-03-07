import Profile from "../models/Profile.js";

export const loginController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const acc = await Profile.findOne({ email: email.current });

      if (!acc) {
        return res.status(401).json({ message: "Wrong email!" });
      }
      if (acc.password === password.current) {
        return res
          .status(200)
          .json({ data: acc, message: " Login Susseccful", status: 200 });
      } else {
        return res.status(401).json({ message: "Wrong password!" });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
