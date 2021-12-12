import {useTypedSelector} from "../hooks/useTypedSelector";
import {useEffect} from "react";
import {fetchUsers} from "../store/actions/userAction";
import * as React from "react";
import {useActions} from "../hooks/useActions";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {ListItem} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {User} from "../types/user";


const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.userReducer);
    const {fetchUsers} = useActions();
    useEffect(() => {
        fetchUsers()
    }, []);

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    const listUsers = (users: User[]) => {

        return users.map((user, index) =>
            <ListItem key={index}>
                <ListItemText
                    primary={user.name}
                />
            </ListItem>,
        )
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    List of user
                </Typography>
                <List dense={false}>
                    {listUsers(users)}
                </List>
            </Box>
        </Container>
    );
};

// @ts-ignore
export default UserList;