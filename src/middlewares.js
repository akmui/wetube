import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_PRIVATE_KEY,
});

const multerVideo = multer({
    storage: multerS3({
        s3,
        acl: "public-read",
        bucket: "wetubeakmui/video"
    })
});
const multerAvatar = multer({
    storage: multerS3({
        s3,
        acl: "public-read",
        bucket: "wetubeakmui/avatar"
    })
});
// 앞에 /를 붙이면 안된다. 만약 붙이면 바로 컴퓨터 드라이브 안에다가 만들어 버림 

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");

export const localMiddleWare = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    console.log(req.user);
    next();
};

export const onlyPublic = (req, res, next) => {
    if (req.user) {
        res.redirect(routes.home);
    } else {
        next();
    }
};

export const onlyPrivate = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect(routes.home);
    }
};
