type ExibicaoTuplatype = [string, string, string, AnimaisTuplaType[]];
type AnimaisTuplaType = [string, string, number, boolean];

const EXIBICOES: Array <ExibicaoTuplatype>= [
  ["A1","2024-12-02T08:00:00.000-03:00", "2024-12-02T12:00-03:00", [
      ["🐔", "Cocó", 1.0, true],
      ["🦩", "Flamingo", 12.0, true],
      ["🐧", "Penguin", 6.0, true],
    ]
  ],

  ["B2","2024-12-02T14:00:00.000-03:00","2024-12-02T16:00-03:00", [
      ["🦜", "Paraguaio", 2.0, false]
    ]
  ],
]

export default EXIBICOES