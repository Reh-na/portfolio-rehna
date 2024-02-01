import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #00264d',
  boxShadow: 24,
  p: 4,
  color:"#00264d"
};

export default function ProModal({title,description,imgUrl,techs,link}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
     <div className='proimg'  style={{width:'320px',height:'330px',border:" 2px solid #333",
      boxShadow: '5px 5px 10px #888888',
      padding: '2%',textAlign:'center',backgroundColor:'#00264d',borderRadius:'1%'}}>
        <img style={{width:'100%',height:'80%',borderRadius:'7%'}}  src={imgUrl}></img>
          <Button style={{color:'white'}}onClick={handleOpen}>{title}</Button>
          
     </div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{padding:'1%',borderRadius:'5%'}}>
            <img  style={{width:'200px',height:'150px',borderRadius:'5%'}}  src={imgUrl}></img>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {description}         </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {techs}         </Typography>
<div className='probtn'>
          <a href={link} target='_blank'>explore the project</a>
  
</div>        </Box>
      </Modal>
    </div>
  );
}