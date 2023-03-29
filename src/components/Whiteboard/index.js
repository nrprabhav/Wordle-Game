/*eslint-disable */
import "./styles.css";
import InitialData from "./initialData";
import React, { useEffect, useState, useRef } from "react";
import { Button, Excalidraw } from "@excalidraw/excalidraw";

const Whiteboard = () => {
    const excalidrawRef = useRef(null);
    const excalidrawWrapperRef = useRef(null);
    const [dimensions, setDimensions] = useState({
        width: undefined,
        height: undefined
    });

    const [viewModeEnabled, setViewModeEnabled] = useState(false);
    const [zenModeEnabled, setZenModeEnabled] = useState(false);
    const [gridModeEnabled, setGridModeEnabled] = useState(false);

    useEffect(() => {
        setDimensions({
            width: excalidrawWrapperRef.current.getBoundingClientRect().width,
            height: excalidrawWrapperRef.current.getBoundingClientRect().height
        });
        const onResize = () => {
            setDimensions({
                width: excalidrawWrapperRef.current.getBoundingClientRect().width,
                height: excalidrawWrapperRef.current.getBoundingClientRect().height
            });
        };

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, [excalidrawWrapperRef]);

    const updateScene = () => {
        const sceneData = {
            elements: [
                {
                    "type": "rectangle",
                    "version": 190,
                    "versionNonce": 1791965369,
                    "isDeleted": false,
                    "id": "oDVXy8D6rom3H1-LLH2-f",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "angle": 0,
                    "x": 100,
                    "y": 100,
                    "strokeColor": "#c92a2a",
                    "backgroundColor": "transparent",
                    "width": 196.07266235351557,
                    "height": 220,
                    "seed": 1968410350,
                    "groupIds": [],
                    "updated": 1680112996686
                },
                {
                    "id": "e8nqonDvp0fPD_Z3eyN_q",
                    "type": "text",
                    "x": 100,
                    "y": 100,
                    "width": 190,
                    "height": 25,
                    "angle": 0,
                    "strokeColor": "#c92a2a",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": null,
                    "seed": 450665561,
                    "version": 95,
                    "versionNonce": 2138735319,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1680112785071,
                    "link": null,
                    "locked": false,
                    "text": "Hints from scrabble",
                    "fontSize": 20,
                    "fontFamily": 1,
                    "textAlign": "left",
                    "verticalAlign": "top",
                    "baseline": 18,
                    "containerId": null,
                    "originalText": "Hints from scrabble"
                },
                {
                    "id": "NzlwfnRGcNa6RsHfv4tuX",
                    "type": "text",
                    "x": 120,
                    "y": 140,
                    "width": 159,
                    "height": 50,
                    "angle": 0,
                    "strokeColor": "#5f3dc4",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": null,
                    "seed": 1383859703,
                    "version": 159,
                    "versionNonce": 772257847,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1680112949261,
                    "link": null,
                    "locked": false,
                    "text": "1---A, E, I, O, U\n   L, N, S, T, R",
                    "fontSize": 20,
                    "fontFamily": 1,
                    "textAlign": "left",
                    "verticalAlign": "top",
                    "baseline": 42,
                    "containerId": null,
                    "originalText": "1---A, E, I, O, U\n   L, N, S, T, R"
                },
                {
                    "id": "wv37vcntP_bDK7Oe9Zz8Y",
                    "type": "text",
                    "x": 120,
                    "y": 180,
                    "width": 79,
                    "height": 25,
                    "angle": 0,
                    "strokeColor": "#364fc7",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": null,
                    "seed": 1580165399,
                    "version": 89,
                    "versionNonce": 1312970359,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1680112951875,
                    "link": null,
                    "locked": false,
                    "text": "2--D, G",
                    "fontSize": 20,
                    "fontFamily": 1,
                    "textAlign": "left",
                    "verticalAlign": "top",
                    "baseline": 18,
                    "containerId": null,
                    "originalText": "2--D, G"
                },
                {
                    "id": "F7Y_3rtKWFbsyuub-vvyB",
                    "type": "text",
                    "x": 120,
                    "y": 200,
                    "width": 133,
                    "height": 25,
                    "angle": 0,
                    "strokeColor": "#1864ab",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": null,
                    "seed": 416991447,
                    "version": 62,
                    "versionNonce": 1452958903,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1680112954223,
                    "link": null,
                    "locked": false,
                    "text": "3--B, C, M, P",
                    "fontSize": 20,
                    "fontFamily": 1,
                    "textAlign": "left",
                    "verticalAlign": "top",
                    "baseline": 18,
                    "containerId": null,
                    "originalText": "3--B, C, M, P"
                },
                {
                    "id": "0dEDlDqTQmHpWXNuaCqnX",
                    "type": "text",
                    "x": 120,
                    "y": 220,
                    "width": 150,
                    "height": 25,
                    "angle": 0,
                    "strokeColor": "#0b7285",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": null,
                    "seed": 1808048919,
                    "version": 80,
                    "versionNonce": 309584631,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1680112956255,
                    "link": null,
                    "locked": false,
                    "text": "4--F, H, V, W, Y",
                    "fontSize": 20,
                    "fontFamily": 1,
                    "textAlign": "left",
                    "verticalAlign": "top",
                    "baseline": 18,
                    "containerId": null,
                    "originalText": "4--F, H, V, W, Y"
                },
                {
                    "id": "8KLIEL89btbCN4K2mSDzt",
                    "type": "text",
                    "x": 120,
                    "y": 240,
                    "width": 43,
                    "height": 25,
                    "angle": 0,
                    "strokeColor": "#087f5b",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": null,
                    "seed": 1707095479,
                    "version": 27,
                    "versionNonce": 1144181047,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1680112957804,
                    "link": null,
                    "locked": false,
                    "text": "5--K",
                    "fontSize": 20,
                    "fontFamily": 1,
                    "textAlign": "left",
                    "verticalAlign": "top",
                    "baseline": 18,
                    "containerId": null,
                    "originalText": "5--K"
                },
                {
                    "id": "3QSIAX6Hp0W_4Nt0nEM4y",
                    "type": "text",
                    "x": 120,
                    "y": 260,
                    "width": 74,
                    "height": 25,
                    "angle": 0,
                    "strokeColor": "#2b8a3e",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": null,
                    "seed": 1558233367,
                    "version": 10,
                    "versionNonce": 1698377591,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1680112959519,
                    "link": null,
                    "locked": false,
                    "text": "8--J, X",
                    "fontSize": 20,
                    "fontFamily": 1,
                    "textAlign": "left",
                    "verticalAlign": "top",
                    "baseline": 18,
                    "containerId": null,
                    "originalText": "8--J, X"
                },
                {
                    "id": "jrokB3V2SojmGSOI1gw5K",
                    "type": "text",
                    "x": 120,
                    "y": 280,
                    "width": 75,
                    "height": 25,
                    "angle": 0,
                    "strokeColor": "#5c940d",
                    "backgroundColor": "transparent",
                    "fillStyle": "hachure",
                    "strokeWidth": 1,
                    "strokeStyle": "solid",
                    "roughness": 1,
                    "opacity": 100,
                    "groupIds": [],
                    "roundness": null,
                    "seed": 527671095,
                    "version": 13,
                    "versionNonce": 2118782489,
                    "isDeleted": false,
                    "boundElements": null,
                    "updated": 1680112961849,
                    "link": null,
                    "locked": false,
                    "text": "10-Q, Z",
                    "fontSize": 20,
                    "fontFamily": 1,
                    "textAlign": "left",
                    "verticalAlign": "top",
                    "baseline": 18,
                    "containerId": null,
                    "originalText": "10-Q, Z"
                }
            ],
            appState: {
                viewBackgroundColor: "#edf2ff"
            }
        };
        console.log(excalidrawRef, "hello");
        excalidrawRef.current.updateScene(sceneData);
    };

    return (<div className="whiteboard-container">
        {/* <h3>This is the begin of Whiteboard index</h3> */}
        <div className="button-wrapper">
            <Button
                type="button"
                className="update-scene btn btn-outline-warning"
                onClick={updateScene}
            >
                Update Scene
            </Button>
            <Button
                type="button"
                className="reset-scene btn btn-outline-danger"
                onClick={() => excalidrawRef.current.resetScene()}
            >
                Reset Scene
            </Button>
            <label>
                <input
                    type="checkbox"
                    checked={viewModeEnabled}
                    onChange={() => setViewModeEnabled(!viewModeEnabled)}
                />
                View mode
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={zenModeEnabled}
                    onChange={() => setZenModeEnabled(!zenModeEnabled)}
                />
                Zen mode
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={gridModeEnabled}
                    onChange={() => setGridModeEnabled(!gridModeEnabled)}
                />
                Grid mode
            </label>
        </div>
        <div className="excalidraw-wrapper" ref={excalidrawWrapperRef}>
            <Excalidraw
                ref={excalidrawRef}
                initialData={InitialData}
                viewModeEnabled={viewModeEnabled}
                zenModeEnabled={zenModeEnabled}
                gridModeEnabled={gridModeEnabled}
            />
        </div>
    </div>);
};

// const excalidrawWrapper = document.getElementById("Whiteboard");
// const root = ReactDOM.createRoot(excalidrawWrapper);
// root.render(React.createElement(Whiteboard));
export default Whiteboard;