import Child2 from './Child2'
const Child1 =(props)=>{

    return(
        <>
        <h1>{props.name}</h1>
        <Child2 fname={props.name} lastname="sharma"/>
        </>
    )
}
export default Child1