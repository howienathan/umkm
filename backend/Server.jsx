import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import fs from "fs";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use("/uploads", express.static("uploads")); // Serve static files from uploads folder

// Konfigurasi multer untuk menyimpan file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/foto_menu";
    // Buat folder jika belum ada
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Simpan dengan nama asli
  },
});

const upload = multer({ storage });

// Endpoint untuk meng-upload gambar
app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    filePath: `http://localhost:${PORT}/uploads/foto_menu/${req.file.filename}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
