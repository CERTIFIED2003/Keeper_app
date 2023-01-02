import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import Button from '@mui/material/Button';

function Keep (props){

    return (
        <div className="note">
            <div className="note-title">
                <h1>{props.title}</h1>
            </div>
            <div className="note-desc">
                <p>{props.desc}</p>
            </div>
            <div className="update-options">
                <div className="delete-btn">
                    <DeleteButton
                        id = {props.id}
                        onClick = {props.onDelete}
                    />
                </div>
                <div className="edit-btn">
                    <EditButton />
                </div>
            </div>
        </div>
    );
}

export default Keep;