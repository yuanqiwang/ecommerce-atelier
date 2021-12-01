import React from 'react';
import Styles from './Styles.jsx';
import SelectSize from './SelectSize.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [
        {
          name: 'Ketchup',
          photos: [
            {
              thumbnail_url: 'https://m.media-amazon.com/images/I/71b0CQV4SFS._SX425_.jpg',
              url: "https://m.media-amazon.com/images/I/71b0CQV4SFS._SX425_.jpg"
            }
          ]
        }
      ]
    };

    this.updateStyles = this.updateStyles.bind(this);
  }

  updateStyles(id, newStyles) {
    this.props.changeStyle(id);

    if ( newStyles !== undefined ) {
      this.setState({styles: newStyles});
    }

    // console.log(this.state);
  }

  render() {
    let allStyles = this.state.styles;
    let selectedStyleName = this.state.styles[0].name;

    try {
      selectedStyleName = this.props.productStyle[this.props.currentStyleID].name;
      allStyles = this.props.productStyle;
    } catch {}

    return (
      <div id="overview_style_selector" data-testid="style-selector">
        <h3>Style > {selectedStyleName}</h3>
        <Styles
          allStyles={allStyles}
          currentStyleID={this.props.currentStyleID}
          updateStyles={this.updateStyles} />
        <SelectSize
          currentStyleInfo={allStyles[this.props.currentStyleID]}
          quantityAvailable={this.state.quantityAvailable}
          updateSize={this.props.updateSize}
          updateQty={this.props.updateQty}
          maxQty={this.props.maxQty} />
      </div>
    );
  }

  componentDidUpdate() {
    // let currentStyle = document.querySelector('#style-' + this.props.currentStyleID);
    // this.updateStyles(this.props.currentStyleID);
  }
}

export default StyleSelector;