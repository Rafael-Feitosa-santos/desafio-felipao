let herói = "Homem Aranha"
let xp = 6250

if (xp <= 1000) {
    console.log(`O herói de nome ${herói} está no de nível Ferro.`);
}
else if (xp >= 1001 && xp <= 2000) {
    console.log(`O herói de nome ${herói} está no de nível Bronze.`);
}
else if (xp >= 2001 && xp <= 5000) {
    console.log(`O herói de nome ${herói} está no de nível Prata.`);
}
else if (xp >= 6001 && xp <= 7000) {
    console.log(`O herói de nome ${herói} está no de nível Ouro.`);
}
else if (xp >= 7001 && xp <= 8000) {
    console.log(`O herói de nome ${herói} está no de nível Platina Diamante.`);
}
else if (xp >= 8001 && xp <= 9000) {
    console.log(`O herói de nome ${herói} está no de nível Ascendente.`);
}
else if (xp >= 9001 && xp <= 10000) {
    console.log(`O herói de nome ${herói} está no de nível Imortal.`);
}
else {
    console.log(`O herói de nome ${herói} está no de nível Radiante.`);
}
