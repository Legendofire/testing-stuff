import Accordion from './Accordion';


const App = () => {

  const products = [
    {
      title:"Chocolate Chip Cookies",
      image:"https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1-e1549147195343.jpg",
      body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente minima libero adipisci animi temporibus. Quaerat tempora expedita accusamus repellendus dolor, dignissimos iure perspiciatis eligendi dicta repudiandae impedit. Praesentium, nulla"
    },    {
      title:"Chocolate Chip Cookies",
      image:"https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1-e1549147195343.jpg",
      body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente minima libero adipisci animi temporibus. Quaerat tempora expedita accusamus repellendus dolor, dignissimos iure perspiciatis eligendi dicta repudiandae impedit. Praesentium, nulla"
    },    {
      title:"Chocolate Chip Cookies",
      image:"https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1-e1549147195343.jpg",
      body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente minima libero adipisci animi temporibus. Quaerat tempora expedita accusamus repellendus dolor, dignissimos iure perspiciatis eligendi dicta repudiandae impedit. Praesentium, nulla"
    }
  ]

  return (
    <div className="App">
      {products.map((product, index) =>(        
        <Accordion
        {...product}
        // if the props that your component depends on (such as title, image and body in this case) are identically named as the object that you are passing in, you case use the spread operator "..." ---> THE NAME OF THE PROPERTIES IN THE COMPONENT HAVE TO MATCH THE KEY NAMES ON THE OBJECT YOU ARE PASSING

        key={index}
        // title={product.title}
        // image={product.image}
        // body={product.body}
        />
        ))}
    </div>
    
  );
}

export default App;


// To toggle something, you just set it equal to itself with the "!" symbol in front of it