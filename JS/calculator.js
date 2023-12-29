function calculate() {
  const sunlightHours = parseFloat(document.getElementById("hours").value);
  const efficiencyFactor = 0.15;
  const panelWattage = 300;

  const energyGenerated = sunlightHours * efficiencyFactor * panelWattage;
  const formattedResult = energyGenerated.toFixed(2);
  if (formattedResult > 0) {
    document.getElementById(
      "result"
    ).innerText = `Estimated energy generated: ${formattedResult} kWh per day`;
  } else {
    document.getElementById("result").innerText = `Please enter a valid number`;
  }
}
