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
      ],
      size: '',
      quantityAvailable: 1
    };

    this.updateStyles = this.updateStyles.bind(this);
    this.updateSize = this.updateSize.bind(this);
  }

  updateStyles(id, newStyles) {
    this.props.changeStyle(id);

    if ( newStyles !== undefined ) {
      this.setState({styles: newStyles});
    }

    // console.log(this.state);
  }

  updateSize() {
    let data = document.querySelector('#overview_select_size .size-dropdown').value.split('&');
    let selectedSize = data[0];
    let availableQty = data[1];
    // data.options[data.options.selectedIndex].text = selectedSize;
    console.log(selectedSize);
    this.setState({size: selectedSize, quantityAvailable: availableQty});
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
          updateSize={this.updateSize} />
      </div>
    );
  }
}

export default StyleSelector;