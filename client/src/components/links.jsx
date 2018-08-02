import React from 'react';

class Links extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      links_info: [],
    }
  }

  componentDidMount() {
    this.callApi()
        .then(res => this.setState({ links_info: res }))
        .catch(err => console.log(err));
    console.log(this.state.links_info);
  }

  callApi = async () => {
    const response = await fetch('/links');
    const body = await response.json();
    console.log(response, body);
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render(){
    return(
        <div>
          {this.state.links_info.map((link) => {
            return (
                <div>
                  <div id="main-content" className="container">
                    <a>{link.name}</a>
                    <div id="content" className="col-md-9 center-block">Submitted by {link.owner}</div>
                  </div>
                  <hr className={"container"}/>
                </div>
            );
          })}
        </div>
    );
  };
}

export default Links;