import React from 'react'

 class PickOption extends React.Component {
     constructor(props) {
         super(props)
          this.state = {
              options:[],
              word:"",
              add:false
         }
     }
    handleWord=(e)=>{
        this.setState({
            word:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("values",this.state);
        this.setState({
            add:true
        })
        this.state.options.push(this.state.word);
    this.setState({ options:this.state.options });
    this.setState({ word: "" });
    }
    handleRemoveAll=(e)=>{
        this.setState({
            options:[]
        })
    }
    handlePickUp=()=>{
        const randomNum=Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        console.log("options",option)
        console.log("random num",randomNum)
        console.log("length",this.state.options.length)
        alert(option);
    }
    render() {
        return (
            <div>
                <center>
                    <h1>Pickup Option</h1>
                <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleWord}/>
                <button type="submit">Add</button>
                {this.state.add&&
                
                this.state.options.map((item)=>{
                   return <h3 key={item}>{item}</h3>
                })}
                </form>
                <button disabled={this.state.options.length===0} onClick={this.handleRemoveAll}>Remove All</button>
                <button disabled={this.state.options.length===0} onClick={this.handlePickUp}>PickUp</button>
                </center>
            </div>
        )
    }
}
export default PickOption
