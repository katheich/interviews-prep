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
  }

  summarise() {
    const skillsList = this.skills.map(skill => skill.skill).join(', ')
    const langList = this.lang.map(lang => lang.lang).join(', ')

    console.log(`${this.stageName === '' ? this.name : this.stageName}, ${this.address[0].city}`, '\n', `Skills: ${skillsList}`, '\n', `Languages: ${langList}`,'\n', `Bio: ${this.bio}`)
  }

}

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

// console.log(cw)

cw.summarise()