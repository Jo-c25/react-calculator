import "./CulculationDisplay.css"

const CulculationDisplay = ({value, classtype}) =>{
return (
<h1 className={classtype == "right" ? "value-display" : ""}>{value}</h1>
) 
}   
export default CulculationDisplay
// export default CulculationDisplay