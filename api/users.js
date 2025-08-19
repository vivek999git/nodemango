// api/users.js

export default function handler(req, res) {
  // Only allow GET method
  if (req.method === "GET") {
    // Sample data
    const users = [
      { id: 1, name: "Vivek Singh" },
      { id: 2, name: "John Doe" },
      { id: 3, name: "Jane Doe" },
    ];

    res.status(200).json(users);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
