import React, {Component} from 'react';
import '../css/CircularMenu.css';

class CircularMenu extends Component {
  constructor(props){
    super();

    const openStyles = [];
    const closedStyles= [];

    for(let i = 0; i < props.nodeCount; i++){
      const openStyle = {
        top: Math.round(props.radius*Math.cos(2*Math.PI*i/props.nodeCount)).toString() + 'px',
        left: Math.round(props.radius*Math.sin(2*Math.PI*i/props.nodeCount)).toString() + 'px',
      };

      const closedStyle = {
        top: '0px',
        left: '0px',
        transform: 'scale(0)',
      };

      openStyles.push(openStyle);
      closedStyles.push(closedStyle);
    }

    this.state = {
      openStyles,
      closedStyles,
      styles: closedStyles,
      open: false,
    }

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    if(this.state.open){
      this.setState({
        open:false,
        styles: this.state.closedStyles,
      });
    } else {
      this.setState({
        open: true,
        styles: this.state.openStyles,
      });
    }
  }

  render(){
    return(
        <div className="CircularMenu">
          <div className="MenuCenter" onClick={this.toggleOpen}/>
          {
            this.state.styles.map((style, i) =>(
              <div key={i} className="MenuItem" style={style} />
            ))
          }
        </div>
    );
  }
}

export default CircularMenu;