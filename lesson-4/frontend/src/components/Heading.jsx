import Prefix from "./Prefix"

export default function Heading({title}) {
    return <h1><Prefix /> {title.toUpperCase()}</h1>
}