import routes from "../routes"
import Video from "../models/Video";
import { file } from "babel-types";

export const home = async (req, res) => {
    try{
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos })
    }catch(error){
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: []})
    }
};
export const search = async (req, res) => {
    const { 
        query: { term: searchingBy } 
    } = req;
    try{
        const videos = await Video.find({});
        res.render("search", { pageTitle: "Search", searchingBy, videos })
        }catch(error){
            console.log(error);
            res.render("search", { pageTitle: "Search", searchingBy, videos: [] })
        }  
};
export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
    const{ 
        body: { title, description }, 
        file: { path }
    } = req;
    const newVideo = await Video.create({
            fileUrl: path,
            title,
            description
        });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id)); 
};

export const videoDetail = async (req, res) => {
    const { params:{ id } } =req;
    try{
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
    }catch(error){
    res.redirect(routes.users);  
    };
};



export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Eidt Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });
