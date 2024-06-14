import { createBrowserHistory as createHistory } from "history";
import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Login from "./Login";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressList } from "./address/AddressList";
import { AddressShow } from "./address/AddressShow";
import { AddressBookCreate } from "./addressBook/AddressBookCreate";
import { AddressBookEdit } from "./addressBook/AddressBookEdit";
import { AddressBookList } from "./addressBook/AddressBookList";
import { AddressBookShow } from "./addressBook/AddressBookShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";
import { CountryCreate } from "./country/CountryCreate";
import { CountryEdit } from "./country/CountryEdit";
import { CountryList } from "./country/CountryList";
import { CountryShow } from "./country/CountryShow";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import Dashboard from "./pages/Dashboard";
import { StateCreate } from "./state/StateCreate";
import { StateEdit } from "./state/StateEdit";
import { StateList } from "./state/StateList";
import { StateShow } from "./state/StateShow";
import { theme } from "./theme/theme";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserList } from "./user/UserList";
import { UserShow } from "./user/UserShow";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"Address Management Service"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="Address"
            list={AddressList}
            edit={AddressEdit}
            create={AddressCreate}
            show={AddressShow}
          />
          <Resource
            name="Country"
            list={CountryList}
            edit={CountryEdit}
            create={CountryCreate}
            show={CountryShow}
          />
          <Resource
            name="AddressBook"
            list={AddressBookList}
            edit={AddressBookEdit}
            create={AddressBookCreate}
            show={AddressBookShow}
          />
          <Resource
            name="State"
            list={StateList}
            edit={StateEdit}
            create={StateCreate}
            show={StateShow}
          />
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
