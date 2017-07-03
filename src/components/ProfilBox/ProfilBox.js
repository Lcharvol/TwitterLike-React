import React, { Component } from 'react';

import './ProfilBox.css';

class ProfilBox extends Component {

  state = {
    profil: {
      username: 'Lucas Charvolin',
      userimg: 'https://cdn.intra.42.fr/users/medium_lcharvol.jpg',
    },
  }

  render() {
    const { profil } = this.state;
    return (
      <div className="ProfilBox">
        <div className="ProfilImage">
          <img className="ProfilImageInner" src={profil.userimg} />
        </div>

      </div>
    );
  }
}

export default ProfilBox;
