import React from "react";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import mainSliderData from "../assets/fake-data/main-slider";
import { MainSlider } from "../components/MainSlider";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import policy from "../assets/fake-data/policy";
import Grid from "../components/Grid";
import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";
import banner from "../assets/images/banner.png";
import "../sass/index.scss";
const Home = () => {
  return (
    <Helmet title="Home page">
      {/*main slider*/}
      <MainSlider
        data={mainSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />
      {/*end main slider*/}

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <PolicyCard
                  // key={index}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}

      {/* best selling section */}
      <Section>
        <SectionTitle>The most popular products of the week</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                label={item.label}

                // slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end best selling section */}
      {/* new arrival section */}
      <Section>
        <SectionTitle>New products</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                label={item.label}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end new arrival section */}
      {/* baner */}
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="img" />
          </Link>
        </SectionBody>
      </Section>
      {/* end baner */}
      {/* popular products section */}
      <Section>
        <SectionTitle>Popular products</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(12).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                label={item.label}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end popular products section */}

    </Helmet>
  );
};

export { Home };
