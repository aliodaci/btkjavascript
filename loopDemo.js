function sayiUret(ustLimit = 49) {
  return Math.ceil(Math.random() * ustLimit);
}

for (let i = 1; i <= 8; i++) {
    console.log("kolon :"+i)
  for (let j = 1; j <= 6; j++) {
    console.log(sayiUret());
  }
}
