import Container from './Layout/Container'
import Sidebar from './Layout/Sidebar'
import Widget from './Layout/Widget'
import Content from './Layout/Content'
function App() {
  return (
    // Container
  <Container>
    {/* Sidebar */}
    <Sidebar/>
    {/* Feed */}
    <Content/>
    {/* Widgets */}
    <Widget/>
   
  </Container>
  );
}

export default App;
