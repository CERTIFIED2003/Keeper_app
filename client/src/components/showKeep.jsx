// Importing all the packages and files
import React, { useState , useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UpdateKeep } from "./updateKeep";
import { CreateKeep } from "./createKeep";
import KeepCard from "./KeepCard";
import EmptyNotes from "./EmptyKeep";
import Header from "./Header";
import Footer from "./Footer";


export function ShowKeepList(){
    const [keeps, setKeeps] = useState([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const [update, setUpdate] = useState(false);
    const [isExpanded, setExpanded] = useState(false)

    useEffect(
        () => {
            axios
                .get("http://localhost:8000/api/keep")
                .then((res) => {
                    console.log(res.data);
                    setKeeps(res.data);
                })
                .catch((err) =>{
                    console.log(err.message);
                });
        }, []
    );

    function handleEdit(id){
        setId(id);
        setOpen(true);
    }

    function handleUpdate(){
        console.log("update: ", update, !update);
        setUpdate(!update);
    }

    function handleDelete(id){
        axios.delete(`http://localhost:8000/api/keep/${id}`);
        setKeeps((data) => {
            return data.filter((keep) => keep._id !== id);
        });
    }

    function handleClose() {
        setId("");
        setOpen(false);
    }

    function updateKeep(){
        setKeeps((keeps) => ([...keeps]));
    }

    function showNotes(note, index){
        console.log(note);
        const {title, description} = note;
        return(
            <KeepCard 
                key={note._id}
                id = {note._id}
                title={title}
                desc={description}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />
        );
    }

    function shrink(event){
        console.log(event);
    }
    return (
        <div className="root-container" onClick={shrink}>
            <Header />
                <CreateKeep 
                    onAdd={updateKeep}
                />
                {keeps.length === 0 ? <EmptyNotes /> : <div className="notes-container">
                    {keeps.map(showNotes)}
                </div>}
            {open ? (
                <section className="update-container">
                    <div className="update-contents">
                        <p onClick={handleClose} className="close">
                            &times;
                        </p>

                        <UpdateKeep
                            _id={id}
                            handleClose={handleClose}
                            handleUpdate={handleUpdate}
                        />
                    </div>
                </section>
            ) : (
                ""
            )}
            <Footer />
        </div>
    );
}


















