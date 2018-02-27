import {
  capitalize,
  camelCase,
  kebabCase,
} from 'lodash';

const rawPosts = [
  {
    date: 'Jun 10, 2017',
    title: 'ES6 Overview - Arrow Function in Brief',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Jun 17, 2017',
    title: 'ES6 Overview - let, const and Block Scoping',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Jun 20, 2017',
    title: 'ES6 Overview - Promises',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Jun 24, 2017',
    title: 'ES6 Overview - Modules',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Jul 01, 2017',
    title: 'ES6 Overview - Classes',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Jul 08, 2017',
    title: 'ES6 Overview - Template Literals',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Jul 16, 2017',
    title: 'ES6 Overview - Spread / Rest Operator',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Jul 23, 2017',
    title: 'ES6 Overview - New Statments',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Jul 30, 2017',
    title: 'ES6 Overview - Array Methods',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Aug 06, 2017',
    title: 'ES6 Overview - Number Methods',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Aug 13, 2017',
    title: 'ES6 Overview - Object Methods',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Aug 20, 2017',
    title: 'ES6 Overview - Collections',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Aug 27, 2017',
    title: 'ES6 Overview - Iterables & Iterators',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Sep 03, 2017',
    title: 'ES6 Overview - Generators',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Sep 10, 2017',
    title: 'ES6 Overview - Symbols',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Sep 17, 2017',
    title: 'ES6 Overview - Proxy',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Jun 28, 2017',
    title: 'ES6 Overview - Reflect',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Sep 24, 2017',
    title: 'ES6 Overview - Destructuring Assigment',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Oct 01, 2017',
    title: 'ES6 Overview - Object Literal Enhancements',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Oct 08, 2017',
    title: 'ES6 Overview - Subclassable Built-ins',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Oct 15, 2017',
    title: 'ES6 Overview - Tail Call Optimization (TCO)',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Oct 22, 2017',
    title: 'ES6 Overview - Getter',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Oct 29, 2017',
    title: 'ES6 Overview - Setter',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Nov 05, 2017',
    title: 'ES6 Overview - String Methods',
    tagsArr: [ 'ES6', 'JavaScript' ],
  },
  {
    date: 'Jan 03, 2018',
    title: 'Redux Cheatsheet',
    tagsArr: [ 'Redux' ],
  },
];

const posts = rawPosts.map(post => {
  const { title, tagsArr } = post;

  return {
    ...post,
    tags: tagsArr.join(', '),
    link: `/blog/${kebabCase(title)}`,
    component: capitalize(title.charAt(0)) + camelCase(title.slice(1)),
  };
});

export default posts.reverse();
