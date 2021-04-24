import React from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";

import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";

function App() {
  return (
    <Grid className="app" columns="equal" style={{ background: "#eee" }}>
      <ColorPanel />
      <SidePanel />
      <Grid.Column style={{ marginLeft: "320px" }}>
        <Messages />
      </Grid.Column>
      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
}

export default App;