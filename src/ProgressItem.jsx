import React from 'react';
import './ProgressItem.css';

class ProgressItem extends React.Component {
  constructor(props) {
    super(props);
    this.progress = this.progress.bind(this);
  }
  progress() {
    this.props.getProgress(this.props.index);
  }
  componentDidMount() {
    this.progress();
  }

  render() {
    return (
      <li className="progressItem">
        <p>№{this.props.data.id}</p>
        <div className="progressBar">
          <div className="progression" style={{ width: this.props.data.progress + '%' }} />
        </div>
        <p>{this.props.data.progress}%</p>
      </li>
    );
  }
}

export default ProgressItem;
