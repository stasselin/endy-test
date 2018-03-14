import React from 'react';
import './Item.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.addOneClick = this.addOneClick.bind(this);
    this.removeOneClick = this.removeOneClick.bind(this);
    this.changeDeleteClick = this.changeDeleteClick.bind(this);
  }
  addOneClick() {
    this.props.addOne(this.props.index);
  }
  removeOneClick() {
    this.props.removeOne(this.props.index);
  }
  changeDeleteClick() {
    this.props.changeDelete(this.props.index);
  }
  render() {
    const dis = this.props.data.number === 1;
    const deleted = this.props.data.delete;
    return (
      <li className={this.props.data.delete ? 'item__deleted' : 'item'}>
        <img src={this.props.data.image} className="item--img" alt="Изображение пиццы" />
        <p className="item--name">{this.props.data.name} </p>
        <p className="item--ingridients">{this.props.data.ingridients} </p>
        <button className="item--but" disabled={dis || deleted} onClick={this.removeOneClick}>
          -
        </button>
        <p className="item--number">{this.props.data.number}</p>
        <button className="item--but" onClick={this.addOneClick} disabled={deleted}>
          +
        </button>
        <button
          className={this.props.data.delete ? 'item--but__back' : 'item--but__del'}
          onClick={this.changeDeleteClick}
        >
          {this.props.data.delete ? 'Вернуть' : 'Удалить'}
        </button>
      </li>
    );
  }
}

export default Item;
