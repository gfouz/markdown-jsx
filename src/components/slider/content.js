import gio from '../../assets/giov.jpg'
import redux from '../../assets/redux.svg'
import graph from '../../assets/graphql.svg'
import next from '../../assets/next.svg'
import react from '../../assets/react.svg'

const authorImage = {
  position: "relative",
  top:    "16px",
  left: "-92px",
  width: "100px",
  height:"100px",
  borderRadius: "5px"
};
const reactImage = {
  position: "relative",
  top: "10px",
  width:"80px",
  height: "80px"
}
const graphqlImage = {
  position:"relative",
  top:"16px"
}
const bioText = {
  position:"relative",
  bottom: "40px",
  color:"#666666"
}
const nextText = {
  position: "relative",
  top: "-20px",
  color:"#15465b"
}
const reduxText = {
  position: "relative",
  color:"#15465b"
}
const reactText = {
  color: "#777777"
}
const biography = `
I use modern JavaScript frameworks such as React and
Vue to create single page application or full static
sites so that among my skills are HTML, CSS, SCSS and 
JAVASCRIPT. And i am not afraid of getting out of the
comfort zone and trying out new things.
And of course i enjoy learning new ideas and concepts.
`;
const aboutNext = `
 It's super fast With the help of Server-side rendering and static-site generation  
 loads the site blazing fast. It's SEO friendly, you can customize your own
 tags to improve your Search Engine Optimisation.
 Wide features out of the box: minifying javascript, doing code splitting, lazy loading,
 prefetching assets and much more...
`;
const aboutReact = `
  React has a lot to offer. Faster development with components, provides
  excellent app performance thanks to Virtual DOM, and has a great community. 
  It enjoys the support of powerful companies.
  React's popularity has been increasing over the years,
  which is great news for everyone using it.
`;
const aboutRedux = `
  Redux is a state management library for front end applications.
  Developers commonly use it with React through the react-redux package,
  but it can also stand alone – so you can use it in any front end framework or library, 
  including Vanilla JavaScript.
`;
const aboutGraphql = `
  GraphQL is a query language and server-side runtime for application programming 
  interfaces (APIs) that prioritizes giving clients exactly the data they request 
  and no more. 
`;
const functions = `
     You have seen quite a lot of JavaScript already, and now you are ready for functions.
Soon you will see that you have been using functions already, but now it is time
to learn how to start writing your own. Functions are a great building block that
will reduce the amount of code you will need in your app. You can call a function
whenever you need it, and you can write it as a kind of template with variables. So,
depending on how you've written it, you can reuse it in many situations.
They do require you to think differently about the structure of your code and this
can be hard, especially in the beginning. Once you have got the hang of this way of
thinking, functions will really help you to write nicely structured, reusable, and low-
maintenance code. Let's dive into this new abstraction layer!
`;
const profile = 'WEB DEVELOPER';
const email = 'gfouz1975@gmail.com';

export  const content = [
   {
    title:"",
    description: "React is a javascript library created in 2014 by...",
    author:"Giovani Fouz Jiménez.",
    cardImage: authorImage,
    textStyles: bioText,
    text: biography,
    profile,
    email,
    url: gio
  },
  {
  	title:"REDUX",
  	description: "agnostic library to manage global state",
    text: aboutRedux,
    textStyles: reduxText,
  	url: redux
  },
  {
  	title:"GRAPHQL",
  	description: "this is our second slider image of our carrusel",
    cardImage: graphqlImage,
    text: aboutGraphql,
  	url: graph
  },
  {
  	title:"NEXT JS",
  	description: "this is our third slider image of our carrusel",
    textStyles: nextText,
    text: aboutNext,
  	url: next
  },
  {
    title:"",
    description: "React is a javascript library created in 2014 by...",
    cardImage: reactImage,
    textStyles: reactText,
    text: aboutReact,
    url: react
  },
  
 
]