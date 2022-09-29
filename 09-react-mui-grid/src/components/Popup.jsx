import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    //separacion de input y button
    '& .MuiTextField-root': { m: 1, width: '25ch' },
    '& .MuiButton-root': { m: 1, width: '25ch' },
};


function Popup({ open, setOpen, edit, setEdit, clickEdit }) {

    const handleClose = () => setOpen(false);

    const handleEdit = () => {
        const item = {
            id: edit?.id,
            name: edit?.name,
            username: edit?.username,
            email: edit?.email,
            phone: edit?.phone,
            website: edit?.website,
            address: `${edit?.address?.street} ${edit?.address?.suite}`
        }
        clickEdit(item)
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h5" gutterBottom>
                        Update register
                    </Typography>
                    <TextField label="name" variant="outlined"
                        onChange={(e) => {
                            setEdit((pre) => {
                                return { ...pre, name: e.target.value };
                            });
                        }}
                        value={edit?.name}
                    />
                    <TextField label="username" variant="outlined"
                        onChange={(e) => {
                            setEdit((pre) => {
                                return { ...pre, username: e.target.value };
                            });
                        }}
                        value={edit?.username}
                    />
                    <TextField label="email" variant="outlined"
                        onChange={(e) => {
                            setEdit((pre) => {
                                return { ...pre, email: e.target.value };
                            });
                        }}
                        value={edit?.email}
                    />
                    <TextField label="phone" variant="outlined"
                        onChange={(e) => {
                            setEdit((pre) => {
                                return { ...pre, phone: e.target.value };
                            });
                        }}
                        value={edit?.phone}
                    />
                    <TextField label="website" variant="outlined"
                        onChange={(e) => {
                            setEdit((pre) => {
                                return { ...pre, website: e.target.value };
                            });
                        }}
                        value={edit?.website}
                    />
                    <TextField label="address" variant="outlined"
                        disabled={true}
                        onChange={(e) => {
                            setEdit((pre) => {
                                return { ...pre, address: e.target.value };
                            });
                        }}
                        value={`${edit?.address?.street} ${edit?.address?.suite}`}
                    />
                    <Button variant="outlined" color="error" onClick={handleClose}>Close</Button>
                    <Button variant="contained" onClick={handleEdit} endIcon={<SendIcon />}>Edit</Button>

                </Box>
            </Modal>
        </>
    )
}

export default Popup

{/* 
                    <input placeholder='name'
                        onChange={(e) => {
                            setEdit((pre) => {
                                return { ...pre, name: e.target.value };
                            });
                        }}
                        value={edit?.name}
                    ></input> 

                    <input placeholder='username'
                        onChange={(e) => {
                            setEdit((pre) => {
                                return { ...pre, username: e.target.value };
                            });
                        }}
                        value={edit?.username}
                    ></input>

                    <input placeholder='email'
                        onChange={(e) => {
                            setEdit((pre) => {
                                return { ...pre, email: e.target.value };
                            });
                        }}
                        value={edit?.email}
                    ></input>

                    <input placeholder='phone'
                        onChange={(e) => {
                            setEdit((pre) => {
                                return { ...pre, phone: e.target.value };
                            });
                        }}
                        value={edit?.phone}
                    ></input>

                    <input placeholder='website'
                        onChange={(e) => {
                            setEdit((pre) => {
                                return { ...pre, website: e.target.value };
                            });
                        }}
                        value={edit?.website}
                    ></input>

                    <input placeholder='address'
                        disabled={true}
                        onChange={(e) => {
                            setEdit((pre) => {
                                return { ...pre, address: e.target.value };
                            });
                        }}
                        value={`${edit?.address?.street} ${edit?.address?.suite}`}
                    ></input>

                    <button onClick={handleClose}>Close</button>
                    <button onClick={handleEdit}>Edit</button>
                */}