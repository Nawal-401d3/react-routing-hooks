import React from 'react';
import superagent from 'superagent';


class Resty extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            results : []
        } // end of state
    } // end of constructor 

    handleURL = event => {
        event.preventDefault();
        let url = event.target.value;
        console.log('urlEvent : ', url);
        this.setState({ url });
    }

    handleSub = async event =>{
        event.preventDefault();
        superagent.get(`${this.state.url}`)
            .then(data => {
                console.log('data',data.body.results);
                
                let data2 = data.body.results;
                this.setState({ results:data2});
            })
    }

    render() {
        return (
            <>
                <Urlfun url1={this.state.url} />
                <Form handler={this.handleURL} submitter={this.handleSub}/>
            </>
        );

    } // end of render method 
} // end of resty class 


function Urlfun({ url1 }) {
    return <h1> URL Full Address : {url1}</h1>
}

function Form(props) {
    return (
        <form onSubmit={props.submitter}>
            <section>
            <label className="apiC"> API URL :
            <input type='text' onChange={props.handler} />
            </label>
            </section>
            <section className="methodC">
                <label> 
                    <input type='radio'/>GET</label>
                <label> 
                    <input type='radio'/>POST</label>
                <label> 
                    <input type='radio'/>PUT</label>
                <label> 
                    <input type='radio'/>DELETE</label>
                <label> 
                    <input type='radio'/>PATCH</label>
                <button type='submit'> GO!</button>
            </section>
            <textarea></textarea>
        </form>

    );
}


export default Resty;