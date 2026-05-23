const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <div className="greeting-banner">
        <h2>{greeting}</h2>
        <p>Explorá nuestra colección y encontrá lo que buscás.</p>
      </div>

      <div className="products-placeholder">
        <p>📦 El catálogo de productos se mostrará aquí próximamente.</p>
      </div>
    </div>
  );
};

export default ItemListContainer;
