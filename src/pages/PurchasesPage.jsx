import { useEffect } from "react";
import usePurchases from "../hooks/usePurchases.js";
import PurchaseCard from "../components/Purchases/PurchaseCard.jsx";

const PurchasesPage = () => {
  const { purchases, getAllPurchases } = usePurchases();

  useEffect(() => {
    getAllPurchases();
  }, []);

  return (
    <div>
      <h2>Purchases</h2>
      <div>
        {purchases?.map((product) => (
          <PurchaseCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PurchasesPage;
