export type TProductDetails = {
    card: {
      id: string;
      name: string;
      image: string;
      describe: string;
      price: number | string;
    };
    onBack: () => void;
  };