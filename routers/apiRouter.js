import express from "express";
import routes from "../routes";
import {
    postRegisterView,
    postAddcomment
} from "../controllers/videoControlloer";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, postRegisterView);
apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddcomment);

export default apiRouter;
