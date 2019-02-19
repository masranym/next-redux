import React from 'react';
import Link from 'next/link'
import Router from 'next/router'
class Index extends  React.Component {
    componentDidMount(){
        this.delayAboutpages();
    }
    delayAboutpages = () => {
        setTimeout( ()=> {
            this.handleGoToAboutPages();
        },3000 )
    }
    handleGoToAboutPages = () =>{
        Router.push('/about')
    }
    render() {
        return (
            <div>
                <h1>hello</h1>
                <Link href = "/about"><a>Go to about </a></Link>
                <button onClick= {this.handleGoToAboutPages}><a>Go to about </a></button>
            </div>
        );
    }
}
export default Index;
