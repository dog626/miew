/**
 * Residue type.
 *
 * Predefined acid or created with HET, HETNAM, etc.
 *
 * @param {string} name            - Short name, either standard (ALA, MET, etc.) or non-standard one.
 * @param {string} fullName        - Full residue name.
 * @param {string} letterCode      - 1-letter symbol.
 *
 * @exports ResidueType
 * @constructor
 */
class ResidueType {
  constructor(name, fullName, letterCode) {
    this._name = name;
    this._fullName = fullName;
    this.letterCode = letterCode;
    this.flags = 0x0000;
  }

  getName() {
    return this._name;
  }

  // DO NOT EDIT MANUALLY! Autogenerated from residue_types.csv by residue_types.py.
  static StandardTypes = {
    /* eslint-disable no-magic-numbers */
    ALA: new ResidueType('ALA', 'Alanine', 'A'),
    ARG: new ResidueType('ARG', 'Arginine', 'R'),
    ASN: new ResidueType('ASN', 'Asparagine', 'N'),
    ASP: new ResidueType('ASP', 'Aspartic Acid', 'D'),
    CYS: new ResidueType('CYS', 'Cysteine', 'C'),
    GLN: new ResidueType('GLN', 'Glutamine', 'Q'),
    GLU: new ResidueType('GLU', 'Glutamic Acid', 'E'),
    GLY: new ResidueType('GLY', 'Glycine', 'G'),
    HIS: new ResidueType('HIS', 'Histidine', 'H'),
    ILE: new ResidueType('ILE', 'Isoleucine', 'I'),
    LEU: new ResidueType('LEU', 'Leucine', 'L'),
    LYS: new ResidueType('LYS', 'Lysine', 'K'),
    MET: new ResidueType('MET', 'Methionine', 'M'),
    PHE: new ResidueType('PHE', 'Phenylalanine', 'F'),
    PRO: new ResidueType('PRO', 'Proline', 'P'),
    PYL: new ResidueType('PYL', 'Pyrrolysine', 'O'),
    SEC: new ResidueType('SEC', 'Selenocysteine', 'U'),
    SER: new ResidueType('SER', 'Serine', 'S'),
    THR: new ResidueType('THR', 'Threonine', 'T'),
    TRP: new ResidueType('TRP', 'Tryptophan', 'W'),
    TYR: new ResidueType('TYR', 'Tyrosine', 'Y'),
    VAL: new ResidueType('VAL', 'Valine', 'V'),
    A: new ResidueType('A', 'Adenine', 'A'),
    C: new ResidueType('C', 'Cytosine', 'C'),
    G: new ResidueType('G', 'Guanine', 'G'),
    I: new ResidueType('I', 'Inosine', 'I'),
    T: new ResidueType('T', 'Thymine', 'T'),
    U: new ResidueType('U', 'Uracil', 'U'),
    DA: new ResidueType('DA', 'Adenine', 'A'),
    DC: new ResidueType('DC', 'Cytosine', 'C'),
    DG: new ResidueType('DG', 'Guanine', 'G'),
    DI: new ResidueType('DI', 'Inosine', 'I'),
    DT: new ResidueType('DT', 'Thymine', 'T'),
    DU: new ResidueType('DU', 'Uracil', 'U'),
    '+A': new ResidueType('+A', 'Adenine', 'A'),
    '+C': new ResidueType('+C', 'Cytosine', 'C'),
    '+G': new ResidueType('+G', 'Guanine', 'G'),
    '+I': new ResidueType('+I', 'Inosine', 'I'),
    '+T': new ResidueType('+T', 'Thymine', 'T'),
    '+U': new ResidueType('+U', 'Uracil', 'U'),
    WAT: new ResidueType('WAT', 'Water', ''),
    H2O: new ResidueType('H2O', 'Water', ''),
    HOH: new ResidueType('HOH', 'Water', ''),
    DOD: new ResidueType('DOD', 'Water', ''),
    UNK: new ResidueType('UNK', 'Unknown', ''),
    UNL: new ResidueType('UNL', 'Unknown Ligand', ''),
    /* eslint-enable no-magic-numbers */
  };

