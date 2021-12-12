import * as React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {useEffect} from "react";
import {ListItem} from "@mui/material";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import {deleteTask, fetchAction} from "../../store/actions/userAction";
import {Task} from "../../types/task";
import moment from 'moment'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

interface ITaskListProps {
    remove(task: any): void
}

const TaskList: React.FC<ITaskListProps> = (props: ITaskListProps) => {
    const {tasks, loading, error} = useTypedSelector(state => state.taskReducer);
    const {fetchAction} = useActions();
    const {deleteTask} = useActions();
    useEffect(() => {
        fetchAction()
      }, []);

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    const moment = require('moment');



    const listAction = (arrayTask: Task[]) => {
        console.warn("task", arrayTask)
        return arrayTask.map((task, index) =>
            <div>
                <ListItem key={index}>
                    <ListItemText
                        primary={task.id}/>
                    <Button variant="outlined" onClick={() => props.remove(deleteTask(task.id))} startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                </ListItem>
                <ListItem key={index}>
                    <ListItemText
                        primary={task.name}/>
                    {/*<Button variant="outlined" startIcon={<DeleteIcon />}>*/}
                    {/*    Delete*/}
                    {/*</Button>*/}
                </ListItem>
                <ListItem key={index}>
                    <ListItemText
                        primary={task.description}
                    />
                    {/*<Button variant="outlined" startIcon={<DeleteIcon />}>*/}
                    {/*    Delete*/}
                    {/*</Button>*/}
                </ListItem>
            </div>
        )
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    List of Task
                </Typography>
                <List sx={{
                    width: '100%',
                    bgcolor: 'background.paper',
                    position: 'relative',
                    '& ul': { padding: 0 },
                }}
                      subheader={<li/>}>
                    {listAction(tasks)}
                </List>
            </Box>
        </Container>
    );
};

export default TaskList;