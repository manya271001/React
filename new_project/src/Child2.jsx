import Child3 from './Child3'
const Child2 =(props)=>{
    return(
        <>
            <h2>Data from child1 {props.fname} </h2>
            <Child3 newname={props.fname} lastname="sharma"/>
        </>
    )
}
export default Child2