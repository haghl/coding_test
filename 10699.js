const seoulDate = new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" });
const dateFormat = new Date(seoulDate).toISOString().split("T");

console.log(dateFormat[0]);
