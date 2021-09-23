import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// const useStyles=makeStyles({
//   btn:{
//     fontSize:60,
//     backgroundColor:'violet'
//   }
// })
export default function Create() {
  // const classes= useStyles()
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a new note
      </Typography>
      <Button
      type="submit"
      color="secondary"
      variant="contained"
      endIcon={<KeyboardArrowRightIcon/>}
      >
          Submit
      </Button>
      
    </Container>
  );
}
