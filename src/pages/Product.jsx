import React from "react";
import Helmet from "../components/Helmet";
import { useParams } from "react-router-dom";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";
import productData from "../assets/fake-data/products";

const Product = ({product}) => {
  const { label } = useParams();
  // const product = productData.getProductByLabel(props.label);
  // useEffect(() => {
  //   // document.title = `Product: ${product}`
  //   console.log(`/Product/${product}`)
  // }, [product]);
  
  const relatedProducts = productData.getProducts(8)
  
  return <Helmet title={label}>

   <Section>
     <SectionBody>
       {/* {
         product.filter(item => item.label === label).map((item, index) => (
           <div key={index}>
             <h1>{item.title}</h1>
           </div>
         ))
       } */}
       <ProductView product={label} />
       {/* {
        label
        

       } */}
     </SectionBody>
   </Section>
   <Section>
     <SectionTitle>
     Learn more
     </SectionTitle>
     <SectionBody>
       <Grid col={4} mdCol={2} smCol={1} gap={20}>
         {
           relatedProducts.map((item, index) => (
            <ProductCard
            key={index}
            img01={item.image01}
            img02={item.image02}
            name={item.title}
            price={Number(item.price)}
            label={item.label}
          />
           ))
         }
       </Grid>
     </SectionBody>
   </Section>
    </Helmet>;
};

export { Product };
