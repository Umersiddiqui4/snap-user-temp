import logo from './logo.svg';
import './App.css';
import './global.css';
import { useGetUsers } from './lib/queryAndMutation';
import AllUsers from './screens/AllUsers';
import UserCard from './screens/usecards';

function App() {

  const {
    data: creators,
    isLoading: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);



  if(isErrorCreators){
    return <h1>{isErrorCreators}</h1>
  }
  if(!creators){
    return <h1>{creators}</h1>
  }
  console.log(isUserLoading,'loading');

  return (
    <div className=" user-grid main ">
       <div className="w-full mt-8 container">
        <h3 className=" alluser "> <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1.875C9.56497 1.875 6.375 5.06497 6.375 9C6.375 12.935 9.56497 16.125 13.5 16.125C17.435 16.125 20.625 12.935 20.625 9C20.625 5.06497 17.435 1.875 13.5 1.875ZM8.625 9C8.625 6.30761 10.8076 4.125 13.5 4.125C16.1924 4.125 18.375 6.30761 18.375 9C18.375 11.6924 16.1924 13.875 13.5 13.875C10.8076 13.875 8.625 11.6924 8.625 9Z" fill="white"/>
<path d="M22.5 3.375C21.8787 3.375 21.375 3.87868 21.375 4.5C21.375 5.12132 21.8787 5.625 22.5 5.625C24.364 5.625 25.875 7.13604 25.875 9C25.875 10.864 24.364 12.375 22.5 12.375C21.8787 12.375 21.375 12.8787 21.375 13.5C21.375 14.1213 21.8787 14.625 22.5 14.625C25.6066 14.625 28.125 12.1066 28.125 9C28.125 5.8934 25.6066 3.375 22.5 3.375Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.51722 20.2806C7.61628 19.0811 10.441 18.375 13.5 18.375C16.559 18.375 19.3837 19.0811 21.4828 20.2806C23.55 21.4619 25.125 23.2652 25.125 25.5C25.125 27.7348 23.55 29.5381 21.4828 30.7194C19.3837 31.9189 16.559 32.625 13.5 32.625C10.441 32.625 7.61628 31.9189 5.51722 30.7194C3.45 29.5381 1.875 27.7348 1.875 25.5C1.875 23.2652 3.45 21.4619 5.51722 20.2806ZM6.63354 22.2341C4.90051 23.2244 4.125 24.4211 4.125 25.5C4.125 26.5789 4.90051 27.7756 6.63354 28.7659C8.33473 29.738 10.76 30.375 13.5 30.375C16.24 30.375 18.6653 29.738 20.3665 28.7659C22.0995 27.7756 22.875 26.5789 22.875 25.5C22.875 24.4211 22.0995 23.2244 20.3665 22.2341C18.6653 21.262 16.24 20.625 13.5 20.625C10.76 20.625 8.33473 21.262 6.63354 22.2341Z" fill="white"/>
<path d="M27.241 19.9011C26.6341 19.768 26.0342 20.1521 25.9011 20.759C25.768 21.3659 26.1521 21.9658 26.759 22.0989C27.9476 22.3595 28.8974 22.8072 29.5243 23.3202C30.1521 23.8339 30.375 24.3355 30.375 24.75C30.375 25.1261 30.1941 25.5676 29.6954 26.0308C29.193 26.4975 28.4212 26.9287 27.4256 27.2284C26.8307 27.4076 26.4936 28.0351 26.6728 28.63C26.8519 29.2249 27.4794 29.562 28.0744 29.3829C29.3082 29.0114 30.4114 28.4367 31.2267 27.6793C32.0456 26.9186 32.625 25.9179 32.625 24.75C32.625 23.4529 31.9136 22.3681 30.9492 21.5789C29.9839 20.789 28.6838 20.2175 27.241 19.9011Z" fill="white"/>
</svg>
  All Users</h3>
        {isUserLoading && !creators ? (
       <img className='loader' src='https://cdn.dribbble.com/users/42176/screenshots/4709515/kf_1-9-2_simple-loading-boxes.gif' alt='loading'  />
         
        ) : (
          <div className="grid 2xl:grid-cols-2 gap-6" >
            {creators?.documents.map((creator) => (
              
                <UserCard key={creator.id} user={creator} />
              
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
