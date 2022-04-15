import logo from './logo.svg';
import './App.css';
function Header(props){
  return <header>
  <h1><a href='/'>{props.title}</a></h1>
</header>
}
function Nav(props){ /* 컴포넌트 함수 이름의 첫번째는 대문자 */
  const lis = []
  for(let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
  }
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}
function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}
function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  return (
    <div>
      <Header title="REACT"></Header> {/* component 컴포넌트 사용자 정의 태그 */}
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
