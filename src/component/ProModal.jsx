import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './promodal.css'
const style = {
  position:'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
 
  bgcolor: 'background.paper',
  border: '2px solid black',
  boxShadow: 24,
  color:"#00264d"
};

export default function ProModal({title,description,imgUrl,techs,link}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
     <div className='proimg'  style={{width:'320px',height:'400px',border:" 2px solid black",
      boxShadow: '5px 5px 10px #888888',
      padding: '2%',textAlign:'center',backgroundColor:'#00264d',borderRadius:'1%'}}onClick={handleOpen}>
        <img style={{width:'100%',height:'90%',marginTop:'-1%'}}  src={imgUrl}></img>
          <Button style={{color:'white'}}>{title}</Button>
          
     </div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='mostyle'>

              <div class='modmain' >
<div className='imgproject' >
                    <img  style={{width:'100%%',height:'100%',marginTop:'-1px'}}  src={imgUrl}></img>
  
</div>    
              <div className='modaldescr' style={{padding:"2%",backgroundColor:"#00264d", color:'white'}}>
                  <Typography id="modal-modal-title" variant="h6" component="h3" style={{textAlign:'center'}}>
                    {title}
                    </Typography>
          
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {description}         </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {techs}         </Typography>
          <div className='probtn' style={{display:'flex',justifyContent:'center'}}>
                    <a href={link} target='_blank'>explore</a>
            
                   </div>
              </div>
</div>
        </Box>
      </Modal>
    </div>
  );
}