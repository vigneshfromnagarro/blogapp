import { useState, createContext, useContext } from "react";
import {data} from '../data/data';

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
    const [openNewPost, setOpenNewPost] = useState(false)
    const [blogData,setBlogData] = useState(data)
    const [openViewPage,setOpenViewPage] = useState(false)
    const [viewData,setViewData] = useState([])
    const [viewIndex , setViewIndex] = useState()

    const openNewPostHandler = () => {
        setOpenNewPost(true)
    }

    const closeNewPostHandler = () => {
        setOpenNewPost(false)
    }

    const viewClickHandler = (params) => {
        setOpenViewPage(true)
        setViewData([params])
        let i ;
        blogData.map((d,index)=>{
                if(d.title === params.title && d.category === params.category && d.content === params.content){
                    i = index
                }
        })
        setViewIndex(i)
    }

    const navigateHandler = () => {
        setViewData([])
        setOpenViewPage(false)
    }

    return(
        <BlogContext.Provider 
            value={{
                openNewPost, setOpenNewPost,
                blogData,setBlogData,
                openViewPage,setOpenViewPage,
                viewData,setViewData,
                viewIndex , setViewIndex,
                openNewPostHandler,
                closeNewPostHandler,
                viewClickHandler,
                navigateHandler
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

export const useAllBlogData = () => {
    const context = useContext(BlogContext)

    if(context === null){
        throw new Error("something went wrong in context")
    }

    return context
}