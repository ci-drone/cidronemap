const dict = [
  {k: 'NO', v: 0, human: "Non"}, // Don't resize
  {k: 'YES', v: 1, human: "Oui"}, // Resize on server
  {k: 'YESINBROWSER', v: 2, human: "Oui (Dans le navigateur)"} // Resize on browser
];

const exp = {
  all: () => dict.map(d => d.v),
  fromString: (s) => {
    let v = parseInt(s);
    if (!isNaN(v) && v >= 0 && v <= 2) return v;
    else return 0;
  },
  toHuman: (v) => {
    for (let i in dict){
      if (dict[i].v === v) return dict[i].human;
    }
    throw new Error("Valeur invalide: " + v);
  }
};
dict.forEach(en => {
  exp[en.k] = en.v;
});

export default exp;
