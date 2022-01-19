import React, { useState } from "react";
import './styles/index.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import data from '../data.json'
import { nanoid } from "nanoid";
import TableData from '../Datatable'
import Typography from '@mui/material/Typography';

const defaultValues = {
    Sirname: "",
    Name: "",
    age: 0,
    gender: "",
};

function Index() {

    const [formValues, setFormValues] = useState(defaultValues);
    const [list, SetList] = useState(data);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormValues({
            ...formValues,
            id: nanoid(),
            [name]: value,
        });

    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const newList = [...list, formValues];
        SetList(newList);
        setFormValues(defaultValues);
        console.log(list);
    };

    const handleDelete = (listId) => {
        const newList = [...list];

        const index = list.findIndex((list) => list.id === listId);
        newList.splice(index, 1);

        SetList(newList)
    }

    return (
        <div className="App">

            <Typography align='center' variant="h5" className='title'>
                Form
            </Typography>

            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="outlined-error"
                            label="SirName"
                            name="Sirname"
                            value={formValues.Sirname}
                            onChange={handleInputChange}
                        />
                        <TextField
                            id="outlined-error-helper-text"
                            label="Name"
                            name="Name"
                            value={formValues.Name}
                            onChange={handleInputChange}
                        />
                        <TextField
                            id="age-input"
                            name="age"
                            label="Age"
                            type="number"
                            value={formValues.age}
                            onChange={handleInputChange}
                        />


                    </div>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                            name="gender"
                            value={formValues.gender}
                            onChange={handleInputChange}
                            row
                        >
                            <FormControlLabel
                                key="male"
                                value="male"
                                control={<Radio size="small" />}
                                label="Male"
                            />
                            <FormControlLabel
                                key="female"
                                value="female"
                                control={<Radio size="small" />}
                                label="Female"
                            />
                            <FormControlLabel
                                key="other"
                                value="other"
                                control={<Radio size="small" />}
                                label="Other"
                            />
                        </RadioGroup>
                    </FormControl>
                </Box >

                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>

            <Typography align='center' variant="h5" className='title'>
                Form Data
            </Typography>
            <TableData list={list} handleDel={handleDelete}></TableData>
        </div>

    );
}
export default Index;
