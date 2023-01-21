import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: null}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="container">
        <div className={`card-container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
