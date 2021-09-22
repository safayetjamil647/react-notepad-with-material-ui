import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
export default function Create() {
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
      onClick={()=>console.log('hellow')}
      type="submit"
      color="secondary"
      variant="contained"
      >
          Submit
      </Button>
    </Container>
  );
}
