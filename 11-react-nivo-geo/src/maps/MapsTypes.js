import { ResponsiveChoropleth } from "@nivo/geo";
import { ResponsiveGeoMap } from "@nivo/geo";
import { ResponsiveGeoMapCanvas } from "@nivo/geo";
import { ResponsiveChoroplethCanvas } from "@nivo/geo";
import countries from "../shared/worldCountries.json";
import { data } from "../shared/data.js";


//mapa a colores
export const MyResponsiveChoropleth = () => (
    <ResponsiveChoropleth
        data={data}
        features={countries.features}
        // margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}//
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[-10, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        onClick={event => {
            console.log(event)
            alert(`id=${event.id} name=${event.label}`)
        }}
        legends={[
            {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: "#444444",
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemTextColor: "#000000",
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
);

export const MyResponsiveGeoMap = () => (
    <ResponsiveGeoMap
        features={countries.features}
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[-10, 0, 0]}
        fillColor="#eeeeee"
        borderWidth={0.5}
        borderColor="#333333"
        enableGraticule={true}
        graticuleLineColor="#666666"
        onClick={event => {
            console.log(event)
            alert(`id=${event.id} name=${event.properties.name}`)
        }}
    />
);

////////////////////// CANVAS /////////////////////////////////////
//////////////////////////// /////////////////////////////////////

export const MyResponsiveChoroplethCanvas = () => (
    <ResponsiveChoroplethCanvas
        data={data}
        features={countries.features}
        //margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="RdBu"
        domain={[0, 1000000]}
        unknownColor="#101b42"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[-10, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="rgba(0, 0, 0, .2)"
        borderWidth={0.5}
        borderColor="#101b42"
        projectionType="naturalEarth1"
        isInteractive={false}
        onMouseMove={(event) => {
            console.log(event)
        }}
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -60,
                itemsSpacing: 0,
                itemWidth: 92,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 18
            }
        ]}
    />
)

export const MyResponsiveGeoMapCanvas = () => (
    <ResponsiveGeoMapCanvas
        features={countries.features}
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[-10, 0, 0]}
        fillColor="#eeeeee"
        borderWidth={0.5}
        borderColor="#333333"
        enableGraticule={true}
        graticuleLineColor="#666666"
        projectionType="orthographic"
        projectionScale={200}
        isInteractive={false}
    // tooltip={function(e){
    //     console.log(e)
    // }}
    />
);


