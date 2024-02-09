type FeatureProps = {
  title: string;
  children: React.ReactNode;
};

export const Features = ({ title, children }: FeatureProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

type MainFeatureProps = {
  image: string;
  text: string;
};

const MainFeature = ({ image, text }: MainFeatureProps) => {
  return <div>Main Feature</div>;
};

type FeatureGridProps = {
  features: {
    icon: React.ReactNode;
    tittle: string;
    text: string;
  }[];
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return <div>FeatureGrid</div>;
};

type FeatureCardsProps = {
  features: {
    icon: React.ReactNode;
    tittle: string;
    text: string;
  }[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return <div>FeatureCards</div>;
};
