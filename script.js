document.addEventListener("DOMContentLoaded", function () {
    const inputValue = document.getElementById("inputValue");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const convertButton = document.getElementById("convertButton");
    const resultDisplay = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const value = parseFloat(inputValue.value);
        if (!isNaN(value)) {
            const from = fromUnit.value;
            const to = toUnit.value;

            if (from === to) {
                resultDisplay.textContent = "Please select different units.";
                return;
            }

            let convertedValue;

            switch (from) {
                case "celsius":
                    convertedValue = convertCelsius(value, to);
                    break;
                case "fahrenheit":
                    convertedValue = convertFahrenheit(value, to);
                    break;
                case "kelvin":
                    convertedValue = convertKelvin(value, to);
                    break;
                case "rankine":
                    convertedValue = convertRankine(value, to);
                    break;
                default:
                    resultDisplay.textContent = "Invalid units selected.";
                    return;
            }

            resultDisplay.textContent = `${value} ${from.toUpperCase()} is equal to ${convertedValue.toFixed(2)} ${to.toUpperCase()}`;
        } else {
            resultDisplay.textContent = "Please enter a valid numerical value.";
        }
    });

    function convertCelsius(value, toUnit) {
        switch (toUnit) {
            case "fahrenheit":
                return (value * 9/5) + 32;
            case "kelvin":
                return value + 273.15;
            case "rankine":
                return (value + 273.15) * 9/5;
            default:
                return value;
        }
    }

    function convertFahrenheit(value, toUnit) {
        switch (toUnit) {
            case "celsius":
                return (value - 32) * 5/9;
            case "kelvin":
                return (value - 32) * 5/9 + 273.15;
            case "rankine":
                return value + 459.67;
            default:
                return value;
        }
    }

    function convertKelvin(value, toUnit) {
        switch (toUnit) {
            case "celsius":
                return value - 273.15;
            case "fahrenheit":
                return (value - 273.15) * 9/5 + 32;
            case "rankine":
                return value * 9/5;
            default:
                return value;
        }
    }

    function convertRankine(value, toUnit) {
        switch (toUnit) {
            case "celsius":
                return (value - 491.67) * 5/9;
            case "fahrenheit":
                return value - 459.67;
            case "kelvin":
                return value * 5/9;
            default:
                return value;
        }
    }
});






