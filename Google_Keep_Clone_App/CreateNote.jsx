import React from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';

const CreateNote = () => {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });


    const InputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.name;

        const {name, value} = event.target;

        setNote((prevDate) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    const addEvent = () => {
        props.passNote(note);
    };

    return(
        <>
            <div className="main_note">
                <form>
                    <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title"  autoComplete="off"/>
                    <textarea rows="" name="content" column=""  value={note.content} onChange={InputEvent} placeholder="Take a note..."></textarea>
                    <Button onClick={addEvent} >
                        <AddIcon className="plus_sign" />
                    </Button>
                </form> 
            </div>
        </>
    );
}

export default CreateNote;