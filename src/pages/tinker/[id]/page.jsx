import { useParams } from "react-router";

export default function IdSpecsPage () {

    const {id} = useParams()
    return (
        <div className="">{id}</div>
    );
}