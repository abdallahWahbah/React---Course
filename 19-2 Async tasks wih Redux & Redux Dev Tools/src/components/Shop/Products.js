import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA =
[
  {
    id: 'p1',
    price: 11,
    title: "Book 1",
    description: "The first book I bought"
  },
  {
    id: 'p2',
    price: 22,
    title: "Book 2",
    description: "The second book I bought"
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map(item =>(
          <ProductItem
            key = {item.id}
            id = {item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
        {/* <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        /> */}
      </ul>
    </section>
  );
};

export default Products;
