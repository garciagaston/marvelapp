const constants = {
  publicKey: '01b50ab89e21dce3bbc70bb51a3a9af9',
  privateKey: '25e3b3977ca40d33447e7b073ba3678df3876a75',
  apiUrl: 'https://gateway.marvel.com:443/v1/public',
  limit: 20,
  sort: [
    { title: 'Name ASC', action: "NAME_ASC"},
    { title: 'Name DESC', action: "NAME_DESC"},
    { title: '#Comics', action: "COMICS_DESC"},
    { title: '#Stories', action: "STORIES_DESC"},
    { title: '#Events', action: "EVENTS_DESC"},
    { title: '#Series', action: "SERIES_DESC"},
  ],
  actions: {
    SORT_NAME_ASC: "SORT_NAME_ASC",
    SORT_NAME_DESC: "SORT_NAME_DESC",
    SORT_NUMB_COMICS: "SORT_NUMB_COMICS",
    SORT_NUMB_STORIES: "SORT_NUMB_STORIES",
    SORT_NUMB_EVENTS: "SORT_NUMB_EVENTS",
    SORT_NUMB_SERIES: "SORT_NUMB_SERIES",
  },
  searchField: {
    'comics': 'titleStartsWith',
    'creators': 'nameStartsWith',
    'events': 'nameStartsWith',
    'series': 'titleStartsWith',
    'characters': 'nameStartsWith'
  }
}

export default constants
