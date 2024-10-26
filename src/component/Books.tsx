import { useState } from "react";
import { book } from "../types/book.type";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import "../styles/book.css";

export const Books = ({ books }: { books: book[] }) => {
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState("");

    const deleteBooks = useMutation(api.queries.deleteBook);
    const updateStatus = useMutation(api.queries.updateStatus);

    const handleClick = async (id: string ) => {
        setId(id);
        setUpdate(!update);
    }

    const handleDelete = async (id: string) => {
        deleteBooks({ id: id as Id<"books"> }).then((mess) => {
            console.log(mess);
        }).catch((err) => console.error(err));
    }
}