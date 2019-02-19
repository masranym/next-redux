import React from 'react';
import Link from 'next/link'
class Index extends  React.Component {
    render() {
        return (
            <div>
                <h1>hello</h1>
                <Link href = "/about"><a>Go to about </a></Link>
            </div>
        );
    }
}
export default Index;
