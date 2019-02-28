import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import Dashboard from './Dashboard';
import $ from 'jquery';

export default class LightningPanel extends React.Component {
  static defaultProps = {
    apiKey: "", 
  };
  static propTypes = {
    apiKey: PropTypes.string
  }

  constructor(props){
    super(props);


    this.state = {
      apiKey: props.apiKey
    }
  }

  handleLogin = (apiKey) => {
    this.setState({ apiKey });
  }

  handleLogout = () => {
      this.setState({ apiKey: ""});
  }

  render(){
    const { apiKey } = this.state;

    return (<div className="plugin-lightning">
        { !apiKey ? 
        <div>
            <h4><i className="fa fa-bolt"/> Service Lightning</h4>
            Lightning est un service qui vous permet de traiter rapidement des ensembles de données petits et grands à l'aide de serveurs performant dans le cloud.
            Ci-dessous, vous pouvez entrer vos coordonnees <a href="https://webodm.net" target="_blank">webodm.net</a> pour synchroniser votre compte et configurer automatiquement un nouveau noeud de traitement. Si vous n'avez pas de compte, vous pouvez le<a href="https://webodm.net/register" target="_blank">creer</a> gratuitement.
            <Login onLogin={this.handleLogin} />
        </div> : 
        <div>
            <Dashboard apiKey={apiKey} onLogout={this.handleLogout} />
        </div>}
    </div>);
  }
}