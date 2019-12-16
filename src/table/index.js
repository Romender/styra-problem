import React, { Component } from 'react'
import './table.css'

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
           initialX : 0,
           initialY : 0,
           endX : 35,
           endY : 25
        }
    }
    downListener = (event) => {
        let {initialX, endX, initialY, endY} =  this.state;
        if(event.key === 'ArrowUp') {
            if(initialX !== 0) {
                this.setState({
                    initialX : initialX-1,
                    endX :endX-1
                })
            }
        } else if (event.key === 'ArrowDown') {
            this.setState({
                initialX : initialX+1,
                endX :endX+1
            })
        } else if(event.key === 'ArrowRight') {
            this.setState({
                initialY : initialY + 1,
                endY : endY + 1
            })
        } else if(event.key === 'ArrowLeft') {
            if(initialY !== 0) {
                this.setState( {
                    initialY : initialY -1,
                    endY : endY - 1
                })
            }
        }
    }
    componentDidMount() {
        document.addEventListener("keydown",this.downListener)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown",this.downListener)
    }

    render() { 
        let {nodes, maxLen} = this.props;
        let {initialX,endX, initialY,endY} = this.state;
        var length = 10
        let td = [];
        let header= [];
        let body =[];
        header.push(<th>Nodes</th>);
        for(let j = initialY; j < endY; j++)
            header.push(<th>Node{j}</th>)
        for( let i = initialX; i < endX; i++) {
            let tr = [];
            tr.push(<th key= {'node('+i+')'}>Node{i}</th>)
            for( let j = initialY ; j < endY; j++) {
                tr.push(<td key={'node('+i+','+j+')'} >{nodes[i][j]}</td>)
            }
            td.push(<tr >{tr}</tr>)
        }
        body.push(header);
        body.push(td);
        return (<div>
           <table>{body}</table>
        </div>);
    }
}

export default Table;