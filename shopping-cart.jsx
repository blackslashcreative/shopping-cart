// Ex 3 - write out all items with their stock number
// provide a button and use onClick={moveToCart} to move 1 item into the Shopping Cart
// use React.useState to keep track of items in the Cart.
// use React.useState to keep track of Stock items
// list out the Cart items in another column
function MyStore({ stockitems }) {
  const [cart, setCart] = React.useState([]);
  const [stock, setStock] = React.useState(stockitems);
  const { Button } = ReactBootstrap;
  // event apple:2
  const moveToCart = (id, e) => {
    console.log(id);
    let [name, num] = e.target.innerHTML.split(":"); // innerHTML should be format name:3
    // use newStock = stock.map to find "name" and decrease number in stock by 1
    // only if instock is > 0 do we move item to Cart and update stock
    if (num <= 0) return;
    let newStock = stock.map((item, index) => {
      if (item.name == name) item.instock--;
      return item;
    });
    let newCart = [...cart, name];
    setStock(newStock);
    setCart(newCart);
  };
  const updatedList = stock.map((item, index) => {
    return (
      <Button onClick={e => moveToCart({index}, e)} key={index}>
        {item.name}:{item.instock}
      </Button>
    );
  });
  const cartList = cart.map((item, index) => {
    return (
      <Button key={index}>
        {item}
      </Button>
    );
  });
  // note that React needs to have a single Parent
  return (
    <>
      <ul style={{ listStyleType: "none" }}>{updatedList}</ul>
      <h1>Shopping Cart</h1>
      <ul style={{ listStyleType: "none" }}>{cartList}</ul>
    </>
  );
}
const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];
ReactDOM.render(
  <MyStore stockitems={menuItems} />,
  document.getElementById("root")
);
