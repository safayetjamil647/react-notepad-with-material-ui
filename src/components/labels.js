import React from 'react';
import axiosInstance from '../axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
export default class PersonList extends React.Component {
    
  state = {
    categorys: []
  }

  componentDidMount() {
    axiosInstance.get(`category/`)
      .then(res => {
        const categorys = res.data;
        this.setState({ categorys });
      })
  }

  render() {
    return (
    //   <ul>
    //     {
    //       this.state.categorys
    //         .map(category =>
    //           <li key={category.id}>{category.name}</li>
    //         )
    //     }
    //   </ul>
        <List>
            <ListItem>
                <Typography>asdasdad</Typography>
            </ListItem>
        </List>
    
    )
  }
}