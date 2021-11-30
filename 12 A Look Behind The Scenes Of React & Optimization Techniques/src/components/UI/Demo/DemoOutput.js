import React from "react";

const DemoOutput = (props)=> // for every state (or props or ontext) change, the entire component (and its children) in which the state changed is re-evaluated
{
    // this will be re-evaluated when the props changes (or if the parent is re-evaluated)
    // and if the child component have a child component, this child component also will be re-evaluated
    console.log('Demo output')
    return <p>{props.show ? "hello from the other side": ""}</p>
}
export default React.memo(DemoOutput); // we tell react that only if the props in this component changed (in case the parent changed(re-evaluated)) , re-evaluate this component
// prevent re-evaluation (for this component and its children) when there is no change (this is the main purpose for memo)
// memo tells react to compare the old and new prop values, and if there is a change, only in this case re-evaluate
