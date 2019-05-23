import Home from "./components/Home";
import Post from "./components/Post";
import Products from "./components/Products";

export default [
  {
    ...Home,
    path: '/',
    exact: true
  },
  {
    ...Post,
    path: '/posts',
    exact: true,
  },
	{
		...Products,
		path: '/products',
		exact: true,
	}
]
