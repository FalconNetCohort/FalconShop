class SizeButton extends React.Component {

    state = {
      isSelected: false,
    }
  
    setSelected = () => {
      this.setState({
        isSelected: !this.state.isSelected
      })
    }
  
    render() {
      return (
        <button
          id="sizeButton"
          className={this.state.isSelected ? 'selected' : ''}
          onClick={() => {
            this.setSelected();
          }}
        >
        </button>
      )
    }
  }