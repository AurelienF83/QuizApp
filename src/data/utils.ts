// Fonction de validation pour les adresses IP
export const isValidIP = (input: string, correctAnswer: string, exclude?: number[]): boolean => {
    if (correctAnswer.includes("x")) {
      const baseIP = correctAnswer.split(".x")[0];
      const inputBase = input.substring(0, input.lastIndexOf("."));
      const lastOctet = parseInt(input.split(".")[3], 10);
  
      return inputBase === baseIP && lastOctet >= 0 && lastOctet <= 255 && (!exclude || !exclude.includes(lastOctet));
    } else {
      return input === correctAnswer;
    }
  };