/**
 * DNA is a sequence of the nucleotides 'A', 'T', 'G', and 'C'. For instance, "ATGGCCCTGTGG" is a DNA sequence. "ATGATG"
 * A grouping of three nucleotides translates into an amino acid. For instance, using the `dnaToAminoAcidMap` below, "ATA" -translates into-> "I". Here, "ATA" is a grouping of three nucleotides, and "I" is an amino acid.
 * Using this translation, the DNA sequence "ATGGCCCTGTGG" -translates into-> the amino acid sequence "MALW".
 * A sequence of amino acids is a protein. For instance, "MALW" is a protein.
 * "_" is a special character that means STOP instead of an amino acid. It means that the translation should stop.
 * 
 * Please implement the function `dnaToProtein`. It should take in a DNA sequence, translate it, and return a protein.
 * - The translation should start at the beginning of the DNA sequence
 * - It should stop when a "_" (STOP) is encountered
 * 
 * In the "Program Output" tab, there are buttons to run the `main` function below, and the test cases.
 */


const dnaToAminoAcidMap = {
  'ATA':'I', 'ATC':'I', 'ATT':'I', 'ATG':'M',
  'ACA':'T', 'ACC':'T', 'ACG':'T', 'ACT':'T',
  'AAC':'N', 'AAT':'N', 'AAA':'K', 'AAG':'K',
  'AGC':'S', 'AGT':'S', 'AGA':'R', 'AGG':'R',
  'CTA':'L', 'CTC':'L', 'CTG':'L', 'CTT':'L',
  'CCA':'P', 'CCC':'P', 'CCG':'P', 'CCT':'P',
  'CAC':'H', 'CAT':'H', 'CAA':'Q', 'CAG':'Q',
  'CGA':'R', 'CGC':'R', 'CGG':'R', 'CGT':'R',
  'GTA':'V', 'GTC':'V', 'GTG':'V', 'GTT':'V',
  'GCA':'A', 'GCC':'A', 'GCG':'A', 'GCT':'A',
  'GAC':'D', 'GAT':'D', 'GAA':'E', 'GAG':'E',
  'GGA':'G', 'GGC':'G', 'GGG':'G', 'GGT':'G',
  'TCA':'S', 'TCC':'S', 'TCG':'S', 'TCT':'S',
  'TTC':'F', 'TTT':'F', 'TTA':'L', 'TTG':'L',
  'TAC':'Y', 'TAT':'Y', 'TAA':'_', 'TAG':'_',
  'TGC':'C', 'TGT':'C', 'TGA':'_', 'TGG':'W',
}

const dna = "ATGGCCCTGTGGATGCGCCTCCTGCCCCTGCTGGCGCTGCTGGCCCTCTGGGGACCTGACCCAGCCGCAGCCTTTGTGAACCAACACCTGTGCGGCTCACACCTGGTGGAAGCTCTCTACCTAGTGTGCGGGGAACGAGGCTTCTTCTACACACCCAAGACCCGCCGGGAGGCAGAGGACCTGCAGGTGGGGCAGGTGGAGCTGGGCGGGGGCCCTGGTGCAGGCAGCCTGCAGCCCTTGGCCCTGGAGGGGTCCCTGCAGAAGCGTGGCATTGTGGAACAATGCTGTACCAGCATCTGCTCCCTCTACCAGCTGGAGAACTACTGCAAC"
// const dna = "ATGGCCCTGTGGATGCGCCTCCTGCCCCTGCTGGCGCTGCTGGCCCTCTGGGGACCTGACCCAGCCGCAGCCTTTGTGAACCAACACCTGTGCGGCTCACACCTGGTGGAAGCTCTCTACCTAGTGTGCGGGGAACGAGGCTTCTTCTACACACCCAAGACCCGCCGGGAGGCAGAGGACCTGCAGGTGGGGCAGGTGGAGCTGGGCGGGGGCCCTGGTGCAGGCAGCCTGCAGCCCTTGGCCCTGGAGGGGTCCCTGCAGAAGCGTGGCATTGTGGAACAATGCTGTACCAGCATCTGCTCCCTCTACCAGCTGGAGAACTACTGCAAC"
// const dna = "ATGA";

/**
 * Assume all characters will be uppercase and valid, but string could be empty
 * return "Parsing error" if no underscore.
 * Every three characters is an amino accid which translates to a protein
 * dnaToAminoAcidMap contains the corresponding proteins
 * 
 * Loop over the dna string
 *   Get each amino acid
 * concatenate the amino acid to a string to give a translation
 * Check if the amino translation is empty and return ""
 * at the _ amino character i return the protein or if not return Parsing error
 *   split the translation by the _ character and check if the split has more than one return
 * 
 */

export const dnaToProtein = (dna: string): string => {
  let aminoAcids = '';
  for (let i = 0; i < dna.length; i += 3) {
    aminoAcids += (dnaToAminoAcidMap[`${dna[i]}${dna[i+1]}${dna[i+2]}`]);
  }
  if (aminoAcids === '') {
    return '';
  }
  let proteinCollector = aminoAcids.split('_');
  if (proteinCollector.length > 1) {
    return proteinCollector[0];
  } else {
    return 'Parsing error';
  }
}

const protein = "MALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCN";

const aminoAcidTypes = {
  "charged": ["R", "H", "K", "D", "E"],
  "polar": ["S", "T", "N", "Q"],
  "hydrophobic": ["A", "V", "I", "L", "M", "F", "Y", "W"],
  "special": ["C", "U", "G", "P"]
}
/**
 * We need to count {
  "charged"
  "polar"
  "hydrophobic"
  "special"
 * 
 * Iterate over the protein, find the type, then increment the correct type.
 * For each character, check what type it belongs to
}

*/

// const 

export const main = () => {
  console.log(dnaToProtein(dna))
}