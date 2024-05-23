import { OpenStreetMapImageryProvider, Ion } from "cesium";
import { ImageryLayer, Viewer } from "resium";
import "cesium/Build/Cesium/Widgets/widgets.css";

Ion.defaultAccessToken = "fuck";

const osmProvider = new OpenStreetMapImageryProvider({
  url: "https://tile.openstreetmap.org/",
});

const fuckCredit = document.createElement("div");

function App() {
  return (
    <>
      <Viewer
        full
        animation={false}
        timeline={false}
        creditContainer={fuckCredit}
        navigationHelpButton={false}
        homeButton={false}
        geocoder={false}
        scene3DOnly={true}
        baseLayerPicker={false}
        fullscreenButton={false}
      >
        <ImageryLayer imageryProvider={osmProvider} />
      </Viewer>
    </>
  );
}

export default App;
