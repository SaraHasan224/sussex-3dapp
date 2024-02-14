import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Media, Modal, ModalBody } from "reactstrap";
import CartContext from "../../providers/cart";
import MasterProductDetail from "./ProductDetail";

const ProductItem = ({ product, addCart, backImage, des, addWishlist, cartClass, productDetail, addCompare, title }) => {
  // eslint-disable-next-line
  const cartContext = useContext(CartContext);
  const currency = "PKR"//curContext.state;
  const plusQty = cartContext.plusQty;
  const minusQty = cartContext.minusQty;
  const quantity = cartContext.quantity;
  const setQuantity = cartContext.setQuantity;
  console.log("product: ", product)
  const [image, setImage] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const uniqueTags = [];

  const onClickHandle = (img) => {
    setImage(img);
  };

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const clickProductDetail = () => {
    const titleProps = product.title.split(" ").join("");
    // router.push(`/product-details/${product.id}` + "-" + `${titleProps}`);
  };

  const variantChangeByColor = (imgId, product_images) => {
    product_images.map((data) => {
      if (data.image_id == imgId) {
        setImage(data.src);
      }
    });
  };
  return (
    <div className="product-box product-wrap">
      <div className="img-wrapper">
        <div className="lable-block">
          {product.new === true ? <span className="lable3">new</span> : ""}
          {product.sale === true ? <span className="lable4">on sale</span> : ""}
        </div>
        <div className="front" onClick={clickProductDetail}>
          <Media src={`${image ? image : product.images[0].src}`} className="img-fluid" alt="" />
        </div>
        {backImage ? (
          product.images[1] === "undefined" ? (
            "false"
          ) : (
            <div className="back" onClick={clickProductDetail}>
              <Media src={`${image ? image : product.images[1].src}`} className="img-fluid m-auto" alt="" />
            </div>
          )
        ) : (
          ""
        )}

        <div className={cartClass}>
          <button title="Add to cart" onClick={addCart}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
          <a href={null} title="Quick View" onClick={toggle}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </a>
        </div>
        {product.images ? (
          <ul className="product-thumb-list">
            {product.images.map((img, i) => (
              <li className={`grid_thumb_img ${img.src === image ? "active" : ""}`} key={i}>
                <a href={null} title="Add to Wishlist">
                  <Media src={`${img.src}`} alt="wishlist" onClick={() => onClickHandle(img.src)} />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <MasterProductDetail product={product} productDetail={productDetail} currency={currency} uniqueTags={uniqueTags} title={title} des={des} variantChangeByColor={variantChangeByColor} />
      <Modal isOpen={modal} toggle={toggle} className="modal-lg quickview-modal" centered>
        <ModalBody>
          <Row>
            <Col lg="6" xs="12">
              <div className="quick-view-img">
                <Media src={`${product.variants && image ? image : product.images[0].src}`} alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6" className="rtl-text">
              <div className="product-right">
                <button type="button" data-dismiss="modal" className="btn-close btn btn-secondary" aria-label="Close" onClick={toggle}></button>
                <h2> {product.title} </h2>
                <h3>
                  {currency.symbol}
                  {product.price}
                </h3>
                {product.variants ? (
                  <ul className="color-variant">
                    {uniqueTags ? (
                      <ul className="color-variant">
                        {product.type === "jewellery" || product.type === "nursery" || product.type === "beauty" || product.type === "electronics" || product.type === "goggles" || product.type === "watch" || product.type === "pets" ? (
                          ""
                        ) : (
                          <>
                            {uniqueTags.map((vari, i) => {
                              return <li className={vari.color} key={i} title={vari.color} onClick={() => variantChangeByColor(vari.image_id, product.images)}></li>;
                            })}
                          </>
                        )}
                      </ul>
                    ) : (
                      ""
                    )}
                  </ul>
                ) : (
                  ""
                )}
                <div className="border-product">
                  <h6 className="product-title">product details</h6>
                  <p>{product.description}</p>
                </div>
                <div className="product-description border-product">
                  {product.size ? (
                    <div className="size-box">
                      <ul>
                        {product.size.map((size, i) => {
                          return (
                            <li key={i}>
                              <a href={null}>{size}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                  <h6 className="product-title">quantity</h6>
                  <div className="qty-box">
                    <div className="input-group">
                      <span className="input-group-prepend">
                        <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">
                          <i className="fa fa-angle-left"></i>
                        </button>
                      </span>
                      <input type="text" name="quantity" value={quantity} onChange={changeQty} className="form-control input-number" />
                      <span className="input-group-prepend">
                        <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(product)} data-type="plus" data-field="">
                          <i className="fa fa-angle-right"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-buttons">
                  <button className="btn btn-solid" onClick={() => addCart(product)}>
                    add to cart
                  </button>
                  <button className="btn btn-solid" onClick={clickProductDetail}>
                    View detail
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProductItem;
