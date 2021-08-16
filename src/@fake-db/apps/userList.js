import mock from "../mock"
const users = [
  {
    id: 268,
    username: "adoptionism744",
    avatar: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    email: "angelo@sashington.com",
    name: "Angelo Sashington",
    dob: "28 January 1998",
    gender: "female",
    country: "Bolivia",
    role: "admin",
    status: "active",
    is_verified: true,
    department: "sales",
    company: "WinDon Technologies Pvt Ltd",
    mobile: "+65958951757",
    website: "https://rowboat.com/insititious/Angelo",
    languages_known: ["English", "Arabic"],
    contact_options: ["email", "message", "phone"],
    location: {
      add_line_1: "A-65, Belvedere Streets",
      add_line_2: "",
      post_code: "1868",
      city: "New York",
      state: "New York",
      country: "United States"
    },
    social_links: {
      twitter: "https://twitter.com/adoptionism744",
      facebook: "https://www.facebook.com/adoptionism664",
      instagram: "https://www.instagram.com/adopt-ionism744/",
      github: "https://github.com/madop818",
      codepen: "https://codepen.io/adoptism243",
      slack: "@adoptionism744"
    },
    permissions: {
      users: {
        read: true,
        write: false,
        create: false,
        delete: false
      },
      posts: {
        read: true,
        write: true,
        create: true,
        delete: true
      },
      comments: {
        read: true,
        write: false,
        create: true,
        delete: false
      }
    }
  },
  {
    id: 269,
    username: "demodulation463",
    avatar: require("../../assets/img/portrait/small/avatar-s-2.jpg"),
    email: "rubi@ortwein.com",
    name: "Rubi Ortwein",
    country: "Syria",
    role: "user",
    status: "blocked",
    is_verified: false,
    department: "development"
  },
  {
    id: 270,
    username: "undivorced341",
    avatar: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
    email: "donnette@charania.com",
    name: "Donnette Charania",
    country: "Iraq",
    role: "staff",
    status: "deactivated",
    is_verified: true,
    department: "sales"
  },
  {
    id: 271,
    username: "bumbo426",
    avatar: require("../../assets/img/portrait/small/avatar-s-12.jpg"),
    email: "ardith@duffett.com",
    name: "Ardith Duffett",
    country: "Estonia",
    role: "user",
    status: "active",
    is_verified: false,
    department: "sales"
  },
  {
    id: 272,
    username: "ectodactylism214",
    avatar: require("../../assets/img/portrait/small/avatar-s-16.jpg"),
    email: "antone@berman.com",
    name: "Antone Berman",
    country: "India",
    role: "user",
    status: "blocked",
    is_verified: true,
    department: "sales"
  },
  {
    id: 273,
    username: "panathenaic825",
    avatar: require("../../assets/img/portrait/small/avatar-s-18.jpg"),
    email: "maryann@gour.com",
    name: "Maryann Gour",
    country: "Solomon Islands",
    role: "user",
    status: "active",
    is_verified: true,
    department: "sales"
  },
  {
    id: 274,
    username: "reptilious612",
    avatar: require("../../assets/img/portrait/small/avatar-s-7.jpg"),
    email: "holli@vanduyne.com",
    name: "Holli Vanduyne",
    country: "Lebanon",
    role: "staff",
    status: "active",
    is_verified: true,
    department: "sales"
  },
  {
    id: 275,
    username: "candid910",
    avatar: require("../../assets/img/portrait/small/avatar-s-26.jpg"),
    email: "juanita@sartoris.com",
    name: "Juanita Sartoris",
    country: "Papua New Guinea",
    role: "staff",
    status: "active",
    is_verified: true,
    department: "management"
  },
  {
    id: 276,
    username: "ferrotungsten928",
    avatar: require("../../assets/img/portrait/small/avatar-s-20.jpg"),
    email: "lia@morga.com",
    name: "Lia Morga",
    country: "Malaysia",
    role: "user",
    status: "active",
    is_verified: true,
    department: "development"
  },
  {
    id: 277,
    username: "fibered345",
    avatar: require("../../assets/img/portrait/small/avatar-s-14.jpg"),
    email: "theo@quatrevingt.com",
    name: "Theo Quatrevingt",
    country: "Nepal",
    role: "user",
    status: "active",
    is_verified: true,
    department: "sales"
  },
  {
    id: 278,
    username: "nonenclosure246",
    avatar: require("../../assets/img/portrait/small/avatar-s-10.jpg"),
    email: "lynwood@flud.com",
    name: "Lynwood Flud",
    country: "Russia",
    role: "user",
    status: "active",
    is_verified: true,
    department: "sales"
  },
  {
    id: 279,
    username: "uncandied531",
    avatar: require("../../assets/img/portrait/small/avatar-s-13.jpg"),
    email: "kaitlin@kahola.com",
    name: "Kaitlin Kahola",
    country: "Latvia",
    role: "user",
    status: "active",
    is_verified: true,
    department: "sales"
  },
  {
    id: 280,
    username: "errancy403",
    avatar: require("../../assets/img/portrait/small/avatar-s-4.jpg"),
    email: "alvin@car.com",
    name: "Alvin Car",
    country: "Yemen",
    role: "admin",
    status: "active",
    is_verified: true,
    department: "sales"
  },
  {
    id: 281,
    username: "renillidae759",
    avatar: require("../../assets/img/portrait/small/avatar-s-16.jpg"),
    email: "justin@jacquelin.com",
    name: "Justin Jacquelin",
    country: "Turkmenistan",
    role: "user",
    status: "blocked",
    is_verified: true,
    department: "management"
  },
  {
    id: 282,
    username: "jellylike89",
    avatar: require("../../assets/img/portrait/small/avatar-s-20.jpg"),
    email: "chloe@tague.com",
    name: "Chloe Tague",
    country: "Pakistan",
    role: "staff",
    status: "active",
    is_verified: true,
    department: "development"
  },
  {
    id: 283,
    username: "ocular772",
    avatar: require("../../assets/img/portrait/small/avatar-s-6.jpg"),
    email: "zola@tauarez.com",
    name: "Zola Tauarez",
    country: "Dominica",
    role: "admin",
    status: "deactivated",
    is_verified: true,
    department: "sales"
  },
  {
    id: 284,
    username: "oxgang923",
    avatar: require("../../assets/img/portrait/small/avatar-s-11.jpg"),
    email: "wm@cieszynski.com",
    name: "Wm Cieszynski",
    country: "South Korea",
    role: "user",
    status: "active",
    is_verified: true,
    department: "sales"
  }
]

// GET DATA
mock.onGet("/api/users/list").reply(200, users)
