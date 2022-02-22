import classNames from "classnames";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useTheme from "./hooks/useTheme";
import Views from "./views";

const App = () => {
  const { isDark } = useTheme();
  return (
    <>
      <Helmet>
        <body className={classNames({ dark: isDark, "bg-gray-900": isDark })} />
      </Helmet>
      <div className="App mx-0">
        <Router>
          <Switch>
            <Route component={Views} />
          </Switch>
        </Router>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default App;
