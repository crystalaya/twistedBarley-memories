const container = document.querySelector(".container");
const memory = [
  { name: "Remembering Michael Griggs", image: "images/Griggs.jpg" }
];

const showMemory = () => {
  let output = "";
  memory.forEach(
    ({ name, image }) =>
      (output += `              
              <div class="card">
                <div class="card--title"}>${name}</div>
                <img class="card--avatar" src=${image} />
                <div class="card_btns">
                <a href="https://twistedbarley.square.site/?fbclid=IwAR3LNudz8EA0AXg9zAkwm7QKGwp1PFszHKmY6ARST0Bj1IYDAa7vi7UVR7w" class="donate_btn">Donate</a>
                <a href="https://www.facebook.com/Griggs1989?__tn__=K-R&eid=ARCGEE9wcLMhxeUElrS0uOeNKZ8Y1HjjCArtsINVtuMTE3vM1Cgek9APD0MbfcfXYvO3C4Q8_pQ4vixn&fref=mentions&__xts__[0]=68.ARC7NM-fyn_TzIijDs_QiETmMWYs8WmblLdiVwfEMKxSSDRNQkmBL4j-I3B8PqJTz4ff4bGvkhy2TaSzEePCXYfXp2eAhUqOna32UF5REqdpTUouPD9OGDrh05DMT_VVNnntRugAmvO5nKd29qV4MVqzLC1WHu7DjkqbaIz1riUkYhpmZ9l6Hh25AtnqdrJ2adahfCVGhUeL4aCNgPQ72f8C6Tm7JMSCcnC2Y4RAfL5VXcx1-bYTRdxVYpfcerttEC0PiAy3bGWWsrMcBdDEaJ-uVVsWZdFyjFdapcPpe-U00I1Pgygn-ruAb__w_XPfX2gNiJOyQTzpk4Y0ZOaPRI4CYov7" class="griggs_btn">Griggs FB</a>
                </div>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showMemory);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
