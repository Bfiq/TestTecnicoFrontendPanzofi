import authConfig from "./commentConfig";
import { API } from "../helpers/httpClient";

const allComments = async () =>{
    try {
        const result = await API.get(authConfig.comments)
        const {data} = result
        return data
    } catch (error) {
        console.log(error);
    }
}

const createComment = async (data) => {
    try {
        await API.post(authConfig.comments, data)
    } catch (error) {
        console.log(error);
    }
}

const commentsByParentComment = async (id) =>{
    try {
        const result = await API.get(`${authConfig.comments}${id}/responsesToAComment/`)
        const {data} = result
        return data
    } catch (error) {
        console.log(error);
    }
}

const commentService = {
    allComments,
    createComment,
    commentsByParentComment
}

export default commentService