import React from 'react';

const Logo = props => {
  return (
      <div className={"logo"}>
        <a>{props.name}</a>
      </div>
  );
};

export default Logo;