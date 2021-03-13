import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useTrigger } from "../../TriggerContext";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function ThirdStep() {
    const { state, dispatch } = useTrigger();
    const [dateTrigger, setDateTrigger] = useState("");
    console.log(state.form.data)

    const ChangeDate = (value) =>{
        setDateTrigger(value)
    }

    useEffect(() => {
        if(state.form.dateTrigger.length > 0){
            setDateTrigger(state.form.dateTrigger);
        }
    }, [])

    return (
        <div>
            <h1>Date: {dateTrigger}</h1>
            <form className="classes.container" noValidate>
                <TextField
                    id="datetime-local"
                    label="Trigger Time"
                    type="datetime-local"
                    onChange={(event) => ChangeDate(event.target.value)}
                    defaultValue={state.form.data}
                    className={"classes.textField"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <div>
                <Button id="but-red" onClick={() => dispatch({ type: "stepBack2", payload: dateTrigger })} >
                    Go Back
                </Button>
                <Button id="but-white" onClick={() => dispatch({ type: 'stepThreeCompleted', payload: dateTrigger })}>
                    Complete
                </Button>

            </div>
        </div>
    )
}

export default ThirdStep
