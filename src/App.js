import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D',
          id: 1
        },
        {
          price: 14999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww',
          id: 2
        },
        {
          price: 98999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    const updatedProducts = this.state.products.map((prod) => {
      if (prod.id === product.id) {
        return { ...prod, qty: prod.qty + 1 };
      }
      return prod;
    });

    this.setState({
      products: updatedProducts,
    });
  };

  handleDecreaseQuantity = (product) => {
    const updatedProducts = this.state.products.map((prod) => {
      if (prod.id === product.id && prod.qty > 0) {
        return { ...prod, qty: prod.qty - 1 };
      }
      return prod;
    });

    this.setState({
      products: updatedProducts,
    });
  };

  handleDeleteProduct = (id) => {
    const updatedProducts = this.state.products.filter((product) => product.id !== id);

    this.setState({
      products: updatedProducts,
    });
  };

  getCartCount = () => {
   const {products}=this.state;
   let count=0;
   products.map((product) => {
    count=count+product.qty
   })
   return count;
  };
  getCartTotal = () => {
    const{products}=this.state;
    let totalcount=0;
    products.map((product) => {
      totalcount=totalcount+product.qty*product.price
    })
    return totalcount;

  }

  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize:20,padding:10}}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
