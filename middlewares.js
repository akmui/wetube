import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
// 앞에 /를 붙이면 안된다. 만약 붙이면 바로 컴퓨터 드라이브 안에다가 만들어 버림 


export const localMiddleWare = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    res.locals.user = req.user || null;
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

export const uploadVideo = multerVideo.single("videoFile");