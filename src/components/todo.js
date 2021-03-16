import React from 'react';
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dolist: [],
            input: ""
        };
    }

    addItem =  (e) => {

        e.preventDefault();
        if (this.state.input !== "") {
          //  console.log(this.state)                      //add todo to array
            let temp = this.state.input;
            var add = this.state.dolist;

            add.push(temp);
            this.setState({ dolist: add });
            this.setState({ input: "" });
            this.changeButton();
           // console.log(this.state.input);
        }
    }

    updateinput =  (e) => {
         this.setState({ input: e.target.value });                     //updating input
        //console.log(this.state.input);
    }
    deleteItem= (id)=> {                                    //deleting do list item
        let ar = this.state.dolist;
        delete ar[id];
        this.setState({ dolist:ar});

    }
    editItem = async(id)=> {                               //to edit do list item
        let ar = this.state.dolist;
        let item = ar[id];
        delete ar[id];
        console.log(item);
        await this.setState({input:item});
        //console.log(this.state.input);
        document.getElementById('change').innerHTML="UPDATE";
       // prompt('ender the update item',item);
    }
    changeButton =()=>{
        document.getElementById('change').innerHTML="ADD";
    }


    render() {
        return (
            <form>
                <input type="text" value={this.state.input} onChange={this.updateinput}></input>
                <button id="change" onClick={(e) => this.addItem(e)}>ADD</button>
                <p></p>
                <ul >
                {this.state.dolist.map((eachId,index)=>{
                return(
                    <li >{eachId} <button onClick={()=>this.deleteItem(index)}>DELETE</button>
                    <button onClick={()=>this.editItem(index)}>EDIT</button>
                    </li>
                );
                })}
                

                </ul>
            </form>
        );
    }
}
export default Todo;