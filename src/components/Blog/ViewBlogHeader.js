
import { Box,Button, Modal, Tooltip } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {data} from '../../data/data';
import { useState } from "react";
import EditPost from "./EditPost";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
};

const ViewBlogHeader = (props) => {
    const [openEdit , setOpenEdit] = useState(false)
    
    const deleteHandler = () => {
        const filteredData = data.filter((d,index)=>{
            if(d.title !== props.data[0].title){
                return d
            }})
        props.setBlogData(filteredData)
        props.handleClose()
    }

    const editHandler = () => {
        setOpenEdit(true)
    }

    const closeEditModalHandler = () => {
        setOpenEdit(false)
    }

    return(
        <Box direction="row" justifyContent='end' mr={30} mt={3} style={{display:"flex"}}>
            <Tooltip title="Like">
                  <Button size="small" color="primary" onClick={()=>{}}>
                    <ThumbUpAltOutlinedIcon/>
                  </Button>
                  </Tooltip>
            <Tooltip title="Edit">
                  <Button size="small" color="primary" onClick={editHandler}>
                    <EditOutlinedIcon/>
                  </Button>
                  </Tooltip>
                  <Tooltip title="Delete">
                  <Button size="small" color="primary" onClick={deleteHandler}>
                    <DeleteOutlineOutlinedIcon/>
                  </Button>
                  </Tooltip>

                  <Modal
                open={openEdit}
                onClose={closeEditModalHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <EditPost index={props.index} prevdata={props.data} setViewData={props.setViewData} setBlogData={props.setBlogData}  handleClose={closeEditModalHandler}/>
                </Box>
            </Modal>

        </Box>
    )
}

export default ViewBlogHeader