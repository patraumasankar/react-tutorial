import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterProps from './components/CounterProps';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';


function App() {
  return (
    <div className="App">

      {/* This is functional component */}
      {/* <Greet name='Umsankar' heroName='fullname'>
      This is children
     </Greet>
     <Greet name='sibani' heroName='gfname'/>
     <Greet name='kanha' heroName='nickname'/> */}

      {/* This is class component */}
      {/* <Welcome name='Umsankar' heroName='fullname'/>
     <Welcome name='sibani' heroName='gfname'/>
     <Welcome name='kanha' heroName='nickname'/> */}

      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline /> */}
      {/* <Form /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <PureComp /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <PortalDemo /> */}

      {/* <ErrorBoundary>
        <Hero heroName={'Batman'} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={'Superman'} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={'Joker'} />
      </ErrorBoundary> */}

      {/* <ClickCounter />
      <HoverCounter /> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo /> */}

      {/* <User name={'Umasankar'}/> */}
      {/* <User name={(isLoggedIn) => isLoggedIn? 'Kanha': 'Guest'}/> */}

      {/* <CounterProps render={(count, incrementCount) => (
        <ClickCounterTwo
          count={count}
          incrementCount={incrementCount} />
      )} />

      <CounterProps render={(count, incrementCount) => (
        <HoverCounterTwo
          count={count}
          incrementCount={incrementCount} />
      )} /> */}

      {/* <UserProvider value='Umasankar'>
        <ComponentC />
      </UserProvider> */}

      {/* <PostList /> */}

      {/* <PostForm /> */}

      <div>
        Welcome to react tutorial
      </div>

    </div>
  );
}

export default App;
