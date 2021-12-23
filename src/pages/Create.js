import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const useStyles = makeStyles({
  field: {
    "&&": {
      marginBottom: 10,
      marginTop: 10,
      display:'block'
    },
  }
})
export default function Create() {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleErrors, setTitleErrors] = useState(false)
  const [detailsErrors, setDetailsErrors] = useState(false)
  const [category, setCategory] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleErrors(false)
    setDetailsErrors(false)

    if (title === '') {
      setTitleErrors(true)
    }
    if (details === '') {
      setDetailsErrors(true)
    }
    if (title && details && category) {
      console.log(title, details,category)
    }
  }
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
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>

        <TextField
          onChange={(e) => setTitle(e.target.value)}
          mb={20}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleErrors}
        />

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsErrors}
        />

        <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)} >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
