import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../feature/BasketSlice";
import commerce from "../../lib/Ecommerce";
import { useParams } from "react-router-dom";
import { decrement, increment, reset } from "../../feature/CounterSlice";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { GrBasket } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../css/product-detail.css";
import alertify from "alertifyjs";

const ProductDetails = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  let params = useParams();
  const productId = params.productId;
  const [productDetail, setProductDetail] = useState({});
  const [productName, setProductName] = useState("");
  const [productName2, setProductName2] = useState("");
  const [color, setColor] = useState("");
  const [memory, setMemory] = useState("");
  const [property, setProperty] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [colorID, setColorID] = useState("");
  const [memoryID, setMemoryID] = useState("");
  const [variantGroup0, setVariantGroup0] = useState("");
  const [variantGroup1, setVariantGroup1] = useState("");

  const addBasket = (e) => {
    e.preventDefault();
    let detailobj = {};
    detailobj[variantGroup0] = colorID;
    detailobj[variantGroup1] = memoryID;
    dispatch(
      addItem({ id: productDetail.id, quantity: count, detail: detailobj })
    );
    dispatch(reset());
    alertify.success('Məhsul uğurla əlavə edildi!');
  };

  useEffect(() => {
    productDetail &&
      Object.keys(productDetail).length === 0 &&
      commerce.products.retrieve(productId).then((product) => {
        setProductDetail(product);
        setVariantGroup0(product.variant_groups[0].id);
        setVariantGroup1(product.variant_groups[1].id);
        setProductName2(product.name);
        setColor(product.variant_groups[0].options[0].name);
        setMemory(product.variant_groups[1].options[0].name);
        setColorID(product.variant_groups[0].options[0].id);
        setMemoryID(product.variant_groups[1].options[0].id);
      });
  }, [productId, productDetail]);

  const reduce = () => {
    if (count > 1) {
      dispatch(decrement());
    }
  };

  useEffect(() => {
    setProductName(productName2 + " " + color + " " + memory);
  }, [productName2, color, memory]);

  useEffect(() => {
    property.length > 0 && property[0] === "color"
      ? (function () {
          setColor(property[1]);
          setColorID(property[2]);
        })()
      : (function () {
          setMemory(property[1]);
          setMemoryID(property[2]);
        })();
  }, [property]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            loop={true}
            spaceBetween={2}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {productDetail.assets &&
              productDetail.assets.map((asset, index) => (
                <SwiperSlide key={index}>
                  <img src={asset.url} alt="assets" />{" "}
                </SwiperSlide>
              ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {productDetail.assets &&
              productDetail.assets.map((asset, index) => (
                <SwiperSlide key={index}>
                  <img src={asset.url} alt="assets" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="col-md-6">
          <p className="prod-name">{productName}</p>
          <div>
            <p className="prod-cost">{productDetail.price?.formatted} ₼</p>
          </div>
          <div className="line"></div>
          {productDetail.variant_groups &&
            productDetail.variant_groups.map((variantGroup, index) => (
              <div className="variants my-3" key={index}>
                <span className="option-name" key={index}>
                  {variantGroup.name}:
                </span>
                {variantGroup.options.map((option, optionIndex) => (
                  <div
                    onClick={() =>
                      setProperty([variantGroup.name, option.name, option.id])
                    }
                    className={
                      variantGroup.name === "color"
                        ? `${option.name} color `
                        : `${option.name} memory`
                    }
                    key={optionIndex}
                  >
                    {variantGroup.name !== "color" && option.name}
                  </div>
                ))}
                <br />
              </div>
            ))}
          <div className="solid"></div>
          <div className="addBasket">
            <button className="quantity-button" onClick={reduce}>
              -
            </button>
            <span className="count">{count}</span>
            <button
              onClick={() => dispatch(increment())}
              className="increment quantity-button"
            >
              +
            </button>
          </div>
          <div className="add-button" onClick={addBasket}>
            <GrBasket />
            <span>Səbətə at</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
