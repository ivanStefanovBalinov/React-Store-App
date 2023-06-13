const useCalculateDiscount = () => {
  const calculateDiscount = (price, discountPercentage) => {
    const result = price - (discountPercentage / 100) * price;
    return result.toFixed(2);
  };
  return calculateDiscount;
};

export default useCalculateDiscount;
