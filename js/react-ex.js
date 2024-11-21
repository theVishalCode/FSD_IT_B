const parent=document.getElementById("root");
const node=React.createElement("p",{style:{color:"red"}},"This is a new paragraph")
const root=ReactDOM.createRoot(parent);
// root.render(node);
const node1=React.createElement("h1",{},"Shopping Cart");
const item1=React.createElement("li",{},"ITEM-1");
const item2=React.createElement("li",{},"ITEM-2");
const list=React.createElement("ol",{},item1,item2);
const branch=<ul>
    <li>CSE</li>
    <li>IT</li>
    <li>EC</li>
</ul>;
const App=()=>{
    return(
        <div>
        <p>Semester List</p>
        <ul>
        <li>I</li>
        <li>III</li>
        <li>V</li>
        <li>VII</li>
        </ul>
        </div>
    );
};
// root.render([node,node1,list,branch]);
root.render(<App/>)