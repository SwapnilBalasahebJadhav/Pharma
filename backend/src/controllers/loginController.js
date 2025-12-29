const bcrypt = require("bcrypt");
const connection = require("../config/connection");
const jwt = require("jsonwebtoken");

const loginUser = (req, res) => {
  let { userName, password } = req.body;

  // ✅ Input validation
  if (!userName || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  userName = userName.trim();

  const query = `
    SELECT * FROM users 
    WHERE TRIM(userName) = ?
    LIMIT 1
  `;

  connection.query(query, [userName], async (err, results) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const user = results[0];
    console.log('user',user)

    try {
      // ✅ Correct bcrypt usage
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        console.log('is not matched', isMatch)
        return res.status(401).json({ message: "Invalid username or password" });
      }
 
      console.log('matched',isMatch)


      // ✅ JWT token
      const token = jwt.sign(
        {
          id: user.id,
          userName: user.userName,
          email: user.email,
          role: user.role || "user"
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      console.log('token', token)
      console.log('user', user)

      return res.status(200).json({
        message: "Login successful",
        token: token,
        user: {
          id: user.id,
          userName: user.userName,
          email: user.email,
          role: user.role || "user"
        }
      });

    } catch (error) {
      console.error("Bcrypt error:", error);
      return res.status(500).json({ message: "Server error" });
    }
  });
};

module.exports = { loginUser };
