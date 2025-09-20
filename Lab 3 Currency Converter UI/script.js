
// conversion rates for usd and eur 
const Yen_to_USD = 0.0068;
const Yen_to_EUR = 0.0063;

function convertYen(){
    const yen = document.getElementById("yenInput").value;

    if (yen === "" || yen <= 0) {
        document.getElementById("result").innerText = " Please enter a valid amount for Yen.";
        return;
    }

    const usd = yen * Yen_to_USD;
    const eur = yen * Yen_to_EUR;

    document.getElementById("result").innerText =
      `${yen} JPY = ${usd.toFixed(4)} USD | ${eur.toFixed(4)} EUR`;
    }