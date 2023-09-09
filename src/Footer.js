//1. start by creating a class component. Always start by importing React.

import React from 'react';

//2. Declare the Class Component.
class Footer extends React.Component
{
    render()
    {
        return(
            <footer>
                Author:Raul Zarate
            </footer>
        )
    }
}
//3. export class 
export default Footer;