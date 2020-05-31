const dataStore = [];
let data = {};

function handleSubmit(e) {
  e.preventDefault();

  const blancInputNotif = "upewnij się, że wszystkie pola są wypełnione";
  const noDataNotif = "brak danych";
  const wholeTime = parseInt(e.currentTarget.wholeTime.value);
  const managingTime = parseInt(e.currentTarget.managingTime.value);
  const developmentTime = parseInt(e.currentTarget.developmentTime.value);
  const hoursPerProduct = parseInt(e.currentTarget.hoursPerProduct.value);
  const productPrice = parseInt(e.currentTarget.productPrice.value);
  const tax = parseInt(e.currentTarget.taxes.value);
  const constantCost = parseInt(e.currentTarget.constantCost.value);
  const gettingClientCost = parseInt(e.currentTarget.gettingClientCost.value);
  const materialCost = parseInt(e.currentTarget.materialCost.value);
  const deliveryCost = parseInt(e.currentTarget.deliveryCost.value);

  const producingTime = () => wholeTime - managingTime - developmentTime;
  const productsPerMonth = () => producingTime() - hoursPerProduct;
  const incomBrutto = () => productsPerMonth() * productPrice;
  const costOfRunningCompany = () => tax + constantCost;
  const incomNetto = () =>
    incomBrutto() -
    costOfRunningCompany() -
    gettingClientCost * productsPerMonth() -
    materialCost * productsPerMonth() -
    deliveryCost * productsPerMonth();

  data = {
    wholeTime,
    managingTime,
    developmentTime,
    hoursPerProduct,
    productPrice,
    tax,
    constantCost,
    gettingClientCost,
    materialCost,
    deliveryCost,
  };

  data.producingTime = producingTime();
  data.productsPerMonth = productsPerMonth();
  data.incomBrutto = incomBrutto();
  data.costOfRunningCompany = costOfRunningCompany();
  data.incomNetto = incomNetto();

  if (
    !data.producingTime ||
    !data.productsPerMonth ||
    !data.incomBrutto ||
    !data.costOfRunningCompany ||
    !data.incomNetto
  ) {
    notificationFrontSpan.textContent = blancInputNotif;
    allOutputs.forEach((el) => (el.textContent = noDataNotif));
    return;
  }
  productsPerMonthOutput.textContent = productsPerMonth();
  incomeBruttoOutput.textContent = incomBrutto();
  costOfRunningCompanyOutput.textContent = costOfRunningCompany();
  incomeNettoOutput.textContent = incomNetto();
}

function mirrorStateToLocalStorage() {
  const nameInput = "";
  if (data) {
    data.name = nameInput;
    dataStore.push(data);
    localStorage.setItem("state", JSON.stringify(dataStore));
  }
}

saveAsOutputBtn.addEventListener("click", mirrorStateToLocalStorage);
form.addEventListener("submit", handleSubmit);