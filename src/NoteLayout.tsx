import type {Note} from "./App.tsx";
import {Navigate, Outlet, useOutletContext} from "react-router-dom";

type NoteLayoutProps = {
    note: Note[];
}
export function NoteLayout ({notes}:NoteLayoutProps) {
    const {id} = userParams()
    const  note = notes.find(n=> n.id === id)

    if (note== null ) return <Navigate to="/" replace/>

    return <Outlet context={note} />
}

export function useNote () {
    return useOutletContext<Note>()
}