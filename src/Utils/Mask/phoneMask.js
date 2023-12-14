const PATTERN = /\D/g;

const getInputNumberValue = (value) => {
  return value.replace(PATTERN, "");
};

export const handlhponeInput = (event) => {
  const input = event.target;
  let inputNumberValue = getInputNumberValue(input.value);
  let formatedInputValue = "";
  if (!inputNumberValue) {
    return (input.value = "");
  }

  if (["7", "8", "9"].indexOf(inputNumberValue[0]) > -1) {
    if (inputNumberValue[0] === "9") {
      inputNumberValue = "7" + inputNumberValue;
    }

    const firstSymbols = inputNumberValue[0] === "8" ? "8" : "+7";
    formatedInputValue = firstSymbols + " ";

    if (inputNumberValue.length > 1) {
      formatedInputValue += "(" + inputNumberValue.substring(1, 4);
    }

    if (inputNumberValue.length >= 5) {
      formatedInputValue += ") " + inputNumberValue.substring(4, 7);
    }

    if (inputNumberValue.length >= 8) {
      formatedInputValue += "-" + inputNumberValue.substring(7, 9);
    }

    if (inputNumberValue.length >= 10) {
      formatedInputValue += "-" + inputNumberValue.substring(9, 11);
    }
  } else {
    formatedInputValue = "+" + inputNumberValue.substring(0, 16);
  }
  input.value = formatedInputValue;
};
