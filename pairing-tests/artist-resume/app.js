// Class definition

const artists = []

class Artist {

  name
  stageName = ''
  address
  email
  tel
  skills = []
  lang = []
  bio = ''
  taxCode
  bankAccounts

  constructor(name, stageName, address, email, tel, skills, lang, bio, taxCode, bankAccounts) {
    this.name = name,
    this.stageName = stageName,
    this.address = address,
    this.email = email,
    this.tel = tel,
    this.skills = skills,
    this.lang = lang,
    this.bio = bio,
    this.taxCode = taxCode,
    this.bankAccounts = bankAccounts
    artists.push(this)
  }

  skillsList() {
    return this.skills.map(skill => skill.skill)
  }

  langsList() {
    return this.lang.map(lang => lang.lang)
  }

  summarise() {
    const skillsList = this.skillsList().join(', ')
    const langList = this.langsList().join(', ')

    console.log(`${this.stageName === '' ? this.name : this.stageName}, ${this.address[0].city}`, '\n', `Skills: ${skillsList}`, '\n', `Languages: ${langList}`,'\n', `Bio: ${this.bio}`)
  }
}

// Examples

const cw = new Artist(
  'Christoph Waltz',
  '',
  [{
    type: 'home',
    contact: 'Christoph Waltz',
    street: 'Something 123',
    city: 'Vienna',
    country: 'AT'
  },
  {
    type: 'billing',
    contact: 'Lewis',
    street: 'Something else 123',
    city: 'London',
    country: 'UK'
  }],
  'something@something.com',
  '+43123456789',
  [{
    skill: 'horseback riding',
    level: 'proficient',
    notes: ''
  }],
  [{
    lang: 'German',
    level: 'native',
    notes: ''
  }, {
    lang: 'English',
    level: 'fluent',
    notes: ''
  }],
  'Christoph Waltz is an Austrian-German actor. He is known for his works with American filmmaker Quentin Tarantino, receiving acclaim for portraying SS-Standartenführer Hans Landa in Inglourious Basterds (2009) and bounty hunter Dr. King Schultz in Django Unchained (2012). For each performance, he won an Academy Award, a BAFTA Award, and a Golden Globe Award for Best Supporting Actor.',
  '123456',
  [{
    type: 'personal',
    number: '09876543'
  }]
)

const ap = new Artist(
  'Aaron Paul',
  '',
  [{
    type: 'home',
    contact: 'Aaron',
    street: 'Something 123',
    city: 'Los Angeles',
    country: 'USA'
  },
  {
    type: 'billing',
    contact: 'Charlie',
    street: 'Something else 123',
    city: 'Los Angeles',
    country: 'USA'
  }],
  'somethingnew@somethingnew.com',
  '+1123456789',
  [{
    skill: 'martial arts',
    level: 'not great',
    notes: ''
  }],
  [{
    lang: 'English',
    level: 'fluent',
    notes: ''
  }],
  'Aaron Paul was born Aaron Paul Sturtevant in Emmett, Idaho, to Darla (Haynes) and Robert Sturtevant, a retired Baptist minister. While growing up, Paul took part in church programs, and performed in plays. He attended Centennial High School in Boise, Idaho. It was there, in eighth grade, that Aaron decided he wanted to become an actor. ',
  '654321',
  [{
    type: 'billing',
    number: '0915125213'
  }]
)

// console.log(cw)

// cw.summarise()
// ap.summarise()

// console.log(artists)

// Search function

function search(type, value) {
  const matches = []

  if (type === 'lang') {
    artists.forEach(artist => {
      artist.langsList().includes(value) ? matches.push(artist.name) : ''
    })
  } else if (type === 'skill') {
    artists.forEach(artist => {
      artist.skillsList().includes(value) ? matches.push(artist.name) : ''
    })
  }

  return matches
}


console.log(search('lang', 'English'))
console.log(search('skill', 'martial arts'))