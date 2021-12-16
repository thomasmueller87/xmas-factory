const checkProductMinLength = (name, stringLength) =>
  name.length > stringLength;

const isPriceValid = (price) => price > 0;
const hasValidCategory = (category) => category !== "";

const isValidEmail = (email) =>
  email.includes("@") && email.split("@")[1].includes(".");

function isValid(product) {
  return (
    checkProductMinLength(product.name, 3) &&
    isPriceValid(product.price) &&
    hasValidCategory(product.category) &&
    isValidEmail(product.email)
  );
}

export default isValid;
