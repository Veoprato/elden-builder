import React from 'react'

import Auth from '../utils/auth'
// import useBuilds from '../hooks/useBuilds';


const Home = () => {
    // const { error, loading, data } = useBuilds();
    const loggedIn = Auth.loggedIn();
    // const builds = data?.getAllBuilds || [];

  
    // if(loading) return <div>Loading...</div>
    // if(error) return <div>AHHHHHHHHHHHHHHHHHHHHHHHHHHH</div>

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              builds={builds}
              title="Some Feed for Thought(s)..."
            />
          )} */}
        </div>
      </div>
    </main>
  )
}

export default Home;