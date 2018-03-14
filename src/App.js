import React, { Component } from 'react';
import './App.css';
import Item from './Item';
import ProgressItem from './ProgressItem';
import axios from 'axios';

class App extends Component {
  state = {
    order: {
      pizza1: {
        name: 'Маргарита',
        ingridients:
          'C помидорами, моцареллой (иногда дополнительно посыпается пармезаном), оливковым маслом и базиликом. Разновидность Маргериты Margherita bianca без помидоров.',
        image: 'https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png',
        number: 1,
        delete: true
      },
      pizza2: {
        name: 'Маргарита',
        ingridients:
          'C помидорами, моцареллой (иногда дополнительно посыпается пармезаном), оливковым маслом и базиликом. Разновидность Маргериты Margherita bianca без помидоров.',
        image: 'https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png',
        number: 1,
        delete: false
      },
      pizza3: {
        name: 'Маргарита',
        ingridients:
          'C помидорами, моцареллой (иногда дополнительно посыпается пармезаном), оливковым маслом и базиликом. Разновидность Маргериты Margherita bianca без помидоров.',
        image: 'https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png',
        number: 1,
        delete: false
      }
    },
    orderProgressList: {
      order1: {
        id: 123654789,
        progress: 0
      },
      order2: {
        id: 987456321,
        progress: 0
      }
    }
  };

  addOne = key => {
    const order = { ...this.state.order };
    order[key].number++;
    this.setState({ order });
  };

  removeOne = key => {
    const order = { ...this.state.order };
    order[key].number--;
    this.setState({ order });
  };
  changeDelete = key => {
    const order = { ...this.state.order };
    order[key].delete = !order[key].delete;
    this.setState({ order });
  };
  getProgress = key => {
    const orderProgressList = { ...this.state.orderProgressList };
    axios.get('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new').then(res => {
      orderProgressList[key].progress = res.data;
      this.setState({ orderProgressList });
    });
  };

  render() {
    return (
      <div className="App">
        <ul className="order">
          {Object.keys(this.state.order).map(key => {
            return (
              <Item
                key={key}
                data={this.state.order[key]}
                addOne={this.addOne}
                removeOne={this.removeOne}
                changeDelete={this.changeDelete}
                index={key}
              />
            );
          })}
        </ul>
        <ul className="progress">
          {Object.keys(this.state.orderProgressList).map(key => {
            return (
              <ProgressItem
                key={key}
                data={this.state.orderProgressList[key]}
                getProgress={this.getProgress}
                index={key}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
