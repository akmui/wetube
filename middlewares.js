import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
// 앞에 /를 붙이면 안된다. 만약 붙이면 바로 컴퓨터 드라이브 안에다가 만들어 버림 


export const localMiddleWare = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
}
export const uploadVideo = multerVideo.single("videoFile");