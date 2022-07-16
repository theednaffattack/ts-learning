export function generatePlateNumber() {
  const randomNumber = (x: number) => ~~(Math.random() * x);
  const randomLetter = () =>
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"][randomNumber(26)];
  const randomNumberAsString = (x: number) => randomNumber(x) + "";

  return (
    randomNumberAsString(10) +
    randomNumberAsString(10) +
    randomNumberAsString(10) +
    "-" +
    randomLetter() +
    randomLetter() +
    randomLetter()
  );
}
