import * as React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {useEffect, useRef, useState} from "react";
import {DialogTitle, ListItem} from "@mui/material";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import {deleteTask, fetchAction} from "../../store/actions/userAction";
import {Task, TaskAction} from "../../types/task";
import moment from 'moment'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {ThunkAction} from "redux-thunk";
import {
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    FormControl,
    Input,
    OutlinedInput,
    TextField
} from "@material-ui/core";
import {Simulate} from "react-dom/test-utils";

interface ITaskListProps {
    remove(task: any): void

    update(task: any): any
}

const TaskList: React.FC<ITaskListProps> = (props: ITaskListProps) => {
    const {tasks, loading, error} = useTypedSelector(state => state.taskReducer)
    const {fetchAction} = useActions();
    const {deleteTask} = useActions();
    const {updateTask} = useActions();
    const [open, setOpen] = useState(false);

    const handleClickOpen = (task: any) => {

        setOpen(true);


    }
    const [inputValue, setInputValue] = useState("");

    const handleClose = () => {
        setOpen(false)
    };


    useEffect(() => {
        fetchAction()
         }, []);



    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    const up = (task: any) => {
        updateTask({id: task.id, description: inputValue});
        setInputValue("");
        handleClose();
    };

    const listAction = (arrayTask: Task[]) => {

        return arrayTask.map((task, index) =>
            <div>
                <div>
                    <ListItem key={index}>
                        <ListItemText
                            primary={task.id}/>
                        <Button variant="outlined" onClick={() =>deleteTask(task.id)}
                                startIcon={<DeleteIcon/>}>
                            Delete
                        </Button>

                    </ListItem>

                    <ListItem key={index}>
                        <ListItemText
                            primary={task.description}/>
                        <Button id="modal" variant="contained" color="inherit" onClick={handleClickOpen}>
                            Update
                        </Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="modal"> Update task</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Название задачи
                                </DialogContentText>

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">Cansel</Button>
                                <Input autoFocus
                                       id="outlined-required"
                                       type="text"
                                       defaultValue={task.description}
                                       onChange={event => setInputValue(event.target.value)}
                                />
                                <Button onClick={() => up(task)} color="primary">send</Button>
                            </DialogActions>
                        </Dialog>
                    </ListItem>
                    <hr/>
                </div>
            </div>
        )
    };
    return (
        <Container maxWidth="sm" style={{margin: "0", display: 'flex'}}>
            <Box sx={{mx: 1}} style={{margin: "0"}}>
                <Typography variant="h4" component="h1" gutterBottom style={{margin: "0",}}>
                    List of Task
                </Typography>
                <List sx={{
                    textAlign: "right",
                    margin: "10",
                    padding: "10",
                    width: '100%',
                    color: 'background.blue',
                    position: 'relative',
                    '& ul': {padding: 10},
                }}
                      subheader={<li/>}>
                    {listAction(tasks)}
                </List>

            </Box>
            <hr/>
            <Box className="one" sx={{mx: 1}} style={{display: 'flex', flexDirection: 'row', margin: 100,}}>
                <List sx={{
                    width: '200%',
                    background: "blue",
                    color: 'background.blue',
                    position: 'relative',
                    '& ul': {padding: 0},
                }}
                      subheader={<li/>}>
                    {}
                </List>

            </Box>
        </Container>

    );
};

export default TaskList;