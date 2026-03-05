const books = [
  {
    id: "1",
    title: "3 Idiots",
    author: "Chetan Bhagat",
    category: "Comedy-Drama",
    rating: 4.9,
    description:
      "A humorous yet emotional journey of three engineering students navigating through academic pressure and societal expectations. " +
      "The story highlights how friendship and passion can shape one’s future. It critiques the flaws in the rigid education system. " +
      "Each character brings a unique perspective to the story. A reminder that true success comes from following your heart.",
    image: "https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: "2",
    title: "Aadujeevitham (Goat Days)",
    author: "Benyamin",
    category: "Fiction",
    rating: 4.6,
    description:
      "A powerful tale of a migrant worker stranded in the harsh deserts of the Middle East. " +
      "It captures the brutal reality of human trafficking and forced labor. The protagonist’s hope keeps him going against all odds. " +
      "The narrative is raw and emotional, drawing you deep into his loneliness. A survival story that stays with you long after.",
    image: "https://m.media-amazon.com/images/M/MV5BMjJiNjk2MzgtYWIzNy00Yzc0LTg4YzUtYjQ5OGZjZTc1YjU0XkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: "3",
    title: "Rekha: The Untold Story",
    author: "Yasser Usman",
    category: "Non-Fiction",
    rating: 4.2,
    description:
      "This biography delves into the complex life of Bollywood icon Rekha. " +
      "From a troubled childhood to sensational headlines, her story is layered and emotional. " +
      "It uncovers the woman behind the glamorous image, filled with resilience and grace. " +
      "A compelling look at the struggles and triumphs of an enigmatic actress.",
    image: "https://m.media-amazon.com/images/I/717XPiT9OPL._UF1000,1000_QL80_.jpg"
  },
  {
    id: "4",
    title: "Bollywood: A History",
    author: "Mihir Bose",
    category: "Non-Fiction",
    rating: 4.0,
    description:
      "A sweeping chronicle of the evolution of Indian cinema from its roots to modern times. " +
      "The book explores how Bollywood shaped and reflected Indian society and politics. " +
      "It uncovers stories behind the stars, filmmakers, and changing trends. A must-read for movie lovers and history buffs alike.",
    image: "https://m.media-amazon.com/images/I/71EqaKoYfSL.jpg"
  },
  {
    id: "5",
    title: "Project Hail Mary",
    author: "Andy Weir",
    category: "Sci-Fi",
    rating: 4.6,
    isbn: "0593135202",
    description:
      "A thrilling science fiction journey about a man who wakes up alone in space with no memory. " +
      "Tasked with saving Earth, he must uncover the truth and complete a nearly impossible mission. " +
      "Packed with clever science, humor, and emotional depth. A gripping adventure from the author of *The Martian*.",
    image: "https://covers.openlibrary.org/b/isbn/0593135202-M.jpg"
  },
  {
    id: "6",
    title: "Ra.One – The Game Begins",
    author: "Jaya Misra",
    category: "Sci-Fi",
    rating: 4.0,
    description:
      "In this action-packed story, a video game villain gains consciousness and enters the real world. " +
      "The line between virtual and reality begins to blur as chaos unfolds. " +
      "It’s a fast-paced tale of technology, danger, and human emotion. A perfect blend of science fiction and drama.",
    image: "https://upload.wikimedia.org/wikipedia/en/5/58/Ra.Oneposter.jpg"
  },
  {
    id: "7",
    title: "Baahubali: Before the Beginning",
    author: "Anand Neelakantan",
    category: "Fantasy",
    rating: 4.5,
    description:
      "A prequel that uncovers the untold origins of the legendary Baahubali saga. " +
      "Set in a richly imagined kingdom, it’s filled with royal intrigue, betrayal, and destiny. " +
      "The story deepens our understanding of key characters and their past. An epic tale of power and sacrifice.",
    image: "https://m.media-amazon.com/images/M/MV5BODU0MWJhNjEtNDNiMC00NzcyLWIxZDYtNTc1ZDQ4NzRlMTIyXkEyXkFqcGc@._V1_.jpg"
  },
  {
    id: "8",
    title: "Ponniyin Selvan",
    author: "Kalki Krishnamurthy",
    category: "Fantasy",
    rating: 4.7,
    description:
      "An epic historical novel set in ancient Tamil Nadu, rich in political intrigue and drama. " +
      "It follows noble warriors, secret missions, and royal conspiracies. " +
      "The characters are deep, the settings grand, and the plot captivating. A timeless classic of Indian literature.",
    image: "https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/ponniyin-selvan-whirlwinds-part-2_FrontImage_760.jpg"
  },
  {
    id: "9",
    title: "The Story of My Experiments with Truth",
    author: "M.K. Gandhi",
    category: "Biography",
    rating: 4.6,
    description:
      "A deeply personal autobiography by Mahatma Gandhi, tracing his journey of truth and non-violence. " +
      "He reflects on his spiritual, political, and moral development. " +
      "The book offers rare insights into his mindset and decisions. An inspiring read for seekers of truth and justice.",
    image: "https://images.penguinrandomhouse.com/cover/9780744021295"
  },
  {
    id: "10",
    title: "Raja Ravi Varma: Painter of Colonial India",
    author: "Deepanjana Pal",
    category: "Biography",
    rating: 4.5,
    description:
      "This biography explores the life of Raja Ravi Varma, a pioneer in Indian art. " +
      "He fused traditional themes with European techniques, changing how Indians saw their gods and heroes. " +
      "The book offers insight into colonial India and the politics of art. A vivid portrait of a cultural icon.",
    image: "https://m.media-amazon.com/images/I/81LOO-pKsFL._UF1000,1000_QL80_.jpg"
  },
  {
    id: "11",
    title: "Shantaram",
    author: "Gregory David Roberts",
    category: "Thriller",
    rating: 4.4,
    isbn: "0312330537",
    description:
      "An epic tale of an escaped convict who finds a second life in the underworld of Bombay. " +
      "The novel blends action, philosophy, and deep emotion. " +
      "It explores crime, love, and redemption in a vivid setting. A gripping read with unforgettable characters.",
    image: "https://covers.openlibrary.org/b/isbn/0312330537-M.jpg"
  },
  {
    id: "12",
    title: "The Godfather",
    author: "Mario Puzo",
    category: "Thriller",
    rating: 4.7,
    isbn: "0451205766",
    description:
      "A legendary tale of the Corleone mafia family and their rise to power. " +
      "It’s a story of loyalty, betrayal, and the cost of ambition. " +
      "Filled with tension and unforgettable dialogue. A timeless classic that redefined crime fiction.",
    image: "https://covers.openlibrary.org/b/isbn/0451205766-M.jpg"
  },
  {
    id: "13",
    title: "A Mind for Numbers",
    author: "Barbara Oakley",
    category: "Education",
    rating: 4.6,
    isbn: "039916524X",
    description:
      "This guide breaks down how anyone can learn math and science effectively. " +
      "It uses brain research to offer practical techniques. " +
      "From focused learning to spaced repetition, it makes difficult concepts manageable. A must-read for students and learners.",
    image: "https://covers.openlibrary.org/b/isbn/039916524X-M.jpg"
  },
  {
    id: "14",
    title: "Make It Stick",
    author: "Peter C. Brown",
    category: "Education",
    rating: 4.7,
    isbn: "0674729013",
    description:
      "Backed by research, this book reveals how real learning happens. " +
      "It challenges traditional study methods and promotes more effective techniques. " +
      "You’ll learn how to remember, apply, and retain knowledge better. Essential for students, teachers, and lifelong learners.",
    image: "https://covers.openlibrary.org/b/isbn/0674729013-M.jpg"
  }
];

export default books;