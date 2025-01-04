import React from "react";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-center text-2xl">GitHub User Search</h1>
      </header>
      <main className="py-8">
        <Search />
      </main>
    </div>
  );
};

export default App;
