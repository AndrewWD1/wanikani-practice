export const exampleKanji = {
  id: 444,
  object: "kanji",
  url: "https://api.wanikani.com/v2/subjects/444",
  data_updated_at: "2022-06-17T23:33:50.789827Z",
  data: {
    created_at: "2012-02-27T22:41:23.000000Z",
    level: 1,
    slug: "人",
    hidden_at: null,
    document_url: "https://www.wanikani.com/kanji/%E4%BA%BA",
    characters: "人",
    meanings: [{ meaning: "Person", primary: true, accepted_answer: true }],
    auxiliary_meanings: [],
    readings: [
      {
        type: "onyomi",
        primary: true,
        reading: "にん",
        accepted_answer: true,
      },
      {
        type: "onyomi",
        primary: true,
        reading: "じん",
        accepted_answer: true,
      },
      {
        type: "kunyomi",
        primary: false,
        reading: "ひと",
        accepted_answer: false,
      },
      {
        type: "kunyomi",
        primary: false,
        reading: "と",
        accepted_answer: false,
      },
    ],
    component_subject_ids: [9],
    amalgamation_subject_ids: [
      2475, 2476, 2477, 2478, 2479, 2488, 2502, 2582, 2604, 2632, 2655, 2674,
      2691, 2715, 2719, 2782, 2887, 2989, 2995, 3014, 3061, 3069, 3141, 3202,
      3232, 3254, 3264, 3356, 3358, 3402, 3407, 3412, 3420, 3452, 3540, 3606,
      3621, 3699, 3708, 3724, 3748, 3793, 3862, 3898, 3899, 3907, 3936, 4130,
      4153, 4158, 4203, 4257, 4305, 4344, 4365, 4385, 4433, 4909, 4964, 4982,
      4985, 5014, 5144, 5224, 5474, 5510, 5524, 5733, 6029, 6154, 6209, 6260,
      6283, 6450, 6613, 6870, 7218, 7462, 7465, 7517, 7560, 7757, 7783, 8005,
      8255, 8384, 8551, 8604, 8659, 8735, 8805, 8987, 9042,
    ],
    visually_similar_subject_ids: [445],
    meaning_mnemonic:
      "Remember how the radical version of this kanji meant <radical>person</radical> because it's a person walking from the side with their arms down? Well this is a <kanji>person</kanji> too!",
    meaning_hint: "Know the radicals, and you shall know the kanji.",
    reading_mnemonic:
      "Only one <kanji>person</kanji> at <reading>Nin</reading>tendo (<ja>にん</ja>) complained about the new <reading>jean</reading>s (<ja>じん</ja>) policy, and that person was you.",
    reading_hint:
      "Imagine how angry you were about the policy. You'll have to come up with something to be angry about yourself (pick something that would actually make you angry, like maybe you're only allowed to wear cut off short-shorts jeans at Nintendo now), but if you pick something good, you'll definitely remember the two readings for this. Just remember you're working at <reading>Nin</reading>tendo, and the policy has to be something about <reading>jean</reading>s. Then, imagine yourself as the only <kanji>person</kanji> complaining and everyone else in their dumb jeans (or lack-thereof) shaking their head at you because you're being a fool.",
    lesson_position: 30,
    spaced_repetition_system_id: 2,
  },
} as const;
