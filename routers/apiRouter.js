import express from "express";
import routes from "../routes";
import {
    postRegisterView,
    postAddcomment, postDeleteComment
} from "../controllers/videoControlloer";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, postRegisterView);
apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddcomment);


apiRouter.get(routes.deletComment(), postDeleteComment);
apiRouter.post(routes.deletComment(), postDeleteComment);

export default apiRouter;
