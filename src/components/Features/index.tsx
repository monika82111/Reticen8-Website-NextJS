import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-8 md:py-10 lg:py-18 bg-blue-50">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="We believe in the integrity of data and the importance of safeguarding information from unauthorized modifications. Our solutions ensure that your critical data remains secure, unaltered, and protected from the evolving threats of today’s digital landscape"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
