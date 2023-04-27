import multer from "multer";

//==============================================
// new syntax ==== const upload =multer({ dest: './public/data/upload/'})
const storageConfig = multer.diskStorage({
	// https://www.npmjs.com/package/multer#diskstorage
	destination: "./uploads/",
	filename: (req, file, cb) => {
	  // console.log("mul-file: ", file);
	  cb(null, `${new Date().getTime()}-${file.originalname}`);
	},
  });
  const upload = multer({ storage: storageConfig });
  //==============================================
  