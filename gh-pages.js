import { publish } from 'gh-pages';

publish(
    'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/paduerst/pd-svelte-test.git',
    user: {
      name: 'Peter Duerst',
      email: 'peterad12@gmail.com'
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);