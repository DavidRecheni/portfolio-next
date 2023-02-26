import chaintree from '../../../public/images/chaintree.jpg'
import cardviewer from '../../../public/images/cardviewer.jpg'
import portfolio from '../../../public/images/portfolio.jpg'
import swgraph from '../../../public/images/swgraph.jpg'
import gltfviewer from '../../../public/images/gltfviewer.jpg'

const projects=[
  {
    title: 'Chaintree (WIP)',
    description: 'App with Metamask based backend login through signature verification that allows users to create and manage special NFTs',
    tags: ['React', 'Nestjs', 'TypeScript', "Solidity", 'Team project', "Alchemy", "AWS Amplify", "Ethers.js", "Web3.js", "Truffle", "Ganache", "Mongodb", "TypeORM","React query"],
    link: 'https://main.d1m4v20wvlpjin.amplifyapp.com',
    repo: '',
    image: chaintree,
    creationDate: 'In progress..',
  },
  {
    title: 'Portfolio',
    description: 'Personal portfolio built on Nextjs',
    tags: ['React', 'TypeScript', 'Tailwindcss', 'Nextjs', "Framer Motion", "Responsive", "AWS Amplify"],
    link: 'http://davidrecheni.com',
    repo: 'https://github.com/DavidRecheni/portfolio-next',
    image: portfolio,
    creationDate: '26-02-2023',
  },
  {
    title: 'Customizable credit card',
    description: 'Customizable 3d model of a credit card using threejs',
    tags: ['React', 'Threejs', 'TypeScript', 'Tailwindcss', 'vite', 'Netlify'],
    link: 'https://3d-card-viewer.netlify.app/',
    repo: 'https://github.com/DavidRecheni/3d-card-customizable',
    image: cardviewer,
    creationDate: '23-04-2022',
  },
  {
    title: 'Star wars force graph',
    description: '3d force graph of star wars where darker nodes are planets and lighter nodes are movies, and the connections are if the movie has the planet in it. Planets that don\'t appear on any movie are shown in a different cluster',
    tags: ['React', 'GraphQL', "ThreeJs", "AWS Amplify", "Styled components"],
    link: 'https://master.dag66l2ggpz29.amplifyapp.com/',
    repo: 'https://github.com/DavidRecheni/SW-Force-Graph',
    image: swgraph,
    creationDate: '11-06-2021',
  },
  {
    title: 'GLTF viewer',
    description: 'Basic GLTF 3d files viewer using threejs',
    tags: ['React', 'Threejs', "Styled components", "Netlify"],
    link: 'http://simple-react-three-viewer.netlify.app/',
    repo: 'https://github.com/DavidRecheni/react-3d-viewr',
    image: gltfviewer,
    creationDate: '07-03-2021',
  },
]

export default projects