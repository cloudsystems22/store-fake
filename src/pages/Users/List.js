import {Grid, Card, CardContent, CardMedia, List as Lista, ListItemText, ListItem} from "@material-ui/core"
import React, { useEffect, useState } from "react";
import Api from '../../services/FakeStoreApi';
function List(){
    const [users, setUsers ] = useState([
        {
            id:1,
            name: "Marcus",
            email: "marcus@email.com",
            telefone: "11 9999-0000",
            cidade: "São Paulo",
            image: `https://thispersondoesnotexist.com/image?v${1}`
        }, 
        {
            id:2,
            name: "Vinicios",
            email: "vinicios@email.com",
            telefone: "11 9999-0000",
            cidade: "São Paulo",
            image: `https://thispersondoesnotexist.com/image?v${2}`
        }
    ]);
    useEffect(() => {
        const getAllUsers = async ()=> {
            const response = await Api.get('/users');
            setUsers(response.data);
        };
        getAllUsers();
    }, [users]);
    return (
    <>
    <Grid container direction="row" justify="space-between" align="center">
       {
           users.map((user) => {
            return (<Grid item xs={6} sm={6}>
            <Card>
                <CardMedia image="">
                    <CardContent>
                        <Lista>
                            <ListItem><ListItemText>{user.name.firstname}</ListItemText></ListItem>
                            <ListItem><ListItemText>{user.email}</ListItemText></ListItem>
                            <ListItem><ListItemText>{user.phone}</ListItemText></ListItem>
                            {/* <ListItem><ListItemText>{user.address.city}</ListItemText></ListItem> */}
                        </Lista>
                    </CardContent>

                </CardMedia>
            </Card>

        </Grid>)
           })
       }
    </Grid>
    </>
    )
}

export default List;