import{useNote} from "./NoteLayout"
import {Badge, Button, Col, Row, Stack} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import ReactMarkdown from "react-markdown";


type NoteProps = {
    onDelete:(id:String) => void;
}


export function Note({onDelete}:NoteProps){
    const note = useNote()
    const navigate = useNavigate()

    return<>
        <Row classname="align-items-center mb-4">
            <Col>
               <h1>{note.title}</h1>
                {note.tags.length > 0 &&(
                    <Stack gap={1} direction={"horizontal"} className={"justify-content-center flex-wrap"}>
                        {note.tags.map(tag=>(
                            <Badge className={"text-truncate"} key={tag.id}>{tag.label}</Badge>
                        ))}
                    </Stack>
                )}
            </Col>
            <Col xs={"auto"}>
                <Stack gap={2} direction={"horizontal"}>
                    <Link to={`/${note.id}/edit`}>
                        <Button variant={"primary"} size={"sm"}>
                            Edit Note
                        </Button>
                    </Link>
                    <Button
                        onClick={() => {onDelete(note.id)
                            navigate("/")}} variant="outline-danger">
                        Delete
                    </Button>
                    <Link to={"/"}>
                    <Button variant={"outline-secondary"} size={"sm"}>Back</Button>
                    </Link>

                </Stack>
            </Col>
        </Row>
        <ReactMarkdown>{note.markdown}</ReactMarkdown>

    </>
}