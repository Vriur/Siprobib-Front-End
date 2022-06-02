import React from 'react';
import Header from './Header';
import Footer from './Footer';

/*
 * Componente encargado de servir de Layout a lo largo de toda la aplicación, se utilizó como guía el mostrado en 
 * el tutorial https://javascript.plainenglish.io/create-your-own-layout-component-in-react-5d48f0433d9.
 * Además en este componente es donde se integra el componente Header y Footer.
 */
class Layout extends React.Component{
    render(){
        return(
            <>
              <Header/>
              <main>{this.props.children}</main>
              {/*<Footer/>*/}
            </>
        );
    }
}

export default Layout;