// Koppla in encore-API:t och hantera fel. / Connect the encore API and handle errors.
document.querySelector("#load").addEventListener("click", async () => {
  try {
    // TODO: fetch('/api/encore'), kontrollera response.ok, läs JSON / check response.ok, read JSON.
    const response = await fetch("/api/encore");
    if (!response.ok) throw new Error("HTTP " + response.status);
    const track = await response.json();
    track.playedAt = new Date().toLocaleDateString();
    document.querySelector("#encore").textContent = track.title + " spelades " + track.playedAt;
  } catch (error) {
    document.querySelector("#status").textContent = error.message="Kunde inte hämta låt :(";
  }
});