  /**
   * Enumeration of residue flag values.
   *
   * @enum {number}
   * @readonly
   */
  static Flags = {
    // Amino acids
    /** Amino acid residue */
    PROTEIN: 0x0001,
    /** Basic amino acid residue */
    BASIC: 0x0002,
    /** Acidic amino acid residue */
    ACIDIC: 0x0004,
    /** Polar uncharged side chain amino acid residue */
    POLAR: 0x0008,
    /** Non-polar hydrophobic side chain amino acid residue */
    NONPOLAR: 0x0010,
    /** Aromatic amino acid residue */
    AROMATIC: 0x0020,

    // Nucleic acids

    /** Nucleic residue */
    NUCLEIC: 0x0100,
    /** Purine nucleic residue */
    PURINE: 0x0200,
    /** Pyrimidine nucleic residue */
    PYRIMIDINE: 0x0400,
    /** DNA */
    DNA: 0x0800,
    /** RNA */
    RNA: 0x1000,

    /** Water */
    WATER: 0x10000,
  };
}

// Flag combinations
function _addFlag(flag, list) {
  for (let i = 0, n = list.length; i < n; ++i) {
    const res = ResidueType.StandardTypes[list[i]];
    if (res) {
      res.flags |= flag;
    }
  }
}

const { Flags } = ResidueType;
_addFlag(Flags.WATER, ['WAT', 'H2O', 'HOH', 'DOD']);

_addFlag(Flags.PROTEIN, [
  'ALA', 'ARG', 'ASN', 'ASP', 'CYS', 'GLY', 'GLU', 'GLN', 'HIS', 'ILE',
  'LEU', 'LYS', 'MET', 'PHE', 'PRO', 'PYL', 'SEC', 'SER', 'THR', 'TRP',
  'TYR', 'VAL',
]);
_addFlag(Flags.BASIC, ['ARG', 'HIS', 'LYS']);
_addFlag(Flags.ACIDIC, ['ASP', 'GLU']);
_addFlag(Flags.POLAR, ['ASN', 'CYS', 'GLN', 'SER', 'THR', 'TYR']);
_addFlag(Flags.NONPOLAR, ['ALA', 'ILE', 'LEU', 'MET', 'PHE', 'PRO', 'TRP', 'VAL', 'GLY']);
_addFlag(Flags.AROMATIC, ['PHE', 'TRP', 'TYR']);

_addFlag(Flags.NUCLEIC, [
  'A', 'G', 'I', 'DA', 'DG', 'DI', '+A', '+G', '+I',
  'C', 'T', 'U', 'DC', 'DT', 'DU', '+C', '+T', '+U',
]);
_addFlag(Flags.PURINE, ['A', 'G', 'I', 'DA', 'DG', 'DI', '+A', '+G', '+I']);
_addFlag(Flags.PYRIMIDINE, ['C', 'T', 'U', 'DC', 'DT', 'DU', '+C', '+T', '+U']);
_addFlag(Flags.DNA, ['DA', 'DG', 'DI', 'DC', 'DT', 'DU']);
_addFlag(Flags.RNA, ['A', 'G', 'I', 'C', 'T', 'U']);
// Table of kdHydrophobicity
const hydro = {
  ILE: 4.5,
  VAL: 4.2,
  LEU: 3.8,
  PHE: 2.8,
  CYS: 2.5,
  MET: 1.9,
  ALA: 1.8,
  GLY: -0.4,
  THR: -0.7,
  SER: -0.8,
  TRP: -0.9,
  TYR: -1.3,
  PRO: -1.6,
  HIS: -3.2,
  GLU: -3.5,
  GLN: -3.5,
  ASP: -3.5,
  ASN: -3.5,
  LYS: -3.9,
  ARG: -4.5,
};

function _addParam(param, list) {
  const keys = Object.keys(list);
  for (let i = 0, n = keys.length; i < n; ++i) {
    const key = keys[i];
    const value = list[key];
    ResidueType.StandardTypes[key][param] = value;
  }
}

_addParam('hydrophobicity', hydro);

export default ResidueType;
