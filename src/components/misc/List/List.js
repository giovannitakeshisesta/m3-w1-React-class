import React, { Component } from 'react'
import Card from '../Card/Card'
import Button from '../Button/Button'
import Spinner from '../Spinner/Spinner'

class List extends Component {
  state = {
    items: [],
    loading: false
  }

  deleteItem = (id) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  }

  fetchItems = () => {
    this.setState({
      loading: true
    })

    setTimeout(() => {
      this.setState({
        loading: false,
        items: this.props.data
      })
    }, 2000)
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          {!this.state.loading
            ? (this.state.items.map((product, index) => {
                return (
                  <div className="col-3" key={index}>
                    <Card
                      id={product.id}
                      title={product.title}
                      img={product.img}
                      description={product.description}
                      handleDelete={this.deleteItem}
                    />
                  </div>
                )
            }))
            : (
                <div>
                  <Spinner/>
                </div>
              )
          }
        </div>
   
   
        <div className="m-5">
          <Button type="primary" action={this.fetchItems}>GET ITEMS</Button>
        </div>
      </div>
    )
  }
}

export default List
